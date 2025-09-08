import React from 'react';
import { PartnersContainer, PartnersGrid, PartnerLogo } from './Partiners.styles';
import { SectionTitle } from '../../App.styles';
import Porto from '../../assets/Img/Porto.png'



const PartnersSection = () => {
  const partners = [
    { name: 'Porto Seguro', logo: Porto },
    { name: 'Seguradora B', logo: '/assets/logos/partner2.svg' },
    { name: 'Seguradora C', logo: '/assets/logos/partner3.svg' },
    { name: 'Seguradora D', logo: '/assets/logos/partner4.svg' },
    { name: 'Seguradora E', logo: '/assets/logos/partner5.svg' },
  ];

  return (
    <PartnersContainer>
      <SectionTitle>
        Nossos <span>parceiros</span>
      </SectionTitle>
      
      <PartnersGrid>
        {partners.map((partner, index) => (
          <PartnerLogo key={index}>
            <img 
              src={partner.logo} 
              alt={partner.name} 
              loading="lazy"
            />
          </PartnerLogo>
        ))}
      </PartnersGrid>
    </PartnersContainer>
  );
};

export default PartnersSection;