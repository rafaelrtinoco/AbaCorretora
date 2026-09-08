import React, { useMemo, useState } from "react";
import { SectionTitle, SectionSubtitle } from "../../App.styles";
import {
  ContactsContainer,
  ContactsListWrapper,
  SearchInput,
  InsurerCard,
  InsurerHeader,
  InsurerHeaderLeft,
  InsurerName,
  InsurerHeaderRight,
  PortalLink,
  ExpandButton,
  ContactsList,
  ContactRow,
  ContactLabel,
  ContactValue,
  CopyButton,
  EmptyState,
} from "./ContactList.styles";

// ─────────────────────────────────────────────
// Cada seguradora pode ter vários canais de contato
// (WhatsApp, SAC, Ouvidoria, Assistência 24h, etc.),
// por isso cada uma tem sua própria lista de "contacts".
// Para adicionar uma seguradora nova, basta incluir um
// novo objeto neste array.
// ─────────────────────────────────────────────
const brokerages = [
  {
    id: "porto",
    name: "Porto",
    link: "https://play.google.com/store/apps/details?id=br.com.portoseguro.experienciacliente.mundoporto&pcampaignid=web_share",
    linkLabel: "Baixe o App para acessar",
    contacts: [
      {
        label: "WhatsApp e Central Geral",
        value: "3003-9303",
        note: "Adicione aos contatos para usar o assistente virtual",
      },
      {
        label: "SAC (Informações, Reclamações e Cancelamentos)",
        value: "0800 727 2745",
        note: "24 horas",
      },
      {
        label: "Atendimento para Deficientes Auditivos",
        value: "0800 701 5582",
      },
      {
        label: "Ouvidoria",
        value: "0800 727 1184",
        note: "Segunda a sexta-feira, das 8h15 às 18h30",
      },
      {
        label: "Assistência 24h / Sinistro (Auto/Residência)",
        value: "3333-7678 ou 3333-7686",
        note: "3333-PORTO — número pode variar conforme a localidade",
      },
    ],
  },
  {
    id: "azul",
    name: "Azul Seguros",
    link: "https://play.google.com/store/apps/details?id=br.com.portoseguro.experienciacliente.mundoporto&pcampaignid=web_share",
    linkLabel: "Baixe o App para acessar",
    contacts: [
      { label: "Capitais e Grandes Centros", value: "4004-3700" },
      {
        label: "Outras Regiões",
        value: "0800 703 0203 ou 0300 123 2985",
      },
      { label: "Atendimento no Mercosul", value: "+55 (11) 3366-2986" },
    ],
  },
  {
    id: "itau",
    name: "Itaú Seguros",
    link: "https://play.google.com/store/apps/details?id=br.com.portoseguro.experienciacliente.mundoporto&pcampaignid=web_share",
    linkLabel: "Baixe o App para acessar",
    contacts: [
      {
        label: "Central de Atendimento (Capitais e Regiões Metropolitanas)",
        value: "3003 1001",
      },
      {
        label: "Central de Atendimento (Demais Localidades)",
        value: "0800 720 1001",
      },
      {
        label: "Assistência 24 Horas (Capitais e Regiões Metropolitanas)",
        value: "3003 1010",
      },
      {
        label: "Assistência 24 Horas (Demais Localidades)",
        value: "0800 720 1010",
      },
      { label: "Ouvidoria", value: "0800 570 0011" },
    ],
  },
  {
    id: "mitsui",
    name: "Mitsui Sumitomo",
    link: "https://play.google.com/store/apps/details?id=br.com.portoseguro.experienciacliente.mundoporto&pcampaignid=web_share",
    linkLabel: "Baixe o App para acessar",
    contacts: [
      { label: "Central de Atendimento", value: "0800 707 7883" },
      {
        label: "SAC (Sugestões, Reclamações e Cancelamentos)",
        value: "0800 773 6744",
      },
      { label: "Ouvidoria", value: "0800 888 6744" },
      { label: "SOS Cargas", value: "0800 767 6744" },
      {
        label: "Seguro Auto (Central de Atendimento e Sinistros)",
        value: "3004-6206 ou 0800 727 3101",
        note: "3004-6206 (Capitais e Regiões Metropolitanas) / 0800 727 3101 (Demais localidades)",
      },
    ],
  },
  {
    id: "suhai",
    name: "Suhai",
    link: "https://play.google.com/store/apps/details?id=br.com.dialog.suhai&pcampaignid=web_share",
    linkLabel: "Baixe o App para acessar",
    contacts: [
      {
        label: "Roubo ou Furto (24h)",
        value: "3003-0335 ou 0800-784-2410",
        note: "3003-0335 (SP e RJ) / 0800-784-2410 (demais regiões)",
      },
      {
        label: "Assistência 24h (Guincho, troca de pneu e auxílio mecânico)",
        value: "0800-327-8424",
        note: "Também funciona como WhatsApp",
      },
      {
        label: "Atendimento ao Segurado (Boletos, apólices e temas administrativos)",
        value: "3003-0335 ou 0800-784-2410",
        note: "Seg/Sex das 8h às 19h — 3003-0335 (SP e RJ) / 0800-784-2410 (demais regiões)",
      },
      {
        label: "Ouvidoria",
        value: "0800-772-1214",
        note: "Segunda a sexta-feira, das 8h às 19h",
      },
    ],
  },
  {
    id: "allianz",
    name: "Allianz",
    link: "https://play.google.com/store/apps/details?id=br.com.allianz.mobile.auto&pcampaignid=web_share",
    linkLabel: "Baixe o App para acessar",
    contacts: [
      {
        label: "Linha Direta (Clientes)",
        value: "4090-1110 ou 0800 777 7243",
        note: "4090-1110 (Capitais) / 0800 777 7243 (Demais regiões)",
      },
      {
        label: "SAC (24h — reclamações e cancelamentos)",
        value: "08000 115 215",
      },
      { label: "WhatsApp oficial", value: "(11) 4090-1110" },
      { label: "Ouvidoria", value: "0800 771 3313" },
      {
        label: "Deficientes Auditivos ou de Fala",
        value: "08000 121 239",
      },
    ],
  },
  {
    id: "yelum",
    name: "Yelum",
    link: null,
    linkLabel: null,
    contacts: [
      { label: "Atendimento WhatsApp / 24h", value: "(11) 3206-1414" },
      {
        label: "Assistência 24h (Seguro Auto)",
        value: "0800-701-4120",
      },
      {
        label: "Assistência 24h (Empresas e Residências)",
        value: "0800-702-5100",
      },
      {
        label: "Ouvidoria",
        value: "0800-740-3994",
        note: "Deficientes auditivos: 0800-721-9104",
      },
    ],
  },
  {
    id: "hdi",
    name: "HDI",
    link: "https://play.google.com/store/apps/details?id=com.hdi.segurado&pcampaignid=web_share",
    linkLabel: "Baixe o App para acessar",
    contacts: [
      { label: "Capitais e Regiões Metropolitanas", value: "3003-5390" },
      { label: "Demais Regiões", value: "0800 434 4340" },
      {
        label: "SAC (Reclamações, cancelamentos e informações)",
        value: "0800 722 7149",
      },
      {
        label: "Atendimento para Deficientes Auditivos",
        value: "0800 772 1825",
      },
    ],
  },
  {
    id: "tokio-marine",
    name: "Tokio Marine",
    link: "https://play.google.com/store/apps/details?id=br.com.tokiomarine.seguradora.mobile.superapp&pcampaignid=web_share",
    linkLabel: "Baixe o App para acessar",
    contacts: [
      {
        label: "Central de Atendimento e Assistência 24h",
        value: "0800 318 6546",
      },
      {
        label: "SAC (Cancelamentos, elogios e reclamações)",
        value: "0800 703 9000",
      },
      { label: "Ouvidoria", value: "0800 449 0000" },
      { label: "WhatsApp oficial", value: "(11) 99578-6546" },
    ],
  },
  {
    id: "akad",
    name: "Akad",
    link: "https://play.google.com/store/apps/details?id=akad.pay&pcampaignid=web_share",
    linkLabel: "Baixe o App para acessar",
    contacts: [
      {
        label: "Central de Atendimento",
        value: "4000-1246",
        note: "Segunda a sexta, das 7h às 19h",
      },
      {
        label: "Demais Localidades e SAC",
        value: "0800 942 2746",
        note: "Segunda a sexta, das 7h às 19h",
      },
      {
        label: "Central de Sinistros",
        value: "0800 777 2746",
        note: "Disponível 24 horas por dia, 7 dias por semana",
      },
      { label: "WhatsApp (Atendimento / Kadu)", value: "(11) 5196-2523" },
      {
        label: "Ouvidoria",
        value: "0800 940 0312",
        note: "Segunda a sexta, das 9h às 18h",
      },
      {
        label: "E-mail de Atendimento",
        value: "atendimento@akadseguros.com.br",
        isEmail: true,
      },
    ],
  },
  {
    id: "zurich",
    name: "Zurich",
    link: "https://play.google.com/store/apps/details?id=com.zurichbrasil.app_zurich_client&pcampaignid=web_share",
    linkLabel: "Baixe o App para acessar",
    contacts: [
      {
        label: "Capitais e Regiões Metropolitanas",
        value: "4020 4848",
        note: "Segunda a sexta, das 8h às 20h, e sábados das 8h às 18h",
      },
      {
        label: "Demais Localidades",
        value: "0800 285 4141",
        note: "Mesmo horário acima",
      },
      {
        label: "SAC",
        value: "0800 284 4848",
        note: "24 horas por dia, 7 dias por semana",
      },
      {
        label: "Deficientes Auditivos (TTS)",
        value: "0800 275 8585",
        note: "Segunda a sexta, das 8h às 20h, e sábado das 8h às 14h",
      },
      {
        label: "WhatsApp",
        value: "(11) 2890 2121",
        note: "Segunda a sexta, das 8h às 20h, e sábado das 8h às 14h",
      },
    ],
  },
  {
    id: "pier",
    name: "Pier",
    link: null,
    linkLabel: null,
    contacts: [
      {
        label: "Assistência 24h (Telefone)",
        value: "0800 770 9356",
        note: "Pelo App/central 24h",
      },
      { label: "Assistência 24h (WhatsApp)", value: "(11) 4393-1587" },
      {
        label: "Vidros, Faróis e Retrovisores",
        value: "0800 777 2174",
      },
    ],
  },
  {
    id: "junto-seguros",
    name: "Junto Seguros",
    link: null,
    linkLabel: null,
    contacts: [
      { label: "Ouvidoria", value: "0800 643 0301" },
      {
        label: "Atendimento para Deficientes Auditivos",
        value: "0800 742 6060",
      },
      {
        label: "E-mail de Suporte",
        value: "faleconosco@juntoseguros.com",
        isEmail: true,
      },
    ],
  },
  {
    id: "ezze",
    name: "EZZE",
    link: null,
    linkLabel: null,
    contacts: [
      {
        label: "SAC e Assistência 24h",
        value: "0800 983 3993",
        note: "Disponível todos os dias, 24 horas",
      },
      {
        label: "Ouvidoria",
        value: "0800 983 3993",
        note: "Segunda a sexta-feira, das 9h às 18h",
      },
      {
        label: "Atendimento Online",
        value: "Chat e WhatsApp",
        note: "Disponível no site oficial da Ezze Seguros",
      },
    ],
  },
];

