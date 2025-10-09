import styled, { css } from 'styled-components';
import { theme } from '../../theme';

export const ContactPageContainer = styled.section`
  padding: 5rem 2rem;
  background-color: ${theme.colors.white};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 3rem 1rem;
    margin-top: 60px;
  }
`;

export const IntroSection = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
`;

export const MainContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ContactChannels = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ChannelCard = styled.a`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid ${theme.colors.border};
  background: ${theme.colors.lightGray};
  color: ${theme.colors.dark};
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  svg {
    font-size: 2.5rem;
    color: ${theme.colors.primary};
    flex-shrink: 0;
  }

  h3 {
    margin: 0 0 0.25rem;
    font-size: 1.25rem;
  }

  p {
    margin: 0;
    color: ${theme.colors.mediumGray};
  }

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: ${theme.shadows.medium};
    border-color: ${theme.colors.primary};
  }

  // Estilo primário para o card de WhatsApp
  ${({ primary }) => primary && css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    border-color: ${theme.colors.primary};

    svg {
      color: ${theme.colors.white};
    }

    p {
      color: rgba(255, 255, 255, 0.9);
    }

    &:hover {
      background: ${theme.colors.primaryDark};
      border-color: ${theme.colors.primaryDark};
    }
  `}
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 450px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${theme.shadows.medium};

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    height: 300px;
    order: -1; /* Joga o mapa para cima no mobile */
  }
`;

export const BusinessInfoSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  max-width: 1200px;
  margin: 4rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid ${theme.colors.border};

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 1.5rem;
    color: ${theme.colors.secundary};
  }
  
  h4 {
    margin: 0 0 0.25rem;
    color: ${theme.colors.dark};
  }

  p {
    margin: 0;
    color: ${theme.colors.mediumGray};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;