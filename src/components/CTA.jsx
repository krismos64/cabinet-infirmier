import React from 'react';
import styles from './CTA.module.css';

function CTA() {
  return (
    <section className={`${styles.cta} fade-in`}>
      <div className="container">
        <div className={styles.ctaContent}>
          <div className={styles.ctaText}>
            <h2 className={`${styles.ctaTitle} scale-in stagger-1`}>
              Besoin de soins infirmiers ?
            </h2>
            <p className={`${styles.ctaDescription} fade-in stagger-2`}>
              Contactez-nous dès maintenant pour prendre rendez-vous. 
              Disponibilité 7j/7 de 7h à 20h.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <a href="tel:+332440777381" className={`${styles.ctaButton} scale-in stagger-3 touch-feedback`}>
              <svg 
                className={styles.ctaIcon}
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Appeler maintenant
            </a>
            <a href="mailto:infirmiere.cabinet.le.heron@gmail.com" className={`${styles.ctaButtonSecondary} scale-in stagger-4 touch-feedback`}>
              <svg 
                className={styles.ctaIcon}
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="m4 4 16 0 0 16-16 0z"/>
                <path d="m22 6-10 7L2 6"/>
              </svg>
              Envoyer un email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;