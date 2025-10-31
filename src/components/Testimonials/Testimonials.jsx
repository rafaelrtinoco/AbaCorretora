import React, { useRef } from "react";
import {
  TestimonialsContainer,
  TestimonialContent,
  TestimonialText,
  TestimonialCard,
  SectionTitle,
  CarouselWrapper,
  TestimonialCarouselViewport,
  TestimonialCarouselTrack,
  TestimonialSlide,
  TestimonialCarouselControls,
  TestimonialCarouselButton,
} from "./Testimonials.styles";

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
      "Mariana é uma corretora excelente: muito atenciosa, detalhista, com atendimento cordial e vasto conhecimento do mercado segurador. Sempre nos apresenta as melhores opções para proteger a vida, os bens, os serviços e também em soluções financeiras. ",
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
  const trackRef = useRef(null);

  const scrollBySlide = (direction) => {
    if (!trackRef.current) return;

    const slide = trackRef.current.querySelector(":scope > *");
    if (!slide) return;

    const slideWidth = slide.getBoundingClientRect().width;

    const trackStyle = window.getComputedStyle(trackRef.current);
    const gap = parseFloat(trackStyle.gap) || 16;

    const delta = direction === "next" ? slideWidth + gap : -(slideWidth + gap);

    trackRef.current.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <TestimonialsContainer id="testimonials">
      <TestimonialContent>
        <div>
          <SectionTitle>O que nossos clientes dizem</SectionTitle>
          <TestimonialText>
            Mais de 400 clientes confiam em nossos serviços de proteção. Sua
            satisfação é nossa maior recompensa.
          </TestimonialText>
        </div>

        <CarouselWrapper>
          <TestimonialCarouselViewport>
            <TestimonialCarouselTrack ref={trackRef}>
              {testimonials.map((testimonial) => (
                <TestimonialSlide key={testimonial.id}>
                  <TestimonialCard>
                    <div className="quote">"</div>
                    <p className="testimonial">{testimonial.quote}</p>
                    <div className="author">
                      <img
                        src={testimonial.image}
                        alt={`Cliente ${testimonial.name}`}
                      />
                      <div>
                        <h4>{testimonial.name}</h4>
                        <span>{testimonial.title}</span>
                      </div>
                    </div>
                  </TestimonialCard>
                </TestimonialSlide>
              ))}
            </TestimonialCarouselTrack>
          </TestimonialCarouselViewport>

          <TestimonialCarouselControls>
            <TestimonialCarouselButton
              aria-label="Anterior"
              onClick={() => scrollBySlide("prev")}
            >
              ◀
            </TestimonialCarouselButton>
            <TestimonialCarouselButton
              aria-label="Próximo"
              onClick={() => scrollBySlide("next")}
            >
              ▶
            </TestimonialCarouselButton>
          </TestimonialCarouselControls>
        </CarouselWrapper>
      </TestimonialContent>
    </TestimonialsContainer>
  );
};

export default TestimonialsSection;
