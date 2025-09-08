import styled from 'styled-components';
import { theme } from '../../theme';

export const HeroContainer = styled.section`
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
  padding: 8rem 0 4rem;
  position: relative;
  overflow: hidden;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 6rem 0 3rem;
  }
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`;

export const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.colors.secundary};
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  span {
    color: ${theme.colors.primary};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: ${theme.colors.mediumGray};
  max-width: 700px;
  margin: 0 auto 3rem;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

export const InsuranceCards = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const InsuranceCard = styled.div`
  background: ${theme.colors.white};
  border-radius: 8px;
  padding: 1.5rem 1rem;
  box-shadow: ${theme.shadows.small};
  transition: all ${theme.transitions.default};
  cursor: pointer;
  
  svg {
    width: 40px;
    height: 40px;
    margin-bottom: 1rem;
    fill: ${theme.colors.primary};
  }
  
  p {
    font-weight: 600;
    font-size: 0.9rem;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.medium};
  }
`;