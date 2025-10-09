import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  // Extrai o `pathname` do objeto de localização. O pathname é a parte da URL após o domínio (ex: "/contato")
  const { pathname } = useLocation();

  // O useEffect vai ser executado toda vez que o `pathname` mudar.
  useEffect(() => {
    // O método window.scrollTo() rola a janela para uma posição específica.
    window.scrollTo({
      top: 0, // Rola para o topo da página (posição 0)
      left: 0,
      behavior: 'smooth' // ESSA É A CHAVE! Causa o efeito de rolagem suave.
    });
  }, [pathname]); // O array de dependências garante que este efeito só rode quando a URL mudar.

  // Este componente não renderiza nenhum elemento visual.
  return null;
}

export default ScrollToTop;