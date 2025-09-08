import React, { useState } from 'react';
import { FAQContainer, FAQItem, Question, Answer } from './FAQ.styles';
import { SectionTitle, SectionSubtitle } from '../../App.styles';
import { FiPlus, FiMinus } from 'react-icons/fi';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Como faço para contratar um seguro?',
      answer: 'Você pode contratar diretamente pelo nosso site, através do telefone ou em uma de nossas agências. O processo é rápido e simples.'
    },
    {
      question: 'Quanto tempo leva para aprovar uma apólice?',
      answer: 'A aprovação é quase instantânea para a maioria dos seguros. Em alguns casos específicos pode levar até 24 horas.'
    },
    {
      question: 'Posso cancelar meu seguro a qualquer momento?',
      answer: 'Sim, você pode cancelar a qualquer momento. Consulte nossas políticas para entender sobre possíveis taxas administrativas.'
    },
    {
      question: 'Como faço para acionar meu seguro?',
      answer: 'Você pode acionar através do nosso aplicativo, site ou central telefônica 24 horas. Nossa equipe irá guiá-lo em todo o processo.'
    },
    {
      question: 'Quais documentos preciso para contratar?',
      answer: 'Depende do tipo de seguro. Para seguros de automóvel, por exemplo, precisamos da CNH e documento do veículo. Nossa equipe informará todos os documentos necessários durante a contratação.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <FAQContainer id="faq">
      <SectionTitle>
        Perguntas <span>Frequentes</span>
      </SectionTitle>
      <SectionSubtitle>
        Tire suas dúvidas sobre nossos produtos e serviços
      </SectionSubtitle>
      
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <FAQItem key={index} isOpen={activeIndex === index}>
            <Question onClick={() => toggleFAQ(index)}>
              {faq.question}
              {activeIndex === index ? <FiMinus /> : <FiPlus />}
            </Question>
            <Answer isOpen={activeIndex === index}>
              {faq.answer}
            </Answer>
          </FAQItem>
        ))}
      </div>
    </FAQContainer>
  );
};

export default FAQSection;