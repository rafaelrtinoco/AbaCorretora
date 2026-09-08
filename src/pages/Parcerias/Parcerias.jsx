import React from "react";
import { SEO } from "../../components/SEO/SEO";
import { ButtonMain } from "../Home/Home.styles";
import { SectionTitle, SectionSubtitle } from "../../App.styles";
import {
  PageHero,
  PageHeroContent,
  PageHeroTitle,
  PageHeroSubtitle,
  PartnersListSection,
  PartnerBlock,
  PartnerBlockInner,
  PartnerBannerImage,
  PartnerInfo,
  PartnerBadge,
  PartnerTitle,
  PartnerDescription,
  PartnerFeatureGrid,
  PartnerFeatureCard,
  PartnerFeatureIcon,
  CoverageSection,
  CoverageGrid,
  CoverageItem,
  PartnerCTABar,
  PartnerCTAInner,
  PartnerCTAButtons,
  PartnerDivider,
} from "./Parcerias.styles";

import PopupBannerImg from "../../assets/image/pop-up.webp";

// Quando tiver a arte oficial da parceria com a Porto Seguro,
// importe a imagem aqui e passe no campo "image" do objeto abaixo.
// Ex: import PortoSeguroBannerImg from "../../assets/image/porto-seguro-consorcio.webp";

// ─────────────────────────────────────────────
// Para adicionar um novo parceiro no futuro,
// basta incluir um novo objeto neste array.
// O campo "image" é opcional: se não houver imagem,
// o bloco se ajusta automaticamente para ocupar a largura toda.
// ─────────────────────────────────────────────
const parceiros = [
  {
    id: "bruno-holanda",
    badge: "Seguro Viagem",
    title: "Aba Seguros + Bruno Holanda Turismo",
    image: PopupBannerImg,
    imageAlt: "Parceria Aba Seguros e Bruno Holanda Turismo",
    description:
      "A Aba Seguros firmou parceria com a agência Bruno Holanda Turismo para oferecer o melhor seguro viagem do mercado. Combinamos a expertise em turismo da Bruno Holanda com a experiência em seguros da Aba para garantir que você viaje sempre protegido, seja no Brasil ou no exterior.",
    features: [
      {
        icon: "🏥",
        title: "Emergências médicas",
        text: "Cobertura completa para atendimentos hospitalares e médicos, que no exterior podem custar dezenas de milhares de reais.",
      },
      {
        icon: "🧳",
        title: "Bagagem extraviada",
        text: "Indenização em caso de perda, roubo ou dano de bagagem durante a viagem.",
      },
      {
        icon: "✈️",
        title: "Cancelamento de voo",
        text: "Reembolso por despesas extras causadas por atrasos, cancelamentos ou conexões perdidas.",
      },
      {
        icon: "🦷",
        title: "Urgência odontológica",
        text: "Cobertura para emergências dentárias onde quer que você esteja.",
      },
      {
        icon: "🌍",
        title: "Assistência 24h",
        text: "Suporte completo a qualquer hora do dia ou da noite, em qualquer lugar do mundo.",
      },
      {
        icon: "📋",
        title: "Exigência de vistos",
        text: "Vários países — especialmente na Europa — exigem seguro viagem como requisito obrigatório para entrada.",
      },
    ],
    coverages: [
      "Despesas médicas e hospitalares",
      "Translado médico e remoção",
      "Regresso sanitário",
      "Morte acidental no exterior",
      "Invalidez por acidente",
      "Perda e extravio de bagagem",
      "Cancelamento e interrupção de viagem",
      "Atraso de voo e conexão perdida",
      "Urgência odontológica",
      "Assistência jurídica no exterior",
      "Responsabilidade civil",
      "Central de assistência 24h",
    ],
    ctaLabel: "Cotar seguro viagem",
    ctaHref: "https://wa.me/5511945411551",
  },

  {
    id: "porto-seguro-consorcio",
    badge: "Consórcio",
    title: "Aba Seguros + Porto Seguro Consórcios",
    // Sem imagem definida ainda — o bloco se adapta automaticamente.
    image: null,
    imageAlt: "Parceria Aba Seguros e Porto Seguro Consórcios",
    description:
      "A Aba Seguros é parceira da Porto Seguro Consórcios para ajudar você a conquistar bens e serviços sem pagar juros. No consórcio, um grupo de pessoas contribui mensalmente para um fundo comum e, por sorteio ou lance, os participantes vão sendo contemplados com a carta de crédito para usar como quiser. É uma forma disciplinada e planejada de comprar um imóvel, um veículo ou até financiar uma reforma, com parcelas mais previsíveis do que em um financiamento tradicional.",
    features: [
      {
        icon: "🚫",
        title: "Sem juros",
        text: "Você paga apenas uma taxa de administração diluída ao longo do plano, sem os juros altos cobrados pelo financiamento bancário tradicional.",
      },
      {
        icon: "🏠",
        title: "Múltiplas finalidades",
        text: "Cartas de crédito para imóveis, veículos, motos, reformas e até serviços, de acordo com o plano escolhido.",
      },
      {
        icon: "🎯",
        title: "Estratégia de lances",
        text: "Lance livre, fixo ou embutido para acelerar sua contemplação e antecipar o recebimento da carta de crédito.",
      },
      {
        icon: "📆",
        title: "Parcelas previsíveis",
        text: "Valores fixos e planejados, o que facilita o controle do orçamento mês a mês.",
      },
      {
        icon: "🛡️",
        title: "Seguro prestamista incluso",
        text: "Em caso de morte ou invalidez permanente do titular, o saldo devedor da cota é quitado, protegendo a família.",
      },
      {
        icon: "📈",
        title: "Poupança com propósito",
        text: "Uma forma disciplinada de guardar dinheiro todo mês com um objetivo claro e construir patrimônio ao longo do tempo.",
      },
    ],
    coverages: [
      "Carta de crédito para imóvel novo ou usado",
      "Carta de crédito para veículos, motos e caminhões",
      "Crédito para reforma ou construção",
      "Uso do FGTS em lances e amortização (imóveis)",
      "Lance livre, fixo ou embutido",
      "Parcelas ajustáveis ao seu orçamento",
      "Quitação antecipada com lance vencedor",
      "Seguro prestamista incluso",
      "Possibilidade de transferência da cota",
      "Sem entrada obrigatória",
      "Administração regulada pelo Banco Central",
      "Atendimento Porto Seguro em todo o Brasil",
    ],
    ctaLabel: "Simular meu consórcio",
    ctaHref: "https://wa.me/5511945411551",
  },

  // ── PRÓXIMO PARCEIRO (exemplo comentado) ──────────────────
  // {
  //   id: "nome-parceiro",
  //   badge: "Categoria",
  //   title: "Aba Seguros + Nome do Parceiro",
  //   image: OutraBannerImg, // opcional — pode ser null
  //   imageAlt: "Descrição da imagem",
  //   description: "Descrição da parceria...",
  //   features: [ { icon: "🔧", title: "...", text: "..." } ],
  //   coverages: ["Item 1", "Item 2"],
  //   ctaLabel: "Saiba mais",
  //   ctaHref: "https://wa.me/5511945411551",
  // },
];

