import { Section } from "../ui/Section";
import { SectionTitle } from "../ui/SectionHeading";
import { Carousel } from "../ui/Carousel";

import Cliente1 from "../../assets/image/jucelino.png";
import Cliente2 from "../../assets/image/tamires.png";
import Cliente3 from "../../assets/image/thiago.png";
import Cliente4 from "../../assets/image/camila.png";
import Cliente5 from "../../assets/image/vitor.png";

const testimonials = [
  {
    id: 1,
    quote:
      "Aba Corretora, cuida da frota de veículos da minha Empresa com muita atenção e cuidado, toda equipe é muito atenciosa e o atendimento rápido e eficiênte, eu super recomendo.",
    name: "Jucelino Mendes",
    title: "Cliente há 2 anos",
    image: Cliente1,
  },
  {
    id: 2,
    quote:
      "Sou muito satisfeita com meu seguro, a corretora Mariana é super competente, atenciosa, tirou todas minhas dúvidas quando fechei com eles. Obtive o melhor preço, eu amo e indico muito!!",
    name: "Tamires Elley",
    title: "Cliente há 1 ano",
    image: Cliente2,
  },
  {
    id: 3,
    quote:
      "Profissional incrível! Desde o primeiro contato, me senti super bem direcionado no processo do meu seguro. Ela foi clara, prestativa e mostrou total domínio do que fazia. Estou com ela até hoje, porque confio e recomendo de verdade!",
    name: "Thiago Bastos",
    title: "Cliente há 3 anos",
    image: Cliente3,
  },
  {
    id: 4,
    quote:
      "Mariana é uma corretora excelente: muito atenciosa, detalhista, com atendimento cordial e vasto conhecimento do mercado segurador. Sempre nos apresenta as melhores opções para proteger a vida, os bens, os serviços e também em soluções financeiras.",
    name: "Camila Barbosa",
    title: "Cliente há 4 anos",
    image: Cliente4,
  },
  {
    id: 5,
    quote:
      "Eu tenho seguro com a Aba e tenho total confiança que meu veículo e minha residência estão protegidos !! Sempre que preciso tenho um ótimo atendimento.",
    name: "Vitor Carneiro",
    title: "Cliente há 4 anos",
    image: Cliente5,
  },
];

const TestimonialsSection = () => {
  return (
    <Section id="testimonials" tone="navy">
      <div className="grid min-w-0 items-center gap-12 lg:grid-cols-2">
        <div className="min-w-0">
          <SectionTitle inverted align="left">
            O que nossos clientes dizem
          </SectionTitle>
          <p className="mt-4 text-lg leading-relaxed text-white/80">
            Mais de 400 clientes confiam em nossos serviços de proteção. Sua satisfação é nossa maior
            recompensa.
          </p>
        </div>

        <Carousel
          items={testimonials}
          getKey={(item) => item.id}
          ariaLabel="Depoimentos de clientes"
          controlsAlign="end"
          buttonVariant="dark"
          renderItem={(testimonial) => (
            <div className="relative flex h-full flex-col rounded-2xl bg-white p-8 text-navy-900 md:p-10">
              <span className="absolute left-6 top-4 text-6xl font-bold text-brand-500" aria-hidden="true">
                &ldquo;
              </span>
              <p className="relative z-10 mt-4 flex-grow leading-relaxed">{testimonial.quote}</p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={`Cliente ${testimonial.name}`}
                  width={50}
                  height={50}
                  loading="lazy"
                  decoding="async"
                  className="h-[50px] w-[50px] rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <span className="text-sm text-slate-500">{testimonial.title}</span>
                </div>
              </div>
            </div>
          )}
        />
      </div>
    </Section>
  );
};

export default TestimonialsSection;
