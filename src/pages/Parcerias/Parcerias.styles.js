import styled, { keyframes } from "styled-components";
import { theme } from "../../theme";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ── HERO DA PÁGINA ── */
export const PageHero = styled.section`
  background: ${theme.colors.white};
  padding: 10rem 0 4rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 7rem 0 3rem;
  }
`;

export const PageHeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  animation: ${fadeUp} 0.5s ease both;
`;

export const PageHeroTitle = styled.h1`
  color: ${theme.colors.secundary};
  font-size: 2.6rem;
  font-weight: 800;
  margin: 0 0 1rem;
  line-height: 1.2;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

export const PageHeroSubtitle = styled.p`
  color: ${theme.colors.mediumGray};
  font-size: 1.1rem;
  line-height: 1.7;
  margin: 0;
`;

/* ── LISTA DE PARCEIROS ── */
export const PartnersListSection = styled.div`
  background: ${theme.colors.lightGray};
`;

export const PartnerBlock = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 3rem 1rem;
  }
`;

export const PartnerBlockInner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 3rem;
  align-items: center;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.border || "#e5e7eb"};
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 1.5rem;
  }
`;

export const PartnerBannerImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  display: block;
`;

export const PartnerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PartnerBadge = styled.span`
  display: inline-block;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.35rem 0.9rem;
  border-radius: 20px;
  width: fit-content;
`;

export const PartnerTitle = styled.h2`
  color: ${theme.colors.secundary};
  font-size: 1.7rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.25;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.4rem;
  }
`;

export const PartnerDescription = styled.p`
  color: ${theme.colors.mediumGray};
  font-size: 1rem;
  line-height: 1.75;
  margin: 0;
`;

/* ── FEATURES ── */
export const PartnerFeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-top: 1.5rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const PartnerFeatureCard = styled.div`
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.border || "#e5e7eb"};
  border-radius: 12px;
  padding: 1.25rem;
  transition: ${theme.transitions.default};

  h4 {
    color: ${theme.colors.dark};
    margin: 0.4rem 0 0.35rem;
    font-size: 1rem;
  }

  p {
    color: ${theme.colors.mediumGray};
    font-size: 0.9rem;
    line-height: 1.6;
    margin: 0;
  }

  &:hover {
    box-shadow: ${theme.shadows.small};
    transform: translateY(-2px);
  }
`;

export const PartnerFeatureIcon = styled.div`
  font-size: 1.8rem;
  line-height: 1;
`;

/* ── COBERTURAS ── */
export const CoverageSection = styled.div`
  margin-top: 3rem;
`;

export const CoverageGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem 1.5rem;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const CoverageItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: ${theme.colors.dark};
  font-size: 0.95rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid ${theme.colors.border || "#e5e7eb"};

  span {
    color: ${theme.colors.primary};
    font-weight: 700;
    font-size: 1rem;
    flex-shrink: 0;
  }
`;

/* ── CTA DO PARCEIRO ── */
export const PartnerCTABar = styled.div`
  background: ${theme.colors.primary};
  border-radius: 12px;
  margin-top: 3rem;
  padding: 2rem 2.5rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 1.5rem;
  }
`;

export const PartnerCTAInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  color: ${theme.colors.white};

  h3 {
    margin: 0 0 0.25rem;
    font-size: 1.2rem;
  }

  p {
    margin: 0;
    opacity: 0.9;
    font-size: 0.95rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const PartnerCTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-shrink: 0;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    width: 100%;

    a {
      text-align: center;
    }
  }
`;

/* ── DIVISOR ENTRE PARCEIROS ── */
export const PartnerDivider = styled.hr`
  border: none;
  border-top: 2px dashed ${theme.colors.border || "#e5e7eb"};
  max-width: 1100px;
  margin: 0 auto;
`;