# ABA Corretora de Seguros

Site institucional da ABA Seguros: cotação e contato para seguros, planos de saúde, consórcios e parcerias, com atendimento via WhatsApp. Produção em [abacorretoradeseguros.com.br](https://abacorretoradeseguros.com.br).

## Stack

- **Frontend:** React 19 + Vite 7 (JavaScript, sem TypeScript)
- **Estilo:** Tailwind CSS v4 (`@tailwindcss/vite`), tokens de design em `src/index.css`
- **Roteamento:** React Router v7 (`BrowserRouter`)
- **SEO:** `react-helmet-async` via `src/components/SEO/SEO.jsx`
- **Infra:** Vercel (SPA estática)

## Rodando localmente

```bash
npm install              # instala dependências
npm run dev               # sobe o dev server (Vite)
npm run build              # build de produção em dist/
npm run preview            # serve o build de produção localmente
npm run lint                # eslint
npm run optimize:images      # redimensiona/recomprime imagens em src/assets/image
```

> Não há suite de testes nem typecheck configurados neste projeto.

## Estrutura de pastas

```
src/
├── main.jsx                 # bootstrap: HelmetProvider > BrowserRouter > App
├── App.jsx                  # layout fixo (Header/Footer/etc.) + definição das rotas
├── index.css                 # @import "tailwindcss" + tokens de design (@theme)
├── lib/
│   └── cn.js                  # joiner de className (sem tailwind-merge, ver comentário no arquivo)
├── components/
│   ├── ui/                     # primitivas compartilhadas: Button, Card, Carousel,
│   │                            # Container, Hero, Section, SectionHeading
│   └── <Nome>/<Nome>.jsx        # componentes de layout: Header, Footer, FAQ, Partners,
│                                # Testimonials, CookieBanner, WhatsAppFloat, ScrollToTop, SEO
└── pages/
    └── <Pagina>/<Pagina>.jsx    # uma pasta por página (Home, Seguros, Saude, Consorcios,
                                 # Contato, ContactList, ContrateAgora, Parcerias)
```

Cada página/componente mora em sua própria pasta nomeada igual ao arquivo (`src/pages/Saude/Saude.jsx`, `src/components/Header/Header.jsx`). O alias `@` aponta para `src/` (configurado em `vite.config.js`).

## Convenções

- **Rota nova:** criar a página em `src/pages/<Nome>/<Nome>.jsx`, registrar em `src/App.jsx` e, se for item de menu, incluir no array `NAV_LINKS` de `src/components/Header/Header.jsx`.
- **Seguradora nova/edição de contato:** editar o array `brokerages` em `src/pages/ContactList/brokerages.js` — cada seguradora é um objeto com sua própria lista de `contacts`.
- **Cores, fontes e sombras:** só no bloco `@theme` de `src/index.css` (paleta `navy-*`/`brand-*`, `--font-sans`, `--shadow-card`) — não hardcodar hex direto nos componentes.
- **Classes condicionais:** usar `cn()` de `src/lib/cn.js`.
- **Imagens:** sempre `.webp` em `src/assets/image/`; depois de adicionar/trocar uma imagem, rodar `npm run optimize:images` (script idempotente via `sharp`, ver `scripts/optimize-images.mjs`).
- **Textos de UI:** em pt-BR.

## Deploy (Vercel)

- Push em `main` → deploy de **produção** (`abacorretoradeseguros.com.br`).
- Push em qualquer outra branch → deploy de **Preview** automático, com URL própria.
- `vercel.json` reescreve todas as rotas para `/index.html` — necessário porque o roteamento é client-side (`BrowserRouter`); sem isso, acessar uma rota como `/seguradoras` direto na URL retornaria 404.
