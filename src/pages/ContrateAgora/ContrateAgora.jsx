import { SEO } from "../../components/SEO/SEO";
import { Hero } from "../../components/ui/Hero";
import { Section } from "../../components/ui/Section";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";

import ImgServicosHero from "../../assets/image/contrate.webp";
import ImgCartao from "../../assets/image/cartao.webp";
import ImgConta from "../../assets/image/conta.webp";
import ImgEquip from "../../assets/image/equipamentos.webp";
import ImgArCond from "../../assets/image/arCondicionado.webp";
import ImgArCons from "../../assets/image/reparoArCondicionado.webp";
import ImgEletro from "../../assets/image/eletro.webp";
import ImgFechadura from "../../assets/image/fechadura.webp";
import ImgLimpezaAr from "../../assets/image/limpezaAr.webp";
import ImgLimpezaSofa from "../../assets/image/limpezaSofa.webp";
import ImgAquecedor from "../../assets/image/aquecedor.webp";
import ImgResidencia from "../../assets/image/seguro-residencial.webp";
import ImgVida from "../../assets/image/seguro-vida.webp";
import ImgViagem from "../../assets/image/seguro-viagem.webp";
import ImgAzul from "../../assets/image/azul.webp";
import ImgAuto from "../../assets/image/seguro-auto.webp";
import ImgServicos from "../../assets/image/servicosGerais.webp";
import ImgDesentupir from "../../assets/image/desentupidora.webp";
import ImgHidraulico from "../../assets/image/hidraulico.webp";
import ImgGuincho from "../../assets/image/guincho.webp";
import ImgEletrico from "../../assets/image/eletrica.webp";
import ImgCelular from "../../assets/image/celular.webp";

const services = [
  { id: 1, title: "Cartão de Crédito Porto Bank", image: ImgCartao, price: "Consulte", link: "http://www.porto.vc/CARTAODECREDITOPORTOBANK_2C888J_08580097b3b94188846765137cdde970", tag: "Financeiro" },
  { id: 2, title: "Conta Digital Porto Bank", image: ImgConta, price: "Gratuita", link: "http://www.porto.vc/CONTADIGITALPORTOBANK_2C888J_bf30075b311648a298e099b53bf9aa83", tag: "Financeiro" },
  { id: 3, title: "Seguro Equipamentos Portáteis", image: ImgEquip, price: "Consulte", link: "http://www.porto.vc/EQUIPAMENTOSPORTATEIS_2C888J_9c024469b4cd40d493617ac9c3ec506e", tag: "Seguro" },
  { id: 4, title: "Instalação de Ar Condicionado", image: ImgArCond, price: "Consulte", link: "http://www.porto.vc/PORTOSERVICOINSTALACAODEARCONDICIONADO_2C888J_236ea5eac97949ff851979d791b173c6", tag: "Serviço" },
  { id: 5, title: "Conserto de Ar Condicionado", image: ImgArCons, price: "Consulte", link: "http://www.porto.vc/PORTOSERVICOCONSERTODEARCONDICIONADO_2C888J_3ebb64c816fe49b1b38633e437b20db0", tag: "Serviço" },
  { id: 6, title: "Conserto de Eletrodomésticos", image: ImgEletro, price: "Consulte", link: "http://www.porto.vc/PORTOSERVICO_2C888J_59ce64a743444d869f4d1880cd19b4b4", tag: "Serviço" },
  { id: 7, title: "Instalação de Fechadura Digital", image: ImgFechadura, price: "Consulte", link: "http://www.porto.vc/PORTOSERVICOINSTALACAODEFECHADURADIGITAL_2C888J_8c68120488cc42ec93f2ae8e04b00c6a", tag: "Serviço" },
  { id: 8, title: "Limpeza de Ar Condicionado", image: ImgLimpezaAr, price: "Consulte", link: "http://www.porto.vc/PORTOSERVICOLIMPEZADEARCONDICIONADO_2C888J_52556b93bcbb42219e5ffb1dfdf45579", tag: "Serviço" },
  { id: 9, title: "Limpeza de Sofá e Estofados", image: ImgLimpezaSofa, price: "Consulte", link: "http://www.porto.vc/PORTOSERVICOLIMPEZADESOFAEESTOFADOS_2C888J_3a54492c203e40bdaa7fec40986a82d2", tag: "Serviço" },
  { id: 10, title: "Manutenção de Aquecedor a Gás", image: ImgAquecedor, price: "Consulte", link: "http://www.porto.vc/PORTOSERVICOMANUTENCAODEAQUECEDORAGAS_2C888J_85a3db639a484bf19c2a6e0bee224240", tag: "Serviço" },
  { id: 11, title: "Residência Essencial", image: ImgResidencia, price: "Consulte", link: "http://www.porto.vc/RESIDENCIAESSENCIAL_2C888J_61958aa0450642a5b951525d33924932", tag: "Seguro" },
  { id: 12, title: "Seguro de Vida On", image: ImgVida, price: "Consulte", link: "http://www.porto.vc/SEGURODEVIDAON_2C888J_2cc78e5c020f4904814a1f187c934e26", tag: "Seguro" },
  { id: 13, title: "Seguro Viagem", image: ImgViagem, price: "Consulte", link: "http://www.porto.vc/VIAGEM_2C888J_4e6ceaf7a7994221896910f63bbdc78d", tag: "Seguro" },
  { id: 14, title: "Azul por Assinatura", image: ImgAzul, price: "Consulte", link: "http://www.porto.vc/AZULPORASSINATURA_2C888J_125fd31ab392408d95ae1120b36c97a7", tag: "Assinatura" },
  { id: 15, title: "Seguro Automóvel", image: ImgAuto, price: "Consulte", link: "http://www.porto.vc/SEGUROAUTO_2C888J_4adc4d250fef4398bff082d6ec55c22d", tag: "Seguro" },
  { id: 16, title: "Porto Serviços (Geral)", image: ImgServicos, price: "Consulte", link: "http://www.porto.vc/PORTOSERVICO_2C888J_59ce64a743444d869f4d1880cd19b4b4", tag: "Serviço" },
  { id: 17, title: "Porto Serviço Desentupimento", image: ImgDesentupir, price: "Consulte", link: "http://www.porto.vc/PORTOSERVICODESENTUPIMENTO_2C888J_294f3bd8d0694676be52211c06cb4ce9", tag: "Serviço" },
  { id: 18, title: "Porto Serviço Consertos Hidráulicos", image: ImgHidraulico, price: "Consulte", link: "http://www.porto.vc/PORTOSERVICOCONSERTOHIDRAULICOS_2C888J_9898e89495ff4a29b47633fddc73b1bc", tag: "Serviço" },
  { id: 19, title: "Porto Serviço Guincho", image: ImgGuincho, price: "Consulte", link: "http://www.porto.vc/PORTOSERVICOGUINCHO_2C888J_2ad08df43f094c34a43ac97179b888e3", tag: "Serviço" },
  { id: 20, title: "Porto Serviço Consertos Elétricos", image: ImgEletrico, price: "Consulte", link: "http://www.porto.vc/PORTOSERVICOCONSERTOSELETRICOS_2C888J_3b120fe61be4435c86bbc9e59c60446c", tag: "Serviço" },
  { id: 21, title: "Seguro Celular", image: ImgCelular, price: "Consulte", link: "http://www.porto.vc/SEGUROCELULAR_2C888J_b8d7305862ab4086aede4a2ed397e6bf", tag: "Seguro" },
];

