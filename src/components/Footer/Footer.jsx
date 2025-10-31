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
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import imagemFooter from "/logo-ababranco.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <FooterColumn>
          <FooterTitle>Seguros</FooterTitle>
          <FooterLink as={Link} to="/seguros">Automóvel</FooterLink>
          <FooterLink as={Link} to="/seguros">Bicicleta</FooterLink>
          <FooterLink as={Link} to="/seguros">Condomínio</FooterLink>
          <FooterLink as={Link} to="/seguros">Empresarial</FooterLink>
          <FooterLink as={Link} to="/seguros">Equipamentos Portáteis</FooterLink>
          <FooterLink as={Link} to="/seguros">Eventos</FooterLink>
          <FooterLink as={Link} to="/seguros">Máquinas</FooterLink>
          <FooterLink as={Link} to="/seguros">Residência</FooterLink>
          <FooterLink as={Link} to="/seguros">Responsabilidade Civil</FooterLink>
          <FooterLink as={Link} to="/seguros">Viagem </FooterLink>
          <FooterLink as={Link} to="/seguros">Vida</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Demais Serviços</FooterTitle>
          <FooterLink as={Link} to="/consorcios">Consórcio</FooterLink>
          <FooterLink as={Link} to="/AbaCorretora">Empréstimo</FooterLink>
          <FooterLink as={Link} to="/AbaCorretora">Financiamento</FooterLink>
          <FooterLink as={Link} to="/AbaCorretora">Capitalização</FooterLink>
          <FooterLink as={Link} to="/saude">Plano de Saúde</FooterLink>
          <FooterLink as={Link} to="/saude">Plano Odontológico</FooterLink>
          <FooterLink as="a" target="_blank" href="https://www.portoseguro.com.br/servicos">Serviços</FooterLink>
          <FooterLink as={Link} to="/AbaCorretora">Carro por Assinatura</FooterLink>
          <FooterLink as={Link} to="/AbaCorretora">Celular por Assinatura</FooterLink>
          <FooterLink as={Link} to="/saude">PetLove</FooterLink>
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

          <FooterLink as={Link} to="/contrateAgora">
            Contrate Agora
          </FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Nossas Redes Sociais</FooterTitle>
          <FooterImage
            src={imagemFooter}
            alt="Descrição da imagem (ex: Selo de Segurança)"
          />

          <SocialIcons>
            <a href="https://www.facebook.com/profile.php?id=61582932668466" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/abacorretoradeseguros?igsh=N2o0bGFoMmtmbzJ5" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://youtube.com/@abacorretoradeseguros?si=iFRGtmx-0855JW-d" target="_blank" aria-label="YouTube">
              <FaYoutube />
            </a>
             <a href="https://www.linkedin.com/company/aba-corretora-e-administradora-de-seguros-ltda/" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
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
