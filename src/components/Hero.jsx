import React from 'react';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={`${styles.hero} fade-in`}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <address className={styles.heroAddress}>
              Cabinet Infirmier Graslin<br />
              Quartier Graslin<br />
              Nantes
            </address>
            <p className={styles.heroDescription}>
              Le cabinet infirmier Graslin est situé au cœur du quartier Graslin à Nantes. 
              Les soins sont sur rendez-vous du lundi au dimanche 7h-20h à domicile ou au cabinet.
            </p>
          </div>
          <div className={styles.heroMedia}>
            <img 
              src="/assets/photo-entree.jpg" 
              alt="Entrée du Cabinet Infirmier Graslin"
              className={styles.heroImage}
            />
            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2711.5!2d-1.5547!3d47.2134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDEyJzQ4LjIiTiAxwrAzMyc0MS4wIlc!5e0!3m2!1sfr!2sfr!4v1642000000000!5m2!1sfr!2sfr"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Cabinet Infirmier Graslin, Nantes"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;