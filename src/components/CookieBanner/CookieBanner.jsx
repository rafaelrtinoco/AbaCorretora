// CookieBanner.js

import React, { useState, useEffect } from 'react';
// Importe o ícone de cookie
import { FaCookieBite } from 'react-icons/fa';
import { CookieBannerContainer, CookieText, AcceptButton } from '../CookieBanner/CookieBanner.styles';

const COOKIE_ACCEPTED_KEY = 'cookies_accepted';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(COOKIE_ACCEPTED_KEY);
    if (!accepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_ACCEPTED_KEY, 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <CookieBannerContainer>
      
      <FaCookieBite />

      <CookieText>
        Utilizamos cookies para oferecer a melhor experiência e analisar o desempenho do nosso site. Ao clicar em "Aceitar Cookies", você concorda com o uso de todos os cookies. Para mais informações, consulte nossa{' '}
        <a href="/politica-de-privacidade">Política de Privacidade</a>.
      </CookieText>
      
      <AcceptButton onClick={handleAccept}>Aceitar Cookies</AcceptButton>
    </CookieBannerContainer>
  );
};

export default CookieBanner;