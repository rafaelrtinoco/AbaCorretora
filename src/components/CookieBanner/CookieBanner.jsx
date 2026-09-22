import { useEffect, useState } from "react";
import { FaCookieBite } from "react-icons/fa";
import { Button } from "../ui/Button";

const COOKIE_ACCEPTED_KEY = "cookies_accepted";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(COOKIE_ACCEPTED_KEY);
    if (!accepted) setIsVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_ACCEPTED_KEY, "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-[1200] border-t border-slate-200 bg-white/95 backdrop-blur px-4 py-4 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] sm:px-6"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-4 sm:flex-row">
        <FaCookieBite className="hidden shrink-0 text-2xl text-brand-500 sm:block" aria-hidden="true" />
        <p className="flex-1 text-center text-sm leading-relaxed text-slate-600 sm:text-left">
          Utilizamos cookies para oferecer a melhor experiência e analisar o desempenho do nosso site. Ao
          clicar em &ldquo;Aceitar Cookies&rdquo;, você concorda com o uso de todos os cookies. Para mais
          informações, consulte nossa{" "}
          <a href="/politica-de-privacidade" className="font-semibold text-brand-600 hover:underline">
            Política de Privacidade
          </a>
          .
        </p>
        <Button size="sm" className="shrink-0" onClick={handleAccept}>
          Aceitar Cookies
        </Button>
      </div>
    </div>
  );
};

export default CookieBanner;
