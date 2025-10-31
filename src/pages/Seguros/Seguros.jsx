import React from "react";
import { SectionTitle, SectionSubtitle } from "../../App.styles";
import { PartnersSecuritySection } from "../../components/Partners/Partiners";
import {
  PageSection,
  ContentWrap,
  ProductsGrid,
  ProductCard,
  Tip,
  HeroContainer,
  HeroContent,
  HeroRow,
  HeroText,
  HeroTitle,
  HeroImage,
  ButtonMain,
  HeroDivider,
  ProductButton,
  ProductLink,
  ProductImage,
  HowItWorksSection,
  Steps,
  StepItem,
  CTABanner,
  CTAInner,
  CTAButtons,
  BenefitsSection,
  BenefitsGrid,
  BenefitItem,
  FAQSection,
  FAQItem,
} from "./Seguros.styles";

// Ícones
import { FaShieldAlt, FaRegMoneyBillAlt } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";

// Imagens
import ImgHome from "../../assets/Img/img-seguro.webp";
import SeguroAuto from "../../assets/Img/seguro-auto.webp";
import SeguroResidencia from "../../assets/Img/seguro-residencial.webp";
import SeguroEquipamentos from "../../assets/Img/seguro-equipamentos.webp";
import SeguroBike from "../../assets/Img/seguro-bike.webp";
import SeguroVida from "../../assets/Img/seguro-vida.webp";
import SegurViagem from "../../assets/Img/seguro-viagem.webp";

