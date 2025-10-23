import React, { useState } from "react";
// Importe os estilos globais que você já usa, como no seu Home.jsx
import { SectionTitle, SectionSubtitle } from "../../App.styles";
// Importe os novos estilos que criaremos para esta página
import {
  ContactsContainer,
  ContactsTableWrapper,
  ContactsTable,
  CopyButton,
} from "./ContactList.styles";
const brokerages = [
  {
    id: 1,
    name: "Corretora Exemplo Alfa",
    contact: "(11) 99999-1234",
  },
  {
    id: 2,
    name: "Beta Seguros",
    contact: "(21) 98888-5678",
  },
  {
    id: 3,
    name: "Gama Corretora",
    contact: "(31) 97777-4321",
  },
];

const BrokerContactsPage = () => {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (contactText, id) => {
    navigator.clipboard.writeText(contactText).then(() => {
      setCopiedId(id);

      setTimeout(() => {
        setCopiedId(null);
      }, 2000);
    });
  };

  return (
    <ContactsContainer>
      <SectionTitle>Contatos das Corretoras</SectionTitle>
      <SectionSubtitle>
        Encontre e entre em contato com nossas corretoras parceiras.
      </SectionSubtitle>

      <ContactsTableWrapper>
        <ContactsTable>
          <thead>
            <tr>
              <th>Corretora</th>
              <th>Contato</th>
              <th>Copiar</th>
            </tr>
          </thead>
          <tbody>
            {brokerages.map((brokerage) => (
              <tr key={brokerage.id}>
                <td>{brokerage.name}</td>
                <td>{brokerage.contact}</td>
                <td>
                  <CopyButton
                    onClick={() => handleCopy(brokerage.contact, brokerage.id)}
                    isCopied={copiedId === brokerage.id}
                    disabled={copiedId === brokerage.id}
                  >
                    {copiedId === brokerage.id ? "Copiado!" : "Clique aqui"}
                  </CopyButton>
                </td>
              </tr>
            ))}
          </tbody>
        </ContactsTable>
      </ContactsTableWrapper>
    </ContactsContainer>
  );
};

export default BrokerContactsPage;
