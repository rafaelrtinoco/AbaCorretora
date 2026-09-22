import { SEO } from "../../components/SEO/SEO";
import { PartnersHealthSection } from "../../components/Partners/Partiners";
import { Hero } from "../../components/ui/Hero";
import { Section } from "../../components/ui/Section";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";

import ImgSaude from "../../assets/image/img-saude.webp";
import ImgConvenioMedico from "../../assets/image/convenio-medico.webp";
import ImgConvenioOdonto from "../../assets/image/convenio-odonto.webp";
import ImgConvenioPet from "../../assets/image/convenio-pet.webp";

const healthPlans = [
  {
    img: ImgConvenioMedico,
    alt: "Família feliz com médico, representando convênio médico",
    title: "Convênio Médico",
    description: "Cuidado integral para sua saúde. Acesse uma ampla rede credenciada de hospitais, clínicas e laboratórios.",
    bullets: ["Consultas e exames", "Internações e cirurgias", "Atendimento de emergência 24h"],
    tip: "Ideal para quem busca segurança e tranquilidade no acesso a serviços de saúde de qualidade.",
    cta: "Ver Planos Médicos",
  },
  {
    img: ImgConvenioOdonto,
    alt: "Pessoas sorrindo, representando convênio odontológico",
    title: "Convênio Odontológico",
    description: "Mantenha seu sorriso saudável com cobertura para prevenção, tratamentos e procedimentos essenciais.",
    bullets: ["Consultas e limpezas", "Tratamentos de cárie e canal", "Ortodontia (em alguns planos)"],
    tip: "Perfeito para quem valoriza a saúde bucal e quer evitar gastos inesperados com o dentista.",
    cta: "Ver Planos Odontológicos",
  },
  {
    img: ImgConvenioPet,
    alt: "Cão e gato felizes, representando convênio pet",
    title: "Convênio Pet",
    description: "Cuide da saúde do seu melhor amigo com planos que cobrem consultas, vacinas e procedimentos veterinários.",
    bullets: ["Consultas e exames de rotina", "Vacinas e vermifugação", "Cirurgias e internações (em alguns planos)"],
    tip: "Essencial para tutores que querem garantir a longevidade e o bem-estar de seus animais de estimação.",
    cta: "Ver Planos Pet",
  },
];

const medicalReasons = [
  {
    title: "Acesso Facilitado",
    description:
      "Com um convênio médico, você e sua família têm acesso a uma ampla rede de médicos, hospitais e laboratórios credenciados, com agendamento facilitado e sem as longas filas do sistema público. Isso garante que você receba o atendimento necessário no momento certo.",
  },
  {
    title: "Economia e Previsibilidade",
    description:
      "Evite surpresas com os altos custos de consultas, exames, internações e cirurgias particulares. O convênio médico oferece mensalidades fixas, tornando seus gastos com saúde previsíveis e protegendo seu orçamento em caso de emergências ou tratamentos de longo prazo.",
  },
  {
    title: "Cuidado Completo e Preventivo",
    description:
      "Além do atendimento para doenças e emergências, muitos planos oferecem programas de medicina preventiva, check-ups regulares e acompanhamento para doenças crônicas. Invista na sua saúde e bem-estar com um cuidado abrangente e contínuo.",
  },
];

const dentalReasons = [
  {
    title: "Prevenção de Doenças",
    description:
      "Consultas e limpezas regulares são fundamentais para prevenir cáries, gengivite e outras doenças bucais que podem afetar sua saúde geral. O convênio odontológico facilita esse acesso à prevenção.",
  },
  {
    title: "Cobertura para Tratamentos Essenciais",
    description:
      "De obturações a tratamentos de canal, o convênio cobre uma série de procedimentos que seriam caros se feitos de forma particular. Garanta que você não adie tratamentos importantes devido ao custo.",
  },
  {
    title: "Estética e Bem-estar",
    description:
      "Um sorriso bonito aumenta a autoestima e a confiança. Além da saúde, muitos planos oferecem cobertura para procedimentos estéticos ou ortodônticos (parcialmente), contribuindo para seu bem-estar.",
  },
];

