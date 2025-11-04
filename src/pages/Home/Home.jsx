import React, { useRef } from "react";
import {
  ProductsContainer,
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
import { PartnersHomeSection } from "../../components/Partners/Partiners";
import TestimonialsSection from "../../components/Testimonials/Testimonials";

import ImgHome from "../../assets/image/img-home.webp";
import AutomovelIcon from "../../assets/image/automovel.webp";
import ResidencialIcon from "../../assets/image/residencial.webp";
import saudeIcon from "../../assets/image/saude.webp";
import Financiamento from "../../assets/image/financiamento.webp";
import viagemIcon from "../../assets/image/viagem.webp";
import petIcon from "../../assets/image/pet.webp";
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
import { SEO } from '../../components/SEO/SEO'
import { PartnerCTA } from "../../components/PartnerCTA/PartnerCTA";

const ProductsSection = () => {
  const products = [
    {
      icon: AutomovelIcon,
      title: "Seguros",
      description:
        "Seguros que protegem seus patrimônios e vida: automóvel, equipamentos, empresa, residência, viagem, vida e muito mais.",
    },
    {
      icon: ResidencialIcon,
      title: "Consórcio",
      description:
        "O consórcio é o caminho ideal para quem busca comprar um bem com parcelas que cabem no bolso e sem pagar juros.",
    },
    {
      icon: saudeIcon,
      title: "Plano de Saúde",
      description:
        "Encontre o plano de saúde (individual, familiar ou empresarial) com a cobertura ideal para suas necessidades e seu orçamento.",
    },
    {
      icon: Financiamento,
      title: "Financiamento",
      description:
        "O financiamento ideal para suas conquistas. Taxas competitivas e planos flexíveis para você tirar seus projetos do papel.",
    },
    {
      icon: viagemIcon,
      title: "Empréstimo",
      description:
        "O empréstimo que você precisa está aqui. Dinheiro na mão para seus objetivos e sonhos.",
    },
    {
      icon: petIcon,
      title: "Petlove Saúde",
      description:
        "Planos de saúde para seu animal de estimação. Cuide bem do seu Pet.",
    },
  ];

  return (
    <>
    <SEO
        title="Aba Seguros - Seguros, Consórcios e Saúde"
        description="Encontre os melhores seguros, planos de saúde e consórcios. Faça uma cotação online agora mesmo."
        name="Aba Seguros" 
        type="website"
      />
      <HeroContainer>
        <HeroContent>
          <HeroRow>
            <HeroText>
              <HeroTitle>
                Tranquilidade para sua família, segurança para sua empresa.
              </HeroTitle>
              <HeroSubtitle>
                Consultoria especializada em seguros, planos de saúde, odontológico e consórcios. As
                melhores soluções do mercado para você e sua empresa.
              </HeroSubtitle>
              <ButtonMain as="a" target="_blank" href="https://wa.me/5511945411551">
                Contrate Agora
              </ButtonMain>
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
            const slide = trackRef.current.querySelector(":scope > *");
            const slideWidth = slide
              ? slide.getBoundingClientRect().width + 16
              : viewport.clientWidth;
            const delta = direction === "next" ? slideWidth : -slideWidth;
            trackRef.current.scrollBy({ left: delta, behavior: "smooth" });
          };

          const handleKeyDown = (e) => {
            if (e.key === "ArrowRight") scrollBySlide("next");
            if (e.key === "ArrowLeft") scrollBySlide("prev");
          };

          return (
            <>
              <ProductsCarouselViewport
                role="region"
                aria-label="Carrossel de produtos"
              >
                <ProductsCarouselTrack
                  ref={trackRef}
                  tabIndex={0}
                  onKeyDown={handleKeyDown}
                >
                  {products.map((product, index) => (
                    <ProductSlide key={index} aria-roledescription="slide">
                      <ProductCard>
                        <IconWrapper>
                          <img src={product.icon} alt={product.title} />
                        </IconWrapper>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>

                        <div className="saiba-mais-wrapper">
                          <a target="_blank" href="https://wa.me/5511945411551">Saiba mais </a>{" "}
                        </div>
                      </ProductCard>
                    </ProductSlide>
                  ))}
                </ProductsCarouselTrack>
              </ProductsCarouselViewport>
              <CarouselControls>
                <CarouselButton
                  aria-label="Anterior"
                  onClick={() => scrollBySlide("prev")}
                >
                  ◀
                </CarouselButton>
                <CarouselButton
                  aria-label="Próximo"
                  onClick={() => scrollBySlide("next")}
                >
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
            <strong>8+</strong>
            <span>Anos de experiência</span>
          </StatItem>
          <StatItem>
            <strong>600+</strong>
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
          Além dos seguros, conte com nossas soluções em planos de saúde e
          consórcios para ampliar suas possibilidades.
        </SectionSubtitle>
        <ExtraGrid>
          <ExtraCard>
            <h3>Planos de Saúde</h3>
            <p>
              Cuidar da sua saúde e da sua família é prioridade. Oferecemos
              planos de saúde individuais, familiares e empresariais, com ampla
              rede de atendimento e condições acessíveis.
            </p>
            <ul>
              <li>Atendimento nacional com hospitais, clínicas e laboratórios de referência.</li>
              <li>Consultas e exames com agendamento facilitado.</li>
              <li>Planos com ou sem coparticipação</li>
              <li>Isenção de carência mediante análise</li>
            </ul>
          </ExtraCard>
          <ExtraCard>
            <h3>Consórcios</h3>
            <p>Planeje suas conquistas com segurança e parcelas que cabem no seu bolso.</p>
            <ul>
              <li>Consórcio de automóveis</li>
              <li>Consórcio imobiliário</li>
              <li>Administração confiável e suporte em todas as etapas</li>
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
            <ButtonMain as="a" target="_blank" href="https://wa.me/5511945411551">
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
      <PartnersHomeSection />
      <TestimonialsSection />
      <PartnerCTA />

      <FAQSection />
    </>
  );
};

export default ProductsSection;
