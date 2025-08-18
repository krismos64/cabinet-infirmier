import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.logoSection}>
            <h1 className={styles.title}>
              <span className={styles.titleWord}>Cabinet</span>
              <span className={styles.titleWord}>Infirmier</span>
              <span className={styles.titleWord}>Graslin</span>
            </h1>
          </div>
          
          <div className={styles.contactInfo}>
            <a 
              href="https://www.doctolib.fr/cabinet-medical/nantes/cabinet-d-infirmieres-graslin?pid=practice-549225&phs=true&page=1&index=3&highlight%5Bspeciality_ids%5D%5B%5D=30"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.contactItem} ${styles.doctolib} touch-feedback`}
              aria-label="Prendre rendez-vous sur Doctolib"
            >
              <span className={styles.doctolibIcon}>D</span>
              <span className={styles.contactText}>Doctolib</span>
            </a>
            <a href="tel:+33240777381" className={`${styles.contactItem} ${styles.phone} touch-feedback`}>
              <span className={styles.emoji}>📞</span>
              <span className={styles.contactText}>02 40 77 73 81</span>
            </a>
            <a href="mailto:infirmiere.cabinet.le.heron@gmail.com" className={`${styles.contactItem} ${styles.email} touch-feedback`}>
              <span className={styles.emoji}>✉️</span>
              <span className={styles.contactText}>infirmiere.cabinet.le.heron@gmail.com</span>
            </a>
            <div className={`${styles.contactItem} ${styles.address}`}>
              <span className={styles.emoji}>📍</span>
              <span className={styles.contactText}>9 rue Kléber, Nantes</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;