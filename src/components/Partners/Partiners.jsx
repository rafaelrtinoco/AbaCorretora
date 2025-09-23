import React from 'react';
import { PartnersContainer, Marquee, MarqueeTrack, PartnerLogo } from './Partiners.styles';
import { SectionTitle } from '../../App.styles';
import Porto from '../../assets/Img/Porto.png'
import Suhai from '../../assets/icons/suhai.png'
import Bradesco from '../../assets/icons/bradesco.png'



const PartnersSection = () => {
  const partners = [
    { name: 'Porto Seguro', logo: Porto },
    { name: 'Suhai', logo: Suhai },
    { name: 'Bradesco', logo: Bradesco },
    { name: 'Seguradora D', logo: '/assets/logos/partner4.svg' },
    { name: 'Seguradora E', logo: '/assets/logos/partner5.svg' },
    { name: 'Porto Seguro', logo: Porto },
    { name: 'Suhai', logo: Suhai },
    { name: 'Bradesco', logo: Bradesco },
  ];

  // Duplicamos a lista para criar um loop contínuo no marquee
  const loopPartners = [...partners, ...partners];

  return (
    <PartnersContainer>
      {/* <SectionTitle>
        Nossos <span>parceiros</span>
      </SectionTitle> */}
      
      <Marquee>
        <MarqueeTrack>
          {loopPartners.map((partner, index) => (
            <PartnerLogo key={index}>
              <img 
                src={partner.logo} 
                alt={partner.name} 
                loading="lazy"
              />
            </PartnerLogo>
          ))}
        </MarqueeTrack>
      </Marquee>
    </PartnersContainer>
  );
};

export default PartnersSection;