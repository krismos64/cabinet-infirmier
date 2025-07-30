import React from 'react';
import styles from './ContactInfo.module.css';

function ContactInfo() {
  return (
    <section className={`${styles.section} fade-in`}>
      <div className="container">
        <h2 className={styles.title}>Contact</h2>
        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <div className={styles.contactHeader}>
              <svg 
                className={styles.contactIcon}
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
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <h3 className={styles.contactTitle}>Téléphone</h3>
            </div>
            <a href="tel:+33240000000" className={styles.contactLink}>
              02 40 00 00 00
            </a>
          </div>
          <div className={styles.contactCard}>
            <div className={styles.contactHeader}>
              <svg 
                className={styles.contactIcon}
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
                <path d="m4 4 16 0 0 16-16 0z"/>
                <path d="m22 6-10 7L2 6"/>
              </svg>
              <h3 className={styles.contactTitle}>Email</h3>
            </div>
            <a href="mailto:contact@cabinet-graslin.fr" className={styles.contactLink}>
              contact@cabinet-graslin.fr
            </a>
            <div className={styles.emailNote}>
              <p>Remarque : Les emails sont traités par fusion mail pour une meilleure organisation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;