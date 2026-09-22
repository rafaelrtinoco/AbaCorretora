import { FaShieldAlt, FaRegMoneyBillAlt } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";
import { SEO } from "../../components/SEO/SEO";
import { PartnersSecuritySection } from "../../components/Partners/Partiners";
import { PartnerCTA } from "../../components/PartnerCTA/PartnerCTA";
import { Hero } from "../../components/ui/Hero";
import { Section } from "../../components/ui/Section";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";

import ImgHome from "../../assets/image/img-seguro.webp";
import SeguroAuto from "../../assets/image/seguro-auto.webp";
import SeguroResidencia from "../../assets/image/seguro-residencial.webp";
import SeguroEquipamentos from "../../assets/image/seguro-equipamentos.webp";
import SeguroBike from "../../assets/image/seguro-bike.webp";
import SeguroVida from "../../assets/image/seguro-vida.webp";
import SegurViagem from "../../assets/image/seguro-viagem.webp";

const products = [
  {
    img: SeguroAuto,
    alt: "Ícone representando seguro de automóvel",
    title: "Seguro Automóvel",
    description: "Proteção contra colisão, roubo, furto, eventos naturais e terceiros.",
    bullets: ["Guincho 24h, carro reserva, taxi, hospedagem e etc", "Cobertura para vidros, faróis, retrovisores", "Assistência completa a terceiros"],
    tip: "Indicado para quem busca tranquilidade no dia a dia e proteção patrimonial.",
    hireHref: "http://www.porto.vc/SEGUROAUTO_2C888J_4adc4d250fef4398bff082d6ec55c22d",
  },
  {
    img: SeguroResidencia,
    alt: "Ícone representando seguro residencial",
    title: "Seguro Residencial",
    description: "Coberturas essenciais para sua casa: incêndio, vendaval, roubo e danos elétricos.",
    bullets: ["Assistência 24h (chaveiro, encanador, eletricista e etc)", "Responsabilidade civil familiar", "Proteção para eletroeletrônicos"],
    tip: "Excelente custo-benefício para proteger seu patrimônio e rotina.",
    hireHref: "http://www.porto.vc/RESIDENCIAESSENCIAL_2C888J_61958aa0450642a5b951525d33924932",
  },
  {
    img: SegurViagem,
    alt: "Ícone representando seguro de viagem",
    title: "Seguro Viagem",
    description: "Viaje pelo mundo com a certeza de que imprevistos médicos e logísticos não vão estragar sua experiência.",
    bullets: ["Despesas Médicas e Hospitalares", "Cancelamento de viagem e extravio de bagagem", "Assistência internacional 24h"],
    tip: "Essencial para viagens internacionais e para garantir sua paz de espírito.",
    hireHref: "http://www.porto.vc/VIAGEM_2C888J_4e6ceaf7a7994221896910f63bbdc78d",
  },
  {
    img: SeguroVida,
    alt: "Ícone representando seguro de vida",
    title: "Seguro de Vida",
    description: "Garanta a segurança financeira de quem você ama em momentos delicados, protegendo o futuro da sua família.",
    bullets: ["Cobertura em caso de falecimento", "Indenização por invalidez (total ou parcial)", "Assistência para doenças graves e acidentes"],
    tip: "Essencial para proteger financeiramente sua família e entes queridos.",
    hireHref: "http://www.porto.vc/SEGURODEVIDAON_2C888J_2cc78e5c020f4904814a1f187c934e26",
  },
  {
    img: SeguroEquipamentos,
    alt: "Ícone representando seguro de equipamentos",
    title: "Equipamentos Portáteis",
    description: "Proteja seus eletrônicos como notebook, smartphone e câmera contra danos, roubo e furto.",
    bullets: ["Proteção contra roubo e furto", "Cobertura para danos físicos acidentais (quedas)", "Danos elétricos e por líquidos"],
    tip: "Perfeito para profissionais e estudantes que dependem de seus equipamentos.",
    hireHref: "http://www.porto.vc/EQUIPAMENTOSPORTATEIS_2C888J_9c024469b4cd40d493617ac9c3ec506e",
  },
  {
    img: SeguroBike,
    alt: "Ícone representando seguro de bicicleta",
    title: "Seguro de Bicicleta",
    description: "Pedale com tranquilidade sabendo que sua bike está protegida contra roubo, furto e acidentes.",
    bullets: ["Cobertura contra roubo e furto qualificado", "Danos acidentais e quebra", "Assistência e transporte em caso de acidente"],
    tip: "Ideal para ciclistas urbanos e atletas que querem garantir a segurança do seu investimento.",
    hireHref: "https://wa.me/5511945411551",
  },
];

const benefits = [
  { icon: FaShieldAlt, title: "Proteção Completa", description: "Coberturas abrangentes para todas as situações que você possa imaginar." },
  { icon: FaRegMoneyBillAlt, title: "Preços Acessíveis", description: "Planos que cabem no seu bolso sem abrir mão da qualidade." },
  { icon: FaClockRotateLeft, title: "Rápida Indenização", description: "Processos ágeis para que você receba o que é seu o mais rápido possível." },
  { icon: MdOutlineSupportAgent, title: "Suporte 24/7", description: "Atendimento humanizado disponível a qualquer hora, todos os dias." },
];

