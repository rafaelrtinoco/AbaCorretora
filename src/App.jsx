import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme'; // Importe seu arquivo de tema
import GlobalStyles from './globalStyles'; // Importe seus estilos globais
import { GlobalContainer } from './App.styles';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import BenefitsSection from './components/Benefits/Benefits';
import PartnersSection from './components/Partners/Partiners';
import TestimonialsSection from './components/Testimonials/Testimonials';
import ProductsSection from './components/Products/Products';
import BlogSection from './components/Blog/Blog';
import FAQSection from './components/FAQ/FAQ';
import ContactSection from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      
      <main>
        <HeroSection />
        
        <GlobalContainer>
          <BenefitsSection />
          <PartnersSection />
          <TestimonialsSection />
          <ProductsSection />
          <BlogSection />
          <FAQSection />
          <ContactSection />
        </GlobalContainer>
      </main>
      
      <Footer />
    </ThemeProvider>
  );
}

export default App;