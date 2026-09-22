import { useEffect, useState } from "react";
import { SEO } from "../../components/SEO/SEO";
import { PartnersHomeSection } from "../../components/Partners/Partiners";
import TestimonialsSection from "../../components/Testimonials/Testimonials";
import FAQSection from "../../components/FAQ/FAQ";
import { PartnerCTA } from "../../components/PartnerCTA/PartnerCTA";
import { Hero } from "../../components/ui/Hero";
import { Section } from "../../components/ui/Section";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Carousel } from "../../components/ui/Carousel";

import ImgHome from "../../assets/image/img-home.webp";
import AutomovelIcon from "../../assets/image/automovel.webp";
import ResidencialIcon from "../../assets/image/residencial.webp";
import saudeIcon from "../../assets/image/saude.webp";
import Financiamento from "../../assets/image/financiamento.webp";
import viagemIcon from "../../assets/image/viagem.webp";
import petIcon from "../../assets/image/pet.webp";
import PopupBannerImg from "../../assets/image/pop-up.webp";

const POPUP_TARGET_URL = "/parcerias#porto-seguro-consorcio";

const products = [
  {
    icon: AutomovelIcon,
    title: "Seguros",
    description: "Seguros que protegem seus patrimônios e vida: automóvel, equipamentos, empresa, residência, viagem, vida e muito mais.",
  },
  {
    icon: ResidencialIcon,
    title: "Consórcio",
    description: "O consórcio é o caminho ideal para quem busca comprar um bem com parcelas que cabem no bolso e sem pagar juros.",
  },
  {
    icon: saudeIcon,
    title: "Plano de Saúde",
    description: "Encontre o plano de saúde (individual, familiar ou empresarial) com a cobertura ideal para suas necessidades e seu orçamento.",
  },
  {
    icon: Financiamento,
    title: "Financiamento",
    description: "O financiamento ideal para suas conquistas. Taxas competitivas e planos flexíveis para você tirar seus projetos do papel.",
  },
  {
    icon: viagemIcon,
    title: "Empréstimo",
    description: "O empréstimo que você precisa está aqui. Dinheiro na mão para seus objetivos e sonhos.",
  },
  {
    icon: petIcon,
    title: "Petlove Saúde",
    description: "Planos de saúde para seu animal de estimação. Cuide bem do seu Pet.",
  },
];

const values = [
  { title: "Assessoria Completa", description: "Do orçamento à emissão da apólice e suporte em sinistros." },
  { title: "Economia e Comparação", description: "Cotamos nas principais seguradoras para o melhor custo-benefício." },
  { title: "Atendimento Humanizado", description: "Equipe próxima, rápida e disponível nos principais canais." },
];

const steps = [
  { title: "1. Entendimento", description: "Coletamos suas necessidades e perfil para indicar coberturas ideais." },
  { title: "2. Cotações", description: "Comparamos propostas entre seguradoras parceiras." },
  { title: "3. Personalização", description: "Ajustamos franquias e coberturas conforme seu orçamento." },
  { title: "4. Contratação", description: "Documentação rápida e acompanhamento pós-venda." },
];

const stats = [
  { value: "8+", label: "Anos de experiência" },
  { value: "600+", label: "Clientes atendidos" },
  { value: "15+", label: "Seguradoras parceiras" },
  { value: "24h", label: "Suporte em sinistros" },
];

