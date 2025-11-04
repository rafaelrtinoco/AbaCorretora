import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../theme";

export const CTASection = styled.section`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 3rem 0;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 2.5rem 0;
  }
`;

export const CTAInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  h3 {
    font-size: 1.75rem;
    margin: 0 0 0.5rem 0;
  }

  p {
    font-size: 1rem;
    margin: 0;
    opacity: 0.9;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;

    h3 {
      font-size: 1.5rem;
    }
  }
`;

export const CTAText = styled.div`
  flex-grow: 1;
`;

export const CTAButtonWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
`;

export const CTAButton = styled(Link)`
  background: ${theme.colors.secundary};
  color: ${theme.colors.white};
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: ${theme.colors.primaryDark};
    transform: scale(1.05);
  }
`;
