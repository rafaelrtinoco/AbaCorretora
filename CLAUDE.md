# ABA Corretora de Seguros

> Esse arquivo é lido pelo Claude no início de toda conversa.
> **Mantenha curto e humano.** Para regras determinísticas, use `settings.json`.
> Para conhecimento sob demanda, use `.claude/skills/`.

## Stack

- **Frontend:** React 19 + Vite 7, JavaScript puro (sem TypeScript)
- **Estilo:** Tailwind CSS v4 (`@tailwindcss/vite`), utility-first — sem CSS-in-JS nem `.css` por componente
- **Roteamento:** React Router v7 (`BrowserRouter`), rotas centralizadas em `src/App.jsx`
- **Infra:** Vercel — SPA estática, sem backend próprio
- **Padrão:** uma pasta por página/componente, nome do arquivo igual ao da pasta

## Comandos essenciais

```bash
npm install              # instala dependências
npm run dev                # sobe o dev server (Vite)
npm run build                # build de produção em dist/
npm run preview               # serve o build de produção localmente
npm run lint                    # eslint
npm run optimize:images          # redimensiona/recomprime imagens de src/assets/image
```

Não há `make`, testes automatizados nem typecheck configurados neste projeto — não tente rodá-los.

## Convenções

- **Branches:** `feat/<slice>-<short-desc>`, `fix/<short-desc>`, `chore/<short-desc>`, `docs/<short-desc>`
- **Commits:** Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`)
- **Páginas/componentes:** `src/pages/<Nome>/<Nome>.jsx` e `src/components/<Nome>/<Nome>.jsx`; primitivas de UI compartilhadas em `src/components/ui/`
- **Design tokens:** cores, fontes e sombras só no bloco `@theme` de `src/index.css` — nunca hex hardcoded em componentes
- **classNames condicionais:** usar `cn()` de `src/lib/cn.js`
- **Alias:** `@` aponta para `src/` (`vite.config.js`)
- **Imagens:** sempre `.webp` em `src/assets/image/`; rodar `npm run optimize:images` depois de adicionar/trocar
- **Textos de UI:** em pt-BR

## Estrutura

```
src/
├── App.jsx            # layout fixo + rotas
├── index.css            # tokens de design (@theme)
├── lib/cn.js              # joiner de className
├── components/
│   ├── ui/                 # Button, Card, Carousel, Container, Hero, Section, SectionHeading
│   └── <Nome>/<Nome>.jsx     # Header, Footer, FAQ, Partners, Testimonials, CookieBanner, WhatsAppFloat, SEO
└── pages/
    └── <Pagina>/<Pagina>.jsx  # Home, Seguros, Saude, Consorcios, Contato, ContactList, ContrateAgora, Parcerias
```

## Deploy

- Push em `main` → produção (`abacorretoradeseguros.com.br`).
- Push em qualquer outra branch → Preview automático na Vercel.
- Nunca `git push --force` em `main`.

## Quando pedir ajuda

- Para revisão: invoque a skill `code-review-b2`.
- Para auditoria de segurança: invoque a skill `security-check`.
- Para regras determinísticas (formatação, secrets, comandos perigosos): já há hooks rodando.

## O que NÃO fazer

- Não criar arquivos `.env*` — este projeto não usa variáveis de ambiente sensíveis no cliente; se surgir alguma, usar as env vars da Vercel, nunca commitar.
- Não usar CSS-in-JS nem arquivos `.css` por componente — a base é Tailwind utility-first (`@theme` em `src/index.css`).
- Não hardcodar cores em hex fora do `@theme`.
- Não adicionar dependências sem necessidade clara.
- Não importar imagem sem antes rodar `npm run optimize:images`.
- Não fazer `git push --force` em `main`.
