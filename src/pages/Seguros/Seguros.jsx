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
  ProductImage,
  HowItWorksSection,
  Steps,
  StepItem,
  CTABanner,
  CTAInner,
  CTAButtons,
} from "./Seguros.styles";
import { FaShieldAlt } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";

import ImgHome from "../../assets/Img/img-seguro.png";
import SeguroAuto from "../../assets/Img/seguro-auto.png";
import SeguroResidencia from "../../assets/Img/seguro-residencial.png";
import SeguroEquipamentos from "../../assets/Img/seguro-equipamentos.png";
import SeguroBike from "../../assets/Img/seguro-bike.png";
import SeguroVida from "../../assets/Img/seguro-vida.png";
import SegurViagem from "../../assets/Img/seguro-viagem.png";

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
          <SectionTitle>Seguros</SectionTitle>
          <SectionSubtitle>
            Proteção em todas as fases da vida. Seruros para: veículos,
            residência, bicicleta, vida, equipamentos e etc.
          </SectionSubtitle>

          <ProductsGrid>
            <ProductCard>
              <ProductImage
                src={SeguroAuto}
                alt="Ícone representando seguro de viagem"
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
              <ProductButton>Planos a partir de R$ 30,00</ProductButton>
            </ProductCard>

            <ProductCard>
              <ProductImage
                src={SeguroResidencia}
                alt="Ícone representando seguro de viagem"
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
              <ProductButton>Planos a partir de R$ 30,00</ProductButton>
            </ProductCard>

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
                Essencial para viagens internacionais e recomendado para
                garantir sua paz de espírito em qualquer destino.
              </Tip>
              <ProductButton>Planos a partir de R$ 30,00</ProductButton>
            </ProductCard>

            <ProductCard>
              <ProductImage
                src={SeguroVida}
                alt="Ícone representando seguro de viagem"
              />
              <h3>Seguro de Vida</h3>
              <p>
                Garanta a segurança financeira de quem você ama em momentos
                delicados, protegendo o futuro da sua família.
              </p>
              <ul>
                <li>Cobertura em caso de falecimento</li>
                <li>Indenização por invalidez (total ou parcial)</li>
                <li>Assistência para doenças graves e acidentes pessoais</li>
              </ul>
              <Tip>
                Essencial para quem deseja proteger financeiramente sua família
                e entes queridos em qualquer situação.
              </Tip>
              <ProductButton>Planos a partir de R$ 30,00</ProductButton>
            </ProductCard>

            <ProductCard>
              <ProductImage
                src={SeguroEquipamentos}
                alt="Ícone representando seguro de viagem"
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
                equipamentos no dia a dia.
              </Tip>
              <ProductButton>Planos a partir de R$ 30,00</ProductButton>
            </ProductCard>

            <ProductCard>
              <ProductImage
                src={SeguroBike}
                alt="Ícone representando seguro de viagem"
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
                segurança de seu investimento.
              </Tip>
              <ProductButton>Planos a partir de R$ 30,00</ProductButton>
            </ProductCard>
          </ProductsGrid>
        </ContentWrap>
      </PageSection>
      <HowItWorksSection>
        <SectionTitle>Porque contratar nossos seguros?</SectionTitle>
        <SectionSubtitle>
          Oferecemos as melhores soluções em proteção para você e sua família.
        </SectionSubtitle>
        <Steps>
          <StepItem>
            <h4>Proteção Completa</h4>
            <p>
              Coberturas abrangentes para todas as situações que você possa
              imaginar.
            </p>
          </StepItem>
          <StepItem>
            <h4>Preços Acessíveis</h4>
            <p>Planos que cabem no seu bolso sem abrir mão da qualidade.</p>
          </StepItem>
          <StepItem>
            <h4>Rápida Indenização</h4>
            <p>
              Processos ágeis para que você receba o que é seu o mais rápido
              possível.
            </p>
          </StepItem>
          <StepItem>
            <h4>Suporte 24/7</h4>
            <p>
              Atendimento humanizado disponível a qualquer hora, todos os dias.
            </p>
          </StepItem>
        </Steps>
      </HowItWorksSection>
      <CTABanner>
        <CTAInner>
          <div>
            <h3>Fale com um especialista</h3>
            <p>
              Receba uma consultoria gratuita para encontrar a proteção ideal.
            </p>
          </div>
          <CTAButtons>
            <ButtonMain as="a" href="#contact">
              Solicitar cotação
            </ButtonMain>
            <ButtonMain
              as="a"
              href="#faq"
              style={{ backgroundColor: "#fff", color: "#001f3D" }}
            >
              Tirar dúvidas
            </ButtonMain>
          </CTAButtons>
        </CTAInner>
      </CTABanner>
      <PartnersSecuritySection />
    </>
  );
};

export default Seguros;
