import React, { useState, useEffect } from "react";
import {
  HeaderContainer,
  Nav,
  NavLogo,
  NavMenu,
  NavItem,
  NavLink,
  MobileMenuButton,
} from "./Header.styles";
import Logo from "../../assets/icons/logo.png";
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCloseMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeaderContainer $isScrolled={isScrolled}>
      <Nav>
        <NavLogo href="/">
          <img
            src={Logo}
            alt="Logo"
            width={150} 
            height="auto"
          />
        </NavLogo>

        <MobileMenuButton
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          ☰
        </MobileMenuButton>

        <NavMenu $isOpen={isMobileMenuOpen}>
          <NavItem>
            <Link className="navLink" to="/" onClick={handleCloseMenu}>Home</Link>
          </NavItem>
          <NavItem>
            <Link className="navLink" to="/seguros" onClick={handleCloseMenu}>Seguros</Link>
          </NavItem>
          <NavItem>
            <Link className="navLink" to="/consorcios" onClick={handleCloseMenu}>Consórcios</Link>
          </NavItem>
          <NavItem>
            <Link className="navLink" to="/blog" onClick={handleCloseMenu}>Blog</Link>
          </NavItem>
          <NavItem>
            <Link className="navLink" to="/contato" onClick={handleCloseMenu}>Contato</Link>
          </NavItem>
        </NavMenu>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
