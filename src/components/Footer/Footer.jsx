import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import imagemFooter from "/logo-ababranco.png";
import { Container } from "../ui/Container";

const linkClass = "block text-white/70 transition-all duration-200 hover:translate-x-1 hover:text-brand-400";

const Footer = () => {
  return (
    <footer className="bg-navy-950 pt-16 text-white">
      <Container>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 pb-12 md:grid-cols-4 md:gap-10">
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wide text-brand-400">Seguros</h3>
            <div className="flex flex-col gap-3">
              <Link className={linkClass} to="/seguros">Automóvel</Link>
              <Link className={linkClass} to="/seguros">Bicicleta</Link>
              <Link className={linkClass} to="/seguros">Condomínio</Link>
              <Link className={linkClass} to="/seguros">Empresarial</Link>
              <Link className={linkClass} to="/seguros">Equipamentos Portáteis</Link>
              <Link className={linkClass} to="/seguros">Eventos</Link>
              <Link className={linkClass} to="/seguros">Máquinas</Link>
              <Link className={linkClass} to="/seguros">Residência</Link>
              <Link className={linkClass} to="/seguros">Responsabilidade Civil</Link>
              <Link className={linkClass} to="/seguros">Viagem</Link>
              <Link className={linkClass} to="/seguros">Vida</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wide text-brand-400">Demais Serviços</h3>
            <div className="flex flex-col gap-3">
              <Link className={linkClass} to="/consorcios">Consórcio</Link>
              <Link className={linkClass} to="/">Empréstimo</Link>
              <Link className={linkClass} to="/">Financiamento</Link>
              <Link className={linkClass} to="/">Capitalização</Link>
              <Link className={linkClass} to="/saude">Plano de Saúde</Link>
              <Link className={linkClass} to="/saude">Plano Odontológico</Link>
              <a
                className={linkClass}
                target="_blank"
                rel="noreferrer"
                href="https://www.portoseguro.com.br/servicos"
              >
                Serviços
              </a>
              <Link className={linkClass} to="/">Carro por Assinatura</Link>
              <Link className={linkClass} to="/">Celular por Assinatura</Link>
              <Link className={linkClass} to="/saude">PetLove</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wide text-brand-400">Empresa</h3>
            <div className="flex flex-col gap-3">
              <Link className={linkClass} to="/">Home</Link>
              <Link className={linkClass} to="/seguros">Seguros</Link>
              <Link className={linkClass} to="/consorcios">Consórcios</Link>
              <Link className={linkClass} to="/saude">Saúde</Link>
              <Link className={linkClass} to="/contato">Contato</Link>
              <Link className={linkClass} to="/contrateAgora">Contrate Agora</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wide text-brand-400">Nossas Redes Sociais</h3>
            <img
              src={imagemFooter}
              alt="ABA Seguros"
              width={160}
              height={48}
              loading="lazy"
              decoding="async"
              className="mb-6 h-auto w-40"
            />

            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61582932668466"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-xl text-white/70 transition-all duration-200 hover:-translate-y-0.5 hover:text-brand-400"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/abacorretoradeseguros?igsh=N2o0bGFoMmtmbzJ5"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-xl text-white/70 transition-all duration-200 hover:-translate-y-0.5 hover:text-brand-400"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com/@abacorretoradeseguros?si=iFRGtmx-0855JW-d"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="text-xl text-white/70 transition-all duration-200 hover:-translate-y-0.5 hover:text-brand-400"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.linkedin.com/company/aba-corretora-e-administradora-de-seguros-ltda/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-xl text-white/70 transition-all duration-200 hover:-translate-y-0.5 hover:text-brand-400"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-8 text-center text-sm text-white/50">
          <p>© {new Date().getFullYear()} ABA SEGUROS. TODOS OS DIREITOS RESERVADOS.</p>
          <p className="mt-2">CNPJ: 57.208.516/0001-43</p>
          <p className="mt-2">SUSEP: 2421619-27</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
