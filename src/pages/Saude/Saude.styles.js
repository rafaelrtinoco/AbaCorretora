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

  .image-container {
    position: relative;
    height: 200px;
    overflow: hidden;

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
    margin: 1.5rem 1rem 1rem;
    line-height: 1.4;
  }

  .read-more {
    display: inline-block;
    margin: 0 1rem 1.5rem;
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
  aspect-ratio: 16 / 9; /* -> Força um formato de paisagem (16:9). Ajuste se precisar. */
  object-fit: cover; /* -> Garante que a imagem cubra a área sem distorcer */
  border-radius: 8px; /* -> Opcional: um leve arredondamento nas bordas */

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin: 1rem auto 0;
    max-width: 440px;
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

export const Tip = styled.div`
  background: ${theme.colors.white};
  border-left: 4px solid ${theme.colors.primary};
  padding: 1rem;
  border-radius: 8px;
  color: ${theme.colors.mediumGray};
  margin-top: 1rem;
`;

// --- NOVO Componente para o título da seção ---
export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${theme.colors.secundary};
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

// --- NOVO Componente para o subtitulo da seção ---
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

// --- SEU BlogContainer e BlogGrid (com pequenos ajustes) ---
export const BlogContainer = styled.section`
  padding: 3rem 0;
  background-color: ${theme.colors.white};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 3rem 0;
    margin-top: 80px;
  }
`;

export const HealthPlanCard = styled.article`
  /* Estilos do BlogCard como base, com ajustes para se parecer mais com o ProductCard */
  border-radius: 12px;
  overflow: hidden;
  transition: all ${theme.transitions.default};
  border: 1px solid ${theme.colors.border || "#e5e7eb"}; /* Adiciona borda do ProductCard */
  background: ${theme.colors.lightGray}; /* Cor de fundo do ProductCard */
  padding-bottom: 0; /* Remove padding-bottom do BlogCard original para o botão */

  display: flex; /* Transforma em flex container */
  flex-direction: column; /* Para empilhar o conteúdo e posicionar o botão no final */
  height: 100%; /* Garante que todos os cards tenham a mesma altura no grid */

  .image-container {
    position: relative;
    height: 220px; /* Altura da imagem do card. Pode ajustar. */
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

  /* NOVO: Estilo para o botão no final do card */
  .card-button-wrapper {
    margin-top: auto; /* Empurra o wrapper do botão para o final */
    padding: 1rem 1.25rem 1.25rem; /* Padding na base do card para o botão */
  }

  /* REMOVIDO: .read-more, pois será substituído pelo botão */

  &:hover {
    box-shadow: ${theme.shadows.medium};

    img {
      transform: scale(1.05);
    }
  }
`;

// --- SEU ProductButton (reutilizado) ---
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
