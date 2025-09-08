import React from 'react';
import { FooterContainer, FooterGrid, FooterColumn, FooterTitle, FooterLink, FooterBottom, SocialIcons } from './Footer.styles';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaGooglePlay, FaAppStore } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <FooterColumn>
          <FooterTitle>Serviços</FooterTitle>
          <FooterLink href="#">Seguro Auto</FooterLink>
          <FooterLink href="#">Seguro Residencial</FooterLink>
          <FooterLink href="#">Seguro Saúde</FooterLink>
          <FooterLink href="#">Seguro de Vida</FooterLink>
          <FooterLink href="#">Seguro Viagem</FooterLink>
          <FooterLink href="#">Seguro Empresarial</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Empresa</FooterTitle>
          <FooterLink href="#">Sobre Nós</FooterLink>
          <FooterLink href="#">Trabalhe Conosco</FooterLink>
          <FooterLink href="#">Notícias</FooterLink>
          <FooterLink href="#">Blog</FooterLink>
          <FooterLink href="#">Contato</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Transparência</FooterTitle>
          <FooterLink href="#">Termos de Uso</FooterLink>
          <FooterLink href="#">Política de Privacidade</FooterLink>
          <FooterLink href="#">Regulamentos</FooterLink>
          <FooterLink href="#">Ouvidoria</FooterLink>
          <FooterLink href="#">Dúvidas Frequentes</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Baixe nosso App</FooterTitle>
          <div className="app-buttons">
            <a href="#" className="app-button">
              <FaGooglePlay /> Google Play
            </a>
            <a href="#" className="app-button">
              <FaAppStore /> App Store
            </a>
          </div>
          
          <SocialIcons>
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
          </SocialIcons>
        </FooterColumn>
      </FooterGrid>
      
      <FooterBottom>
        <p>© {new Date().getFullYear()} Seguros Online. Todos os direitos reservados.</p>
        <p>CNPJ: 00.000.000/0000-00 | SUSEP: 00000.000000/0000-00</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;