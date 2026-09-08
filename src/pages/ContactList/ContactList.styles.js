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

export const ContactsListWrapper = styled.div`
  max-width: 900px;
  margin: 2rem auto 0;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.85rem 1.1rem;
  margin-bottom: 0.5rem;
  border: 1px solid ${theme.colors.border || "#e5e7eb"};
  border-radius: 10px;
  font-size: 1rem;
  color: ${theme.colors.dark};
  background: ${theme.colors.white};
  transition: ${theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px ${theme.colors.primary}22;
  }

  &::placeholder {
    color: ${theme.colors.mediumGray};
  }
`;

export const EmptyState = styled.p`
  text-align: center;
  color: ${theme.colors.mediumGray};
  padding: 2rem 0;
`;

export const InsurerCard = styled.div`
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.border || "#e5e7eb"};
  border-radius: 12px;
  box-shadow: ${theme.shadows?.medium || "0 4px 12px rgba(0, 0, 0, 0.05)"};
  overflow: hidden;
  border-color: ${({ $expanded }) =>
    $expanded ? theme.colors.primary : theme.colors.border || "#e5e7eb"};
  transition: ${theme.transitions.default};
`;

export const InsurerHeader = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  font: inherit;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0.85rem 1rem;
    flex-wrap: wrap;
  }
`;

export const InsurerHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const InsurerName = styled.span`
  font-size: 1.05rem;
  font-weight: 700;
  color: ${theme.colors.dark};
`;

export const InsurerHeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const PortalLink = styled.a`
  color: ${theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.8rem;
  }
`;

export const ExpandButton = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.primary};
  font-size: 1.1rem;
  transform: rotate(${({ $expanded }) => ($expanded ? "180deg" : "0deg")});
  transition: transform ${theme.transitions.default};
`;

export const ContactsList = styled.div`
  border-top: 1px solid ${theme.colors.border || "#e5e7eb"};
`;

export const ContactRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: 1rem;
  padding: 0.9rem 1.25rem;
  border-bottom: 1px solid ${theme.colors.border || "#e5e7eb"};

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    padding: 0.85rem 1rem;
  }
`;

export const ContactLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  color: ${theme.colors.dark};
  font-size: 0.92rem;
  font-weight: 600;

  small {
    color: ${theme.colors.mediumGray};
    font-size: 0.8rem;
    font-weight: 400;
  }
`;

export const ContactValue = styled.div`
  color: ${theme.colors.mediumGray};
  font-size: 0.95rem;
  white-space: nowrap;
  text-align: right;

  @media (max-width: ${theme.breakpoints.mobile}) {
    text-align: left;
    white-space: normal;
    font-size: 0.9rem;
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
  font-size: 0.85rem;
  min-width: 90px;
  flex-shrink: 0;

  &:hover {
    background: ${({ isCopied, theme }) =>
      isCopied ? "#28a745" : theme.colors.primaryDark};
  }

  &:disabled {
    cursor: default;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
  }
`;