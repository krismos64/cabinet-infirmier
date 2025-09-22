import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import styles from './Hero.module.css';
import DoctolibSection from './DoctolibSection';

function Hero() {
  const [nurseAnimation, setNurseAnimation] = useState(null);

  useEffect(() => {
    // Charger l'animation Lottie avec Intersection Observer pour lazy loading
    const loadAnimation = () => {
      fetch('/assets/lottie/mynurse.json')
        .then(response => response.json())
        .then(data => setNurseAnimation(data))
        .catch(error => console.error('Erreur lors du chargement de l\'animation:', error));
    };

    // Utiliser Intersection Observer pour charger l'animation seulement quand elle devient visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !nurseAnimation) {
          loadAnimation();
          observer.disconnect();
        }
      });
    }, { rootMargin: '200px' });

    const animationSection = document.querySelector('[class*="animationSection"]');
    if (animationSection) {
      observer.observe(animationSection);
    } else {
      // Fallback avec délai si l'élément n'est pas encore disponible
      setTimeout(loadAnimation, 2000);
    }

    return () => observer.disconnect();
  }, [nurseAnimation]);

  const handleMapClick = () => {
    const address = "9 rue Kléber, 44000 Nantes, France";
    const encodedAddress = encodeURIComponent(address);
    
    // Détecter l'appareil pour proposer les bonnes applications
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);
    
    if (isMobile) {
      // Créer une boîte de dialogue pour choisir l'app GPS
      const choice = window.confirm(
        `Ouvrir l'itinéraire vers :\n${address}\n\nAppuyez sur OK pour Google Maps\nou Annuler pour choisir une autre app`
      );
      
      if (choice) {
        // Google Maps
        if (isIOS) {
          window.open(`https://maps.apple.com/?daddr=${encodedAddress}`, '_blank');
        } else {
          window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank');
        }
      } else {
        // Proposer Waze et Plans
        const waze = window.confirm("Ouvrir dans Waze ? (Annuler pour Plans Apple)");
        if (waze) {
          window.open(`https://waze.com/ul?navigate=yes&q=${encodedAddress}`, '_blank');
        } else if (isIOS) {
          window.open(`https://maps.apple.com/?daddr=${encodedAddress}`, '_blank');
        } else {
          window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank');
        }
      }
    } else {
      // Desktop - ouvrir directement Google Maps avec itinéraire
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank');
    }
  };
  return (
    <section className={`${styles.hero} fade-in`}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroMain}>
            <div className={`${styles.heroTitle} fade-in stagger-1`}>
              <h1 id="hero-title" className={styles.mainTitle}>
                <span className={styles.titleLine1}>Cabinet Infirmier</span>
                <span className={styles.titleLine2}>Graslin</span>
              </h1>
              <p className={styles.subtitle}>Soins professionnels au cœur de Nantes</p>

              <div className={styles.heroPhone}>
                <a href="tel:+33240777381" className={styles.phoneButton}>
                  <svg className={styles.phoneIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span className={styles.phoneText}>02 40 77 73 81</span>
                </a>
              </div>
            </div>
            
            <div id="doctolib" className={styles.doctolibContainer}>
              <DoctolibSection />
            </div>
            
            <div className={styles.heroGrid}>
              <div className={`${styles.imageCard} fade-in stagger-2`}>
                <picture>
                  <source srcSet="/assets/photo-entree.webp" type="image/webp" />
                  <img
                    src="/assets/photo-entree-optimized.jpg"
                    alt="Entrée du Cabinet Infirmier Graslin situé 9 rue Kléber Nantes centre-ville quartier Graslin"
                    className={styles.heroImage}
                    loading="lazy"
                    width="720"
                    height="480"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </picture>
              </div>
              
              <div className={`${styles.infoCards} fade-in stagger-3`}>
                <div className={styles.locationCard}>
                  <div className={styles.cardIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className={styles.cardContent}>
                    <h3>Localisation</h3>
                    <p>9 rue Kléber, 44000 Nantes</p>
                    <p className={styles.accessInfo}>
                      <strong>Accès :</strong> Rez-de-chaussée, traverser le hall extérieur, porte d'entrée à droite
                    </p>
                    <span className={styles.badge}>Quartier Graslin</span>
                  </div>
                </div>
                
              </div>
            </div>
            
            <div className={`${styles.mapSection} fade-in stagger-4`}>
              <div className={styles.mapWrapper}>
                <div className={styles.mapHeader}>
                  <h3>Nous trouver</h3>
                  <button className={styles.directionsBtn} onClick={handleMapClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 11l19-9-9 19-2-8-8-2z"/>
                    </svg>
                    Itinéraire
                  </button>
                </div>
                <div className={styles.mapContainer}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.0!2d-1.5615!3d47.2133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eec47e8c3935%3A0x6d8b7b8e9c4b5a8d!2s9%20Rue%20Kl%C3%A9ber%2C%2044000%20Nantes!5e0!3m2!1sfr!2sfr!4v1642000000000!5m2!1sfr!2sfr"
                    width="100%"
                    height="350"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation Cabinet Infirmier Graslin"
                    aria-label="Carte interactive"
                  ></iframe>
                </div>
              </div>
            </div>
            
            <div className={`${styles.descriptionSection} fade-in stagger-5`}>
              <p className={styles.heroDescription}>
                <strong>Cabinet infirmier professionnel</strong> situé au cœur du quartier Graslin à Nantes. 
                Nous proposons des <strong>soins infirmiers à domicile et au cabinet</strong> sur rendez-vous 
                du lundi au dimanche de 7h à 20h. <em>Prise en charge complète par des infirmières diplômées d'État</em>.
              </p>
            </div>
            
            <div className={`${styles.animationSection} fade-in stagger-6`}>
              {nurseAnimation && (
                <Lottie 
                  animationData={nurseAnimation}
                  className={styles.heroLottieAnimation}
                  loop={true}
                  autoplay={true}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;