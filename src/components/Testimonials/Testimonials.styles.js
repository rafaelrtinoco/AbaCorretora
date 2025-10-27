import styled from 'styled-components';
import { theme } from '../../theme';

export const TestimonialsContainer = styled.section`
  background-color: ${theme.colors.dark};
  padding: 5rem 0;
  color: ${theme.colors.white};
  overflow: hidden; /* Adicionado para conter o carrossel */
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`;

export const TestimonialContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const TestimonialText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-top: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
`;

export const TestimonialCard = styled.div`
  background: ${theme.colors.lightGray};
  border-radius: 12px;
  padding: 2.5rem;
  position: relative;
  color: ${theme.colors.dark};
  
  /* Ajustes para layout flexível e altura consistente */
  height: 100%; 
  display: flex;
  flex-direction: column;
  
  .quote {
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 4rem;
    font-weight: bold;
    color: #26a9e0; /* Cor azul que você definiu */
  }
  
  .testimonial {
    font-size: 1.1rem;
    line-height: 1.6;
    margin: 1rem 0 2rem;
    position: relative;
    z-index: 1;
    flex-grow: 1; /* Adicionado para empurrar o 'author' para baixo */
  }
  
  .author {
    display: flex;
    align-items: center;
    gap: 1rem;
    
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }
    
    h4 {
      margin: 0;
      font-size: 1.1rem;
    }
    
    span {
      font-size: 0.9rem;
      color: ${theme.colors.mediumGray};
    }
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 2rem 1.5rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;


// --- NOVOS ESTILOS PARA O CARROSSEL ---
// (Adicionados abaixo)

export const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const TestimonialCarouselViewport = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

export const TestimonialCarouselTrack = styled.div`
  display: flex;
  gap: 1rem; // Define o espaço entre os slides
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  -webkit-overflow-scrolling: touch;

  /* Esconde a barra de rolagem */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TestimonialSlide = styled.div`
  flex: 0 0 100%; // Faz cada slide ocupar 100% da viewport
  scroll-snap-align: start;
  min-width: 100%;
`;

export const TestimonialCarouselControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end; // Alinha as setas à direita
  gap: 0.75rem;
  margin-top: 1rem;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    justify-content: center; // Centraliza as setas no mobile
  }
`;

export const TestimonialCarouselButton = styled.button`
  /* Estilo de botão "Ghost" para combinar com o fundo escuro */
  background: transparent;
  color: ${theme.colors.white};
  border: 1px solid ${theme.colors.white};
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: ${theme.transitions.default};
  font-size: 1rem;

  &:hover {
    background: ${theme.colors.white};
    color: ${theme.colors.dark}; /* Inverte as cores no hover */
  }
`;