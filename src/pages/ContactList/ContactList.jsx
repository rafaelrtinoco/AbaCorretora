import React, { useState } from "react";
import { SectionTitle, SectionSubtitle } from "../../App.styles";
import {
  ContactsContainer,
  ContactsTableWrapper,
  ContactsTable,
  CopyButton,
  ContactNumberCell, 
  PortalLink, 
} from "./ContactList.styles";

const brokerages = [
  {
    id: 1,
    name: "Porto",
    description: "Baixe o App para acessar.",
    link: "https://play.google.com/store/apps/details?id=br.com.portoseguro.experienciacliente.mundoporto&pcampaignid=web_share", // Link para o portal/app
    contact: "(11) 3003-9303",
  },
  {
    id: 2,
    name: "Azul",
    description: "Baixe o App para acessar.",
    link: "https://play.google.com/store/apps/details?id=br.com.portoseguro.experienciacliente.mundoporto&pcampaignid=web_share", // Link para o portal/app
    contact: "(11) 3003-9303",
  },
  {
    id: 3,
    name: "Itaú",
    description: "Baixe o App para acessar.",
    link: "https://play.google.com/store/apps/details?id=br.com.portoseguro.experienciacliente.mundoporto&pcampaignid=web_share", // Link para o portal/app
    contact: "(11) 3003-9303",
  },
  {
    id: 4,
    name: "Mitsui",
    description: "Baixe o App para acessar.",
    link: "https://play.google.com/store/apps/details?id=br.com.portoseguro.experienciacliente.mundoporto&pcampaignid=web_share", 
    contact: "(11) 3003-9303",
  },
  {
    id: 5,
    name: "Suhai",
    description: "Baixe o App para acessar.",
    link: "https://play.google.com/store/apps/details?id=br.com.dialog.suhai&pcampaignid=web_share", 
    contact: "(11) 3003-0335",
  },
  {
    id: 6,
    name: "Allianz",
    description: "Baixe o App para acessar.",
    link: "https://play.google.com/store/apps/details?id=br.com.allianz.mobile.auto&pcampaignid=web_share", 
    contact: "(11) 4090-1110",
  },
  {
    id: 7,
    name: "HDI",
    description: "Baixe o App para acessar.",
    link: "https://play.google.com/store/apps/details?id=com.hdi.segurado&pcampaignid=web_share", 
    contact: "0800 770 1608",
  },
  {
    id: 8,
    name: "Tokio Marine",
    description: "Baixe o App para acessar.",
    link: "https://play.google.com/store/apps/details?id=br.com.tokiomarine.seguradora.mobile.superapp&pcampaignid=web_share", 
    contact: "(11) 99578-6546",
  },
  {
    id: 9,
    name: "Akad",
    description: "Baixe o App para acessar.",
    link: "https://play.google.com/store/apps/details?id=akad.pay&pcampaignid=web_share", 
    contact: "(11) 5196-2523",
  },
  {
    id: 10,
    name: "Zurich",
    description: "Baixe o App para acessar.",
    link: "https://play.google.com/store/apps/details?id=com.zurichbrasil.app_zurich_client&pcampaignid=web_share", 
    contact: "(11) 2125-2723",
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
              <th>Portal / App</th> {/* Nova coluna para descrição com link */}
              <th>Contato</th>
              <th>Copiar</th>
            </tr>
          </thead>
          <tbody>
            {brokerages.map((brokerage) => (
              <tr key={brokerage.id}>
                <td>{brokerage.name}</td>
                <td>
                  <PortalLink
                    href={brokerage.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {brokerage.description}
                  </PortalLink>
                </td>
                <ContactNumberCell>
                  {/* Aplica o estilo para não quebrar a linha */}
                  {brokerage.contact}
                </ContactNumberCell>
                <td>
                  <CopyButton
                    onClick={() => handleCopy(brokerage.contact, brokerage.id)}
                    isCopied={copiedId === brokerage.id}
                    disabled={copiedId === brokerage.id}
                  >
                    {copiedId === brokerage.id ? "Copiado!" : "Copiar"}
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