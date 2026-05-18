# Aba Corretora — Seguros, Consórcios e Saúde

Este é um projeto de site institucional para a Aba Corretora, desenvolvido em **React** com **Vite** e estilização via **styled-components**. O objetivo é apresentar e facilitar a contratação de seguros, planos de saúde, consórcios e serviços, além de fornecer informações e canais de contato para clientes.

## Funcionalidades

- **Página inicial** com carrossel de produtos, diferenciais, passo a passo de contratação, estatísticas e soluções extras.
- **Listagem de produtos**: seguros, consórcios, planos de saúde, financiamento, empréstimo e planos pet.
- **Pop-up promocional** para parcerias e campanhas.
- **Seção de perguntas frequentes (FAQ)**.
- **Depoimentos de clientes** (carrossel).
- **Listagem de parceiros** e parcerias estratégicas.
- **Página de contato** com canais (WhatsApp, telefone, e-mail, endereço).
- **Página de corretoras** com contatos das principais seguradoras.
- **Página de contratação online** de serviços e seguros.
- **Design responsivo** para dispositivos móveis e desktop.
- **SEO otimizado** com react-helmet-async.

## Estrutura de Pastas

```
src/
  components/         # Componentes reutilizáveis (Header, Footer, FAQ, Testimonials, etc)
  pages/              # Páginas principais (Home, Seguros, Consorcios, Saude, Contato, etc)
  assets/             # Imagens e ícones
  theme.js            # Tema global (cores, fontes, breakpoints)
  App.jsx             # Componente principal de rotas
  globalStyles.js     # Estilos globais
```

## Principais Tecnologias

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [styled-components](https://styled-components.com/)
- [react-router-dom](https://reactrouter.com/)
- [react-helmet-async](https://github.com/staylor/react-helmet-async)
- [react-icons](https://react-icons.github.io/react-icons/)

## Como rodar o projeto

1. **Clone o repositório:**
   ```sh
   git clone <url-do-repositorio>
   cd AbaCorretora
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```sh
   npm run dev
   ```

4. Acesse [http://localhost:5173](http://localhost:5173) no navegador.

## Scripts Disponíveis

- `npm run dev` — Inicia o servidor de desenvolvimento.
- `npm run build` — Gera a build de produção.
- `npm run preview` — Visualiza a build de produção localmente.
- `npm run lint` — Executa o ESLint.

## Deploy

O projeto está pronto para deploy em plataformas como [Vercel](https://vercel.com/) ou [Netlify](https://www.netlify.com/). O arquivo `vercel.json` já está configurado para deploy automático.

## Personalização

- **Cores e fontes:** altere em `src/theme.js`
- **Imagens:** substitua em `src/assets/image/`
- **Links de WhatsApp e serviços:** edite nas páginas correspondentes em `src/pages/`

## Licença

Este projeto é de uso exclusivo da Aba Corretora. Para uso comercial, consulte o responsável pelo projeto.

---

Desenvolvido por R3T Desenvolvimento de Software.

##