import React from "react";
import {
  FooterContainer,
  FooterGrid,
  FooterColumn,
  FooterTitle,
  FooterLink,
  FooterBottom,
  SocialIcons,
  FooterImage,
} from "../Footer/Footer.styles";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import imagemFooter from "/public/LOGO-ABA.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <FooterColumn>
          <FooterTitle>Seguros</FooterTitle>
          <FooterLink>Automóvel</FooterLink>
          <FooterLink>Bicicleta</FooterLink>
          <FooterLink>Condomínio</FooterLink>
          <FooterLink>Empresarial</FooterLink>
          <FooterLink>Equipamentos Portáteis</FooterLink>
          <FooterLink>Eventos</FooterLink>
          <FooterLink>Máquinas</FooterLink>
          <FooterLink>Residência</FooterLink>
          <FooterLink>Responsabilidade Civil</FooterLink>
          <FooterLink>Viagem </FooterLink>
          <FooterLink>Vida</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Demais Serviços</FooterTitle>
          <FooterLink>Consórcio</FooterLink>
          <FooterLink>Empréstimo</FooterLink>
          <FooterLink>Financiamento</FooterLink>
          <FooterLink>Capitalização</FooterLink>
          <FooterLink>Plano de Saúde</FooterLink>
          <FooterLink>Plano Odontológico</FooterLink>
          <FooterLink>Serviços</FooterLink>
          <FooterLink>Carro por Assinatura</FooterLink>
          <FooterLink>Celular por Assinatura</FooterLink>
          <FooterLink>PetLove</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Empresa</FooterTitle>
          <FooterLink as={Link} to="/AbaCorretora">
            Home
          </FooterLink>

          <FooterLink as={Link} to="/seguros">
            Seguros
          </FooterLink>

          <FooterLink as={Link} to="/consorcios">
            Consórcios
          </FooterLink>

          <FooterLink as={Link} to="/saude">
            Saúde
          </FooterLink>

          <FooterLink as={Link} to="/contato">
            Contato
          </FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Nossas Redes Sociais</FooterTitle>
          <FooterImage
            src={imagemFooter}
            alt="Descrição da imagem (ex: Selo de Segurança)"
          />

          <SocialIcons>
            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>
          </SocialIcons>
        </FooterColumn>
      </FooterGrid>

      <FooterBottom>
        <p>
          © {new Date().getFullYear()} ABA SEGUROS. Todos os direitos
          reservados.
        </p>
        <p>CNPJ: 57.208.516/0001-43 | SUSEP: 2421619-27</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
