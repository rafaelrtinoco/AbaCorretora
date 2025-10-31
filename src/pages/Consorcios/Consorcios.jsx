import React from "react";
import { SectionTitle, SectionSubtitle } from "../../App.styles";
import {
  PageSection,
  ContentWrap,
  ProductsGrid,
  ProductCard,
  ProductImage,
  ProductButton,
  HeroContainer,
  HeroContent,
  HeroRow,
  HeroText,
  HeroTitle,
  HeroImage,
  HeroDivider,
  HowItWorksSection,
  StepsGrid,
  StepItem,
  BenefitsSection,
  BenefitsGrid,
  BenefitItem,
  BenefitIcon,
  CTABanner,
  CTAInner,
  CTAButtons,
  ButtonMain,
} from "./Consorcios.styles";
import { SEO } from "../../components/SEO/SEO"
import { FaPiggyBank, FaHandHoldingUsd, FaThumbsUp } from "react-icons/fa";
import ImgConsorcio from "../../assets/image/img-consorcio.webp";
import ConsorcioImovel from "../../assets/image/consorcio-imovel.webp"; 
import ConsorcioVeiculo from "../../assets/image/consorcio-automovel.webp"; 
import ConsorcioServico from "../../assets/image/consorcio-servicos.webp"; 

const Consorcios = () => {
  
  const products = [
    {
      img: ConsorcioImovel,
      title: "Consórcio Imobiliário",
      description: "A forma mais inteligente de comprar, construir ou reformar seu imóvel sem juros.",
    },
    {
      img: ConsorcioVeiculo,
      title: "Consórcio de Veículos",
      description: "Planeje a compra do seu carro, moto ou utilitário novo ou seminovo com parcelas que cabem no bolso.",
    },
    {
      img: ConsorcioServico,
      title: "Consórcio de Serviços",
      description: "Realize seus sonhos como viagens, festas, cirurgias plásticas ou cursos com planejamento e economia.",
    },
  ];

  return (
    <>
    <SEO
        title="Consórcios"
        description="Realize seu sonho da casa própria ou carro novo com nossos planos de consórcio. Simule agora."
        name="Aba Seguros"
        type="website"
        keywords="consórcio imobiliário, consórcio de carro"
      />
      <HeroContainer>
        <HeroContent>
          <HeroRow>
            <HeroText>
              <HeroTitle>
                Conquiste seus maiores sonhos sem pagar juros.
              </HeroTitle>
            </HeroText>
            <HeroImage src={ImgConsorcio} alt="Família feliz com a conquista da casa própria através de consórcio" />
          </HeroRow>
        </HeroContent>
        <HeroDivider />
      </HeroContainer>

      <PageSection>
        <ContentWrap>
          <SectionTitle>Consórcio: O Planejamento Inteligente</SectionTitle>
          <SectionSubtitle>
            Uma modalidade de compra baseada na união de pessoas que formam uma poupança comum destinada à aquisição de bens ou serviços. Ideal para quem não tem pressa e busca disciplina financeira para atingir grandes objetivos.
          </SectionSubtitle>

         
          <ProductsGrid>
            {products.map((product, index) => (
              <ProductCard key={index}>
                <ProductImage src={product.img} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <ProductButton target="_blank" as="a" href="https://wa.me/5511945411551">Simular Agora</ProductButton>
              </ProductCard>
            ))}
          </ProductsGrid>
        </ContentWrap>
      </PageSection>

            <HowItWorksSection>
        <ContentWrap>
          <SectionTitle>Como Funciona na Prática?</SectionTitle>
          <SectionSubtitle>O processo é simples e transparente. Veja as 4 etapas principais:</SectionSubtitle>
          <StepsGrid>
            <StepItem>
              <h4>1. Formação do Grupo</h4>
              <p>Você adere a um grupo com outras pessoas que têm o mesmo objetivo que você.</p>
            </StepItem>
            <StepItem>
              <h4>2. Contribuição Mensal</h4>
              <p>Todos os participantes pagam parcelas mensais, que formam o fundo do grupo.</p>
            </StepItem>
            <StepItem>
              <h4>3. Contemplação</h4>
              <p>Mensalmente, participantes são contemplados por sorteio ou lance para receber o crédito.</p>
            </StepItem>
            <StepItem>
              <h4>4. Aquisição do Bem</h4>
              <p>Com a carta de crédito em mãos, você tem poder de compra à vista para adquirir seu bem.</p>
            </StepItem>
          </StepsGrid>
        </ContentWrap>
      </HowItWorksSection>

           <BenefitsSection>
        <ContentWrap>
          <SectionTitle>Principais Vantagens</SectionTitle>
          <SectionSubtitle>Descubra por que o consórcio é a melhor opção para o seu planejamento.</SectionSubtitle>
          <BenefitsGrid>
            <BenefitItem>
              <BenefitIcon><FaPiggyBank /></BenefitIcon>
              <h4>Sem Juros</h4>
              <p>Você paga apenas uma taxa de administração, que é muito menor que os juros de um financiamento.</p>
            </BenefitItem>
            <BenefitItem>
              <BenefitIcon><FaHandHoldingUsd /></BenefitIcon>
              <h4>Poder de Compra</h4>
              <p>Ao ser contemplado, você recebe o valor integral da carta de crédito para negociar sua compra à vista.</p>
            </BenefitItem>
            <BenefitItem>
              <BenefitIcon><FaThumbsUp /></BenefitIcon>
              <h4>Flexibilidade</h4>
              <p>Utilize o crédito para o bem que desejar dentro da categoria do seu grupo, com total liberdade de escolha.</p>
            </BenefitItem>
          </BenefitsGrid>
        </ContentWrap>
      </BenefitsSection>

            <CTABanner>
        <CTAInner>
          <div>
            <h3>Pronto para dar o primeiro passo?</h3>
            <p>Faça uma simulação gratuita e sem compromisso para encontrar o plano perfeito para você.</p>
          </div>
          <CTAButtons>
            <ButtonMain as="a" target="_blank" href="https://wa.me/5511945411551">
              Fazer Simulação
            </ButtonMain>
          </CTAButtons>
        </CTAInner>
      </CTABanner>
    </>
  );
};

export default Consorcios;