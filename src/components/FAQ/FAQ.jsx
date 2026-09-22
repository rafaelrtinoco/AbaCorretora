import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

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
        <Link className="font-semibold text-brand-600 hover:underline" to="/seguradoras">
          página de contatos
        </Link>{" "}
        ou através do nosso{" "}
        <a
          href="https://wa.me/5511945411551"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-brand-600 hover:underline"
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

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <Section id="faq" tone="muted">
      <SectionHeading title="Perguntas Frequentes" subtitle="Tire suas dúvidas sobre nossos produtos e serviços" />

      <div className="mx-auto mt-10 max-w-3xl divide-y divide-slate-200">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;
          const panelId = `faq-panel-${index}`;
          const buttonId = `faq-button-${index}`;

          return (
            <div key={faq.question}>
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold text-navy-900 transition-colors hover:text-brand-600 md:text-lg"
                >
                  {faq.question}
                  {isOpen ? (
                    <FiMinus className="shrink-0 text-brand-500" aria-hidden="true" />
                  ) : (
                    <FiPlus className="shrink-0 text-brand-500" aria-hidden="true" />
                  )}
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <p className="pb-5 leading-relaxed text-slate-500">{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default FAQSection;
