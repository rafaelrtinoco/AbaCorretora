import { Link } from "react-router-dom";
import { Section } from "../ui/Section";

export const PartnerCTA = () => {
  return (
    <Section tone="brand">
      <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div>
          <h3 className="text-xl font-bold md:text-2xl">
            Assistência 24h e Sinistros, você pode acionar a Seguradora.
          </h3>
          <p className="mt-2 text-white/85">
            Precisa acionar o guincho, reportar um roubo, furto ou colisão? Encontre aqui o canal de
            atendimento direto da sua seguradora.
          </p>
        </div>
        <Link
          to="/seguradoras"
          className="inline-flex shrink-0 items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-brand-600 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
        >
          Ver Contatos
        </Link>
      </div>
    </Section>
  );
};