const steps = [
  { title: "Simulação Online", description: "Escolha o seguro desejado e preencha algumas informações para receber sua cotação." },
  { title: "Análise de Perfil", description: "Nossos especialistas analisam seu perfil para encontrar a melhor cobertura pelo menor preço." },
  { title: "Emissão da Apólice", description: "Após a aprovação, sua apólice é emitida e enviada digitalmente para você." },
  { title: "Tudo Pronto!", description: "Você e seu patrimônio estão protegidos. Conte com nosso suporte sempre que precisar." },
];

const faqs = [
  {
    question: "Como funciona a franquia do seguro?",
    answer: "A franquia é a participação do segurado nos prejuízos em caso de sinistro. Se o custo do reparo for menor que a franquia, o segurado arca com o valor. Se for maior, a seguradora cobre o excedente.",
  },
  {
    question: "O que é um sinistro e como devo proceder?",
    answer: "Sinistro é qualquer evento previsto na apólice que cause dano ou prejuízo. Ao ocorrer, você deve entrar em contato com a seguradora o mais rápido possível para receber as orientações de como acionar sua cobertura.",
  },
  {
    question: "Posso cancelar meu seguro a qualquer momento?",
    answer: "Sim, a maioria dos seguros pode ser cancelada a qualquer momento. A seguradora fará um cálculo para devolver parte do valor pago, proporcional ao tempo que ainda resta de cobertura.",
  },
  {
    question: "Qual a diferença entre seguro e assistência 24h?",
    answer: "O seguro cobre os prejuízos financeiros de um sinistro (roubo, colisão, etc.), enquanto a assistência 24h oferece serviços emergenciais como guincho, chaveiro e eletricista, garantindo suporte no dia a dia.",
  },
];

const Seguros = () => {
  return (
    <>
      <SEO
        title="Seguros"
        description="Conheça nossas opções de seguro auto, residencial, vida e mais. Proteja o que é importante para você."
        name="Aba Seguros"
        type="website"
        keywords="seguro auto, seguro residencial, seguro de vida"
      />

      <Hero title="Proteção completa para manter você e sua família seguros." image={ImgHome} imageAlt="imagem hero" />

      <Section tone="white">
        <SectionHeading
          title="Nossos Seguros"
          subtitle="Proteção para todas as fases da sua vida. Encontre a solução ideal para veículos, residência, viagens, vida, equipamentos e muito mais."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card as="article" key={product.title} className="flex flex-col overflow-hidden p-0">
              <img
                src={product.img}
                alt={product.alt}
                width={400}
                height={220}
                loading="lazy"
                decoding="async"
                className="h-[220px] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-navy-900">{product.title}</h3>
                <p className="mt-2 text-slate-500">{product.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-500">
                  {product.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 rounded-lg border-l-4 border-brand-500 bg-brand-50 p-3 text-sm text-slate-600">
                  {product.tip}
                </p>
                <Button as="a" target="_blank" href={product.hireHref} className="mt-6 w-full">
                  Contratar Agora
                </Button>
                <Button as="a" target="_blank" href="https://wa.me/5511945411551" variant="ghost" size="sm" className="mt-2 w-full">
                  Falar com Especialista
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading title="Nossos Diferenciais" subtitle="Oferecemos as melhores soluções em proteção para você e sua família." />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="text-center">
              <benefit.icon className="mx-auto text-4xl text-brand-500" aria-hidden="true" />
              <h3 className="mt-4 font-semibold text-navy-900">{benefit.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading title="Como Contratar?" subtitle="Contratar seu seguro é simples, rápido e totalmente digital." />
        <ol className="mt-12 grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="relative rounded-2xl bg-brand-50 p-6 pt-8">
              <span className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 font-bold text-white">
                {index + 1}
              </span>
              <h4 className="font-semibold text-navy-900">{step.title}</h4>
              <p className="mt-2 text-sm text-slate-500">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <PartnerCTA />

      <Section tone="muted">
        <SectionHeading title="Perguntas Frequentes" subtitle="Ainda tem dúvidas? A gente ajuda você a esclarecer." />
        <div className="mx-auto mt-12 grid max-w-3xl gap-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-200/70">
              <h4 className="font-semibold text-navy-900">{faq.question}</h4>
              <p className="mt-2 text-slate-500">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="brand">
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h3 className="text-xl font-bold md:text-2xl">Fale com um especialista</h3>
            <p className="mt-2 text-white/85">Receba uma consultoria gratuita para encontrar a proteção ideal.</p>
          </div>
          <Button as="a" target="_blank" href="https://wa.me/5511945411551" variant="outline" className="shrink-0">
            Solicitar cotação
          </Button>
        </div>
      </Section>

      <PartnersSecuritySection />
    </>
  );
};

export default Seguros;
