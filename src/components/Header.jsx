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
            <h1 className={styles.title}>Cabinet Infirmier Graslin</h1>
          </div>
          
          <div className={styles.contactInfo}>
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