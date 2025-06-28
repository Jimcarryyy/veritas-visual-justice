
import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import PracticeAreasSection from '../components/PracticeAreasSection';
import AttorneysSection from '../components/AttorneysSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <PracticeAreasSection />
          <AttorneysSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
