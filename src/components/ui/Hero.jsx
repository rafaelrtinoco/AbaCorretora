import { cn } from "../../lib/cn";
import { Container } from "./Container";

/**
 * Navy hero shared by Home / Seguros / Consorcios / Saude / ContrateAgora.
 * Every one of those pages used to hand-roll its own HeroContainer /
 * HeroContent / HeroRow / HeroText / HeroTitle / HeroImage / HeroDivider
 * with slightly different spacing. Centralizing it also moves every hero
 * onto the same navy-gradient background instead of plain white.
 *
 * Renders a two-column split when `image` is provided, and a centered
 * single column otherwise (e.g. Parcerias' intro hero).
 */
export function Hero({ eyebrow, title, subtitle, actions, image, imageAlt, trust }) {
  const hasImage = Boolean(image);

  return (
    <section className="relative overflow-hidden bg-navy-900 pt-28 pb-20 md:pt-36 md:pb-28">
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 60% at 85% 15%, rgba(38,169,224,0.35) 0%, rgba(38,169,224,0) 70%)," +
            "radial-gradient(50% 50% at 10% 100%, rgba(38,169,224,0.18) 0%, rgba(38,169,224,0) 70%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className={cn("grid items-center gap-12", hasImage && "lg:grid-cols-[1.1fr_1fr]")}>
          <div className={cn("flex flex-col gap-5", hasImage ? "items-start text-left" : "items-center text-center mx-auto max-w-3xl")}>
            {eyebrow && (
              <span className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-brand-300 ring-1 ring-inset ring-white/20">
                {eyebrow}
              </span>
            )}

            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">{title}</h1>

            {subtitle && (
              <p className={cn("max-w-xl text-lg leading-relaxed text-white/75", !hasImage && "max-w-2xl")}>
                {subtitle}
              </p>
            )}

            {actions && <div className="mt-2 flex flex-wrap items-center gap-4">{actions}</div>}

            {trust && (
              <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/70">
                {trust.map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-400" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>

          {hasImage && (
            <div className="relative">
              <img
                src={image}
                alt={imageAlt}
                width={600}
                height={450}
                fetchPriority="high"
                decoding="async"
                className="mx-auto h-auto w-full max-w-lg rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]"
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
