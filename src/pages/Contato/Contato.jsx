import React from "react";
import { SectionTitle, SectionSubtitle } from "../../App.styles";
import {
  ContactPageContainer,
  IntroSection,
  MainContentGrid,
  ContactChannels,
  ChannelCard,
  MapContainer,
  BusinessInfoSection,
  InfoBlock,
} from "./Contato.styles";


import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const ContactPage = () => {
  
  return (
    <ContactPageContainer id="contact">
      <IntroSection>
        <SectionTitle>Estamos aqui para ajudar</SectionTitle>
        <SectionSubtitle>
          Escolha o melhor canal para falar conosco. Nossa equipe de
          especialistas está pronta para atender você.
        </SectionSubtitle>
      </IntroSection>

      <MainContentGrid>
        <ContactChannels>
          <ChannelCard
            href="https://wa.me/5511945411551"
            target="_blank"
            rel="noopener noreferrer"
            primary
          >
            <FaWhatsapp />
            <div>
              <h3>WhatsApp</h3>
              <p>Clique aqui para iniciar uma conversa agora mesmo.</p>
            </div>
          </ChannelCard>

          <ChannelCard href="tel:+551140044004">
            <FaPhoneAlt />
            <div>
              <h3>Telefone</h3>
              <p>(11) 94541-1551</p>
            </div>
          </ChannelCard>

          <ChannelCard href="mailto:contato@abacorretora.com.br">
            <FaEnvelope />
            <div>
              <h3>E-mail</h3>
              <p>abaseguros@abaseguros.com.br</p>
            </div>
          </ChannelCard>
        </ContactChannels>

        
        <MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.210770118163!2d-46.504975200000004!3d-23.5249205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce60bce3afc021%3A0xf2841702e1fdf959!2sR.%20Itingu%C3%A7u%2C%201019%20-%20Vila%20R%C3%A9%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003658-010!5e0!3m2!1spt-BR!2sbr!4v1760037282599!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Endereço da ABA Corretora na Av. Paulista"
          ></iframe>
        </MapContainer>
      </MainContentGrid>

      
      <BusinessInfoSection>
        <InfoBlock>
          <FaMapMarkerAlt />
          <div>
            <h4>Nosso Endereço</h4>
            <p>Av. Itinguçu, 1019 - Vila Ré, São Paulo/SP</p>
          </div>
        </InfoBlock>
        <InfoBlock>
          <FaClock />
          <div>
            <h4>Horário de Atendimento</h4>
            <p>Segunda a Sexta: 08h às 18h</p>
          </div>
        </InfoBlock>
      </BusinessInfoSection>
    </ContactPageContainer>
  );
};

export default ContactPage;
