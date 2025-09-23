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
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`;

export const TwoCols = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.article`
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

