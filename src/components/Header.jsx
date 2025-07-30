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
      </div>
    </header>
  );
}

export default Header;