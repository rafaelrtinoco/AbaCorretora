import styled from "styled-components";
import { theme } from "../../theme";

export const PageSection = styled.section`
  padding: 3rem 0;
  background: ${theme.colors.white};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 3rem 0;
    margin-top: 80px;
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

export const ProductsGrid = styled.div`
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

export const ProductCard = styled.article`
  background: ${theme.colors.lightGray};
  border: 1px solid ${theme.colors.border || "#e5e7eb"};
  border-radius: 12px;
  padding: 1.25rem;

  display: flex;
  flex-direction: column;
  height: 100%;

  h3 {
    margin: 0 0 0.5rem;
    color: ${theme.colors.dark};
  }
  p {
    margin: 0 0 1rem;
    color: ${theme.colors.mediumGray};
  }
  ul {
    margin: 0;
    padding-left: 1.2rem;
  }
  li {
    color: ${theme.colors.mediumGray};
    margin: 0.25rem 0;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9; /* Formato paisagem, mantém todas as imagens com a mesma proporção */
  object-fit: cover; /* Garante que a imagem preencha o espaço sem distorcer */
  border-radius: 8px; /* Bordas arredondadas para combinar com o card */
  margin-bottom: 1.25rem; /* Espaço entre a imagem e o título */
  background-color: #e0e0e0; /* Cor de fundo para o espaço vago */
`;

export const Tip = styled.div`
  background: ${theme.colors.white};
  border-left: 4px solid ${theme.colors.primary};
  padding: 1rem;
  border-radius: 8px;
  color: ${theme.colors.mediumGray};
  margin-top: 1rem;
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
  display: flex; /* -> Alterado de 'grid' para 'flex' */
  flex-direction: column; /* -> Adicionado para empilhar os itens verticalmente */
  align-items: flex-start; /* -> Garante que tudo fique alinhado à esquerda */
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
  max-height: 450px;
  aspect-ratio: 16 / 9; /* -> Força um formato de paisagem (16:9). Ajuste se precisar. */
  object-fit: cover; /* -> Garante que a imagem cubra a área sem distorcer */
  border-radius: 8px; /* -> Opcional: um leve arredondamento nas bordas */

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin: 1rem auto 0;
    max-width: 440px;
  }
`;

export const ButtonMain = styled.button`
  color: #e4e8eb;
  background-color: ${theme.colors.secundary};
  font-size: 1rem;
  border: none;
  padding: 12px 16px;
  border-radius: 5px;
  margin: 20px 0;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1rem;
    padding: 14px 18px;
  }
`;

export const HeroDivider = styled.div`
  position: relative;
  /* height: 60px; */
  background: linear-gradient(
    to bottom,
    ${theme.colors.white} 0%,
    ${theme.colors.white} 40%,
    ${theme.colors.lightGray} 41%,
    ${theme.colors.lightGray} 100%
  );
  clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 100%);

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 40px;
    clip-path: polygon(0 0, 100% 25%, 100% 100%, 0 100%);
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
    background-color: ${theme.colors
      .primaryDark}; /* Uma versão mais escura da cor primária */
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

export const CTABanner = styled.section`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 2.5rem 0;
`;

export const CTAInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 1rem;
  }
`;

export const CTAButtons = styled.div`
  display: flex;
  gap: 0.75rem;

  a,
  button {
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
    border: none;
    padding: 12px 16px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
  }
`;
