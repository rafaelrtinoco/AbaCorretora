import styled from 'styled-components';
import { theme } from '../../theme';

export const CookieBannerContainer = styled.div`
  position: fixed;
  bottom: 1.5rem;  /* Adicionado espaçamento do final da tela */
  left: 50%;       /* Posiciona o início do banner no meio da tela */
  transform: translateX(-50%); /* Centraliza o banner horizontalmente */
  
  width: calc(100% - 2rem); /* Garante um espaçamento nas laterais em telas menores */
  max-width: 1200px;        /* Define a largura máxima solicitada */
  
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 1.5rem 2rem;
  
  display: flex;
  align-items: center; /* Alinha o ícone, texto e botão verticalmente */
  gap: 1.5rem;
  
  border-radius: 12px; /* Adiciona as bordas arredondadas */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  z-index: 1000;

  /* Estilização para o ícone que será adicionado via react-icons */
  svg {
    font-size: 2rem; /* Tamanho do ícone */
    color: ${theme.colors.white}; /* Cor do ícone */
    flex-shrink: 0; /* Impede que o ícone seja esmagado em telas menores */
  }

  /* Em telas menores, o layout vira uma coluna */
  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    padding: 1.5rem;
  }
`;

export const CookieText = styled.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;

  a {
    color: ${theme.colors.dark};
    font-weight: bold;
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
`;

export const AcceptButton = styled.button`
  background-color: ${theme.colors.secundary};
  color: ${theme.colors.white};
  border: none;
  border-radius: 8px;
  padding: 0.8rem 1.8rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  flex-shrink: 0; /* Impede que o botão seja esmagado */

  &:hover {
    background-color: #fd5000;
  }
`;