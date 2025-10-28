import React from "react";

import { SectionTitle, SectionSubtitle } from "../../App.styles";
// Importe os novos estilos que criaremos para esta página
import {
  PageSection,
  ContentWrap,
  ServicesGrid,
  ServiceCard,
  ServiceImage,
  ServiceTag,
  ServicePrice,
  ServiceButton,
  HeroContainer,
  HeroContent,
  HeroRow,
  HeroText,
  HeroTitle,
  HeroImage,
  HeroDivider,
  CTABanner,
  CTAInner,
  CTAButtons,
  ButtonMain,
  HowItWorksSection,
  Steps,
  StepItem,
  FAQSection,
  FAQItem,
} from "./ContrateAgora.styles"; // Crie este arquivo

// --- (IMPORTANTE) ---
// 1. Importe as imagens para cada serviço
// Eu adicionei placeholders, você deve trocá-los pelo caminho correto
import ImgServicosHero from "../../assets/Img/contrate.webp"; // Imagem principal (Trocar)
import ImgCartao from "../../assets/Img/cartao.webp"; // (Trocar)
import ImgConta from "../../assets/Img/conta.webp"; // (Trocar)
import ImgEquip from "../../assets/Img/equipamentos.webp"; // (Trocar)
import ImgArCond from "../../assets/Img/arCondicionado.webp"; // (Trocar)
import ImgArCons from "../../assets/Img/reparoArCondicionado.webp"; // (Trocar)
import ImgEletro from "../../assets/Img/eletro.webp"; // (Trocar)
import ImgFechadura from "../../assets/Img/fechadura.webp"; // (Trocar)
import ImgLimpezaAr from "../../assets/Img/automovel.webp"; // (Trocar)
import ImgLimpezaSofa from "../../assets/Img/automovel.webp"; // (Trocar)
import ImgAquecedor from "../../assets/Img/automovel.webp"; // (Trocar)
import ImgResidencia from "../../assets/Img/seguro-residencial.webp"; // (Reutilizado)
import ImgVida from "../../assets/Img/seguro-vida.webp"; // (Reutilizado)
import ImgViagem from "../../assets/Img/seguro-viagem.webp"; // (Reutilizado)
import ImgAzul from "../../assets/Img/automovel.webp"; // (Trocar)
import ImgAuto from "../../assets/Img/seguro-auto.webp"; // (Reutilizado)
import ImgServicos from "../../assets/Img/automovel.webp"; // (Trocar)
import ImgDesentupir from "../../assets/Img/automovel.webp"; // (Trocar)
import ImgHidraulico from "../../assets/Img/automovel.webp"; // (Trocar)
import ImgGuincho from "../../assets/Img/automovel.webp"; // (Trocar)
import ImgEletrico from "../../assets/Img/automovel.webp"; // (Trocar)
import ImgCelular from "../../assets/Img/automovel.webp"; // (Trocar)

// --- (IMPORTANTE) ---
// 2. Adicione os links corretos, preços e tags
const services = [
  {
    id: 1, title: "Cartão de Crédito Porto Bank", image: ImgCartao, price: "Consulte", link: "#", tag: "Financeiro",
  },
  {
    id: 2, title: "Conta Digital Porto Bank", image: ImgConta, price: "Gratuita", link: "#", tag: "Financeiro",
  },
  {
    id: 3, title: "Seguro Equipamentos Portáteis", image: ImgEquip, price: "Consulte", link: "#", tag: "Seguro",
  },
  {
    id: 4, title: "Instalação de Ar Condicionado", image: ImgArCond, price: "Consulte", link: "#", tag: "Serviço",
  },
  {
    id: 5, title: "Conserto de Ar Condicionado", image: ImgArCons, price: "Consulte", link: "#", tag: "Serviço",
  },
  {
    id: 6, title: "Conserto de Eletrodomésticos", image: ImgEletro, price: "Consulte", link: "#", tag: "Serviço",
  },
  {
    id: 7, title: "Instalação de Fechadura Digital", image: ImgFechadura, price: "Consulte", link: "#", tag: "Serviço",
  },
  {
    id: 8, title: "Limpeza de Ar Condicionado", image: ImgLimpezaAr, price: "Consulte", link: "#", tag: "Serviço",
  },
  {
    id: 9, title: "Limpeza de Sofá e Estofados", image: ImgLimpezaSofa, price: "Consulte", link: "#", tag: "Serviço",
  },
  {
    id: 10, title: "Manutenção de Aquecedor a Gás", image: ImgAquecedor, price: "Consulte", link: "#", tag: "Serviço",
  },
  {
    id: 11, title: "Residência Essencial", image: ImgResidencia, price: "Consulte", link: "#", tag: "Seguro",
  },
  {
    id: 12, title: "Seguro de Vida On", image: ImgVida, price: "Consulte", link: "#", tag: "Seguro",
  },
  {
    id: 13, title: "Seguro Viagem", image: ImgViagem, price: "Consulte", link: "#", tag: "Seguro",
  },
  {
    id: 14, title: "Azul por Assinatura", image: ImgAzul, price: "Consulte", link: "#", tag: "Assinatura",
  },
  {
    id: 15, title: "Seguro Automóvel", image: ImgAuto, price: "Consulte", link: "#", tag: "Seguro",
  },
  {
    id: 16, title: "Porto Serviços (Geral)", image: ImgServicos, price: "Consulte", link: "#", tag: "Serviço",
  },
  {
    id: 17, title: "Porto Serviço Desentupimento", image: ImgDesentupir, price: "Consulte", link: "#", tag: "Serviço",
  },
  {
    id: 18, title: "Porto Serviço Consertos Hidráulicos", image: ImgHidraulico, price: "Consulte", link: "#", tag: "Serviço",
  },
  {
    id: 19, title: "Porto Serviço Guincho", image: ImgGuincho, price: "Consulte", link: "#", tag: "Serviço",
  },
  {
    id: 20, title: "Porto Serviço Consertos Elétricos", image: ImgEletrico, price: "Consulte", link: "#", tag: "Serviço",
  },
  {
    id: 21, title: "Seguro Celular", image: ImgCelular, price: "Consulte", link: "#", tag: "Seguro",
  },
];

