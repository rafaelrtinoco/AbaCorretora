import { useEffect, useState } from "react";
import { FaShieldAlt, FaPiggyBank, FaHeartbeat, FaTools, FaHandshake, FaWhatsapp } from "react-icons/fa";
import { FiX, FiArrowLeft } from "react-icons/fi";
import anaAvatar from "../../assets/image/ana.webp";
import { Button } from "../ui/Button";
import { cn } from "../../lib/cn";

const PHONE_NUMBER = "5511945411551";

// ─────────────────────────────────────────────
// Chat "mocado": não há IA nem backend por trás, é um roteiro fixo
// que termina sempre abrindo o WhatsApp com uma mensagem pré-pronta
// para o assunto escolhido. Para adicionar uma categoria nova, basta
// incluir um objeto neste array.
// ─────────────────────────────────────────────
const CATEGORIES = [
  {
    id: "seguros",
    label: "Seguros",
    icon: FaShieldAlt,
    message: "Olá! Vim pelo site e gostaria de saber mais sobre Seguros.",
  },
  {
    id: "consorcios",
    label: "Consórcios",
    icon: FaPiggyBank,
    message: "Olá! Vim pelo site e gostaria de saber mais sobre Consórcios.",
  },
  {
    id: "saude",
    label: "Saúde",
    icon: FaHeartbeat,
    message: "Olá! Vim pelo site e gostaria de saber mais sobre Planos de Saúde.",
  },
  {
    id: "servicos",
    label: "Serviços",
    icon: FaTools,
    message:
      "Olá! Vim pelo site e gostaria de saber mais sobre Serviços (eletricista, encanador, ar-condicionado e outros).",
  },
  {
    id: "parcerias",
    label: "Parcerias",
    icon: FaHandshake,
    message: "Olá! Vim pelo site e gostaria de saber mais sobre as Parcerias da Aba Seguros.",
  },
];

const TYPING_DELAY_MS = 900;

const AnaChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!selected) return undefined;
    setIsTyping(true);
    const timer = setTimeout(() => setIsTyping(false), TYPING_DELAY_MS);
    return () => clearTimeout(timer);
  }, [selected]);

  const close = () => {
    setIsOpen(false);
    setSelected(null);
    setIsTyping(false);
  };

  const reset = () => {
    setSelected(null);
    setIsTyping(false);
  };

  const whatsappHref = selected
    ? `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(selected.message)}`
    : "#";

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-label={isOpen ? "Fechar chat com a Ana" : "Falar com a Ana, atendente virtual"}
        className="fixed bottom-[5.25rem] right-4 z-[1100] flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] ring-2 ring-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.22)] sm:bottom-24 sm:right-6"
      >
        {isOpen ? (
          <FiX className="text-2xl text-navy-900" aria-hidden="true" />
        ) : (
          <>
            <img src={anaAvatar} alt="" className="h-full w-full rounded-full object-cover" />
            <span
              className="absolute bottom-0.5 right-0.5 h-3.5 w-3.5 rounded-full bg-[#25D366] ring-2 ring-white"
              aria-hidden="true"
            />
          </>
        )}
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="false"
          aria-label="Chat com a Ana, atendente virtual da Aba Seguros"
          className="fixed bottom-[9.5rem] right-4 z-[1100] flex max-h-[75vh] w-[340px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.25)] ring-1 ring-slate-200 sm:bottom-[11rem] sm:right-6"
          style={{ animation: "popup-slide-up 0.25s ease" }}
        >
          <div className="flex shrink-0 items-center gap-3 bg-navy-900 px-4 py-3.5">
            <img src={anaAvatar} alt="Ana" className="h-10 w-10 shrink-0 rounded-full object-cover" />
            <div className="min-w-0">
              <p className="font-semibold text-white">Ana</p>
              <p className="flex items-center gap-1.5 text-xs text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" aria-hidden="true" />
                Atendente virtual · Aba Seguros
              </p>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Fechar chat"
              className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              <FiX aria-hidden="true" />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-slate-50 p-4" aria-live="polite">
            <ChatBubble from="ana">Oi! 👋 Eu sou a Ana, atendente virtual da Aba Seguros.</ChatBubble>
            <ChatBubble from="ana">Qual serviço você está buscando hoje?</ChatBubble>

            {!selected && (
              <div className="flex flex-wrap gap-2 pt-1" role="group" aria-label="Opções de serviço">
                {CATEGORIES.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setSelected(category)}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-brand-700 shadow-sm ring-1 ring-inset ring-brand-200 transition-colors hover:bg-brand-50"
                  >
                    <category.icon className="text-brand-500" aria-hidden="true" />
                    {category.label}
                  </button>
                ))}
              </div>
            )}

            {selected && (
              <>
                <ChatBubble from="user">{selected.label}</ChatBubble>

                {isTyping ? (
                  <div className="flex w-fit items-center gap-1 rounded-2xl rounded-bl-sm bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200">
                    {[0, 1, 2].map((dot) => (
                      <span
                        key={dot}
                        className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400"
                        style={{ animationDelay: `${dot * 0.15}s` }}
                      />
                    ))}
                  </div>
                ) : (
                  <>
                    <ChatBubble from="ana">
                      Perfeito! Vou te conectar com um especialista em {selected.label} agora mesmo. 🙌
                    </ChatBubble>

                    <Button
                      as="a"
                      target="_blank"
                      rel="noreferrer"
                      href={whatsappHref}
                      size="sm"
                      className="w-full"
                    >
                      <FaWhatsapp aria-hidden="true" /> Continuar no WhatsApp
                    </Button>

                    <button
                      type="button"
                      onClick={reset}
                      className="flex items-center gap-1.5 pt-1 text-sm font-semibold text-slate-500 transition-colors hover:text-navy-900"
                    >
                      <FiArrowLeft aria-hidden="true" /> Escolher outro assunto
                    </button>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

const ChatBubble = ({ from, children }) => (
  <p
    className={cn(
      "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm",
      from === "user"
        ? "ml-auto rounded-br-sm bg-brand-500 text-white"
        : "rounded-bl-sm bg-white text-navy-900 ring-1 ring-slate-200"
    )}
  >
    {children}
  </p>
);

export default AnaChat;
