import styled from "styled-components";
import { theme } from "../../theme";

export const PageSection = styled.section`
  padding: 4rem 0;
  background: ${theme.colors.white};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`;

export const ContentWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
  background-color: ${theme.colors.lightGray};
`;

export const ProductCard = styled.article`
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.border || "#e5e7eb"};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  box-shadow: ${theme.shadows.small};
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${theme.shadows.medium};
  }

  h3 {
    margin: 1.25rem 1.25rem 0.5rem;
    color: ${theme.colors.dark};
    font-size: 1.5rem;
  }

  p {
    margin: 0 1.25rem 1.5rem;
    color: ${theme.colors.mediumGray};
    flex-grow: 1; /* Empurra o botão para baixo */
  }
`;

export const ProductButton = styled.button`
  display: block;
  width: calc(100% - 2.5rem);
  padding: 0.75rem 1rem;
  margin: 0 1.25rem 1.25rem;

  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: ${theme.colors.primaryDark};
  }
`;

export const HowItWorksSection = styled.section`
  padding: 4rem 0;
  background: ${theme.colors.lightGray};
`;

export const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const StepItem = styled.div`
  background: ${theme.colors.white};
  border-radius: 12px;
  padding: 1.5rem;
  border-top: 4px solid ${theme.colors.primary};
  box-shadow: ${theme.shadows.small};

  h4 {
    margin: 0 0 0.5rem;
    color: ${theme.colors.dark};
  }
  p {
    margin: 0;
    color: ${theme.colors.mediumGray};
  }
`;

export const BenefitsSection = styled.section`
  padding: 4rem 0;
  background: ${theme.colors.white};
`;

export const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const BenefitItem = styled.div`
  text-align: center;
  h4 {
    margin: 1rem 0 0.5rem;
  }
`;

export const BenefitIcon = styled.div`
  font-size: 3rem;
  color: ${theme.colors.primary};
`;

export const CTABanner = styled.section`
  background: ${theme.colors.primary}; /* Cor de destaque */
  color: ${theme.colors.white};
  padding: 3rem 0;
`;

export const CTAInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const CTAButtons = styled.div`
  display: flex;
  flex-shrink: 0;
`;

export const ButtonMain = styled.button`
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

export const HeroContainer = styled.section`
  background: ${theme.colors.lightGray};
  padding: 7rem 0 0 0;
  position: relative;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 6rem 0 0;
  }
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;
export const HeroRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  padding-bottom: 40px;
  text-align: center;
`;
export const HeroText = styled.div``;
export const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.colors.secundary};
  font-size: 2.25rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.2;
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;
export const HeroImage = styled.img`
  width: 100%;
  max-width: 1200px;
  border-radius: 8px;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.2);
`;
export const HeroDivider = styled.div`
  position: relative;
  background: linear-gradient(
    to bottom,
    ${theme.colors.white} 0%,
    ${theme.colors.white} 40%,
    ${theme.colors.lightGray} 41%,
    ${theme.colors.lightGray} 100%
  );
  clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 100%);
`;