const Parcerias = () => (
  <>
    <SEO
      title="Parcerias — Aba Seguros"
      description="Conheça as parcerias exclusivas da Aba Seguros e aproveite soluções completas com as melhores empresas do mercado."
      name="Aba Seguros"
      type="website"
    />

    {/* ── HERO DA PÁGINA ── */}
    <PageHero>
      <PageHeroContent>
        <PageHeroTitle>Nossas Parcerias</PageHeroTitle>
        <PageHeroSubtitle>
          A Aba Seguros une forças com empresas referência em seus segmentos
          para oferecer soluções completas e exclusivas para você.
        </PageHeroSubtitle>
      </PageHeroContent>
    </PageHero>

    {/* ── LISTA DE PARCEIROS ── */}
    <PartnersListSection>
      {parceiros.map((p, index) => (
        <React.Fragment key={p.id}>
          <PartnerBlock>
            <PartnerBlockInner $hasImage={Boolean(p.image)}>

              {/* Imagem (quando existir) + Info lado a lado */}
              {p.image && <PartnerBannerImage src={p.image} alt={p.imageAlt} />}
              <PartnerInfo>
                <PartnerBadge>{p.badge}</PartnerBadge>
                <PartnerTitle>{p.title}</PartnerTitle>
                <PartnerDescription>{p.description}</PartnerDescription>
                <ButtonMain as="a" target="_blank" href={p.ctaHref}>
                  {p.ctaLabel}
                </ButtonMain>
              </PartnerInfo>
            </PartnerBlockInner>

            {/* Features */}
            <SectionTitle style={{ marginTop: "3rem" }}>
              Por que contratar?
            </SectionTitle>
            <SectionSubtitle>
              {p.id === "porto-seguro-consorcio"
                ? "Planeje sua conquista sem pagar juros."
                : "Imprevistos acontecem — viaje sempre protegido."}
            </SectionSubtitle>
            <PartnerFeatureGrid>
              {p.features.map((f, i) => (
                <PartnerFeatureCard key={i}>
                  <PartnerFeatureIcon>{f.icon}</PartnerFeatureIcon>
                  <h4>{f.title}</h4>
                  <p>{f.text}</p>
                </PartnerFeatureCard>
              ))}
            </PartnerFeatureGrid>

            {/* Coberturas */}
            <CoverageSection>
              <SectionTitle>O que está incluído</SectionTitle>
              <SectionSubtitle>
                {p.id === "porto-seguro-consorcio"
                  ? "Tudo o que você pode conquistar com o consórcio Porto Seguro."
                  : "Planos completos pensados para cada tipo de viagem."}
              </SectionSubtitle>
              <CoverageGrid>
                {p.coverages.map((c, i) => (
                  <CoverageItem key={i}>
                    <span>✔</span> {c}
                  </CoverageItem>
                ))}
              </CoverageGrid>
            </CoverageSection>

            {/* CTA do parceiro */}
            <PartnerCTABar>
              <PartnerCTAInner>
                <div>
                  <h3>Pronto para aproveitar esta parceria?</h3>
                  <p>Fale agora com um especialista e receba sua cotação gratuitamente.</p>
                </div>
                <PartnerCTAButtons>
                  <ButtonMain as="a" target="_blank" href={p.ctaHref}>
                    {p.ctaLabel}
                  </ButtonMain>
                  <ButtonMain
                    as="a"
                    href="/"
                    style={{ backgroundColor: "#fff", color: "#001f3D" }}
                  >
                    Voltar ao início
                  </ButtonMain>
                </PartnerCTAButtons>
              </PartnerCTAInner>
            </PartnerCTABar>
          </PartnerBlock>

          {/* Divisor entre parceiros */}
          {index < parceiros.length - 1 && <PartnerDivider />}
        </React.Fragment>
      ))}
    </PartnersListSection>
  </>
);

export default Parcerias;