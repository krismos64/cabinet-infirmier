import React from 'react';
import styles from './Accessibility.module.css';

function Accessibility() {
  return (
    <section className={`${styles.section} fade-in`}>
      <div className="container">
        <h2 className={styles.title}>Accessibilité</h2>
        <div className={styles.accessibilityCard}>
          <svg 
            className={styles.accessibilityIcon}
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
            <circle cx="12" cy="4" r="2"/>
            <path d="M10.5 20V14h3v6"/>
            <path d="M8 10v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4"/>
            <path d="M9 10V8a3 3 0 0 1 6 0v2"/>
          </svg>
          <p className={styles.accessibilityText}>
            Le cabinet est <span className={styles.highlight}>accessible aux personnes à mobilité réduite</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Accessibility;