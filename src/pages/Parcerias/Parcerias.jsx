import { Link } from "react-router-dom";
import { SEO } from "../../components/SEO/SEO";
import { Hero } from "../../components/ui/Hero";
import { Section } from "../../components/ui/Section";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";

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
    image: null,
    imageAlt: "Parceria Aba Seguros e Bruno Holanda Turismo",
    description:
      "A Aba Seguros firmou parceria com a agência Bruno Holanda Turismo para oferecer o melhor seguro viagem do mercado. Combinamos a expertise em turismo da Bruno Holanda com a experiência em seguros da Aba para garantir que você viaje sempre protegido, seja no Brasil ou no exterior.",
    featuresIntro: "Imprevistos acontecem — viaje sempre protegido.",
    coveragesIntro: "Planos completos pensados para cada tipo de viagem.",
    features: [
      { icon: "🏥", title: "Emergências médicas", text: "Cobertura completa para atendimentos hospitalares e médicos, que no exterior podem custar dezenas de milhares de reais." },
      { icon: "🧳", title: "Bagagem extraviada", text: "Indenização em caso de perda, roubo ou dano de bagagem durante a viagem." },
      { icon: "✈️", title: "Cancelamento de voo", text: "Reembolso por despesas extras causadas por atrasos, cancelamentos ou conexões perdidas." },
      { icon: "🦷", title: "Urgência odontológica", text: "Cobertura para emergências dentárias onde quer que você esteja." },
      { icon: "🌍", title: "Assistência 24h", text: "Suporte completo a qualquer hora do dia ou da noite, em qualquer lugar do mundo." },
      { icon: "📋", title: "Exigência de vistos", text: "Vários países — especialmente na Europa — exigem seguro viagem como requisito obrigatório para entrada." },
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
    image: null,
    imageAlt: "Parceria Aba Seguros e Porto Seguro Consórcios",
    description:
      "A Aba Seguros é parceira da Porto Seguro Consórcios para ajudar você a conquistar bens e serviços sem pagar juros. No consórcio, um grupo de pessoas contribui mensalmente para um fundo comum e, por sorteio ou lance, os participantes vão sendo contemplados com a carta de crédito para usar como quiser. É uma forma disciplinada e planejada de comprar um imóvel, um veículo ou até financiar uma reforma, com parcelas mais previsíveis do que em um financiamento tradicional.",
    featuresIntro: "Planeje sua conquista sem pagar juros.",
    coveragesIntro: "Tudo o que você pode conquistar com o consórcio Porto Seguro.",
    features: [
      { icon: "🚫", title: "Sem juros", text: "Você paga apenas uma taxa de administração diluída ao longo do plano, sem os juros altos cobrados pelo financiamento bancário tradicional." },
      { icon: "🏠", title: "Múltiplas finalidades", text: "Cartas de crédito para imóveis, veículos, motos, reformas e até serviços, de acordo com o plano escolhido." },
      { icon: "🎯", title: "Estratégia de lances", text: "Lance livre, fixo ou embutido para acelerar sua contemplação e antecipar o recebimento da carta de crédito." },
      { icon: "📆", title: "Parcelas previsíveis", text: "Valores fixos e planejados, o que facilita o controle do orçamento mês a mês." },
      { icon: "🛡️", title: "Seguro prestamista incluso", text: "Em caso de morte ou invalidez permanente do titular, o saldo devedor da cota é quitado, protegendo a família." },
      { icon: "📈", title: "Poupança com propósito", text: "Uma forma disciplinada de guardar dinheiro todo mês com um objetivo claro e construir patrimônio ao longo do tempo." },
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

  {
    id: "insetnew",
    badge: "Controle de Pragas",
    title: "Aba Seguros + InsetNew",
    // TODO: a logo original enviada (inset.jpeg) foi perdida durante o recorte —
    // adicione o arquivo novamente em src/assets/image/ e importe aqui.
    image: null,
    imageAlt: "Logotipo InsetNew Controle Ambiental",
    description:
      "A Aba Seguros é parceira da InsetNew, empresa especializada em controle de pragas e higienização ambiental. A InsetNew atua com dedetização, desratização, descupinização, sanitização de ambientes e higienização de reservatórios de água para residências, condomínios, empresas e órgãos públicos, sempre com laudos técnicos e produtos certificados pela ANVISA, IBAMA e INEA.",
    featuresIntro: "Diagnóstico completo e planos preventivos para manter o ambiente livre de pragas.",
    coveragesIntro: "Serviços disponíveis para residências, condomínios, empresas e órgãos públicos.",
    features: [
      { icon: "🐜", title: "Dedetização", text: "Controle de insetos como baratas, formigas e outras pragas urbanas comuns." },
      { icon: "🐀", title: "Desratização", text: "Eliminação e prevenção contra ratos e outros roedores no ambiente." },
      { icon: "🪵", title: "Descupinização", text: "Tratamento contra cupins para proteger a estrutura de imóveis e móveis." },
      { icon: "🦟", title: "Controle de mosquitos", text: "Ações preventivas e corretivas contra mosquitos transmissores de doenças." },
      { icon: "💧", title: "Higienização de reservatórios", text: "Limpeza e desinfecção de caixas d'água conforme normas sanitárias." },
      { icon: "🧴", title: "Sanitização de ambientes", text: "Desinfecção de espaços residenciais, comerciais e industriais." },
    ],
    coverages: [
      "Desinsetização (baratas, formigas e outros insetos)",
      "Desratização e controle de roedores",
      "Descupinização preventiva e corretiva",
      "Sanitização de areia e áreas de lazer",
      "Sanitização e desinfecção de ambientes",
      "Higienização de reservatórios de água potável",
      "Controle de mosquitos",
      "Manejo de pombos",
      "Diagnóstico técnico completo do ambiente",
      "Planos preventivos personalizados",
      "Atendimento residencial, comercial e industrial",
      "Certificações ANVISA, IBAMA e INEA",
    ],
    ctaLabel: "Solicitar orçamento",
    ctaHref: "https://wa.me/5511945411551",
  },
];

const Parcerias = () => (
  <>
    <SEO
      title="Parcerias — Aba Seguros"
      description="Conheça as parcerias exclusivas da Aba Seguros e aproveite soluções completas com as melhores empresas do mercado."
      name="Aba Seguros"
      type="website"
    />

    <Hero
      title="Nossas Parcerias"
      subtitle="A Aba Seguros une forças com empresas referência em seus segmentos para oferecer soluções completas e exclusivas para você."
    />

    {parceiros.map((p, index) => (
      <div key={p.id} id={p.id}>
        <Section tone={index % 2 === 0 ? "white" : "muted"}>
          <div className={p.image ? "grid gap-10 lg:grid-cols-2 lg:items-center" : "mx-auto max-w-3xl text-center"}>
            {p.image && (
              <img
                src={p.image}
                alt={p.imageAlt}
                width={550}
                height={367}
                loading="lazy"
                decoding="async"
                className="w-full rounded-2xl shadow-card"
              />
            )}
            <div>
              <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">
                {p.badge}
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">{p.title}</h2>
              <p className="mt-4 leading-relaxed text-slate-500">{p.description}</p>
              <Button as="a" target="_blank" href={p.ctaHref} className="mt-6">
                {p.ctaLabel}
              </Button>
            </div>
          </div>

          <div className="mt-16">
            <SectionHeading title="Por que contratar?" subtitle={p.featuresIntro} />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {p.features.map((feature) => (
                <Card key={feature.title} hover={false}>
                  <span className="text-3xl" aria-hidden="true">{feature.icon}</span>
                  <h4 className="mt-3 font-semibold text-navy-900">{feature.title}</h4>
                  <p className="mt-2 text-sm text-slate-500">{feature.text}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <SectionHeading title="O que está incluído" subtitle={p.coveragesIntro} />
            <ul className="mx-auto mt-10 grid max-w-4xl list-none gap-x-8 gap-y-3 sm:grid-cols-2">
              {p.coverages.map((coverage) => (
                <li key={coverage} className="flex items-start gap-3 text-slate-600">
                  <span className="mt-0.5 text-brand-500" aria-hidden="true">✔</span>
                  {coverage}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section tone="navy">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <h3 className="text-xl font-bold md:text-2xl">Pronto para aproveitar esta parceria?</h3>
              <p className="mt-2 text-white/80">Fale agora com um especialista e receba sua cotação gratuitamente.</p>
            </div>
            <div className="flex shrink-0 flex-wrap justify-center gap-4">
              <Button as="a" target="_blank" href={p.ctaHref}>
                {p.ctaLabel}
              </Button>
              <Button as={Link} to="/" variant="outline">
                Voltar ao início
              </Button>
            </div>
          </div>
        </Section>
      </div>
    ))}
  </>
);

export default Parcerias;
