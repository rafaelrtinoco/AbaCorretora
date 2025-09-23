import React, { useRef } from "react";
import {
  ProductsContainer,
  ProductsGrid,
  ProductCard,
  HeroContainer,
  HeroContent,
  HeroRow,
  HeroText,
  HeroTitle,
  HeroSubtitle,
  HeroImage,
  ButtonMain,
  IconWrapper,
  HeroDivider,
  ProductsCarouselViewport,
  ProductsCarouselTrack,
  ProductSlide,
  CarouselControls,
  CarouselButton,
} from "./Home.styles";
import { SectionTitle, SectionSubtitle } from "../../App.styles";
import FAQSection from "../../components/FAQ/FAQ";
import PartnersSection from "../../components/Partners/Partiners";

import ImgHome from "../../assets/Img/img-home.png";
import AutomovelIcon from "../../assets/Img/automovel.png";
import ResidencialIcon from "../../assets/Img/residencial.png";
import saudeIcon from "../../assets/Img/saude.png";
import vidaIcon from "../../assets/Img/vida.png";
import empresaIcon from "../../assets/Img/empresa.png";
import viagemIcon from "../../assets/Img/viagem.png";
import celularIcon from "../../assets/Img/celular.png";
import petIcon from "../../assets/Img/pet.png";
// import ContactSection from "../../components/Contacts/Contacts";
import {
  ValuePropsSection,
  ValueGrid,
  ValueCard,
  HowItWorksSection,
  Steps,
  StepItem,
  StatsBar,
  StatsGrid,
  StatItem,
  CTABanner,
  CTAInner,
  CTAButtons,
  ExtraServices,
  ExtraGrid,
  ExtraCard,
} from "./Home.styles";