// FAQs para esta página (pode ajustar)
const faqs = [
  {
    question: "Como contrato um serviço?",
    answer:
      "É simples! Escolha o serviço desejado, clique em 'Contratar Agora' e siga as instruções para agendamento e pagamento. Você será direcionado para a plataforma de contratação.",
  },
  {
    question: "Os serviços têm garantia?",
    answer:
      "Sim, todos os serviços prestados pela Porto Serviços possuem garantia de qualidade. O prazo da garantia varia conforme o tipo de serviço executado.",
  },
  {
    question: "Posso parcelar o pagamento?",
    answer:
      "Sim, oferecemos diversas formas de pagamento, incluindo parcelamento no cartão de crédito. As condições exatas estarão disponíveis na página de pagamento do serviço.",
  },
];

const Servicos = () => {
  return (
    <>
      <HeroContainer>
        <HeroContent>
          <HeroRow>
            <HeroText>
              <HeroTitle>
                Serviços Porto para sua casa, carro e vida cotidiana. 
              </HeroTitle>
            </HeroText>
            <HeroImage
              src={ImgServicosHero} 
              alt="Serviços Porto"
            />
          </HeroRow>
        </HeroContent>
        <HeroDivider />
      </HeroContainer>

      <PageSection>
        <ContentWrap>
          <SectionTitle>Todos os Nossos Serviços</SectionTitle>
          <SectionSubtitle>
            Encontre seguros e serviços para todas as suas necessidades.
            Contrate online com rapidez e segurança.
          </SectionSubtitle>

          <ServicesGrid>
            {services.map((service) => (
              <ServiceCard key={service.id}>
                {service.tag && <ServiceTag>{service.tag}</ServiceTag>}
                <ServiceImage src={service.image} alt={service.title} />
                <h3>{service.title}</h3>
                <ServicePrice>{service.price}</ServicePrice>
                <ServiceButton
                  as="a"
                  href={service.link} // <-- LINK VEM DO ARRAY
                  target="_blank" // Abre em nova aba
                  rel="noopener noreferrer"
                >
                  Contratar Agora
                </ServiceButton>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </ContentWrap>
      </PageSection>

      <HowItWorksSection>
        <SectionTitle>Como Contratar?</SectionTitle>
        <SectionSubtitle>
          Contratar um serviço ou seguro é simples e rápido.
        </SectionSubtitle>
        <Steps>
          <StepItem>
            <h4>1. Escolha</h4>
            <p>
              Navegue pela nossa grade e escolha o serviço ou seguro que você
              precisa.
            </p>
          </StepItem>
          <StepItem>
            <h4>2. Simule</h4>
            <p>
              Clique em "Contratar Agora" para ver os detalhes, preços e
              simular seu plano.
            </p>
          </StepItem>
          <StepItem>
            <h4>3. Contrate</h4>
            <p>
              Preencha seus dados e finalize a contratação de forma 100%
              digital.
            </p>
          </StepItem>
          <StepItem>
            <h4>4. Pronto!</h4>
            <p>
              Receba a confirmação e agende seu serviço ou receba sua apólice
              digital.
            </p>
          </StepItem>
        </Steps>
      </HowItWorksSection>

      <FAQSection>
        <ContentWrap>
          <SectionTitle>Perguntas Frequentes</SectionTitle>
          <SectionSubtitle>
            Ainda tem dúvidas? A gente ajuda você a esclarecer.
          </SectionSubtitle>
          {faqs.map((faq, index) => (
            <FAQItem key={index}>
              <h4>{faq.question}</h4>
              <p>{faq.answer}</p>
            </FAQItem>
          ))}
        </ContentWrap>
      </FAQSection>

      <CTABanner>
        <CTAInner>
          <div>
            <h3>Não encontrou o que procurava?</h3>
            <p>
              Fale com um de nossos especialistas e tire todas as suas dúvidas.
            </p>
          </div>
          <CTAButtons>
            <ButtonMain as="a" href="https://wa.me/5511945411551">
              Falar pelo WhatsApp
            </ButtonMain>
          </CTAButtons>
        </CTAInner>
      </CTABanner>
    </>
  );
};

export default Servicos;