import React from 'react';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={`${styles.hero} fade-in`}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={`${styles.heroText} fade-in-left stagger-1`}>
            <address className={`${styles.heroAddress} scale-in stagger-2`}>
              <strong>Cabinet Infirmier Graslin</strong><br />
              9 rue Kléber<br />
              44000 Nantes<br />
              <span className={styles.location}>Hyper centre-ville - Quartier Graslin</span>
            </address>
            <p className={`${styles.heroDescription} fade-in stagger-3`}>
              Le cabinet infirmier Graslin est situé au cœur du quartier Graslin à Nantes, dans l'hyper centre-ville. 
              Les soins sont dispensés sur rendez-vous du lundi au dimanche de 7h à 20h, à domicile ou au cabinet.
            </p>
          </div>
          <div className={`${styles.heroMedia} fade-in-right`}>
            <img 
              src="/assets/photo-entree.jpg" 
              alt="Entrée du Cabinet Infirmier Graslin"
              className={`${styles.heroImage} scale-in stagger-4 hover-lift`}
            />
            <div className={`${styles.mapContainer} scale-in stagger-5 hover-lift`}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.0!2d-1.5615!3d47.2133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eec47e8c3935%3A0x6d8b7b8e9c4b5a8d!2s9%20Rue%20Kl%C3%A9ber%2C%2044000%20Nantes!5e0!3m2!1sfr!2sfr!4v1642000000000!5m2!1sfr!2sfr"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cabinet Infirmier Graslin - 9 rue Kléber, 44000 Nantes"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;