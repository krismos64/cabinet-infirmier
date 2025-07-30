import React from 'react';
import styles from './LegalDisclaimer.module.css';

function LegalDisclaimer() {
  return (
    <section className={`${styles.section} fade-in`}>
      <div className="container">
        <h2 className={styles.title}>Information légale</h2>
        <div className={styles.disclaimerCard}>
          <svg 
            className={styles.infoIcon}
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 16v-4"/>
            <path d="M12 8h.01"/>
          </svg>
          <p className={styles.disclaimerText}>
            Cette page est une page d'information. Son but est d'informer les patients sur les soins 
            pratiqués par le <span className={styles.highlight}>cabinet infirmier Graslin</span>. Il n'a pas pour vocation la promotion de leur 
            activité, conformément aux directives de l'ordre infirmier.
          </p>
        </div>
      </div>
    </section>
  );
}

export default LegalDisclaimer;