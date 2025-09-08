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

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            <NavLink href="#products">Produtos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#benefits">Benefícios</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#testimonials">Depoimentos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#faq">FAQ</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contact">Contato</NavLink>
          </NavItem>
        </NavMenu>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
