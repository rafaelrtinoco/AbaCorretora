import { useMemo, useState } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { Section } from "../../components/ui/Section";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { cn } from "../../lib/cn";
import { brokerages } from "./brokerages";

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
    <Section tone="white" className="pt-32 md:pt-40">
      <SectionHeading
        title="Contatos das Seguradoras"
        subtitle="Encontre e entre em contato com nossas seguradoras parceiras."
      />

      <div className="mx-auto mt-10 max-w-3xl">
        <div className="relative">
          <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-slate-400" aria-hidden="true" />
          <input
            type="text"
            placeholder="Buscar seguradora..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Buscar seguradora"
            className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-navy-900 shadow-card placeholder:text-slate-400 focus:border-brand-500"
          />
        </div>

        {filteredBrokerages.length === 0 && (
          <p className="mt-8 text-center text-slate-500">Nenhuma seguradora encontrada.</p>
        )}

        <div className="mt-6 flex flex-col gap-4">
          {filteredBrokerages.map((brokerage) => {
            const isExpanded = expandedIds.has(brokerage.id);
            const panelId = `broker-panel-${brokerage.id}`;
            const buttonId = `broker-button-${brokerage.id}`;

            return (
              <div
                key={brokerage.id}
                className={cn(
                  "overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-slate-200/70 transition-shadow",
                  isExpanded && "shadow-card-hover"
                )}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={panelId}
                    onClick={() => toggleExpanded(brokerage.id)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="text-lg font-semibold text-navy-900">{brokerage.name}</span>
                    <span className="flex items-center gap-3">
                      {brokerage.link && (
                        <a
                          href={brokerage.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="hidden text-sm font-semibold text-brand-600 hover:underline sm:inline"
                        >
                          {brokerage.linkLabel}
                        </a>
                      )}
                      <FiChevronDown
                        aria-hidden="true"
                        className={cn("text-xl text-slate-400 transition-transform duration-200", isExpanded && "rotate-180")}
                      />
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                  style={{ gridTemplateRows: isExpanded ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col gap-4 border-t border-slate-100 px-5 py-5">
                      {brokerage.link && (
                        <a
                          href={brokerage.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-brand-600 hover:underline sm:hidden"
                        >
                          {brokerage.linkLabel}
                        </a>
                      )}
                      {brokerage.contacts.map((contact, i) => {
                        const key = `${brokerage.id}-${i}`;
                        const isCopied = copiedKey === key;
                        return (
                          <div key={key} className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                              <p className="font-medium text-navy-900">{contact.label}</p>
                              {contact.note && <p className="mt-0.5 text-sm text-slate-500">{contact.note}</p>}
                            </div>
                            <div className="flex shrink-0 items-center gap-3">
                              <span className="font-semibold text-brand-600">{contact.value}</span>
                              <button
                                type="button"
                                onClick={() => handleCopy(contact.value, key)}
                                disabled={isCopied}
                                className={cn(
                                  "rounded-lg px-3 py-1.5 text-sm font-semibold transition-colors",
                                  isCopied
                                    ? "bg-emerald-100 text-emerald-700"
                                    : "bg-slate-100 text-navy-900 hover:bg-slate-200"
                                )}
                              >
                                {isCopied ? "Copiado!" : "Copiar"}
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default BrokerContactsPage;