const BrokerContactsPage = () => {
  const [copiedKey, setCopiedKey] = useState(null);
  const [expandedIds, setExpandedIds] = useState(() => new Set());
  const [search, setSearch] = useState("");

  const handleCopy = (contactText, key) => {
    navigator.clipboard.writeText(contactText).then(() => {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    });
  };

  const toggleExpanded = (id) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const filteredBrokerages = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return brokerages;
    return brokerages.filter((b) => b.name.toLowerCase().includes(term));
  }, [search]);

  return (
    <ContactsContainer>
      <SectionTitle>Contatos das Seguradoras</SectionTitle>
      <SectionSubtitle>
        Encontre e entre em contato com nossas seguradoras parceiras.
      </SectionSubtitle>

      <ContactsListWrapper>
        <SearchInput
          type="text"
          placeholder="Buscar seguradora..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Buscar seguradora"
        />

        {filteredBrokerages.length === 0 && (
          <EmptyState>Nenhuma seguradora encontrada.</EmptyState>
        )}

        {filteredBrokerages.map((brokerage) => {
          const isExpanded = expandedIds.has(brokerage.id);

          return (
            <InsurerCard key={brokerage.id} $expanded={isExpanded}>
              <InsurerHeader
                onClick={() => toggleExpanded(brokerage.id)}
                aria-expanded={isExpanded}
              >
                <InsurerHeaderLeft>
                  <InsurerName>{brokerage.name}</InsurerName>
                </InsurerHeaderLeft>
                <InsurerHeaderRight>
                  {brokerage.link && (
                    <PortalLink
                      href={brokerage.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {brokerage.linkLabel}
                    </PortalLink>
                  )}
                  <ExpandButton $expanded={isExpanded} aria-hidden="true">
                    ▾
                  </ExpandButton>
                </InsurerHeaderRight>
              </InsurerHeader>

              {isExpanded && (
                <ContactsList>
                  {brokerage.contacts.map((contact, i) => {
                    const key = `${brokerage.id}-${i}`;
                    return (
                      <ContactRow key={key}>
                        <ContactLabel>
                          {contact.label}
                          {contact.note && <small>{contact.note}</small>}
                        </ContactLabel>
                        <ContactValue>{contact.value}</ContactValue>
                        <CopyButton
                          onClick={() => handleCopy(contact.value, key)}
                          isCopied={copiedKey === key}
                          disabled={copiedKey === key}
                        >
                          {copiedKey === key ? "Copiado!" : "Copiar"}
                        </CopyButton>
                      </ContactRow>
                    );
                  })}
                </ContactsList>
              )}
            </InsurerCard>
          );
        })}
      </ContactsListWrapper>
    </ContactsContainer>
  );
};

export default BrokerContactsPage;