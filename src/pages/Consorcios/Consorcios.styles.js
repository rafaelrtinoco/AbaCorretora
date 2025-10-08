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
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`;

export const TwoCols = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const CardImage = styled.img`
   width: 100%;
  height: auto;
  aspect-ratio: 16 / 9; 
  object-fit: cover; 
  border-radius: 8px; 
  margin-bottom: 1.25rem; 
  background-color: #e0e0e0; 
`;

export const Card = styled.article`
  background: ${theme.colors.lightGray};
  border: 1px solid ${theme.colors.border || '#e5e7eb'};
  border-radius: 12px;
  padding: 1.25rem;
  height: 100%;
  
  /* Se você quiser que o ProductButton esteja sempre no final do card, adicione isso: */
  display: flex;
  flex-direction: column;

  h3 { margin: 0 0 .5rem; color: ${theme.colors.dark}; }
  p { margin: 0 0 1rem; color: ${theme.colors.mediumGray}; }
  ul { margin: 0; padding-left: 1.2rem; }
  li { color: ${theme.colors.mediumGray}; margin: .25rem 0; }

  /* Se o ProductButton já existe e tem margin-top: auto, ele funcionará aqui. */
  /* Caso contrário, você pode adicionar um estilo aqui para o último filho: */
  /* & > *:last-child { margin-top: auto; } */
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
  max-height: 500px;
  aspect-ratio: 16 / 9; 
  object-fit: cover; 
  border-radius: 8px; 

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
  margin-top: auto; /* IMPORTANTE: Empurra o botão para o final do card */

  background-color: ${theme.colors.primary}; /* Cor primária do seu tema */
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
