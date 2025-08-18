import React from 'react';
import { useScrollAnimation } from './hooks';
import {
  Header,
  Hero,
  InfoSections,
  InterventionZones,
  DoctolibSection,
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
        <section id="doctolib" aria-labelledby="doctolib-title">
          <DoctolibSection />
        </section>
        <CTA />
        <LegalDisclaimer />
      </main>
      <Footer />
    </>
  );
}

export default App;