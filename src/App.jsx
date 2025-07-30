import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import OpeningHours from './components/OpeningHours';
import ContactInfo from './components/ContactInfo';
import Accessibility from './components/Accessibility';
import InterventionZones from './components/InterventionZones';
import LegalDisclaimer from './components/LegalDisclaimer';
import Footer from './components/Footer';

function App() {
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