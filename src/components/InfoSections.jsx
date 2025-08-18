import React from 'react';
import styles from './InfoSections.module.css';

function InfoSections() {
  return (
    <section className={`${styles.section} fade-in`}>
      <div className="container">
        <div className={styles.grid}>
          {/* Horaires d'ouverture */}
          <div className={`${styles.card} ${styles.hoursCard} scale-in stagger-1 hover-lift touch-feedback`}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <svg 
                  className={styles.icon}
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
              </div>
              <h2 className={styles.title}>Horaires d'ouverture</h2>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.mainHours}>
                <span className={styles.highlight}>Du lundi au dimanche : 7h - 20h</span>
              </p>
              <p className={styles.subInfo}>Y compris les jours fériés</p>
              <p className={styles.subInfo}>Soins sur rendez-vous à domicile ou au cabinet</p>
            </div>
          </div>

          {/* Contact */}
          <div className={`${styles.card} ${styles.contactCard} scale-in stagger-2 hover-lift touch-feedback`}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <svg
                  className={styles.icon}
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
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h2 className={styles.title}>Contact</h2>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Téléphone</span>
                <a href="tel:+332440777381" className={`${styles.contactLink} touch-feedback`}>
                  02 40 77 73 81
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Email</span>
                <a
                  href="mailto:infirmiere.cabinet.le.heron@gmail.com"
                  className={`${styles.contactLink} touch-feedback`}
                >
                  infirmiere.cabinet.le.heron@gmail.com
                </a>
              </div>
              <div className={styles.paymentNote}>
                <p>
                  <strong>Paiements acceptés :</strong> Espèces et chèques uniquement.
                  <br />Pas de carte bancaire.
                </p>
              </div>
            </div>
          </div>

          {/* Accessibilité */}
          <div className={`${styles.card} ${styles.accessibilityCard} scale-in stagger-3 hover-lift touch-feedback`}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <svg 
                  className={styles.icon}
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
              </div>
              <h2 className={styles.title}>Accessibilité</h2>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.accessibilityText}>
                Le cabinet est <span className={styles.highlight}>accessible aux personnes à mobilité réduite</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSections;