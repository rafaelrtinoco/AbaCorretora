import {
  CTASection,
  CTAInner,
  CTAText,
  CTAButtonWrapper,
  CTAButton,
} from "./PartnerCTA.styles";

export const PartnerCTA = () => {
  return (
    <CTASection>
      <CTAInner>
        <CTAText>
          <h3>Assistência 24h e Sinistros, você pode acionar a Seguradora.</h3>
          <p>
            Precisa acionar o guincho, reportar um roubo, furto ou colisão?
            Encontre aqui o canal de atendimento direto da sua seguradora.
          </p>
        </CTAText>
        <CTAButtonWrapper>
          <CTAButton to="/seguradoras">Ver Contatos</CTAButton>
        </CTAButtonWrapper>
      </CTAInner>
    </CTASection>
  );
};
