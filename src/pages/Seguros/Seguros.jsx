import React from 'react'
import { SectionTitle, SectionSubtitle } from "../../App.styles";
import { PageSection, ContentWrap, ProductsGrid, ProductCard, Tip } from './Seguros.styles'
import { BenefitsContainer, BenefitsGrid, BenefitCard } from './Seguros.styles';
import { FaShieldAlt } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";

const Seguros = () => {

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
    <>
    
      <PageSection>
        <ContentWrap>
          <SectionTitle>Seguros e Convênios</SectionTitle>
          <SectionSubtitle>
            Proteção e cuidado em todas as fases da vida: veículos, residência, saúde, vida e seus pets.
          </SectionSubtitle>

          <ProductsGrid>
            <ProductCard>
              <h3>Seguro Automóvel</h3>
              <p>Proteção contra colisão, roubo, furto, eventos naturais e terceiros.</p>
              <ul>
                <li>Guincho 24h e carro reserva</li>
                <li>Cobertura para vidros e faróis</li>
                <li>Assistência a terceiros</li>
              </ul>
              <Tip>Indicado para quem busca tranquilidade no dia a dia e proteção patrimonial.</Tip>
            </ProductCard>

            <ProductCard>
              <h3>Seguro Residencial</h3>
              <p>Coberturas essenciais para sua casa: incêndio, vendaval, roubo e danos elétricos.</p>
              <ul>
                <li>Assistência 24h (chaveiro, encanador)</li>
                <li>Responsabilidade civil familiar</li>
                <li>Proteção para eletroeletrônicos</li>
              </ul>
              <Tip>Excelente custo-benefício para proteger seu patrimônio e rotina.</Tip>
            </ProductCard>

            <ProductCard>
              <h3>Seguro de Vida</h3>
              <p>Amparo financeiro em imprevistos, com coberturas por morte, invalidez e doenças graves.</p>
              <ul>
                <li>Assistências e serviços (telemedicina, desconto em farmácia)</li>
                <li>Planos individuais e familiares</li>
                <li>Isenção de IR para indenizações</li>
              </ul>
              <Tip>Garante estabilidade para sua família e sucessão patrimonial.</Tip>
            </ProductCard>

            <ProductCard>
              <h3>Plano de Saúde</h3>
              <p>Planos com ampla rede credenciada, reembolso e telemedicina.</p>
              <ul>
                <li>Planos individuais, familiares e empresariais</li>
                <li>Opções com coparticipação</li>
                <li>Emergência e urgência garantidas</li>
              </ul>
              <Tip>Ideal para previsibilidade de custos e qualidade no atendimento.</Tip>
            </ProductCard>

            <ProductCard>
              <h3>Convênio Odontológico</h3>
              <p>Rede de consultórios com coberturas para prevenção, urgência e tratamentos.</p>
              <ul>
                <li>Procedimentos básicos e estéticos</li>
                <li>Ampla rede em todo o país</li>
                <li>Mensalidade acessível</li>
              </ul>
              <Tip>Perfeito para manter a saúde bucal da família em dia.</Tip>
            </ProductCard>

            <ProductCard>
              <h3>Petlove Saúde (Pets)</h3>
              <p>Planos para cães e gatos com consultas, exames e cirurgias conforme o plano.</p>
              <ul>
                <li>Rede credenciada e reembolso</li>
                <li>Teleorientação veterinária</li>
                <li>Planos por faixa etária</li>
              </ul>
              <Tip>Seu pet protegido e você com mais tranquilidade financeira.</Tip>
            </ProductCard>
          </ProductsGrid>
        </ContentWrap>
      </PageSection>
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
    </>
  )
}

export default Seguros
