import styled from 'styled-components';
import { theme } from '../../theme';

export const BenefitsContainer = styled.section`
  padding: 5rem 0;
  background-color: ${theme.colors.lightGray};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`;

export const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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

export const BenefitCard = styled.div`
  background: ${theme.colors.white};
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: all ${theme.transitions.default};
  
  .icon-container {
    width: 60px;
    height: 60px;
    margin: 0 auto 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 200, 83, 0.1);
    border-radius: 50%;
    
    svg {
      width: 30px;
      height: 30px;
      fill: ${theme.colors.primary};
    }
  }
  
  h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: ${theme.colors.dark};
  }
  
  p {
    color: ${theme.colors.mediumGray};
    font-size: 0.95rem;
    line-height: 1.6;
  }
  
  &:hover {
    transform: scale(1.05);
    box-shadow: ${theme.shadows.medium};
  }
`;