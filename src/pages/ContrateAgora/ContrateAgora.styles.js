import styled from "styled-components";
import { theme } from "../../theme";

// --- Seção de Estilos Reutilizados do Seguros.styles.js ---

export const PageSection = styled.section`
  padding: 3rem 0;
  background: ${theme.colors.white};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`;

export const ContentWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`;

export const HeroContainer = styled.section`
  background: ${theme.colors.lightGray};
  padding: 7rem 0 0;
  position: relative;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 6rem 0 0;
  }
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`;

export const HeroRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  margin-top: 2rem;
  padding-bottom: 40px;
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.colors.secundary};
  font-size: 2.25rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.2;
  text-align: center;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  max-width: 1200px;
  max-height: 600px;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.5);

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin: 1rem auto 0;
    max-width: 440px;
  }
`;

export const HeroDivider = styled.div`
  position: relative;
  background: linear-gradient(
    to bottom,
    ${theme.colors.white} 0%,
    ${theme.colors.white} 40%,
    ${theme.colors.lightGray} 41%,
    ${theme.colors.lightGray} 100%
  );
  clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 100%);

  @media (max-width: ${theme.breakpoints.mobile}) {
    clip-path: polygon(0 0, 100% 25%, 100% 100%, 0 100%);
  }
`;

export const HowItWorksSection = styled.section`
  background: ${theme.colors.lightGray};
  padding: 4rem 0;
`;

export const Steps = styled.ol`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  list-style: none;
  counter-reset: step;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`;

export const StepItem = styled.li`
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.border || "#e5e7eb"};
  border-radius: 12px;
  padding: 1.25rem;
  position: relative;

  &::before {
    counter-increment: step;
    content: counter(step);
    position: absolute;
    top: -12px;
    left: -12px;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
  }
  h4 {
    margin: 0 0 0.5rem;
    color: ${theme.colors.dark};
  }
  p {
    margin: 0;
    color: ${theme.colors.mediumGray};
  }
`;

export const FAQSection = styled.section`
  background: ${theme.colors.white};
  padding: 4rem 0;
`;

export const FAQItem = styled.div`
  background: ${theme.colors.lightGray};
  border-radius: 8px;
  padding: 1.25rem;
  margin-bottom: 1rem;
  border-left: 4px solid ${theme.colors.secundary};

  h4 {
    margin: 0 0 0.5rem;
    color: ${theme.colors.dark};
  }
  p {
    margin: 0;
    color: ${theme.colors.mediumGray};
  }
`;

export const CTABanner = styled.section`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 3rem 0;
`;

export const CTAInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const CTAButtons = styled.div`
  display: flex;
  flex-shrink: 0;
`;

export const ButtonMain = styled.button`
  background: ${theme.colors.secundary};
  color: ${theme.colors.white};
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: ${theme.colors.primaryDark};
    transform: scale(1.05);
  }
`;

// --- NOVOS ESTILOS PARA A PÁGINA DE SERVIÇOS ---

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-top: 2rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceCard = styled.article`
  /* Estilo baseado no seu ProductCard, mas simplificado como na imagem */
  background: ${theme.colors.white}; /* Fundo branco como na imagem */
  border: 1px solid ${theme.colors.border || "#e5e7eb"};
  border-radius: 12px;
  padding: 0; /* Padding será interno */
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  position: relative;
  overflow: hidden; /* Para o border-radius da imagem funcionar */

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 1.1rem; /* Título um pouco menor */
    margin: 1rem 1.25rem 0.5rem;
    color: ${theme.colors.dark};
    font-weight: 600;
    flex-grow: 1; /* Empurra o preço e botão para baixo */
  }
`;

export const ServiceImage = styled.img`
  /* Estilo do seu ProductImage, mas com altura fixa */
  width: 100%;
  height: 180px; /* Altura fixa para alinhar a grade */
  object-fit: cover;
  background-color: #e0e0e0;
`;

export const ServiceTag = styled.span`
  /* Estilo da tag "NOVO" na imagem */
  position: absolute;
  top: 1rem;
  left: 1.25rem;
  background: ${theme.colors.secundary}; /* Cor de destaque */
  color: ${theme.colors.white};
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: bold;
  z-index: 2;
`;

export const ServicePrice = styled.p`
  /* Estilo do preço na imagem */
  font-size: 1.25rem;
  font-weight: bold;
  color: ${theme.colors.dark};
  margin: 0.5rem 1.25rem 1rem;
  line-height: 1;
`;

export const ServiceButton = styled.a`
  /* Estilo do seu ProductButton, mas como <a> e com margens */
  display: flex;
  align-items: center;
  justify-content: center;

  width: calc(100% - 2.5rem); /* 1.25rem de margem de cada lado */
  margin: 0 1.25rem 1.25rem; /* Margens */

  padding: 0.75rem 1rem;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};

  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: ${theme.colors.primaryDark};
  }
`;