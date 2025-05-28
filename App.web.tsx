import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import Hero from './src/components/Hero';
import About from './src/components/About';
import Services from './src/components/Services';
import Testimonials from './src/components/Testimonials';
import Contact from './src/components/Contact';
import CTA from './src/components/CTA';
import FAQ from './src/components/FAQ';
import Footer from './src/components/Footer';
import BackToTopButton from './src/components/BackToTopButton';

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
