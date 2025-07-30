import React from 'react';
import { useScrollAnimation } from './hooks';
import {
  Header,
  Hero,
  OpeningHours,
  ContactInfo,
  Accessibility,
  InterventionZones,
  CTA,
  LegalDisclaimer,
  Footer
} from './components';

function App() {
  useScrollAnimation();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <OpeningHours />
        <ContactInfo />
        <Accessibility />
        <InterventionZones />
        <CTA />
        <LegalDisclaimer />
      </main>
      <Footer />
    </>
  );
}

export default App;