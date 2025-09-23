import styled, { keyframes } from 'styled-components';
import { theme } from '../../theme';

export const PartnersContainer = styled.section`
  padding: 5rem 0;
  background-color: ${theme.colors.lightGray};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`;

// Marquee animation to scroll logos to the left
const scrollLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

// Visible window for the marquee
export const Marquee = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  padding: 0 2rem;
`;

// Track that actually moves
export const MarqueeTrack = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  flex-wrap: nowrap;
  width: max-content;
  animation: ${scrollLeft} 20s linear infinite;

  // Pause on hover (desktop)
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      animation-play-state: paused;
    }
  }
`;

export const PartnerLogo = styled.div`
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all ${theme.transitions.default};
  flex: 0 0 auto;
  min-width: 160px;
  
  img {
    max-width: 100%;
    height: auto;
    max-height: 100px;
    object-fit: contain;
  }
  
  &:hover {
    filter: grayscale(0%);
    opacity: 1;
    transform: scale(1.1);
  }
`;