import React from 'react';
import { TestimonialsContainer, TestimonialContent, TestimonialText, TestimonialCard, SectionTitle } from './Testimonials.styles';


const TestimonialsSection = () => {
  return (
    <TestimonialsContainer id="testimonials">
      <TestimonialContent>
        <div>
          <SectionTitle>
            O que nossos clientes dizem
          </SectionTitle>
          <TestimonialText>
            Mais de 10.000 clientes confiam em nossos serviços de proteção. Sua satisfação é nossa maior recompensa.
          </TestimonialText>
        </div>
        
        <TestimonialCard>
          <div className="quote">"</div>
          <p className="testimonial">
            Contratei o seguro auto e fiquei impressionado com a agilidade no atendimento quando precisei acionar. Indico para todos!
          </p>
          <div className="author">
            <img src="/assets/avatars/user1.jpg" alt="Cliente satisfeito" />
            <div>
              <h4>Roberto Silva</h4>
              <span>Cliente há 3 anos</span>
            </div>
          </div>
        </TestimonialCard>
      </TestimonialContent>
    </TestimonialsContainer>
  );
};

export default TestimonialsSection;