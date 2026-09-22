import { FaWhatsapp } from "react-icons/fa";

const PHONE_NUMBER = "5511945411551";

const WhatsAppFloat = () => {
  const href = `https://wa.me/${PHONE_NUMBER}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-4 right-4 z-[1100] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-3xl text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.22)] sm:bottom-6 sm:right-6"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppFloat;
