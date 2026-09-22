import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../../assets/icons/logo.png";
import { Button } from "../ui/Button";
import { cn } from "../../lib/cn";

const NAV_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/seguros", label: "Seguros" },
  { to: "/consorcios", label: "Consórcios" },
  { to: "/saude", label: "Saúde" },
  { to: "/parcerias", label: "Parceiros" },
  { to: "/contato", label: "Contato" },
];

const navLinkClass = ({ isActive }) =>
  cn(
    "text-sm font-semibold transition-colors",
    isActive ? "text-brand-600" : "text-navy-900 hover:text-brand-600"
  );

const mobileNavLinkClass = ({ isActive }) =>
  cn(
    "block w-full rounded-lg px-4 py-3 text-base font-semibold transition-colors",
    isActive ? "bg-brand-50 text-brand-600" : "text-navy-900 hover:bg-slate-50"
  );

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="hidden bg-navy-950 text-white lg:block">
        <div className="mx-auto flex max-w-[1200px] items-center justify-end gap-6 px-8 py-2 text-xs">
          <a href="tel:+5511945411551" className="flex items-center gap-2 text-white/80 hover:text-white">
            <FaPhoneAlt aria-hidden="true" /> (11) 94541-1551
          </a>
          <a
            href="https://wa.me/5511945411551"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-white/80 hover:text-white"
          >
            <FaWhatsapp aria-hidden="true" /> WhatsApp
          </a>
          <Link to="/seguradoras" className="text-white/80 hover:text-white">
            Contatos das seguradoras
          </Link>
        </div>
      </div>

      <div
        className={cn(
          "border-b border-slate-200/70 bg-white transition-shadow duration-200",
          isScrolled && "shadow-sm"
        )}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="shrink-0" aria-label="ABA Seguros — página inicial">
            <img src={Logo} alt="ABA Seguros" width={150} height={37} className="h-9 w-auto" />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.end} className={navLinkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button as="a" href="https://wa.me/5511945411551" target="_blank" size="sm">
              Contrate Agora
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            className="rounded-lg p-2 text-2xl text-navy-900 lg:hidden"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Navegação móvel"
        className={cn(
          "origin-top bg-white shadow-lg transition-all duration-200 lg:hidden",
          isMenuOpen ? "max-h-[26rem] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col gap-1 px-4 py-4">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} onClick={closeMenu} className={mobileNavLinkClass}>
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/seguradoras"
            onClick={closeMenu}
            className="block w-full rounded-lg px-4 py-3 text-base font-semibold text-navy-900 hover:bg-slate-50"
          >
            Contatos das seguradoras
          </Link>
          <Button as="a" href="https://wa.me/5511945411551" target="_blank" className="mt-2 justify-center">
            Contrate Agora
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
