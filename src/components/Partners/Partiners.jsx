import React from "react";
import {
  PartnersContainer,
  Marquee,
  MarqueeTrack,
  PartnerLogo,
} from "./Partiners.styles";
import Porto from "../../assets/Img/Porto.png";
import Suhai from "../../assets/Img/suhai.png";
import Bradesco from "../../assets/icons/bradesco.png";
import Akad from "../../assets/Img/akad.png";
import Allianz from "../../assets/Img/allianz.png";
import Azul from "../../assets/Img/azul-seguros.png";
import HDI from "../../assets/Img/hdi.png";
import Itau from "../../assets/Img/itau.png";
import Liberty from "../../assets/Img/Liberty.png";
import Mapfre from "../../assets/Img/Mapfre.png";
import Mitsui from "../../assets/Img/Mitsui.png";
import Pier from "../../assets/Img/pier.png";
import Tokio from "../../assets/Img/tokio.png";
import Zurich from "../../assets/Img/Zurich.png";

import Metlife from "../../assets/Img/metlife.png";
import Unimed from "../../assets/Img/unimed.png";
import Sulamerica from "../../assets/Img/sulamerica.png";
import Portosaude from "../../assets/Img/portosaude.png";
import Amil from "../../assets/img/amil.png";
import BradescoSaude from "../../assets/Img/bradesco-saude.png";
import Hapvida from "../../assets/Img/hapvida.png";
import Saocristovao from "../../assets/Img/sao-cristovao.png";
import Saomiguel from "../../assets/Img/sao-miguel-saude.png";
import Alice from "../../assets/Img/alice.png";
import Allcare from "../../assets/Img/allcare.png";
import Medsenior from "../../assets/Img/medsenior.png";
import Preventsenior from "../../assets/Img/preventsenior.png";
import Omint from "../../assets/Img/omint.png";

export const PartnersHomeSection = () => {
  const partners = [
    { name: "Porto Seguro", logo: Porto },
    { name: "Unimed", logo: Unimed },
    { name: "Suhai", logo: Suhai },
    { name: "Metlife", logo: Metlife },
    { name: "Bradesco", logo: Bradesco },
    { name: "Sul America", logo: Sulamerica },
    { name: "Akad", logo: Akad },
    { name: "Porto Saude", logo: Portosaude },
    { name: "Allianz", logo: Allianz },
    { name: "Amil", logo: Amil },
    { name: "Porto Seguro", logo: Porto },
    { name: "Bradesco Saude", logo: BradescoSaude },
    { name: "Azul", logo: Azul },
    { name: "Hapvida", logo: Hapvida },
    { name: "Itau", logo: Itau },
    { name: "Sao Cristovao", logo: Saocristovao },
    { name: "Mapfre", logo: Mapfre },
    { name: "Alice", logo: Alice },
    { name: "Pier", logo: Pier },
    { name: "Prevent Senior", logo: Preventsenior },
    { name: "Tokio", logo: Tokio },
    { name: "Medsenior", logo: Medsenior },
    { name: "Zurich", logo: Zurich },
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
              <img src={partner.logo} alt={partner.name} loading="lazy" />
            </PartnerLogo>
          ))}
        </MarqueeTrack>
      </Marquee>
    </PartnersContainer>
  );
};

export const PartnersSecuritySection = () => {
  const partners = [
    { name: "Porto Seguro", logo: Porto },
    { name: "Suhai", logo: Suhai },
    { name: "Bradesco", logo: Bradesco },
    { name: "Akad", logo: Akad },
    { name: "Allianz", logo: Allianz },
    { name: "Porto Seguro", logo: Porto },
    { name: "Suhai", logo: Suhai },
    { name: "Azul", logo: Azul },
    { name: "HDI", logo: HDI },
    { name: "Itau", logo: Itau },
    { name: "Liberty", logo: Liberty },
    { name: "Mapfre", logo: Mapfre },
    { name: "Mitsui", logo: Mitsui },
    { name: "Pier", logo: Pier },
    { name: "Tokio", logo: Tokio },
    { name: "Zurich", logo: Zurich },
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
              <img src={partner.logo} alt={partner.name} loading="lazy" />
            </PartnerLogo>
          ))}
        </MarqueeTrack>
      </Marquee>
    </PartnersContainer>
  );
};

export const PartnersHealthSection = () => {
  const partners = [
    { name: "Metlife", logo: Metlife },
    { name: "Unimed", logo: Unimed },
    { name: "Sul America", logo: Sulamerica },
    { name: "Porto Saude", logo: Portosaude },
    { name: "Amil", logo: Amil },
    { name: "Bradesco Saude", logo: BradescoSaude },
    { name: "Hapvida", logo: Hapvida },
    { name: "Sao Cristovao", logo: Saocristovao },
    { name: "Sao Miguel", logo: Saomiguel },
    { name: "Alice", logo: Alice },
    { name: "Allcare", logo: Allcare },
    { name: "Medsenior", logo: Medsenior },
    { name: "Prevent Senior", logo: Preventsenior },
    { name: "Omint", logo: Omint },
  ];

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
              <img src={partner.logo} alt={partner.name} loading="lazy" />
            </PartnerLogo>
          ))}
        </MarqueeTrack>
      </Marquee>
    </PartnersContainer>
  );
};
