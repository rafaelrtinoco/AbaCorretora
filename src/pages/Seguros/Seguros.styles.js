import styled from "styled-components";
import { theme } from "../../theme";

export const PageSection = styled.section`
  padding: 5rem 0;
  background: ${theme.colors.white};
  margin-top: 90px;

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
