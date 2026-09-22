import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { SEO } from "../../components/SEO/SEO";
import { Section } from "../../components/ui/Section";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { cn } from "../../lib/cn";

const CHANNELS = [
  {
    href: "https://wa.me/5511945411551",
    target: "_blank",
    icon: FaWhatsapp,
    title: "WhatsApp",
    description: "Clique aqui para iniciar uma conversa agora mesmo.",
    primary: true,
  },
  {
    href: "tel:+5511945411551",
    icon: FaPhoneAlt,
    title: "Telefone",
    description: "(11) 94541-1551",
  },
  {
    href: "mailto:contato@abacorretora.com.br",
    icon: FaEnvelope,
    title: "E-mail",
    description: "abaseguros@abaseguros.com.br",
  },
];

const ContactPage = () => {
  return (
    <>
      <SEO
        title="Contato"
        description="Ficou com alguma dúvida? Entre em contato agora mesmo que iremos te ajudar."
        name="Aba Contato"
        type="website"
        keywords="página de contato"
      />

      <Section id="contact" className="pt-32 md:pt-40" tone="white">
        <SectionHeading
          title="Estamos aqui para ajudar"
          subtitle="Escolha o melhor canal para falar conosco. Nossa equipe de especialistas está pronta para atender você."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="flex flex-col gap-5">
            {CHANNELS.map((channel) => (
              <a
                key={channel.title}
                href={channel.href}
                target={channel.target}
                rel={channel.target ? "noopener noreferrer" : undefined}
                className={cn(
                  "flex items-center gap-6 rounded-2xl p-6 shadow-card ring-1 ring-slate-200/70 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover",
                  channel.primary ? "bg-brand-500 text-white ring-brand-500" : "bg-white text-navy-900"
                )}
              >
                <channel.icon
                  className={cn("shrink-0 text-4xl", channel.primary ? "text-white" : "text-brand-500")}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-xl font-semibold">{channel.title}</h3>
                  <p className={cn("mt-1", channel.primary ? "text-white/90" : "text-slate-500")}>
                    {channel.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="order-first h-[300px] overflow-hidden rounded-2xl shadow-card lg:order-none lg:h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.210770118163!2d-46.504975200000004!3d-23.5249205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce60bce3afc021%3A0xf2841702e1fdf959!2sR.%20Itingu%C3%A7u%2C%201019%20-%20Vila%20R%C3%A9%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003658-010!5e0!3m2!1spt-BR!2sbr!4v1760037282599!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Endereço da ABA Corretora na Av. Paulista"
            />
          </div>
        </div>

        <div className="mx-auto mt-16 flex max-w-[1200px] flex-col items-center gap-8 border-t border-slate-200 pt-8 sm:flex-row sm:justify-center sm:gap-16">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <FaMapMarkerAlt className="text-2xl text-navy-900" aria-hidden="true" />
            <div>
              <h4 className="font-semibold text-navy-900">Nosso Endereço</h4>
              <p className="text-slate-500">Av. Itinguçu, 1019 - Vila Ré, São Paulo/SP</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-center sm:text-left">
            <FaClock className="text-2xl text-navy-900" aria-hidden="true" />
            <div>
              <h4 className="font-semibold text-navy-900">Horário de Atendimento</h4>
              <p className="text-slate-500">Segunda a Sexta: 08h às 18h</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ContactPage;
