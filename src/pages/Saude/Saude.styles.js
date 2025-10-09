import styled from "styled-components";
import { theme } from "../../theme";

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 3rem auto 0;
  padding: 0 2rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`;

export const BlogCard = styled.article`
  border-radius: 12px;
  overflow: hidden;
  transition: all ${theme.transitions.default};
  border: 1px solid ${theme.colors.border || "#e5e7eb"}; 
  background: ${theme.colors.white}; 
  display: flex; 
  flex-direction: column; 
  height: 100%; 
  padding-bottom: 0; 

  .image-container {
    position: relative;
    height: 200px;
    overflow: hidden;
    border-bottom: 1px solid ${theme.colors.border || "#e5e7eb"}; 

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform ${theme.transitions.default};
    }

    .category {
      position: absolute;
      top: 1rem;
      left: 1rem;
      background: ${theme.colors.primary};
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 500;
    }
  }

  h3 {
    font-size: 1.25rem;
    margin: 1.5rem 1.25rem 1rem; 
    line-height: 1.4;
    color: ${theme.colors.dark};
  }

  p {
    margin: 0 1.25rem 1.5rem; 
    color: ${theme.colors.mediumGray};
    flex-grow: 1; 
  }

  .read-more {
    display: inline-block;
    margin: 0 1.25rem 1.5rem; 
    color: ${theme.colors.primary};
    font-weight: 500;
    text-decoration: none;
    transition: all ${theme.transitions.default};

    &:hover {
      color: ${theme.colors.dark};
    }
  }

  &:hover {
    box-shadow: ${theme.shadows.medium};

    img {
      transform: scale(1.05);
    }
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
  text-align:center;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;

export const HeroSubtitle = styled.p`
  color: ${theme.colors.mediumGray};
  margin: 0;
  font-size: 1.125rem;
  max-width: 52ch;

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 100%;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  max-width: 1200px;
  max-height: 500px;
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

export const Tip = styled.div`
  background: ${theme.colors.white};
  border-left: 4px solid ${theme.colors.primary};
  padding: 1rem;
  border-radius: 8px;
  color: ${theme.colors.mediumGray};
  margin-top: 1rem;
  margin: 1rem 1.25rem 1.25rem; 
`;


export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${theme.colors.secundary};
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2rem;
    padding: 0 1.2rem;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: 1.25rem;
  color: ${theme.colors.mediumGray};
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.6;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`;


export const BlogContainer = styled.section`
  padding: 3rem 0;
  background-color: ${theme.colors.white};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 3rem 0;
   
  }
`;

export const HealthPlanCard = styled.article`
  border-radius: 12px;
  overflow: hidden;
  transition: all ${theme.transitions.default};
  border: 1px solid ${theme.colors.border || "#e5e7eb"};
  background: ${theme.colors.lightGray};
  padding-bottom: 0;

  display: flex;
  flex-direction: column;
  height: 100%;

  .image-container {
    position: relative;
    height: 220px;
    overflow: hidden;
    border-bottom: 1px solid ${theme.colors.border || "#e5e7eb"}; /* Linha sutil abaixo da imagem */

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform ${theme.transitions.default};
    }

    /* REMOVIDO: .category, pois não se encaixa aqui */
  }

  h3 {
    font-size: 1.5rem; /* Um pouco maior que o BlogCard, mais próximo do ProductCard */
    margin: 1.25rem 1.25rem 0.75rem; /* Ajusta as margens internas do título */
    line-height: 1.4;
    color: ${theme.colors.dark};
  }

  p {
    margin: 0 1.25rem 1rem; /* Margens para o parágrafo */
    color: ${theme.colors.mediumGray};
    flex-grow: 1; /* Permite que o parágrafo ocupe o espaço restante */
  }

  ul {
    margin: 0 1.25rem 1rem; /* Margens para a lista */
    padding-left: 1.5rem;
  }
  li {
    color: ${theme.colors.mediumGray};
    margin: 0.25rem 0;
  }

  .card-button-wrapper {
    margin-top: auto;
    padding: 1rem 1.25rem 1.25rem;
  }

  &:hover {
    box-shadow: ${theme.shadows.medium};

    img {
      transform: scale(1.05);
    }
  }
`;


export const ProductButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 0.75rem 1rem;
  margin-top: auto;

  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};

  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${theme.colors.primaryDark};
  }
`;

export const CTABanner = styled.section`
  background: ${theme.colors.primary}; /* Cor de destaque */
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