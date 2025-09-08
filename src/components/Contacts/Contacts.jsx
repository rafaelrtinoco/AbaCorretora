import React from 'react';
import { ContactContainer, ContactGrid, ContactCard } from './Contacts.styles';
import { SectionTitle } from '../../App.styles';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <ContactContainer id="contact">
      <SectionTitle>
        Fale <span>conosco</span>
      </SectionTitle>
      
      <ContactGrid>
        <ContactCard>
          <div className="icon">
            <FaPhone />
          </div>
          <h3>Telefone</h3>
          <p>(11) 4004-4004</p>
          <a href="tel:+551140044004">Ligar agora</a>
        </ContactCard>
        
        <ContactCard>
          <div className="icon">
            <FaEnvelope />
          </div>
          <h3>E-mail</h3>
          <p>contato@segurosonline.com.br</p>
          <a href="mailto:contato@segurosonline.com.br">Enviar e-mail</a>
        </ContactCard>
        
        <ContactCard>
          <div className="icon">
            <FaMapMarkerAlt />
          </div>
          <h3>Endereço</h3>
          <p>Av. Paulista, 1000 - São Paulo/SP</p>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">Ver no mapa</a>
        </ContactCard>
        
        <ContactCard>
          <div className="icon">
            <FaClock />
          </div>
          <h3>Horário</h3>
          <p>Segunda a Sexta: 8h às 18h</p>
          <p>Sábado: 9h às 13h</p>
        </ContactCard>
      </ContactGrid>
    </ContactContainer>
  );
};

export default ContactSection;