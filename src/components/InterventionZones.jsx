import React from 'react';
import styles from './InterventionZones.module.css';

function InterventionZones() {
  const zones = [
    {
      name: 'Quartier Graslin',
      description: 'Centre historique de Nantes',
      icon: '🏛️'
    },
    {
      name: 'Dobrée',
      description: 'Quartier résidentiel',
      icon: '🏘️'
    },
    {
      name: 'Guist\'hau',
      description: 'Zone commerciale',
      icon: '🛍️'
    },
    {
      name: 'Place Royale',
      description: 'Cœur de ville',
      icon: '⭐'
    },
    {
      name: 'Quai de la Fosse',
      description: 'Bords de Loire',
      icon: '🌊'
    },
    {
      name: 'Place René Bouhier',
      description: 'Quartier paisible',
      icon: '🌳'
    },
    {
      name: 'Quartier Canclaux',
      description: 'Zone dynamique',
      icon: '🚀'
    }
  ];

  return (
    <section className={`${styles.section} fade-in`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={`${styles.title} scale-in`}>Zone d'intervention</h2>
          <p className={`${styles.subtitle} fade-in stagger-1`}>
            Nous intervenons dans ces quartiers de Nantes pour vos soins à domicile
          </p>
        </div>
        
        <div className={styles.zonesGrid}>
          {zones.map((zone, index) => (
            <div 
              key={index} 
              className={`${styles.zoneCard} scale-in stagger-${Math.min(index + 1, 6)} hover-lift touch-feedback`}
            >
              <div className={styles.zoneIcon}>
                <span className={styles.iconEmoji}>{zone.icon}</span>
              </div>
              <div className={styles.zoneContent}>
                <h3 className={styles.zoneName}>{zone.name}</h3>
                <p className={styles.zoneDescription}>{zone.description}</p>
              </div>
              <div className={styles.zoneIndicator}>
                <svg 
                  className={styles.checkIcon}
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
                  <polyline points="20,6 9,17 4,12"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`${styles.ctaSection} fade-in stagger-2`}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaIcon}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div className={styles.ctaContent}>
              <h3 className={styles.ctaTitle}>Votre quartier n'est pas listé ?</h3>
              <p className={styles.ctaText}>
                Contactez-nous ! Nous étudions toutes les demandes de soins à domicile dans Nantes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InterventionZones;