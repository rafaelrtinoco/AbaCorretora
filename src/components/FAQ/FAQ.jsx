import React, { useState } from "react";
import { FAQContainer, FAQItem, Question, Answer } from "./FAQ.styles";
import { SectionTitle, SectionSubtitle } from "../../App.styles";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./FAQ.css";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Como faço para contratar um seguro?",
      answer:
        "Você pode contratar diretamente pelo nosso site ou através do WhatsApp. O processo é rápido e simples.",
    },
    {
      question: "Quanto tempo leva para aprovar uma apólice?",
      answer:
        "O prazo legal para aprovação de uma apolice é de 15 dias, conforme regulamentação da SUSEP. No entanto, algumas seguradoras podem ter um processo mais rápido.",
    },
    {
      question: "Posso cancelar meu seguro a qualquer momento?",
      answer: "Não tem taxa administrativa em caso de cancelamento.",
    },
    {
      question: "Como faço para acionar meu seguro?",
      answer: (
        <>
          Você pode entrar em contato direto com a companhia através da nossa{" "}
          <Link className="navLink" to="/corretoras">
            página de contatos
          </Link>{" "}
          ou através do nosso {" "}
          <a
            href="https://wa.me/5511945411551"
            target="_blank"
            rel="noopener noreferrer"
            className="navLink"
          >
            canal de atendimento ao segurado via WhatsApp
          </a>{" "}
          e nossa equipe irá guia-lo em todo o processo.
        </>
      ),
    },
    {
      question: "Quais documentos preciso para contratar?",
      answer:
        "Depende do tipo de seguro. Para seguros de automóvel, por exemplo, precisamos da CNH e documento do veículo. Nossa equipe informará todos os documentos necessários durante a contratação.",
    },
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
            <Answer isOpen={activeIndex === index}>{faq.answer}</Answer>
          </FAQItem>
        ))}
      </div>
    </FAQContainer>
  );
};

export default FAQSection;
