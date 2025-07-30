import React from 'react';
import styles from './OpeningHours.module.css';

function OpeningHours() {
  return (
    <section className={`${styles.section} fade-in`}>
      <div className="container">
        <h2 className={styles.title}>Horaires d'ouverture</h2>
        <div className={styles.hoursCard}>
          <svg 
            className={styles.clockIcon}
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
            <polyline points="12,6 12,12 16,14"/>
          </svg>
          <div className={styles.hoursInfo}>
            <p className={styles.mainHours}>
              <span className={styles.highlight}>Du lundi au dimanche : 7h - 20h</span>
            </p>
            <p>Y compris les jours fériés</p>
            <p>Soins sur rendez-vous à domicile ou au cabinet</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OpeningHours;