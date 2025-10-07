import styled from "styled-components";
import { theme } from "../../theme";

export const PageSection = styled.section`
  padding: 3rem 0;
  background: ${theme.colors.white};
  /* margin-top: 60px; */

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
  border: 1px solid ${theme.colors.border || '#e5e7eb'};
  border-radius: 12px;
  padding: 1.25rem;

  h3 { margin: 0 0 .5rem; color: ${theme.colors.dark}; }
  p { margin: 0 0 1rem; color: ${theme.colors.mediumGray}; }
  ul { margin: 0; padding-left: 1.2rem; }
  li { color: ${theme.colors.mediumGray}; margin: .25rem 0; }
`;

export const Tip = styled.div`
  background: ${theme.colors.white};
  border-left: 4px solid ${theme.colors.primary};
  padding: 1rem;
  border-radius: 8px;
  color: ${theme.colors.mediumGray};
  margin-top: 1rem;
`;

export const BenefitsContainer = styled.section`
  padding: 3.5rem 0;
  background-color: ${theme.colors.lightGray};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 2.5rem 0;
  }
`;

export const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`;

export const BenefitCard = styled.div`
  background: ${theme.colors.white};
  border-radius: 10px;
  padding: 1.25rem;
  text-align: center;
  transition: all ${theme.transitions.default};
  border: 1px solid ${theme.colors.border || '#e5e7eb'};
  
  .icon-container {
    width: 48px;
    height: 48px;
    margin: 0 auto 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 200, 83, 0.1);
    border-radius: 50%;
    
    svg {
      width: 22px;
      height: 22px;
      fill: ${theme.colors.primary};
    }
  }
  
  h3 {
    font-size: 1.05rem;
    margin-bottom: 0.5rem;
    color: ${theme.colors.dark};
  }
  
  p {
    color: ${theme.colors.mediumGray};
    font-size: 0.9rem;
    line-height: 1.5;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.small};
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