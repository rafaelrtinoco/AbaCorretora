import React from 'react';
import { PartnersContainer, Marquee, MarqueeTrack, PartnerLogo } from './Partiners.styles';
import { SectionTitle } from '../../App.styles';
import Porto from '../../assets/Img/Porto.png'
import Suhai from '../../assets/Img/suhai.png'
import Bradesco from '../../assets/icons/bradesco.png'
import Akad from '../../assets/Img/akad.png'
import Allianz from '../../assets/Img/allianz.png'
import Azul from '../../assets/Img/azul-seguros.png'
import HDI from '../../assets/Img/hdi.png'
import Itau from '../../assets/Img/itau.png'
import Liberty from '../../assets/Img/Liberty.png'
import Mapfre from '../../assets/Img/Mapfre.png'
import Mitsui from '../../assets/Img/Mitsui.png'
import Pier from '../../assets/Img/pier.png'
import Tokio from '../../assets/Img/tokio.png'
import Zurich from '../../assets/Img/Zurich.png'



const PartnersSection = () => {
  const partners = [
    { name: 'Porto Seguro', logo: Porto },
    { name: 'Suhai', logo: Suhai },
    { name: 'Bradesco', logo: Bradesco },
    { name: 'Akad', logo: Akad },
    { name: 'Allianz', logo: Allianz },
    { name: 'Porto Seguro', logo: Porto },
    { name: 'Suhai', logo: Suhai },
    { name: 'Azul', logo: Azul },
    { name: 'HDI', logo: HDI },
    { name: 'Itau', logo: Itau },
    { name: 'Liberty', logo: Liberty },
    { name: 'Mapfre', logo: Mapfre },
    { name: 'Mitsui', logo: Mitsui },
    { name: 'Pier', logo: Pier },
    { name: 'Tokio', logo: Tokio },
    { name: 'Zurich', logo: Zurich },



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