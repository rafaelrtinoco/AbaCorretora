import React from 'react';
import { BenefitsContainer, BenefitsGrid, BenefitCard } from './Benefits.styles';
import { SectionTitle, SectionSubtitle } from '../../App.styles';
import { FaShieldAlt } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";

// import SupportIcon from '../../assets/icons/support.svg'

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <FaShieldAlt />,
      title: 'Proteção Completa',
      description: 'Coberturas abrangentes para todas as situações que você possa imaginar.'
    },
    {
      icon: <FaRegMoneyBillAlt />,
      title: 'Preços Acessíveis',
      description: 'Planos que cabem no seu bolso sem abrir mão da qualidade.'
    },
    {
      icon: <FaClockRotateLeft />,
      title: 'Rápida Indenização',
      description: 'Processos ágeis para que você receba o que é seu o mais rápido possível.'
    },
    {
      icon: <MdOutlineSupportAgent />,
      title: 'Suporte 24/7',
      description: 'Atendimento humanizado disponível a qualquer hora, todos os dias.'
    }
  ];

  return (
    <BenefitsContainer id="benefits">
      <SectionTitle>
        Por que escolher nossos <span>seguros</span>?
      </SectionTitle>
      <SectionSubtitle>
        Oferecemos as melhores soluções em proteção para você e sua família.
      </SectionSubtitle>
      
      <BenefitsGrid>
        {benefits.map((benefit, index) => (
          <BenefitCard key={index}>
            <div className="icon-container">
              {benefit.icon}
            </div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </BenefitCard>
        ))}
      </BenefitsGrid>
    </BenefitsContainer>
  );
};

export default BenefitsSection;