const Seguros = () => {
  const benefits = [
    {
      icon: <FaShieldAlt />,
      title: "Proteção Completa",
      description:
        "Coberturas abrangentes para todas as situações que você possa imaginar.",
    },
    {
      icon: <FaRegMoneyBillAlt />,
      title: "Preços Acessíveis",
      description: "Planos que cabem no seu bolso sem abrir mão da qualidade.",
    },
    {
      icon: <FaClockRotateLeft />,
      title: "Rápida Indenização",
      description:
        "Processos ágeis para que você receba o que é seu o mais rápido possível.",
    },
    {
      icon: <MdOutlineSupportAgent />,
      title: "Suporte 24/7",
      description:
        "Atendimento humanizado disponível a qualquer hora, todos os dias.",
    },
  ];

  const faqs = [
    {
      question: "Como funciona a franquia do seguro?",
      answer:
        "A franquia é a participação do segurado nos prejuízos em caso de sinistro. Se o custo do reparo for menor que a franquia, o segurado arca com o valor. Se for maior, a seguradora cobre o excedente.",
    },
    {
      question: "O que é um sinistro e como devo proceder?",
      answer:
        "Sinistro é qualquer evento previsto na apólice que cause dano ou prejuízo. Ao ocorrer, você deve entrar em contato com a seguradora o mais rápido possível para receber as orientações de como acionar sua cobertura.",
    },
    {
      question: "Posso cancelar meu seguro a qualquer momento?",
      answer:
        "Sim, a maioria dos seguros pode ser cancelada a qualquer momento. A seguradora fará um cálculo para devolver parte do valor pago, proporcional ao tempo que ainda resta de cobertura.",
    },
    {
      question: "Qual a diferença entre seguro e assistência 24h?",
      answer:
        "O seguro cobre os prejuízos financeiros de um sinistro (roubo, colisão, etc.), enquanto a assistência 24h oferece serviços emergenciais como guincho, chaveiro e eletricista, garantindo suporte no dia a dia.",
    },
  ];

  return (
    <>
      <HeroContainer>
        <HeroContent>
          <HeroRow>
            <HeroText>
              <HeroTitle>
                Proteção completa para manter você e sua família seguros.
              </HeroTitle>
            </HeroText>
            <HeroImage src={ImgHome} alt="imagem hero" />
          </HeroRow>
        </HeroContent>
        <HeroDivider />
      </HeroContainer>

      <PageSection>
        <ContentWrap>
          <SectionTitle>Nossos Seguros</SectionTitle>
          <SectionSubtitle>
            Proteção para todas as fases da sua vida. Encontre a solução ideal
            para veículos, residência, viagens, vida, equipamentos e muito mais.
          </SectionSubtitle>

          <ProductsGrid>
            <ProductCard>
              <ProductImage
                src={SeguroAuto}
                alt="Ícone representando seguro de automóvel"
              />
              <h3>Seguro Automóvel</h3>
              <p>
                Proteção contra colisão, roubo, furto, eventos naturais e
                terceiros.
              </p>
              <ul>
                <li>Guincho 24h, carro reserva, taxi, hospedagem e etc</li>
                <li>Cobertura para vidros, faróis, retrovisores </li>
                <li>Assistência completa a terceiros</li>
              </ul>
              <Tip>
                Indicado para quem busca tranquilidade no dia a dia e proteção
                patrimonial.
              </Tip>
              <ProductButton as="a" target="_blank" href="http://www.porto.vc/SEGUROAUTO_2C888J_4adc4d250fef4398bff082d6ec55c22d">
                Contratar Agora
              </ProductButton>
              <ProductLink as="a" target="_blank" href="https://wa.me/5511945411551">
                Falar com Especialista
              </ProductLink>
            </ProductCard>

            {/* CARD SEGURO RESIDENCIAL */}
            <ProductCard>
              <ProductImage
                src={SeguroResidencia}
                alt="Ícone representando seguro residencial"
              />
              <h3>Seguro Residencial</h3>
              <p>
                Coberturas essenciais para sua casa: incêndio, vendaval, roubo e
                danos elétricos.
              </p>
              <ul>
                <li>
                  Assistência 24h (chaveiro, encanador, eletricista e etc)
                </li>
                <li>Responsabilidade civil familiar</li>
                <li>Proteção para eletroeletrônicos</li>
              </ul>
              <Tip>
                Excelente custo-benefício para proteger seu patrimônio e rotina.
              </Tip>
               <ProductButton as="a" target="_blank" href="http://www.porto.vc/RESIDENCIAESSENCIAL_2C888J_61958aa0450642a5b951525d33924932">
                Contratar Agora
              </ProductButton>
              <ProductLink as="a" target="_blank" href="https://wa.me/5511945411551">
                Falar com Especialista
              </ProductLink>
            </ProductCard>

            {/* CARD SEGURO VIAGEM */}
            <ProductCard>
              <ProductImage
                src={SegurViagem}
                alt="Ícone representando seguro de viagem"
              />
              <h3>Seguro Viagem</h3>
              <p>
                Viaje pelo mundo com a certeza de que imprevistos médicos e
                logísticos não vão estragar sua experiência.
              </p>
              <ul>
                <li>Despesas Médicas e Hospitalares</li>
                <li>Cancelamento de viagem e extravio de bagagem</li>
                <li>Assistência internacional 24h </li>
              </ul>
              <Tip>
                Essencial para viagens internacionais e para garantir sua paz de
                espírito.
              </Tip>
               <ProductButton as="a" target="_blank" href="http://www.porto.vc/VIAGEM_2C888J_4e6ceaf7a7994221896910f63bbdc78d">
                Contratar Agora
              </ProductButton>
              <ProductLink as="a" target="_blank" href="https://wa.me/5511945411551">
                Falar com Especialista
              </ProductLink>
            </ProductCard>

            
            <ProductCard>
              <ProductImage
                src={SeguroVida}
                alt="Ícone representando seguro de vida"
              />
              <h3>Seguro de Vida</h3>
              <p>
                Garanta a segurança financeira de quem você ama em momentos
                delicados, protegendo o futuro da sua família.
              </p>
              <ul>
                <li>Cobertura em caso de falecimento</li>
                <li>Indenização por invalidez (total ou parcial)</li>
                <li>Assistência para doenças graves e acidentes</li>
              </ul>
              <Tip>
                Essencial para proteger financeiramente sua família e entes
                queridos.
              </Tip>
               <ProductButton as="a" target="_blank" href=" http://www.porto.vc/SEGURODEVIDAON_2C888J_2cc78e5c020f4904814a1f187c934e26">
                Contratar Agora
              </ProductButton>
              <ProductLink as="a" target="_blank" href="https://wa.me/5511945411551">
                Falar com Especialista
              </ProductLink>
            </ProductCard>

            {/* CARD EQUIPAMENTOS PORTÁTEIS */}
            <ProductCard>
              <ProductImage
                src={SeguroEquipamentos}
                alt="Ícone representando seguro de equipamentos"
              />
              <h3>Equipamentos Portáteis</h3>
              <p>
                Proteja seus eletrônicos como notebook, smartphone e câmera
                contra danos, roubo e furto.
              </p>
              <ul>
                <li>Proteção contra roubo e furto</li>
                <li>Cobertura para danos físicos acidentais (quedas)</li>
                <li>Danos elétricos e por líquidos</li>
              </ul>
              <Tip>
                Perfeito para profissionais e estudantes que dependem de seus
                equipamentos.
              </Tip>
              <ProductButton as="a" target="_blank" href="http://www.porto.vc/EQUIPAMENTOSPORTATEIS_2C888J_9c024469b4cd40d493617ac9c3ec506e">
                Contratar Agora
              </ProductButton>
              <ProductLink as="a" target="_blank" href="https://wa.me/5511945411551">
                Falar com Especialista
              </ProductLink>
            </ProductCard>

            <ProductCard>
              <ProductImage
                src={SeguroBike}
                alt="Ícone representando seguro de bicicleta"
              />
              <h3>Seguro de Bicicleta</h3>
              <p>
                Pedale com tranquilidade sabendo que sua bike está protegida
                contra roubo, furto e acidentes.
              </p>
              <ul>
                <li>Cobertura contra roubo e furto qualificado</li>
                <li>Danos acidentais e quebra</li>
                <li>Assistência e transporte em caso de acidente</li>
              </ul>
              <Tip>
                Ideal para ciclistas urbanos e atletas que querem garantir a
                segurança do seu investimento.
              </Tip>
               <ProductButton as="a" target="_blank" href="https://wa.me/5511945411551">
                Contratar Agora
              </ProductButton>
              <ProductLink as="a" target="_blank" href="https://wa.me/5511945411551">
                Falar com Especialista
              </ProductLink>
            </ProductCard>
          </ProductsGrid>
        </ContentWrap>
      </PageSection>

      <BenefitsSection>
        <ContentWrap>
          <SectionTitle>Nossos Diferenciais</SectionTitle>
          <SectionSubtitle>
            Oferecemos as melhores soluções em proteção para você e sua família.
          </SectionSubtitle>
          <BenefitsGrid>
            {benefits.map((benefit, index) => (
              <BenefitItem key={index}>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </BenefitItem>
            ))}
          </BenefitsGrid>
        </ContentWrap>
      </BenefitsSection>

      <HowItWorksSection>
        <SectionTitle>Como Contratar?</SectionTitle>
        <SectionSubtitle>
          Contratar seu seguro é simples, rápido e totalmente digital.
        </SectionSubtitle>
        <Steps>
          <StepItem>
            <h4>Simulação Online</h4>
            <p>
              Escolha o seguro desejado e preencha algumas informações para
              receber sua cotação.
            </p>
          </StepItem>
          <StepItem>
            <h4>Análise de Perfil</h4>
            <p>
              Nossos especialistas analisam seu perfil para encontrar a melhor
              cobertura pelo menor preço.
            </p>
          </StepItem>
          <StepItem>
            <h4>Emissão da Apólice</h4>
            <p>
              Após a aprovação, sua apólice é emitida e enviada digitalmente
              para você.
            </p>
          </StepItem>
          <StepItem>
            <h4>Tudo Pronto!</h4>
            <p>
              Você e seu patrimônio estão protegidos. Conte com nosso suporte
              sempre que precisar.
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
            <h3>Fale com um especialista</h3>
            <p>
              Receba uma consultoria gratuita para encontrar a proteção ideal.
            </p>
          </div>
          <CTAButtons>
            <ButtonMain as="a" target="_blank" href="https://wa.me/5511945411551">
              Solicitar cotação
            </ButtonMain>
          </CTAButtons>
        </CTAInner>
      </CTABanner>

      <PartnersSecuritySection />
    </>
  );
};

export default Seguros;
