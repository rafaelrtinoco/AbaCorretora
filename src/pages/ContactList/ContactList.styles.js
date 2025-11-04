import styled from "styled-components";
import { theme } from "../../theme";

export const ContactsContainer = styled.section`
  padding: 4rem 0;
  background-color: ${theme.colors.lightGray};
  min-height: 80vh;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`;

export const ContactsTableWrapper = styled.div`
  max-width: 1000px;
  margin: 2rem auto 0;
  padding: 0 2rem;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`;

export const ContactsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: ${theme.colors.white};
  border-radius: 12px;
  box-shadow: ${theme.shadows?.medium ||
  "0 4px 12px rgba(0, 0, 0, 0.05)"};
  overflow: hidden;
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
    white-space: nowrap; 
  }

  td {
    color: ${theme.colors.mediumGray};
    font-size: 1rem;
    
    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: 0.85rem; 
    }
  }

  tr:last-child td {
    border-bottom: none;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    th,
    td {
      padding: 0.75rem;
    }
  }
`;

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
  min-width: 90px;

  &:hover {
    background: ${({ isCopied, theme }) =>
      isCopied ? "#28a745" : theme.colors.primaryDark};
  }

  &:disabled {
    cursor: default;
  }
`;

// **NOVO ESTILO:** Para garantir que o número de contato não quebre a linha no mobile
export const ContactNumberCell = styled.td`
  white-space: nowrap; /* Impede a quebra de linha */
  min-width: 130px; /* Garante espaço mínimo para o número */
  text-align: right; /* Alinha o número à direita para melhor leitura em tabelas */

  @media (max-width: ${theme.breakpoints.mobile}) {
    min-width: 100px; /* Pode ajustar para telas menores */
    font-size: 0.85rem;
  }
`;

// **NOVO ESTILO:** Para os links de portal/app
export const PortalLink = styled.a`
  color: ${theme.colors.primary}; /* Ou outra cor de link do seu tema */
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.85rem;
  }
`;