import React from 'react';
import { Helmet } from 'react-helmet-async';

// Props esperadas:
// title: O título da página
// description: A meta descrição
// name: O nome do seu site (para o og:site_name)
// type: O tipo de página (para o og:type, ex: 'website' ou 'article')
// keywords: (Opcional, menos usado hoje em dia)

export function SEO({ title, description, name, type, keywords }) {
  // Define um título padrão e um template para as outras páginas
  const pageTitle = title
    ? `${title} | ${name || 'ABA Seguros - Seguros, Planos de Saúde e Consórcios'}` 
    : `${name || 'ABA Seguros - Seguros, Planos de Saúde e Consórcios'}`; // Ex: "Sua Corretora - O melhor para você" (para a Home)

  return (
    <Helmet
      // titleTemplate define o padrão para todas as páginas
      // (Se você já formatou 'pageTitle' acima, pode pular isso ou usar de forma diferente)
      titleTemplate={`%s | ${name || 'ABA Seguros - Seguros, Planos de Saúde e Consórcios'}`}
      defaultTitle={`${name || 'ABA Seguros - Seguros, Planos de Saúde e Consórcios'}`}
    >
      {/* Título da Página (o que aparece na aba) */}
      <title>{title || name}</title>

      {/* Meta Tags Padrão */}
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Tags Open Graph (para Facebook, WhatsApp, etc.) */}
      {/* Lembre-se da limitação do CSR! Elas só funcionam bem com SSR. */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type || 'website'} />
      {/* <meta property="og:image" content="https://seusite.com/imagem-padrao.jpg" /> */}
      {/* <meta property="og:url" content={window.location.href} /> */}

      {/* Tags Twitter Card */}
      {/* <meta name="twitter:card" content="summary_large_image" /> */}
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      {/* <meta name="twitter:image" content="https://seusite.com/imagem-padrao.jpg" /> */}
    </Helmet>
  );
}