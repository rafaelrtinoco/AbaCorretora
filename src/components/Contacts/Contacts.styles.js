import styled from 'styled-components';
import { theme } from '../../theme';

export const ContactContainer = styled.section`
  padding: 5rem 0;
  background-color: ${theme.colors.white};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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

export const ContactCard = styled.div`
  text-align: center;
  padding: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  transition: all ${theme.transitions.default};
  
  .icon {
    width: 60px;
    height: 60px;
    margin: 0 auto 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 200, 83, 0.1);
    border-radius: 50%;
    color: ${theme.colors.primary};
    font-size: 1.5rem;
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
    margin-bottom: 1rem;
  }
  
  a {
    display: inline-block;
    margin-top: 1rem;
    color: ${theme.colors.primary};
    font-weight: 500;
    text-decoration: none;
    transition: all ${theme.transitions.default};
    
    &:hover {
      color: ${theme.colors.dark};
      text-decoration: underline;
    }
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.small};
    border-color: ${theme.colors.primary};
  }
`;