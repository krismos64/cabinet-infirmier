import React, { useState, useEffect } from 'react';
import Lottie from './LazyLottie';
import styles from './Header.module.css';
import { CABINET } from '../config/cabinet';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [nurseAnimation, setNurseAnimation] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Charger l'animation Lottie seulement après un délai (non critique)
    const loadAnimation = () => {
      fetch('/assets/lottie/Medic.json')
        .then(response => {
          if (!response.ok) throw new Error(`HTTP ${response.status}`);
          return response.json();
        })
        .then(data => setNurseAnimation(data))
        .catch(error => console.error('Erreur lors du chargement de l\'animation:', error));
    };

    // Délaier le chargement pour prioriser les ressources critiques
    const timer = setTimeout(loadAnimation, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleAddressClick = () => {
    const address = CABINET.address;
    const encodedAddress = encodeURIComponent(address);
    
    // Détecter l'appareil pour proposer les bonnes applications
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
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
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.logoSection}>
            <div className={styles.logoContainer}>
              {nurseAnimation && (
                <Lottie 
                  animationData={nurseAnimation}
                  className={styles.lottieAnimation}
                  loop={true}
                  autoplay={true}
                />
              )}
            </div>
            <div className={styles.title}>
              <span className={styles.titleWord}>Cabinet</span>
              <span className={styles.titleWord}>Infirmier</span>
              <span className={styles.titleWord}>Graslin</span>
            </div>
          </div>
          
          <div className={styles.contactInfo}>
            <a 
              href={CABINET.doctolibUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.contactItem} ${styles.doctolib} touch-feedback`}
              aria-label="Prendre rendez-vous sur Doctolib"
            >
              <span className={styles.doctolibIcon}>D</span>
              <span className={styles.contactText}>Doctolib</span>
            </a>
            <a href={CABINET.phoneHref} className={`${styles.contactItem} ${styles.phone} touch-feedback`}>
              <span className={styles.emoji}>📞</span>
              <span className={styles.contactText}>{CABINET.phoneDisplay}</span>
            </a>
            <button 
              onClick={handleAddressClick}
              className={`${styles.contactItem} ${styles.address} touch-feedback`}
              aria-label="Ouvrir l'itinéraire vers le cabinet"
            >
              <span className={styles.emoji}>📍</span>
              <span className={styles.contactText}>9 rue Kléber, Nantes</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
