import React from 'react';
import { View } from 'react-native';
import Header from './src/components/web/Header';
import Hero from './src/components/web/Hero';
import About from './src/components/web/About';
import Services from './src/components/web/Services';
import Testimonials from './src/components/web/Testimonials';
import Contact from './src/components/web/Contact';
import CTA from './src/components/web/Cta';
import FAQ from './src/components/web/Faq';
import Footer from './src/components/web/Footer';
import BackToTopButton from './src/components/web/BackToTopButton';

const AppWeb: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <FAQ />
      <CTA />
      <Footer />
      <BackToTopButton />
    </View>
  );
};

export default AppWeb;
