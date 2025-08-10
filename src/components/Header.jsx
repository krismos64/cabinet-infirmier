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
            <svg 
              className={styles.logo}
              xmlns="http://www.w3.org/2000/svg" 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              aria-label="Logo caducée"
            >
              <path d="M12 2v20"/>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              <circle cx="12" cy="12" r="1"/>
              <path d="M8 8l8 8"/>
              <path d="M16 8l-8 8"/>
            </svg>
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