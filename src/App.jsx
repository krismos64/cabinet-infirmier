import React from 'react';
import { useScrollAnimation } from './hooks';
import {
  Header,
  Hero,
  InfoSections,
  InterventionZones,
  CTA,
  LegalDisclaimer,
  Footer,
  MobileNavigation,
  FloatingElements
} from './components';

function App() {
  useScrollAnimation();

  return (
    <>
      <FloatingElements />
      <Header />
      <MobileNavigation />
      <main>
        <section id="hero" aria-labelledby="hero-title">
          <Hero />
        </section>
        <section id="info" aria-labelledby="info-title">
          <InfoSections />
        </section>
        <section id="zones" aria-labelledby="zones-title">
          <InterventionZones />
        </section>
        <CTA />
        <LegalDisclaimer />
      </main>
      <Footer />
    </>
  );
}

export default App;