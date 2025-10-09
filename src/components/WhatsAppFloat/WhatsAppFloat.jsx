import React from 'react';
import { FloatingButton } from './WhatsAppFloat.styles';
import { FaWhatsapp } from 'react-icons/fa';

const PHONE_NUMBER = '5511945411551'; 

const WhatsAppFloat = () => {
  const href = `https://wa.me/${PHONE_NUMBER}`;
  return (
    <FloatingButton href={href} target="_blank" rel="noreferrer" aria-label="Fale conosco no WhatsApp">
      <FaWhatsapp />
    </FloatingButton>
  );
};

export default WhatsAppFloat;