const petReasons = [
  {
    title: "Atendimento Veterinário Completo",
    description:
      "Garanta consultas, exames, vacinas e até cirurgias para seu pet com uma rede credenciada de clínicas e hospitais veterinários. Seu amigo terá acesso aos melhores profissionais e tratamentos.",
  },
  {
    title: "Prevenção e Bem-estar",
    description:
      "Mantenha seu pet protegido com a cobertura de vacinas essenciais, vermifugação e check-ups regulares. A prevenção é a melhor forma de garantir uma vida longa e saudável para ele.",
  },
  {
    title: "Segurança em Emergências",
    description:
      "Acidentes e doenças podem acontecer. Com um convênio pet, você tem a tranquilidade de saber que os custos com emergências, cirurgias e internações estarão cobertos, sem comprometer seu orçamento.",
  },
];

function ReasonsSection({ title, subtitle, reasons, tone }) {
  return (
    <Section tone={tone}>
      <SectionHeading title={title} subtitle={subtitle} />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {reasons.map((reason) => (
          <Card key={reason.title} hover={false}>
            <h3 className="text-lg font-semibold text-navy-900">{reason.title}</h3>
            <p className="mt-2 text-slate-500">{reason.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Saude() {
  return (
    <>
      <SEO
        title="Planos de Saúde"
        description="Encontre os melhores planos de saúde para você, sua família ou sua empresa. Trabalhamos com as melhores operadoras. Faça uma cotação online."
        name="Aba Corretora"
        type="website"
        keywords="plano de saúde, plano de saúde individual, plano de saúde familiar, plano de saúde empresarial, plano de saúde pj, cotação plano de saúde, corretora de saúde"
      />

      <Hero title="Planos de saúde com valores que cabem no seu orçamento." image={ImgSaude} imageAlt="imagem hero" />

      <Section id="convenios" tone="white">
        <SectionHeading
          title="Planos de Saúde"
          subtitle="Encontre o plano ideal para sua saúde e bem-estar, com cobertura completa para você, sua família e até mesmo seu pet."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {healthPlans.map((plan) => (
            <Card as="article" key={plan.title} className="flex flex-col overflow-hidden p-0">
              <img
                src={plan.img}
                alt={plan.alt}
                width={400}
                height={220}
                loading="lazy"
                decoding="async"
                className="h-[220px] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-navy-900">{plan.title}</h3>
                <p className="mt-2 text-slate-500">{plan.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-500">
                  {plan.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 rounded-lg border-l-4 border-brand-500 bg-brand-50 p-3 text-sm text-slate-600">
                  {plan.tip}
                </p>
                <Button as="a" target="_blank" href="https://wa.me/5511945411551" className="mt-6 w-full">
                  {plan.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <ReasonsSection
        tone="muted"
        title="Por que ter um Convênio Médico?"
        subtitle="Garanta o acesso rápido e de qualidade a serviços de saúde essenciais para você e sua família, sem preocupações com gastos inesperados."
        reasons={medicalReasons}
      />

      <ReasonsSection
        tone="white"
        title="A Importância do Convênio Odontológico"
        subtitle="Um sorriso saudável é essencial para sua qualidade de vida. Invista em prevenção e tratamentos odontológicos sem pesar no seu bolso."
        reasons={dentalReasons}
      />

      <ReasonsSection
        tone="muted"
        title="Cuide do seu Melhor Amigo com um Convênio Pet"
        subtitle="Seu pet merece o melhor cuidado! Proteja a saúde do seu companheiro de quatro patas com planos veterinários completos e acessíveis."
        reasons={petReasons}
      />

      <Section tone="brand">
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h3 className="text-xl font-bold md:text-2xl">Fale com um especialista</h3>
            <p className="mt-2 text-white/85">Receba uma consultoria gratuita para encontrar o plano ideal.</p>
          </div>
          <Button as="a" target="_blank" href="https://wa.me/5511945411551" variant="outline" className="shrink-0">
            Solicitar cotação
          </Button>
        </div>
      </Section>

      <PartnersHealthSection />
    </>
  );
}

export default Saude;