const faqs = [
  {
    question: "Como contrato um serviço?",
    answer: "É simples! Escolha o serviço desejado, clique em 'Contratar Agora' e siga as instruções para agendamento e pagamento. Você será direcionado para a plataforma de contratação.",
  },
  {
    question: "Os serviços têm garantia?",
    answer: "Sim, todos os serviços prestados pela Porto Serviços possuem garantia de qualidade. O prazo da garantia varia conforme o tipo de serviço executado.",
  },
  {
    question: "Posso parcelar o pagamento?",
    answer: "Sim, oferecemos diversas formas de pagamento, incluindo parcelamento no cartão de crédito. As condições exatas estarão disponíveis na página de pagamento do serviço.",
  },
];

const steps = [
  { title: "1. Escolha", description: "Navegue pela nossa grade e escolha o serviço ou seguro que você precisa." },
  { title: "2. Simule", description: "Clique em \"Contratar Agora\" para ver os detalhes, preços e simular seu plano." },
  { title: "3. Contrate", description: "Preencha seus dados e finalize a contratação de forma 100% digital." },
  { title: "4. Pronto!", description: "Receba a confirmação e agende seu serviço ou receba sua apólice digital." },
];

const Servicos = () => {
  return (
    <>
      <SEO
        title="Serviços"
        description="Conheça nossas opções de serviços residênciais, como: eletricista, encanador. instação de ar condicionado e muito mais."
        name="Aba Serviços"
        type="website"
        keywords="serviços residênciais"
      />

      <Hero title="Serviços Porto para sua casa, carro e vida cotidiana." image={ImgServicosHero} imageAlt="Serviços Porto" />

      <Section tone="white">
        <SectionHeading
          title="Todos os Nossos Serviços"
          subtitle="Encontre seguros e serviços para todas as suas necessidades. Contrate online com rapidez e segurança."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card as="article" key={service.id} className="relative flex flex-col overflow-hidden p-0">
              {service.tag && (
                <span className="absolute left-3 top-3 z-10 rounded-full bg-navy-900 px-3 py-1 text-xs font-semibold text-white">
                  {service.tag}
                </span>
              )}
              <img
                src={service.image}
                alt={service.title}
                width={300}
                height={180}
                loading="lazy"
                decoding="async"
                className="h-[180px] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-semibold text-navy-900">{service.title}</h3>
                <p className="mt-1 text-sm font-semibold text-brand-600">{service.price}</p>
                <Button as="a" href={service.link} target="_blank" rel="noopener noreferrer" size="sm" className="mt-4 w-full">
                  Contratar Agora
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading title="Como Contratar?" subtitle="Contratar um serviço ou seguro é simples e rápido." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <Card key={step.title} hover={false}>
              <h4 className="font-semibold text-navy-900">{step.title}</h4>
              <p className="mt-2 text-slate-500">{step.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading title="Perguntas Frequentes" subtitle="Ainda tem dúvidas? A gente ajuda você a esclarecer." />
        <div className="mx-auto mt-12 grid max-w-3xl gap-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl bg-brand-50 p-6">
              <h4 className="font-semibold text-navy-900">{faq.question}</h4>
              <p className="mt-2 text-slate-500">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="brand">
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h3 className="text-xl font-bold md:text-2xl">Não encontrou o que procurava?</h3>
            <p className="mt-2 text-white/85">Fale com um de nossos especialistas e tire todas as suas dúvidas.</p>
          </div>
          <Button as="a" target="_blank" href="https://wa.me/5511945411551" variant="outline" className="shrink-0">
            Falar pelo WhatsApp
          </Button>
        </div>
      </Section>
    </>
  );
};

export default Servicos;
