import React from 'react'
import { SectionTitle, SectionSubtitle } from "../../App.styles";
import { PageSection, ContentWrap, TwoCols, Card, Tip } from './Consorcios.styles'

const Consorcios = () => {
  return (
    <>
      <PageSection>
        <ContentWrap>
          <SectionTitle>Consórcios</SectionTitle>
          <SectionSubtitle>
            Planejamento inteligente para conquistar bens sem juros: automóveis, imóveis e muito mais.
          </SectionSubtitle>

          <TwoCols>
            <Card>
              <h3>Como funciona</h3>
              <p>Você participa de um grupo e contribui mensalmente. A cada mês, uma ou mais pessoas são contempladas via sorteio e/ou lance.</p>
              <ul>
                <li>Sem juros: apenas taxa de administração</li>
                <li>Contemplação por sorteio ou lances</li>
                <li>Crédito para compra do bem desejado</li>
              </ul>
              <Tip>Ótima alternativa para quem busca disciplina financeira e planejamento.</Tip>
            </Card>

            <Card>
              <h3>Benefícios</h3>
              <p>Ideal para construir patrimônio pensando no médio e longo prazo.</p>
              <ul>
                <li>Parcelas que cabem no orçamento</li>
                <li>Possibilidade de antecipar com lances</li>
                <li>Crédito para imóveis, veículos e serviços</li>
              </ul>
              <Tip>Perfeito para investimentos futuros e metas como casa própria ou troca de carro.</Tip>
            </Card>
          </TwoCols>

          <TwoCols>
            <Card>
              <h3>Consórcio Imobiliário</h3>
              <p>Use o crédito para comprar, construir ou reformar. Pode compor com FGTS conforme regras vigentes.</p>
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

          <Tip>Fale com um especialista da ABA Corretora para definir prazos, cartas de crédito e estratégias de lance conforme suas metas.</Tip>
        </ContentWrap>
      </PageSection>
    </>
  )
}

export default Consorcios