const PromoPopup = ({ onClose }) => (
  <div
    role="presentation"
    onClick={onClose}
    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 p-5"
    style={{ animation: "popup-fade-in 0.25s ease" }}
  >
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Consórcio Porto Seguro"
      onClick={(e) => e.stopPropagation()}
      className="relative w-full max-w-[550px] overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
      style={{ animation: "popup-slide-up 0.3s ease" }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar pop-up"
        className="absolute right-3 top-2.5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-white transition-transform duration-200 hover:scale-110 hover:opacity-80"
      >
        ✕
      </button>
      <a href={POPUP_TARGET_URL}>
        <img
          src={PopupBannerImg}
          alt="Consórcio Porto Seguro — planeje hoje o amanhã que você sonha"
          className="block w-full cursor-pointer transition-opacity duration-200 hover:opacity-90"
        />
      </a>
    </div>
  </div>
);

const HomePage = () => {
  const [showPromoPopup, setShowPromoPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPromoPopup(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SEO
        title="Aba Seguros - Seguros, Consórcios e Saúde"
        description="Encontre os melhores seguros, planos de saúde e consórcios. Faça uma cotação online agora mesmo."
        name="Aba Seguros"
        type="website"
      />

      {showPromoPopup && <PromoPopup onClose={() => setShowPromoPopup(false)} />}

      <Hero
        title="Tranquilidade para sua família, segurança para sua empresa."
        subtitle="Consultoria especializada em seguros, planos de saúde, odontológico e consórcios. As melhores soluções do mercado para você e sua empresa."
        image={ImgHome}
        imageAlt="imagem hero"
        actions={
          <Button as="a" target="_blank" href="https://wa.me/5511945411551" size="lg">
            Contrate Agora
          </Button>
        }
        trust={["8+ anos de experiência", "600+ clientes atendidos", "15+ seguradoras parceiras"]}
      />

      <Section id="products" tone="muted">
        <SectionHeading title="Nossos Planos" subtitle="Opções que cabem no seu orçamento" />

        <div className="mt-12">
          <Carousel
            items={products}
            getKey={(product) => product.title}
            ariaLabel="Carrossel de produtos"
            slideClassName="flex-[0_0_90%] sm:flex-[0_0_48%] lg:flex-[0_0_32%]"
            renderItem={(product) => (
              <Card as="article" className="flex h-full flex-col overflow-hidden p-0">
                <img
                  src={product.icon}
                  alt={product.title}
                  width={400}
                  height={220}
                  loading="lazy"
                  decoding="async"
                  className="h-[180px] w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6 text-center">
                  <h3 className="text-xl font-semibold text-navy-900">{product.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{product.description}</p>
                  <Button
                    as="a"
                    target="_blank"
                    href="https://wa.me/5511945411551"
                    size="sm"
                    className="mx-auto mt-5"
                  >
                    Saiba mais
                  </Button>
                </div>
              </Card>
            )}
          />
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading
          title="Por que escolher a ABA Corretora?"
          subtitle="Atendimento consultivo, múltiplas seguradoras parceiras e soluções sob medida para você e sua empresa."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <Card key={value.title}>
              <h4 className="font-semibold text-navy-900">{value.title}</h4>
              <p className="mt-2 text-slate-500">{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading title="Como funciona" subtitle="4 passos simples para contratar seu seguro com tranquilidade." />
        <ol className="mt-12 grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.title} className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-200/70">
              <h4 className="font-semibold text-navy-900">{step.title}</h4>
              <p className="mt-2 text-sm text-slate-500">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <section className="bg-navy-950 py-12 text-white">
        <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-6 px-4 text-center sm:px-6 md:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <strong className="block text-3xl font-extrabold">{stat.value}</strong>
              <span className="text-sm text-white/70">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <Section tone="white">
        <SectionHeading
          title="Mais soluções para você"
          subtitle="Além dos seguros, conte com nossas soluções em planos de saúde e consórcios para ampliar suas possibilidades."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-xl font-semibold text-navy-900">Planos de Saúde</h3>
            <p className="mt-2 text-slate-500">
              Cuidar da sua saúde e da sua família é prioridade. Oferecemos planos de saúde individuais, familiares e
              empresariais, com ampla rede de atendimento e condições acessíveis.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-500">
              {[
                "Atendimento nacional com hospitais, clínicas e laboratórios de referência.",
                "Consultas e exames com agendamento facilitado.",
                "Planos com ou sem coparticipação",
                "Isenção de carência mediante análise",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold text-navy-900">Consórcios</h3>
            <p className="mt-2 text-slate-500">
              Planeje suas conquistas com segurança e parcelas que cabem no seu bolso.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-500">
              {["Consórcio de automóveis", "Consórcio imobiliário", "Administração confiável e suporte em todas as etapas"].map(
                (item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                    {item}
                  </li>
                )
              )}
            </ul>
          </Card>
        </div>
      </Section>

      <Section tone="brand">
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h3 className="text-xl font-bold md:text-2xl">Fale com um especialista</h3>
            <p className="mt-2 text-white/85">Receba uma consultoria gratuita para encontrar a proteção ideal.</p>
          </div>
          <div className="flex shrink-0 flex-wrap justify-center gap-4">
            <Button as="a" target="_blank" href="https://wa.me/5511945411551">
              Solicitar cotação
            </Button>
            <Button as="a" href="#faq" variant="outline">
              Tirar dúvidas
            </Button>
          </div>
        </div>
      </Section>

      <PartnersHomeSection />
      <TestimonialsSection />
      <PartnerCTA />
      <FAQSection />
    </>
  );
};

export default HomePage;
