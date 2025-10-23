import styled from "styled-components";
// Certifique-se de que o caminho para o seu 'theme' está correto
import { theme } from "../../theme";

// Container principal da página, similar ao 'ProductsContainer'
export const ContactsContainer = styled.section`
  padding: 4rem 0;
  background-color: ${theme.colors.lightGray};
  min-height: 80vh; // Garante que a página tenha uma altura mínima

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`;

// Wrapper para a tabela, permite rolagem horizontal em telas pequenas
export const ContactsTableWrapper = styled.div`
  max-width: 1000px;
  margin: 2rem auto 0;
  padding: 0 2rem;
  overflow-x: auto; // Essencial para responsividade da tabela
  -webkit-overflow-scrolling: touch;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`;

// A tabela estilizada
export const ContactsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: ${theme.colors.white};
  border-radius: 12px;
  /* Use a sombra do seu tema, se houver, ou a do ProductCard */
  box-shadow: ${theme.shadows?.medium ||
  "0 4px 12px rgba(0, 0, 0, 0.05)"};
  overflow: hidden; /* Para o border-radius funcionar no 'thead' */
  border: 1px solid ${theme.colors.border || "#e5e7eb"};

  th,
  td {
    padding: 1rem 1.25rem;
    text-align: left;
    border-bottom: 1px solid ${theme.colors.border || "#e5e7eb"};
  }

  th {
    background: ${theme.colors.white};
    color: ${theme.colors.dark};
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  td {
    color: ${theme.colors.mediumGray};
    font-size: 1rem;
  }

  /* Remove a borda da última linha */
  tr:last-child td {
    border-bottom: none;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    th,
    td {
      padding: 0.75rem;
      font-size: 0.9rem;
    }
  }
`;

// Botão de "Copiar" com estado "Copiado!"
export const CopyButton = styled.button`
  background: ${({ isCopied, theme }) =>
    isCopied ? "#28a745" : theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all ${theme.transitions.default};
  font-size: 0.9rem;
  min-width: 90px; /* Evita que o botão mude de tamanho */

  &:hover {
    background: ${({ isCopied, theme }) =>
      isCopied ? "#28a745" : theme.colors.primaryDark};
  }

  &:disabled {
    cursor: default;
  }
`;