import React from 'react';
import styles from './DoctolibSection.module.css';

function DoctolibSection() {
  return (
    <section className={`${styles.doctolibSection} fade-in`}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={`${styles.title} scale-in stagger-1`}>
              Prenez rendez-vous en ligne
            </h2>
            <p className={`${styles.description} fade-in stagger-2`}>
              Simplifiez votre prise de rendez-vous grâce à notre plateforme Doctolib. 
              Consultez nos disponibilités en temps réel et réservez votre créneau 
              en quelques clics, 24h/24 et 7j/7.
            </p>
            <div className={styles.features}>
              <div className={`${styles.feature} fade-in stagger-3`}>
                <span className={styles.featureIcon}>✓</span>
                <span>Disponibilités en temps réel</span>
              </div>
              <div className={`${styles.feature} fade-in stagger-4`}>
                <span className={styles.featureIcon}>✓</span>
                <span>Rappel automatique par SMS</span>
              </div>
              <div className={`${styles.feature} fade-in stagger-5`}>
                <span className={styles.featureIcon}>✓</span>
                <span>Gestion simple de vos rendez-vous</span>
              </div>
            </div>
          </div>
          
          <div className={styles.ctaContainer}>
            <div className={styles.doctolibCard}>
              <div className={styles.doctolibLogo}>
                <span className={styles.doctolibIconLarge}>D</span>
                <span className={styles.doctolibText}>Doctolib</span>
              </div>
              <p className={styles.cardText}>
                Plateforme sécurisée de prise de rendez-vous médicaux
              </p>
              <a 
                href="https://www.doctolib.fr/cabinet-medical/nantes/cabinet-d-infirmieres-graslin?pid=practice-549225&phs=true&page=1&index=3&highlight%5Bspeciality_ids%5D%5B%5D=30"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.doctolibButton} scale-in stagger-6 touch-feedback`}
              >
                <svg 
                  className={styles.calendarIcon}
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
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                Prendre rendez-vous sur Doctolib
              </a>
              <p className={styles.availability}>
                <span className={styles.availabilityDot}></span>
                Disponible 7j/7 de 7h à 20h
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DoctolibSection;