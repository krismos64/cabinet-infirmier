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
import SEOLocalNantes from './components/SEOLocalNantes';

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
        <section id="seo-local" aria-labelledby="seo-local-title">
          <SEOLocalNantes />
        </section>
        <CTA />
        <LegalDisclaimer />
      </main>
      <Footer />
    </>
  );
}

export default App;