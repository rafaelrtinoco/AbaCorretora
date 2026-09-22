import { FaPiggyBank, FaHandHoldingUsd, FaThumbsUp } from "react-icons/fa";
import { SEO } from "../../components/SEO/SEO";
import { Hero } from "../../components/ui/Hero";
import { Section } from "../../components/ui/Section";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Container } from "../../components/ui/Container";

import ImgConsorcio from "../../assets/image/img-consorcio.webp";
import ConsorcioImovel from "../../assets/image/consorcio-imovel.webp";
import ConsorcioVeiculo from "../../assets/image/consorcio-automovel.webp";
import ConsorcioServico from "../../assets/image/consorcio-servicos.webp";
import ConsorcioBanner from "../../assets/image/pop-up.webp";

const products = [
  {
    img: ConsorcioImovel,
    title: "Consórcio Imobiliário",
    description: "A forma mais inteligente de comprar, construir ou reformar seu imóvel sem juros.",
  },
  {
    img: ConsorcioVeiculo,
    title: "Consórcio de Veículos",
    description:
      "Planeje a compra do seu carro, moto ou utilitário novo ou seminovo com parcelas que cabem no bolso.",
  },
  {
    img: ConsorcioServico,
    title: "Consórcio de Serviços",
    description:
      "Realize seus sonhos como viagens, festas, cirurgias plásticas ou cursos com planejamento e economia.",
  },
];

const steps = [
  { title: "1. Formação do Grupo", description: "Você adere a um grupo com outras pessoas que têm o mesmo objetivo que você." },
  { title: "2. Contribuição Mensal", description: "Todos os participantes pagam parcelas mensais, que formam o fundo do grupo." },
  { title: "3. Contemplação", description: "Mensalmente, participantes são contemplados por sorteio ou lance para receber o crédito." },
  { title: "4. Aquisição do Bem", description: "Com a carta de crédito em mãos, você tem poder de compra à vista para adquirir seu bem." },
];

const benefits = [
  { icon: FaPiggyBank, title: "Sem Juros", description: "Você paga apenas uma taxa de administração, que é muito menor que os juros de um financiamento." },
  { icon: FaHandHoldingUsd, title: "Poder de Compra", description: "Ao ser contemplado, você recebe o valor integral da carta de crédito para negociar sua compra à vista." },
  { icon: FaThumbsUp, title: "Flexibilidade", description: "Utilize o crédito para o bem que desejar dentro da categoria do seu grupo, com total liberdade de escolha." },
];

const Consorcios = () => {
  return (
    <>
      <SEO
        title="Consórcios"
        description="Realize seu sonho da casa própria ou carro novo com nossos planos de consórcio. Simule agora."
        name="Aba Seguros"
        type="website"
        keywords="consórcio imobiliário, consórcio de carro"
      />

      <Hero
        title="Conquiste seus maiores sonhos sem pagar juros."
        image={ImgConsorcio}
        imageAlt="Família feliz com a conquista da casa própria através de consórcio"
      />

      <Section tone="white">
        <SectionHeading
          title="Consórcio: O Planejamento Inteligente"
          subtitle="Uma modalidade de compra baseada na união de pessoas que formam uma poupança comum destinada à aquisição de bens ou serviços. Ideal para quem não tem pressa e busca disciplina financeira para atingir grandes objetivos."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <Card as="article" key={product.title} className="flex flex-col overflow-hidden p-0">
              <img
                src={product.img}
                alt={product.title}
                width={400}
                height={200}
                loading="lazy"
                decoding="async"
                className="h-[200px] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-navy-900">{product.title}</h3>
                <p className="mt-2 flex-1 text-slate-500">{product.description}</p>
                <Button
                  as="a"
                  target="_blank"
                  href="https://wa.me/5511945411551"
                  className="mt-6 w-full"
                >
                  Simular Agora
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <div className="bg-white pb-16 md:pb-20">
        <Container>
          <a
            href="https://wa.me/5511945411551"
            target="_blank"
            rel="noreferrer"
            className="block overflow-hidden rounded-2xl shadow-card ring-1 ring-slate-200/70 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
          >
            <img
              src={ConsorcioBanner}
              alt="Consórcio Porto Seguro — planeje hoje o amanhã que você sonha: automóvel, imóvel, moto, pesados e placa solar"
              width={1100}
              height={733}
              loading="lazy"
              decoding="async"
              className="h-auto w-full"
            />
          </a>
        </Container>
      </div>

      <Section tone="muted">
        <SectionHeading
          title="Como Funciona na Prática?"
          subtitle="O processo é simples e transparente. Veja as 4 etapas principais:"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <Card key={step.title} hover={false} className="border-t-4 border-brand-500">
              <h4 className="font-semibold text-navy-900">{step.title}</h4>
              <p className="mt-2 text-slate-500">{step.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading
          title="Principais Vantagens"
          subtitle="Descubra por que o consórcio é a melhor opção para o seu planejamento."
        />
        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="text-center">
              <benefit.icon className="mx-auto text-5xl text-brand-500" aria-hidden="true" />
              <h4 className="mt-4 font-semibold text-navy-900">{benefit.title}</h4>
              <p className="mt-2 text-slate-500">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="brand">
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h3 className="text-xl font-bold md:text-2xl">Pronto para dar o primeiro passo?</h3>
            <p className="mt-2 text-white/85">
              Faça uma simulação gratuita e sem compromisso para encontrar o plano perfeito para você.
            </p>
          </div>
          <Button as="a" target="_blank" href="https://wa.me/5511945411551" variant="outline" className="shrink-0">
            Fazer Simulação
          </Button>
        </div>
      </Section>
    </>
  );
};

export default Consorcios;
