import React from 'react';
import { SectionTitle, SectionSubtitle } from '../../App.styles';
import {
  ContactPageContainer,
  IntroSection,
  MainContentGrid,
  ContactChannels,
  ChannelCard,
  MapContainer,
  BusinessInfoSection,
  InfoBlock,
} from './Contato.styles';

// Ícones atualizados e adicionado o WhatsApp
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactPage = () => { // Renomeado para ContactPage
  return (
    <ContactPageContainer id="contact">
      <IntroSection>
        <SectionTitle>Estamos aqui para ajudar</SectionTitle>
        <SectionSubtitle>
          Escolha o melhor canal para falar conosco. Nossa equipe de especialistas está pronta para atender você.
        </SectionSubtitle>
      </IntroSection>

      <MainContentGrid>
        {/* Coluna da Esquerda: Canais de Contato */}
        <ContactChannels>
          <ChannelCard 
            href="https://wa.me/5511999999999" // <-- SUBSTITUA PELO SEU NÚMERO DE WHATSAPP
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
              <p>(11) 4004-4004</p>
            </div>
          </ChannelCard>

          <ChannelCard href="mailto:contato@abacorretora.com.br">
            <FaEnvelope />
            <div>
              <h3>E-mail</h3>
              <p>contato@abacorretora.com.br</p>
            </div>
          </ChannelCard>
        </ContactChannels>

        {/* Coluna da Direita: Mapa */}
        <MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.106695383502!2d-46.65657118440693!3d-23.56409456760337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1668102353915!5m2!1spt-BR!2sbr"
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

      {/* Seção Inferior: Endereço e Horários */}
      <BusinessInfoSection>
        <InfoBlock>
          <FaMapMarkerAlt />
          <div>
            <h4>Nosso Endereço</h4>
            <p>Av. Paulista, 1000 - Bela Vista, São Paulo/SP</p>
          </div>
        </InfoBlock>
        <InfoBlock>
          <FaClock />
          <div>
            <h4>Horário de Atendimento</h4>
            <p>Segunda a Sexta: 08h às 18h | Sábado: 09h às 13h</p>
          </div>
        </InfoBlock>
      </BusinessInfoSection>
    </ContactPageContainer>
  );
};

export default ContactPage;