import React from "react";
import InsuranceImage from "../InsuranceImage/InsuranceImage";
import {
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  InsuranceCards,
  InsuranceCard,
} from "./HeroSection.styles";
import Carro from "../../assets/icons/Carro.png"
import Casa from "../../assets/icons/Casa.png"
import Saude from "../../assets/icons/saude.png"
import Vida from "../../assets/icons/Vida.png"
import Viagem from "../../assets/icons/Viagem.png"
import Empresarial from "../../assets/icons/Empresarial.png"


const HeroSection = () => {
  const insuranceTypes = [     
    { icon: <InsuranceImage src={Carro} alt="Carro" />, title: "Automóvel" },
    { icon: <InsuranceImage src={Casa} alt="Casa" />, title: "Residencial" },
    { icon: <InsuranceImage src={Saude} alt="Saúde" />, title: "Saúde" },
    { icon: <InsuranceImage src={Vida} alt="Vida" />, title: "Vida" },
    { icon: <InsuranceImage src={Viagem} alt="Viagem" />, title: "Viagem" },
    { icon: <InsuranceImage src={Empresarial} alt="Empresarial" />, title: "Empresarial" },
  ];

  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>
          Proteção completa para você e sua família{" "}
          <span
            style={{
              color: "white",
              backgroundColor: "#26a9e0",
              padding: "1px 4px",
              borderRadius: "4px",
            }}
          >
            seguros
          </span>
        </HeroTitle>
        <HeroSubtitle>
          Conte com a gente para proteger o que mais importa. Planos
          personalizados e atendimento humanizado.
        </HeroSubtitle>

        <InsuranceCards>
          {insuranceTypes.map((insurance, index) => (
            <InsuranceCard key={index}>
              {insurance.icon}
              <p>{insurance.title}</p>
            </InsuranceCard>
          ))}
        </InsuranceCards>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
