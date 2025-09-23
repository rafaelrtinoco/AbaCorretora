import styled from "styled-components";
import { theme } from "../../theme";

export const ProductsContainer = styled.section`
  padding: 5rem 0;
  background-color: ${theme.colors.lightGray};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 2fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`;

export const ProductCard = styled.div`
  background: ${theme.colors.white};
  border-radius: 12px;
  border: 2px solid #26a9e0 ;
  padding: 1.5rem;
  transition: all ${theme.transitions.default};

  h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: ${theme.colors.dark};
  }

  p {
    color: ${theme.colors.mediumGray};
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    padding: 10px 14px;
    border-radius: 5px;
    font-weight: 500;
    text-decoration: none;
    transition: all ${theme.transitions.default};

    
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.medium};
  }
`

// ==========================
// Products Carousel
// ==========================
export const ProductsCarouselViewport = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`;

export const ProductsCarouselTrack = styled.div`
  display: flex;
  gap: 1rem;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  -webkit-overflow-scrolling: touch;

  /* Oculta scrollbar em navegadores compatíveis */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar { display: none; }
`;

export const ProductSlide = styled.div`
  flex: 0 0 33%;
  scroll-snap-align: start;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-basis: 50%;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-basis: 90%;
  }
`;

export const CarouselControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1rem;
`;

export const CarouselButton = styled.button`
  background: ${theme.colors.white};
  color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: ${theme.transitions.default};

  &:hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`;
export const IconWrapper = styled.div`
  width: 200px;  
  margin-bottom: 1.5rem;
  display: flex; 
  align-items: center; /* Centraliza verticalmente */
  justify-content: center; /* Centraliza horizontalmente */

  

  img { 
    border-radius: 10px;
    max-width: 100%; 
    max-height: 100%;
    object-fit: contain; 
  }
`;

export const HeroContainer = styled.section`
  background: ${theme.colors.white};
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
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    align-items: center;
  }
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
  max-width: 600px; 
  width: 100%; 
  height: auto; 
  display: block; 
  margin: 0 auto; 
  
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    margin: 1rem auto 0; 
    max-width: 440px;
  }
`;


export const ButtonMain = styled.button`
color:#e4e8eb;
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
`

export const HeroDivider = styled.div`
  position: relative;
  height: 60px;
  background: linear-gradient(to bottom, ${theme.colors.white} 0%, ${theme.colors.white} 40%, ${theme.colors.lightGray} 41%, ${theme.colors.lightGray} 100%);
  clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 100%);

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 40px;
    clip-path: polygon(0 0, 100% 25%, 100% 100%, 0 100%);
  }
`;

// ==========================
// Value Proposition Section
// ==========================
export const ValuePropsSection = styled.section`
  background: ${theme.colors.white};
  padding: 4rem 0;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`;

export const ValueGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`;

export const ValueCard = styled.div`
  background: ${theme.colors.lightGray};
  border: 1px solid ${theme.colors.border || '#e5e7eb'};
  border-radius: 12px;
  padding: 1.25rem;
  transition: ${theme.transitions.default};
  display: flex;
  gap: 1rem;
  align-items: flex-start;

  h4 {
    color: ${theme.colors.dark};
    margin: 0 0 0.25rem;
    font-size: 1.1rem;
  }

  p {
    color: ${theme.colors.mediumGray};
    margin: 0;
    line-height: 1.5;
    font-size: 0.95rem;
  }

  &:hover {
    background: ${theme.colors.white};
    box-shadow: ${theme.shadows.small};
  }
`;

// ==========================
// How It Works Section
// ==========================
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
  border: 1px solid ${theme.colors.border || '#e5e7eb'};
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

  h4 { margin: 0 0 0.5rem; color: ${theme.colors.dark}; }
  p { margin: 0; color: ${theme.colors.mediumGray}; }
`;

// ==========================
// Stats Bar
// ==========================
export const StatsBar = styled.section`
  background: ${theme.colors.secundary};
  color: ${theme.colors.white};
  padding: 2rem 0;
`;

export const StatsGrid = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  text-align: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr 1fr;
    padding: 0 1rem;
  }
`;

export const StatItem = styled.div`
  strong { font-size: 1.5rem; display: block; }
  span { opacity: 0.9; font-size: 0.95rem; }
`;

// ==========================
// CTA Banner
// ==========================
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

  a, button {
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
    border: none;
    padding: 12px 16px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
  }
`;

// ==========================
// Additional Services (Convênios & Consórcios)
// ==========================
export const ExtraServices = styled.section`
  background: ${theme.colors.white};
  padding: 4rem 0;
`;

export const ExtraGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`;

export const ExtraCard = styled.div`
  background: ${theme.colors.lightGray};
  border: 1px solid ${theme.colors.border || '#e5e7eb'};
  border-radius: 12px;
  padding: 1.5rem;

  h3 { margin: 0 0 0.5rem; color: ${theme.colors.dark}; }
  p { margin: 0 0 1rem; color: ${theme.colors.mediumGray}; }
  ul { margin: 0; padding-left: 1rem; }
  li { color: ${theme.colors.mediumGray}; margin: 0.25rem 0; }
`;
