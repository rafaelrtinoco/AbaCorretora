// Resizes and re-compresses the site's shipped images in place.
//
// Most of these files were exported at 3-4x the resolution they're ever
// displayed at (e.g. partner logos shown at ~50px tall were 5000px+ wide,
// card photos shown at ~300px were 4096px). This script downsamples each
// group to the width it actually needs on screen, at 2x for retina, and
// re-encodes with a sane quality setting. Filenames and import paths are
// untouched — only pixel dimensions and byte size change.
//
// Idempotent: if a file is already at or under its target width, it's
// left alone (safe to re-run after adding new assets).
//
// Usage: node scripts/optimize-images.mjs [--dry-run]

import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const IMAGE_DIR = path.join(ROOT, "src/assets/image");
const DRY_RUN = process.argv.includes("--dry-run");

// Partner/insurer logos in the homepage & category marquees — displayed
// at roughly 50px tall inside a 160px-wide slot.
const PARTNER_LOGOS = [
  "Porto.webp", "suhai.webp", "bradesco-seguros.webp", "akad.webp", "allianz.webp",
  "azul-seguros.webp", "hdi.webp", "itau.webp", "liberty.webp", "mapfre.webp",
  "mitsui.webp", "pier.webp", "tokio.webp", "zurich.webp", "metlife.webp",
  "unimed.webp", "sulamerica.webp", "portosaude.webp", "amil.webp",
  "bradesco-saude.webp", "hapvida.webp", "sao-cristovao.webp", "sao-miguel-saude.webp",
  "alice.webp", "allcare.webp", "medsenior.webp", "preventsenior.webp", "omint.webp",
];

// Product/service/card photos — displayed at roughly 250-400px wide inside cards.
const CARD_IMAGES = [
  "automovel.webp", "residencial.webp", "saude.webp", "financiamento.webp",
  "viagem.webp", "pet.webp", "seguro-auto.webp", "seguro-residencial.webp",
  "seguro-equipamentos.webp", "seguro-bike.webp", "seguro-vida.webp", "seguro-viagem.webp",
  "guincho.webp", "desentupidora.webp", "hidraulico.webp", "eletrica.webp",
  "limpezaSofa.webp", "limpezaAr.webp", "aquecedor.webp", "conta.webp", "eletro.webp",
  "servicosGerais.webp", "arCondicionado.webp", "equipamentos.webp", "consorcio-imovel.webp",
  "reparoArCondicionado.webp", "fechadura.webp", "cartao.webp", "convenio-pet.webp",
  "convenio-medico.webp", "convenio-odonto.webp", "azul.webp", "celular.webp",
  "consorcio-automovel.webp", "consorcio-servicos.webp",
];

// Page hero photos — displayed up to ~600px wide (max-w-lg) in a two-column hero.
const HERO_IMAGES = ["img-home.webp", "img-seguro.webp", "img-saude.webp", "img-consorcio.webp", "contrate.webp"];

// Promo pop-up banner — displayed up to 550px wide.
const POPUP_IMAGES = ["pop-up.webp"];

// Chat/avatar portraits — displayed at roughly 40-56px in the Ana chat widget.
const AVATAR_IMAGES = ["ana.webp"];

const GROUPS = [
  { files: PARTNER_LOGOS, targetWidth: 400, label: "partner logo" },
  { files: CARD_IMAGES, targetWidth: 900, label: "card image" },
  { files: HERO_IMAGES, targetWidth: 1400, label: "hero image" },
  { files: POPUP_IMAGES, targetWidth: 1100, label: "popup banner" },
  { files: AVATAR_IMAGES, targetWidth: 160, label: "avatar" },
];

const EXTRA_TARGETS = [
  { file: path.join(ROOT, "src/assets/icons/logo.png"), maxWidth: 600, label: "header logo" },
  { file: path.join(ROOT, "public/LOGO-ABA.png"), maxWidth: 630, label: "favicon / og:image" },
];

async function processImage({ filePath, targetWidth, label }) {
  // Read the whole file into memory up front, and drive sharp off the
  // buffer rather than the file path. Passing sharp the path keeps a
  // Windows file handle open on the source until GC runs, which then
  // races the write-back below (EBUSY/EPERM). Reading first sidesteps
  // that entirely — nothing keeps `filePath` open once we get here.
  const inputBuffer = await readFile(filePath);
  const before = inputBuffer.length;
  const meta = await sharp(inputBuffer).metadata();

  if (meta.width && meta.width <= targetWidth) {
    console.log(`  skip  ${path.basename(filePath)} (${label}) — already ${meta.width}px wide`);
    return { before, after: before, skipped: true };
  }

  if (DRY_RUN) {
    console.log(`  would resize ${path.basename(filePath)} (${label}) ${meta.width}px -> ${targetWidth}px`);
    return { before, after: before, skipped: true };
  }

  const pipeline = sharp(inputBuffer).resize({ width: targetWidth, withoutEnlargement: true });

  const ext = path.extname(filePath).toLowerCase();
  const buffer =
    ext === ".png"
      ? await pipeline.png({ compressionLevel: 9, quality: 90 }).toBuffer()
      : await pipeline.webp({ quality: 80, effort: 6 }).toBuffer();

  await writeFile(filePath, buffer);

  const after = buffer.length;
  console.log(
    `  ${path.basename(filePath).padEnd(30)} ${label.padEnd(14)} ${meta.width}px -> ${targetWidth}px   ${Math.round(before / 1024)}KB -> ${Math.round(after / 1024)}KB`
  );
  return { before, after, skipped: false };
}

async function main() {
  console.log(DRY_RUN ? "Dry run — no files will be modified.\n" : "Optimizing images in place...\n");

  let totalBefore = 0;
  let totalAfter = 0;

  for (const group of GROUPS) {
    for (const file of group.files) {
      const filePath = path.join(IMAGE_DIR, file);
      try {
        const { before, after } = await processImage({ filePath, targetWidth: group.targetWidth, label: group.label });
        totalBefore += before;
        totalAfter += after;
      } catch (err) {
        console.error(`  ERROR processing ${file}: ${err.message}`);
      }
    }
  }

  for (const { file, maxWidth, label } of EXTRA_TARGETS) {
    try {
      const { before, after } = await processImage({ filePath: file, targetWidth: maxWidth, label });
      totalBefore += before;
      totalAfter += after;
    } catch (err) {
      console.error(`  ERROR processing ${file}: ${err.message}`);
    }
  }

  console.log(`\nTotal: ${Math.round(totalBefore / 1024)}KB -> ${Math.round(totalAfter / 1024)}KB`);
}

main();
