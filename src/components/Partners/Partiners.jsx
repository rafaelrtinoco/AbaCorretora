import { Section } from "../ui/Section";

import Porto from "../../assets/image/Porto.webp";
import Suhai from "../../assets/image/suhai.webp";
import Bradesco from "../../assets/image/bradesco-seguros.webp";
import Akad from "../../assets/image/akad.webp";
import Allianz from "../../assets/image/allianz.webp";
import Azul from "../../assets/image/azul-seguros.webp";
import HDI from "../../assets/image/hdi.webp";
import Itau from "../../assets/image/itau.webp";
import Liberty from "../../assets/image/liberty.webp";
import Mapfre from "../../assets/image/mapfre.webp";
import Mitsui from "../../assets/image/mitsui.webp";
import Pier from "../../assets/image/pier.webp";
import Tokio from "../../assets/image/tokio.webp";
import Zurich from "../../assets/image/zurich.webp";

import Metlife from "../../assets/image/metlife.webp";
import Unimed from "../../assets/image/unimed.webp";
import Sulamerica from "../../assets/image/sulamerica.webp";
import Portosaude from "../../assets/image/portosaude.webp";
import Amil from "../../assets/image/amil.webp";
import BradescoSaude from "../../assets/image/bradesco-saude.webp";
import Hapvida from "../../assets/image/hapvida.webp";
import Saocristovao from "../../assets/image/sao-cristovao.webp";
import Saomiguel from "../../assets/image/sao-miguel-saude.webp";
import Alice from "../../assets/image/alice.webp";
import Allcare from "../../assets/image/allcare.webp";
import Medsenior from "../../assets/image/medsenior.webp";
import Preventsenior from "../../assets/image/preventsenior.webp";
import Omint from "../../assets/image/omint.webp";

const HOME_PARTNERS = [
  { name: "Porto Seguro", logo: Porto },
  { name: "Unimed", logo: Unimed },
  { name: "Suhai", logo: Suhai },
  { name: "Metlife", logo: Metlife },
  { name: "Bradesco", logo: Bradesco },
  { name: "Sul America", logo: Sulamerica },
  { name: "Akad", logo: Akad },
  { name: "Porto Saude", logo: Portosaude },
  { name: "Allianz", logo: Allianz },
  { name: "Amil", logo: Amil },
  { name: "Bradesco Saude", logo: BradescoSaude },
  { name: "Azul", logo: Azul },
  { name: "Hapvida", logo: Hapvida },
  { name: "Itau", logo: Itau },
  { name: "Sao Cristovao", logo: Saocristovao },
  { name: "Mapfre", logo: Mapfre },
  { name: "Alice", logo: Alice },
  { name: "Pier", logo: Pier },
  { name: "Prevent Senior", logo: Preventsenior },
  { name: "Tokio", logo: Tokio },
  { name: "Medsenior", logo: Medsenior },
  { name: "Zurich", logo: Zurich },
];

const SECURITY_PARTNERS = [
  { name: "Porto Seguro", logo: Porto },
  { name: "Suhai", logo: Suhai },
  { name: "Bradesco", logo: Bradesco },
  { name: "Akad", logo: Akad },
  { name: "Allianz", logo: Allianz },
  { name: "Azul", logo: Azul },
  { name: "HDI", logo: HDI },
  { name: "Itau", logo: Itau },
  { name: "Liberty", logo: Liberty },
  { name: "Mapfre", logo: Mapfre },
  { name: "Mitsui", logo: Mitsui },
  { name: "Pier", logo: Pier },
  { name: "Tokio", logo: Tokio },
  { name: "Zurich", logo: Zurich },
];

const HEALTH_PARTNERS = [
  { name: "Metlife", logo: Metlife },
  { name: "Unimed", logo: Unimed },
  { name: "Sul America", logo: Sulamerica },
  { name: "Porto Saude", logo: Portosaude },
  { name: "Amil", logo: Amil },
  { name: "Bradesco Saude", logo: BradescoSaude },
  { name: "Hapvida", logo: Hapvida },
  { name: "Sao Cristovao", logo: Saocristovao },
  { name: "Sao Miguel", logo: Saomiguel },
  { name: "Alice", logo: Alice },
  { name: "Allcare", logo: Allcare },
  { name: "Medsenior", logo: Medsenior },
  { name: "Prevent Senior", logo: Preventsenior },
  { name: "Omint", logo: Omint },
];

/**
 * Infinite-scroll logo marquee. The three page-level variants below
 * (Home / Seguros / Saude) all rendered this exact same markup with a
 * different partner list — now they're thin wrappers around one component.
 */
function PartnerMarquee({ partners }) {
  const loopPartners = [...partners, ...partners];

  return (
    <Section tone="muted">
      <div className="w-full overflow-hidden">
        <div className="flex w-max animate-[marquee_28s_linear_infinite] items-center gap-12 hover:[animation-play-state:paused] motion-reduce:animate-none">
          {loopPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex min-w-[160px] shrink-0 items-center justify-center grayscale opacity-70 transition-all duration-200 hover:scale-110 hover:opacity-100 hover:grayscale-0"
            >
              <img src={partner.logo} alt={partner.name} loading="lazy" decoding="async" className="max-h-[50px] max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export const PartnersHomeSection = () => <PartnerMarquee partners={HOME_PARTNERS} />;
export const PartnersSecuritySection = () => <PartnerMarquee partners={SECURITY_PARTNERS} />;
export const PartnersHealthSection = () => <PartnerMarquee partners={HEALTH_PARTNERS} />;
