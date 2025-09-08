import styled from 'styled-components';
import { theme } from '../../theme';

export const FAQContainer = styled.section`
  padding: 5rem 0;
  background-color: ${theme.colors.lightGray};
  
  .faq-list {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 3rem 0;
    
    .faq-list {
      padding: 0 1rem;
    }
  }
`;

export const FAQItem = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  transition: all ${theme.transitions.default};
`;

export const Question = styled.div`
  padding: 1.5rem 0;
  font-weight: 600;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  
  svg {
    color: ${theme.colors.primary};
    font-size: 1.2rem;
    transition: transform ${theme.transitions.default};
  }
  
  &:hover {
    color: ${theme.colors.primary};
  }
`;

export const Answer = styled.div`
  max-height: ${({ isOpen }) => isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  padding: ${({ isOpen }) => isOpen ? '0 0 1.5rem' : '0'};
  opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
  line-height: 1.6;
  color: ${theme.colors.mediumGray};
`;