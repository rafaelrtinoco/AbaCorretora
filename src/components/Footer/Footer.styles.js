import styled from 'styled-components';
import { theme } from '../../theme';

export const FooterContainer = styled.footer`
  background-color: ${theme.colors.dark};
  color: ${theme.colors.white};
  padding: 4rem 0 0;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 3rem;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const FooterColumn = styled.div`
  .app-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1.5rem 0;
  }
  
  .app-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    color: ${theme.colors.white};
    text-decoration: none;
    transition: all ${theme.transitions.default};
    
    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
    
    svg {
      font-size: 1.2rem;
    }
  }
`;

export const FooterTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: ${theme.colors.primary};
`;

export const FooterLink = styled.a`
  display: block;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1rem;
  text-decoration: none;
  transition: all ${theme.transitions.default};
  
  &:hover {
    color: ${theme.colors.primary};
    padding-left: 5px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  a {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.2rem;
    transition: all ${theme.transitions.default};
    
    &:hover {
      color: ${theme.colors.primary};
      transform: translateY(-3px);
    }
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  text-align: center;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  
  p {
    margin: 0.5rem 0;
  }
`;

export const FooterImage = styled.img`
  width: 50%; 
  height: auto; 
  margin-top: -20px;
  margin-bottom: -30px;
`;