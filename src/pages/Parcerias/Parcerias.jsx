import { useState } from "react";
import { FaPlane, FaBug, FaCalculator } from "react-icons/fa";
import { FiChevronDown, FiTag } from "react-icons/fi";
import { SEO } from "../../components/SEO/SEO";
import { Hero } from "../../components/ui/Hero";
import { Section } from "../../components/ui/Section";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { cn } from "../../lib/cn";

// ─────────────────────────────────────────────
// Para adicionar um novo parceiro, basta incluir um novo
// objeto neste array: o grid e o card se ajustam sozinhos.
// "highlights" são só rótulos curtos (sem texto longo) para
// manter o card enxuto mesmo expandido.
// ─────────────────────────────────────────────
const parceiros = [
  {
    id: "bruno-holanda",
    icon: FaPlane,
    badge: "Seguro Viagem",
    title: "Bruno Holanda Turismo",
    tagline: "Seguro viagem completo para viajar tranquilo, no Brasil ou no exterior.",
    description:
      "A Aba Seguros firmou parceria com a agência Bruno Holanda Turismo para oferecer o melhor seguro viagem do mercado. Combinamos a expertise em turismo da Bruno Holanda com a experiência em seguros da Aba para garantir que você viaje sempre protegido, seja no Brasil ou no exterior.",
    highlights: [
      "Emergências médicas",
      "Bagagem extraviada",
      "Cancelamento de voo",
      "Urgência odontológica",
      "Assistência 24h",
      "Exigência de visto",
    ],
    ctaLabel: "Cotar seguro viagem",
    ctaHref: "https://wa.me/5511945411551",
  },

  {
    id: "insetnew",
    icon: FaBug,
    badge: "Controle de Pragas",
    title: "InsetNew",
    tagline: "Controle de pragas e higienização ambiental com laudos técnicos certificados.",
    description:
      "A Aba Seguros é parceira da InsetNew, empresa especializada em controle de pragas e higienização ambiental. Atua com dedetização, desratização, descupinização, sanitização de ambientes e higienização de reservatórios de água, sempre com laudos técnicos e produtos certificados pela ANVISA, IBAMA e INEA.",
    highlights: [
      "Dedetização",
      "Desratização",
      "Descupinização",
      "Sanitização de ambientes",
      "Higienização de reservatórios",
      "Certificação ANVISA/IBAMA",
    ],
    ctaLabel: "Solicitar orçamento",
    ctaHref: "https://wa.me/5511945411551",
  },

  {
    id: "totality-contabilidade",
    icon: FaCalculator,
    badge: "Contabilidade",
    title: "Totality Contabilidade",
    tagline: "Contabilidade digital estratégica para o seu negócio crescer com segurança.",
    description:
      "A Aba Seguros é parceira da Totality Contabilidade, escritório de contabilidade digital de São Paulo especializado em negócios digitais, como e-commerces, infoprodutores, afiliados, YouTubers e gestores de tráfego, além de profissionais de saúde, arquitetos, engenheiros e MEIs. Suporte humanizado por WhatsApp, telefone, e-mail e videochamada, com portal do cliente e relatórios em tempo real.",
    highlights: [
      "Planejamento tributário",
      "Abertura de empresa",
      "Folha de pagamento",
      "Diagnóstico financeiro",
      "Portal do cliente 24h",
      "Do MEI ao Lucro Real",
    ],
    ctaLabel: "Falar sobre contabilidade",
    ctaHref: "https://wa.me/5511945411551",
  },
];

const PartnerCard = ({ partner, isOpen, onToggle }) => {
  const Icon = partner.icon;
  const panelId = `parceiro-detalhes-${partner.id}`;
  const buttonId = `parceiro-toggle-${partner.id}`;

  return (
    <Card as="article" id={partner.id} className="flex flex-col" hover={false}>
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-2xl text-brand-600">
          <Icon aria-hidden="true" />
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-200">
          <FiTag aria-hidden="true" /> Desconto exclusivo
        </span>
      </div>

      <span className="mt-4 inline-block w-fit rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
        {partner.badge}
      </span>
      <h3 className="mt-3 text-xl font-bold text-navy-900">{partner.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-500">{partner.tagline}</p>

      <button
        type="button"
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="mt-4 flex items-center gap-1.5 self-start text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
      >
        {isOpen ? "Ver menos" : "Ver detalhes"}
        <FiChevronDown
          className={cn("transition-transform duration-200", isOpen && "rotate-180")}
          aria-hidden="true"
        />
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="mt-4 text-sm leading-relaxed text-slate-500">{partner.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {partner.highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Button
        as="a"
        target="_blank"
        rel="noreferrer"
        href={partner.ctaHref}
        variant="outline"
        className="mt-6 w-full"
      >
        {partner.ctaLabel}
      </Button>
    </Card>
  );
};

const Parcerias = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((current) => (current === id ? null : id));

  return (
    <>
      <SEO
        title="Parcerias"
        description="Conheça as parcerias exclusivas da Aba Seguros e aproveite descontos com as melhores empresas do mercado."
        name="Aba Seguros"
        type="website"
      />

      <Hero
        title="Nossas Parcerias"
        subtitle="A Aba Seguros une forças com empresas referência em seus segmentos para oferecer soluções completas e exclusivas para você."
        trust={[
          "Desconto exclusivo em todas as parcerias",
          "Empresas selecionadas e confiáveis",
          "Atendimento rápido via WhatsApp",
        ]}
      />

      <Section tone="white">
        <SectionHeading
          title="Quem são nossos parceiros"
          subtitle="Clique em um card para ver os detalhes de cada parceria."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {parceiros.map((partner) => (
            <PartnerCard
              key={partner.id}
              partner={partner}
              isOpen={openId === partner.id}
              onToggle={() => toggle(partner.id)}
            />
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h3 className="text-xl font-bold md:text-2xl">Quer aproveitar um desses descontos?</h3>
            <p className="mt-2 text-white/80">Fale agora com um especialista e receba sua cotação gratuitamente.</p>
          </div>
          <Button as="a" target="_blank" rel="noreferrer" href="https://wa.me/5511945411551" className="shrink-0">
            Falar no WhatsApp
          </Button>
        </div>
      </Section>
    </>
  );
};

export default Parcerias;
