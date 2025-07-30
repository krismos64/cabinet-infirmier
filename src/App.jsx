import React from 'react';
import { useScrollAnimation } from './hooks';
import {
  Header,
  Hero,
  OpeningHours,
  ContactInfo,
  Accessibility,
  InterventionZones,
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
        <LegalDisclaimer />
      </main>
      <Footer />
    </>
  );
}

export default App;