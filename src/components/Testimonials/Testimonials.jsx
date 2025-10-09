import React from "react";
import {
  TestimonialsContainer,
  TestimonialContent,
  TestimonialText,
  TestimonialCard,
  SectionTitle,
} from "./Testimonials.styles";
import Cliente from "../../assets/Img/jucelino.png";

const TestimonialsSection = () => {
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

        <TestimonialCard>
          <div className="quote">"</div>
          <p className="testimonial">
            Aba Corretora, cuida da frota de veículos da minha Empresa com muita
            atenção e cuidado, toda equipe é muito atenciosa e o atendimento
            rápido e eficiênte, eu super recomendo.
          </p>
          <div className="author">
            <img src={Cliente} alt="Cliente satisfeito" />
            <div>
              <h4>Jucelino Mendes</h4>
              <span>Cliente há 2 anos</span>
            </div>
          </div>
        </TestimonialCard>
      </TestimonialContent>
    </TestimonialsContainer>
  );
};

export default TestimonialsSection;