const ProductsSection = () => {
  const products = [
    {
      icon: AutomovelIcon,
      title: "Seguro Auto",
      description:
        "Proteção completa para seu veículo contra colisões, roubos e danos.",
    },
    {
      icon: ResidencialIcon,
      title: "Seguro Residencial",
      description:
        "Cobertura para sua casa contra incêndios, roubos e desastres naturais.",
    },
    {
      icon: saudeIcon,
      title: "Plano de Saúde",
      description:
        "Planos individuais ou familiares com ampla rede de hospitais.",
    },
    {
      icon: vidaIcon,
      title: "Seguro de Vida",
      description:
        "Proteção financeira para sua família em caso de imprevistos.",
    },
    {
      icon: viagemIcon,
      title: "Seguro Viagem",
      description:
        "Cobertura internacional para emergências médicas e extravio de bagagem.",
    },
    {
      icon: empresaIcon,
      title: "Seguro Empresarial",
      description:
        "Proteção para seu negócio contra riscos operacionais e patrimoniais.",
    },
    {
      icon: celularIcon,
      title: "Seguro Celular",
      description: "Cobertura para danos acidentais e roubo de seu aparelho.",
    },
    {
      icon: petIcon,
      title: "Petlove Saúde",
      description: "Planos de saúde para seu animal de estimação.",
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
              <HeroSubtitle>
                Soluções em seguros, convênios e consórcios para pessoas e
                empresas, com atendimento consultivo e as melhores condições do
                mercado.
              </HeroSubtitle>
              <ButtonMain>COTE AGORA</ButtonMain>
            </HeroText>
            <HeroImage src={ImgHome} alt="imagem hero" />
          </HeroRow>
        </HeroContent>
        <HeroDivider />
      </HeroContainer>
      <ProductsContainer id="products">
        <SectionTitle>Nossos Planos</SectionTitle>
        <SectionSubtitle>Opções que cabem no seu orçamento</SectionSubtitle>

        {(() => {
          const trackRef = useRef(null);

          const scrollBySlide = (direction) => {
            if (!trackRef.current) return;
            const viewport = trackRef.current.parentElement;
            const slide = trackRef.current.querySelector(':scope > *');
            const slideWidth = slide ? slide.getBoundingClientRect().width + 16 : viewport.clientWidth; // 16 ~ gap
            const delta = direction === 'next' ? slideWidth : -slideWidth;
            trackRef.current.scrollBy({ left: delta, behavior: 'smooth' });
          };

          const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') scrollBySlide('next');
            if (e.key === 'ArrowLeft') scrollBySlide('prev');
          };

          return (
            <>
              <ProductsCarouselViewport role="region" aria-label="Carrossel de produtos">
                <ProductsCarouselTrack ref={trackRef} tabIndex={0} onKeyDown={handleKeyDown}>
                  {products.map((product, index) => (
                    <ProductSlide key={index} aria-roledescription="slide">
                      <ProductCard>
                        <IconWrapper>
                          <img src={product.icon} alt={product.title} />
                        </IconWrapper>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <a href="#">Saiba mais</a>
                      </ProductCard>
                    </ProductSlide>
                  ))}
                </ProductsCarouselTrack>
              </ProductsCarouselViewport>
              <CarouselControls>
                <CarouselButton aria-label="Anterior" onClick={() => scrollBySlide('prev')}>
                  ◀
                </CarouselButton>
                <CarouselButton aria-label="Próximo" onClick={() => scrollBySlide('next')}>
                  ▶
                </CarouselButton>
              </CarouselControls>
            </>
          );
        })()}
      </ProductsContainer>

      <ValuePropsSection>
        <SectionTitle>Por que escolher a ABA Corretora?</SectionTitle>
        <SectionSubtitle>
          Atendimento consultivo, múltiplas seguradoras parceiras e soluções sob
          medida para você e sua empresa.
        </SectionSubtitle>
        <ValueGrid>
          <ValueCard>
            <div>
              <h4>Assessoria Completa</h4>
              <p>Do orçamento à emissão da apólice e suporte em sinistros.</p>
            </div>
          </ValueCard>
          <ValueCard>
            <div>
              <h4>Economia e Comparação</h4>
              <p>
                Cotamos nas principais seguradoras para o melhor
                custo-benefício.
              </p>
            </div>
          </ValueCard>
          <ValueCard>
            <div>
              <h4>Atendimento Humanizado</h4>
              <p>Equipe próxima, rápida e disponível nos principais canais.</p>
            </div>
          </ValueCard>
        </ValueGrid>
      </ValuePropsSection>

      <HowItWorksSection>
        <SectionTitle>Como funciona</SectionTitle>
        <SectionSubtitle>
          4 passos simples para contratar seu seguro com tranquilidade.
        </SectionSubtitle>
        <Steps>
          <StepItem>
            <h4>1. Entendimento</h4>
            <p>
              Coletamos suas necessidades e perfil para indicar coberturas
              ideais.
            </p>
          </StepItem>
          <StepItem>
            <h4>2. Cotações</h4>
            <p>Comparamos propostas entre seguradoras parceiras.</p>
          </StepItem>
          <StepItem>
            <h4>3. Personalização</h4>
            <p>Ajustamos franquias e coberturas conforme seu orçamento.</p>
          </StepItem>
          <StepItem>
            <h4>4. Contratação</h4>
            <p>Documentação rápida e acompanhamento pós-venda.</p>
          </StepItem>
        </Steps>
      </HowItWorksSection>

      <StatsBar>
        <StatsGrid>
          <StatItem>
            <strong>10+</strong>
            <span>Anos de mercado</span>
          </StatItem>
          <StatItem>
            <strong>2k+</strong>
            <span>Clientes atendidos</span>
          </StatItem>
          <StatItem>
            <strong>15+</strong>
            <span>Seguradoras parceiras</span>
          </StatItem>
          <StatItem>
            <strong>24h</strong>
            <span>Suporte em sinistros</span>
          </StatItem>
        </StatsGrid>
      </StatsBar>

      <ExtraServices>
        <SectionTitle>Mais soluções para você</SectionTitle>
        <SectionSubtitle>
          Além dos seguros, conte com nossos convênios e consórcios para ampliar
          suas possibilidades.
        </SectionSubtitle>
        <ExtraGrid>
          <ExtraCard>
            <h3>Convênios</h3>
            <p>
              Parcerias para oferecer benefícios exclusivos aos nossos clientes.
            </p>
            <ul>
              <li>Descontos em saúde e bem-estar</li>
              <li>Serviços automotivos e residenciais</li>
              <li>Assistências 24h</li>
            </ul>
          </ExtraCard>
          <ExtraCard>
            <h3>Consórcios</h3>
            <p>Planejamento para aquisição de bens com parcelas acessíveis.</p>
            <ul>
              <li>Consórcio de automóveis</li>
              <li>Consórcio imobiliário</li>
              <li>Administração confiável</li>
            </ul>
          </ExtraCard>
        </ExtraGrid>
      </ExtraServices>

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
      <PartnersSection />

      <FAQSection />
     
    </>
  );
};

export default ProductsSection;
