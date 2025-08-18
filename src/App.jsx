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
        <section id="hero">
          <Hero />
        </section>
        <section id="info">
          <InfoSections />
        </section>
        <section id="zones">
          <InterventionZones />
        </section>
        <section id="doctolib">
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