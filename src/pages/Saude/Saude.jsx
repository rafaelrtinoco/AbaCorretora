import React from "react";
import {
  BlogContainer,
  BlogGrid,
  BlogCard,
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
} from "./Saude.styles";

import ImgSaude from "../../assets/Img/img-saude.png";

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
        {" "}
        {/* ID mais descritivo */}
        <SectionTitle>Convênios e Planos de Saúde</SectionTitle>
        <SectionSubtitle>
          Encontre o plano ideal para sua saúde e bem-estar, com cobertura
          completa para você, sua família e até mesmo seu pet.
        </SectionSubtitle>
        <BlogGrid>
          {/* CARD 1: Convênio Médico */}
          <HealthPlanCard>
            <div className="image-container">
              {/* Onde você importará a imagem do convênio médico */}
              <img
                src={null /* Importe MedicoImage aqui */}
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
              {/* Onde você importará a imagem do convênio odontológico */}
              <img
                src={null /* Importe OdontoImage aqui */}
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
              {/* Onde você importará a imagem do convênio pet */}
              <img
                src={null /* Importe PetImage aqui */}
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
    </>
  );
}

export default BlogSection;
