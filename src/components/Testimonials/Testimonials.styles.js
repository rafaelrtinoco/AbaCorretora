import styled from 'styled-components';
import { theme } from '../../theme';

export const TestimonialsContainer = styled.section`
  background-color: ${theme.colors.dark};
  padding: 5rem 0;
  color: ${theme.colors.white};
  
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
  
  .quote {
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 4rem;
    font-weight: bold;
    color: #26a9e0;
  }
  
  .testimonial {
    font-size: 1.1rem;
    line-height: 1.6;
    margin: 1rem 0 2rem;
    position: relative;
    z-index: 1;
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