import React from "react";
import { SectionTitle, SectionSubtitle } from "../../App.styles";
import {
  PageSection,
  ContentWrap,
  TwoCols,
  Card,
  Tip,
  HeroContainer,
  HeroContent,
  HeroImage,
  HeroRow,
  HeroTitle,
  HeroText,
  HeroDivider,
  ProductButton, CardImage
} from "./Consorcios.styles";
import ImgConsorcio from "../../assets/Img/img-consorcio.png";
import Consorcio2 from "../../assets/Img/consorcio2.png"
import Consorcio1 from "../../assets/Img/consorcio1.png"

const Consorcios = () => {
  return (
    <>
      <HeroContainer>
        <HeroContent>
          <HeroRow>
            <HeroText>
              <HeroTitle>
                Planos que cabem no seu bolso e te darão um futuro confortável.
              </HeroTitle>
            </HeroText>
            <HeroImage src={ImgConsorcio} alt="imagem hero" />
          </HeroRow>
        </HeroContent>

        <HeroDivider />
      </HeroContainer>
      <PageSection>
        <ContentWrap>
          <SectionTitle>Consórcios</SectionTitle>
          <SectionSubtitle>
            Planejamento inteligente para conquistar bens sem juros: automóveis,
            imóveis e muito mais.
          </SectionSubtitle>

          <TwoCols>
            <Card>
              <CardImage src={Consorcio1} alt="Representação visual de como funciona o consórcio" />
              <h3>Como funciona</h3>
              <p>
                Você participa de um grupo e contribui mensalmente. A cada mês,
                uma ou mais pessoas são contempladas via sorteio e/ou lance.
              </p>
              <ul>
                <li>Sem juros: apenas taxa de administração</li>
                <li>Contemplação por sorteio ou lances</li>
                <li>Crédito para compra do bem desejado</li>
              </ul>
              <Tip>
                Ótima alternativa para quem busca disciplina financeira e
                planejamento.
              </Tip>
              <ProductButton>Planos a partir de R$ 30,00</ProductButton>
            </Card>

            <Card>
              <CardImage src={Consorcio2} alt="Representação visual de como funciona o consórcio" />
              <h3>Benefícios</h3>
              <p>
                Ideal para construir patrimônio pensando no médio e longo prazo. Investimento para um futuro mais seguro com um maior patrimonio.
              </p>
              <ul>
                <li>Parcelas que cabem no orçamento</li>
                <li>Possibilidade de antecipar com lances</li>
                <li>Crédito para imóveis, veículos e serviços</li>
              </ul>
              <Tip>
                Perfeito para investimentos futuros e metas como casa própria ou
                troca de carro.
              </Tip>
              <ProductButton>Lances atrativos</ProductButton>
            </Card>
          </TwoCols>

          <TwoCols>
            <Card>
              <h3>Consórcio Imobiliário</h3>
              <p>
                Use o crédito para comprar, construir ou reformar. Pode compor
                com FGTS conforme regras vigentes.
              </p>
              <ul>
                <li>Prazo estendido e parcelas acessíveis</li>
                <li>Flexibilidade de uso do crédito</li>
                <li>Sem entrada obrigatória</li>
              </ul>
            </Card>
            <Card>
              <h3>Consórcio de Automóveis</h3>
              <p>Planejamento para adquirir seu veículo sem pagar juros.</p>
              <ul>
                <li>Novos e seminovos</li>
                <li>Lances para antecipação</li>
                <li>Seguro de vida e outras coberturas acopladas</li>
              </ul>
            </Card>
          </TwoCols>

          <Tip>
            Fale com um especialista da ABA Corretora para definir prazos,
            cartas de crédito e estratégias de lance conforme suas metas.
          </Tip>
        </ContentWrap>
      </PageSection>
    </>
  );
};

export default Consorcios;
