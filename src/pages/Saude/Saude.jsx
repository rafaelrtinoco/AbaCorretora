import React from "react";
import {
  BlogContainer,
  BlogGrid,
  BlogCard, // Mantido para possível uso futuro, mas HealthPlanCard é o foco atual
  HeroContainer,
  HeroContent,
  HeroDivider,
  HeroImage,
  HeroRow,
  HeroText,
  HeroTitle,
  Tip,
  SectionTitle,
  SectionSubtitle,
  HealthPlanCard,
  ProductButton,
  CTABanner,
  CTAInner,
  CTAButtons,
  ButtonMain,
} from "./Saude.styles";

import { PartnersHealthSection } from "../../components/Partners/Partiners";

import ImgSaude from "../../assets/Img/img-saude.png";
import ImgConvenioMedico from "../../assets/Img/convenio-medico.png";
import ImgConvenioOdonto from "../../assets/Img/convenio-odonto.png";
import ImgConvenioPet from "../../assets/Img/convenio-pet.png";

function BlogSection() {
  return (
    <>
      <HeroContainer>
        <HeroContent>
          <HeroRow>
            <HeroText>
              <HeroTitle>
                Planos de saúde com valores que cabem no seu orçamento.
              </HeroTitle>
            </HeroText>
            <HeroImage src={ImgSaude} alt="imagem hero" />
          </HeroRow>
        </HeroContent>

        <HeroDivider />
      </HeroContainer>

      <BlogContainer id="convenios">
        <SectionTitle>Convênios e Planos de Saúde</SectionTitle>
        <SectionSubtitle>
          Encontre o plano ideal para sua saúde e bem-estar, com cobertura
          completa para você, sua família e até mesmo seu pet.
        </SectionSubtitle>

        <BlogGrid>
          {/* CARD 1: Convênio Médico */}
          <HealthPlanCard>
            <div className="image-container">
              <img
                src={ImgConvenioMedico}
                alt="Família feliz com médico, representando convênio médico"
                loading="lazy"
              />
            </div>
            <h3>Convênio Médico</h3>
            <p>
              Cuidado integral para sua saúde. Acesse uma ampla rede credenciada
              de hospitais, clínicas e laboratórios.
            </p>
            <ul>
              <li>Consultas e exames</li>
              <li>Internações e cirurgias</li>
              <li>Atendimento de emergência 24h</li>
            </ul>
            <Tip>
              Ideal para quem busca segurança e tranquilidade no acesso a
              serviços de saúde de qualidade.
            </Tip>
            <div className="card-button-wrapper">
              <ProductButton>Ver Planos Médicos </ProductButton>
            </div>
          </HealthPlanCard>

          {/* CARD 2: Convênio Odontológico */}
          <HealthPlanCard>
            <div className="image-container">
              <img
                src={ImgConvenioOdonto}
                alt="Pessoas sorrindo, representando convênio odontológico"
                loading="lazy"
              />
            </div>
            <h3>Convênio Odontológico</h3>
            <p>
              Mantenha seu sorriso saudável com cobertura para prevenção,
              tratamentos e procedimentos essenciais.
            </p>
            <ul>
              <li>Consultas e limpezas</li>
              <li>Tratamentos de cárie e canal</li>
              <li>Ortodontia (em alguns planos)</li>
            </ul>
            <Tip>
              Perfeito para quem valoriza a saúde bucal e quer evitar gastos
              inesperados com o dentista.
            </Tip>
            <div className="card-button-wrapper">
              <ProductButton>Ver Planos Odontológicos </ProductButton>
            </div>
          </HealthPlanCard>

          {/* CARD 3: Convênio Pet */}
          <HealthPlanCard>
            <div className="image-container">
              <img
                src={ImgConvenioPet}
                alt="Cão e gato felizes, representando convênio pet"
                loading="lazy"
              />
            </div>
            <h3>Convênio Pet</h3>
            <p>
              Cuide da saúde do seu melhor amigo com planos que cobrem
              consultas, vacinas e procedimentos veterinários.
            </p>
            <ul>
              <li>Consultas e exames de rotina</li>
              <li>Vacinas e vermifugação</li>
              <li>Cirurgias e internações (em alguns planos)</li>
            </ul>
            <Tip>
              Essencial para tutores que querem garantir a longevidade e o
              bem-estar de seus animais de estimação.
            </Tip>
            <div className="card-button-wrapper">
              <ProductButton>Ver Planos Pet </ProductButton>
            </div>
          </HealthPlanCard>
        </BlogGrid>
      </BlogContainer>

      {/* Nova Seção: Detalhes do Convênio Médico */}
      <BlogContainer style={{ backgroundColor: "#f9f9f9" }}>
        <SectionTitle>Por que ter um Convênio Médico?</SectionTitle>
        <SectionSubtitle>
          Garanta o acesso rápido e de qualidade a serviços de saúde essenciais
          para você e sua família, sem preocupações com gastos inesperados.
        </SectionSubtitle>
        <BlogGrid>
          <BlogCard>
            
            <h3>Acesso Facilitado</h3>
            <p>
              Com um convênio médico, você e sua família têm acesso a uma ampla
              rede de médicos, hospitais e laboratórios credenciados, com
              agendamento facilitado e sem as longas filas do sistema público.
              Isso garante que você receba o atendimento necessário no momento
              certo.
            </p>
          </BlogCard>
          <BlogCard>
           
            <h3>Economia e Previsibilidade</h3>
            <p>
              Evite surpresas com os altos custos de consultas, exames,
              internações e cirurgias particulares. O convênio médico oferece
              mensalidades fixas, tornando seus gastos com saúde previsíveis e
              protegendo seu orçamento em caso de emergências ou tratamentos de
              longo prazo.
            </p>
          </BlogCard>
          <BlogCard>
            
            <h3>Cuidado Completo e Preventivo</h3>
            <p>
              Além do atendimento para doenças e emergências, muitos planos
              oferecem programas de medicina preventiva, check-ups regulares e
              acompanhamento para doenças crônicas. Invista na sua saúde e
              bem-estar com um cuidado abrangente e contínuo.
            </p>
          </BlogCard>
        </BlogGrid>
      </BlogContainer>

      {/* Nova Seção: Detalhes do Convênio Odontológico */}
      <BlogContainer>
        <SectionTitle>A Importância do Convênio Odontológico</SectionTitle>
        <SectionSubtitle>
          Um sorriso saudável é essencial para sua qualidade de vida. Invista em
          prevenção e tratamentos odontológicos sem pesar no seu bolso.
        </SectionSubtitle>
        <BlogGrid>
          <BlogCard>
            
            <h3>Prevenção de Doenças</h3>
            <p>
              Consultas e limpezas regulares são fundamentais para prevenir
              cáries, gengivite e outras doenças bucais que podem afetar sua
              saúde geral. O convênio odontológico facilita esse acesso à
              prevenção.
            </p>
          </BlogCard>
          <BlogCard>
            
            <h3>Cobertura para Tratamentos Essenciais</h3>
            <p>
              De obturações a tratamentos de canal, o convênio cobre uma série
              de procedimentos que seriam caros se feitos de forma particular.
              Garanta que você não adie tratamentos importantes devido ao custo.
            </p>
          </BlogCard>
          <BlogCard>
            
            <h3>Estética e Bem-estar</h3>
            <p>
              Um sorriso bonito aumenta a autoestima e a confiança. Além da
              saúde, muitos planos oferecem cobertura para procedimentos
              estéticos ou ortodônticos (parcialmente), contribuindo para seu
              bem-estar.
            </p>
          </BlogCard>
        </BlogGrid>
      </BlogContainer>

      {/* Nova Seção: Detalhes do Convênio Pet */}
      <BlogContainer style={{ backgroundColor: "#f9f9f9" }}>
        <SectionTitle>Cuide do seu Melhor Amigo com um Convênio Pet</SectionTitle>
        <SectionSubtitle>
          Seu pet merece o melhor cuidado! Proteja a saúde do seu companheiro de
          quatro patas com planos veterinários completos e acessíveis.
        </SectionSubtitle>
        <BlogGrid>
          <BlogCard>
           
            <h3>Atendimento Veterinário Completo</h3>
            <p>
              Garanta consultas, exames, vacinas e até cirurgias para seu pet
              com uma rede credenciada de clínicas e hospitais veterinários. Seu
              amigo terá acesso aos melhores profissionais e tratamentos.
            </p>
          </BlogCard>
          <BlogCard>
            
            <h3>Prevenção e Bem-estar</h3>
            <p>
              Mantenha seu pet protegido com a cobertura de vacinas essenciais,
              vermifugação e check-ups regulares. A prevenção é a melhor forma
              de garantir uma vida longa e saudável para ele.
            </p>
          </BlogCard>
          <BlogCard>
            
            <h3>Segurança em Emergências</h3>
            <p>
              Acidentes e doenças podem acontecer. Com um convênio pet, você tem
              a tranquilidade de saber que os custos com emergências, cirurgias
              e internações estarão cobertos, sem comprometer seu orçamento.
            </p>
          </BlogCard>
        </BlogGrid>
      </BlogContainer>

      <CTABanner>
        <CTAInner>
          <div>
            <h3>Fale com um especialista</h3>
            <p>
              Receba uma consultoria gratuita para encontrar o plano ideal.
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
      <PartnersHealthSection />
    </>
  );
}

export default BlogSection;