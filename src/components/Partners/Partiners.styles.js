import styled from 'styled-components';
import { theme } from '../../theme';

export const PartnersContainer = styled.section`
  padding: 5rem 0;
  background-color: ${theme.colors.white};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`;

export const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 3rem;
  align-items: center;
  justify-items: center;
  max-width: 1000px;
  margin: 3rem auto 0;
  padding: 0 2rem;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`;

export const PartnerLogo = styled.div`
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all ${theme.transitions.default};
  
  img {
    max-width: 100%;
    height: auto;
    max-height: 60px;
    object-fit: contain;
  }
  
  &:hover {
    filter: grayscale(0%);
    opacity: 1;
    transform: scale(1.1);
  }
`;