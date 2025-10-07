import styled from 'styled-components';
import { theme } from '../../theme';

export const BlogContainer = styled.section`
  padding: 5rem 0;
  background-color: ${theme.colors.white};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`;

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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

export const BlogCard = styled.article`
  border-radius: 12px;
  overflow: hidden;
  transition: all ${theme.transitions.default};
  
  .image-container {
    position: relative;
    height: 200px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform ${theme.transitions.default};
    }
    
    .category {
      position: absolute;
      top: 1rem;
      left: 1rem;
      background: ${theme.colors.primary};
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 500;
    }
  }
  
  h3 {
    font-size: 1.25rem;
    margin: 1.5rem 1rem 1rem;
    line-height: 1.4;
  }
  
  .read-more {
    display: inline-block;
    margin: 0 1rem 1.5rem;
    color: ${theme.colors.primary};
    font-weight: 500;
    text-decoration: none;
    transition: all ${theme.transitions.default};
    
    &:hover {
      color: ${theme.colors.dark};
    }
  }
  
  &:hover {
    box-shadow: ${theme.shadows.medium};
    
    img {
      transform: scale(1.05);
    }
  }
`;