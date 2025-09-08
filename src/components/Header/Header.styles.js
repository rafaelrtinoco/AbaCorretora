import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${({ $isScrolled, theme }) => 
    $isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  box-shadow: ${({ $isScrolled, theme }) => 
    $isScrolled ? theme.shadows.small : 'none'};
  transition: all 0.1s ease-in-out;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: start;
  gap: 2rem;
  align-items: center;
  padding: 1.5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1rem;
  }
`;

export const NavLogo = styled.a`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.dark};
  text-decoration: none;
  
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    position: fixed;
    top: 70px;
    left: ${({ $isOpen }) => $isOpen ? '0' : '-100%'};
    width: 100%;
    height: calc(100vh - 70px);
    background-color: ${({ theme }) => theme.colors.white};
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    transition: left 0.3s ease-in-out;
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

export const NavItem = styled.li`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    text-align: center;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 1rem;
  font-family: inherit;
  text-decoration: none;
  font-weight: 600;
  transition: color ${({ theme }) => theme.transitions.default};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
    padding: 1rem;
    width: 100%;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
`;