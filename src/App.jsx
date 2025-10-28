import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import GlobalStyles from "./globalStyles";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat/WhatsAppFloat";

import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Seguros from "./pages/Seguros/Seguros";
import Consorcios from "./pages/Consorcios/Consorcios";
import Saude from "./pages/Saude/Saude";
import Contato from "./pages/Contato/Contato";
import CookieBanner from "./components/CookieBanner/CookieBanner";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ContactList from "./pages/ContactList/ContactList";
import ContrateAgora from './pages/ContrateAgora/ContrateAgora';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />

      <ScrollToTop />

      <main>
        <Routes>
          <Route path="/AbaCorretora" element={<Home />} />
          <Route path="/products" element={<Navigate to="/home" replace />} />
          <Route path="/seguros" element={<Seguros />} />
          <Route path="/consorcios" element={<Consorcios />} />
          <Route path="/saude" element={<Saude />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/corretoras" element={<ContactList />} />
          <Route path="/contrateAgora" element={<ContrateAgora />} />
        </Routes>
      </main>
      <CookieBanner />
      <Footer />
      <WhatsAppFloat />
    </ThemeProvider>
  );
}

export default App;