import React from 'react';
import styles from './InterventionZones.module.css';

function InterventionZones() {
  const zones = [
    'Quartier Graslin',
    'Dobrée',
    'Guist\'hau',
    'Place Royale',
    'Quai de la Fosse',
    'Place René Bouhier',
    'Quartier Canclaux'
  ];

  return (
    <section className={`${styles.section} fade-in`}>
      <div className="container">
        <h2 className={`${styles.title} scale-in`}>Zone d'intervention</h2>
        <div className={styles.zonesContainer}>
          <ul className={styles.zonesList}>
            {zones.map((zone, index) => (
              <li 
                key={index} 
                className={`${styles.zoneItem} scale-in stagger-${Math.min(index + 1, 6)} hover-lift touch-feedback`}
              >
                <span className={styles.zoneText}>{zone}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default InterventionZones;