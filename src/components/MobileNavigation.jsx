import React, { useState, useEffect } from 'react';
import styles from './MobileNavigation.module.css';

function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'doctolib', 'info', 'zones'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false);
  };

  const navigationItems = [
    { id: 'hero', label: 'Accueil', icon: '🏥' },
    { id: 'doctolib', label: 'Doctolib', icon: '📅' },
    { id: 'info', label: 'Infos pratiques', icon: '📋' },
    { id: 'zones', label: 'Zones', icon: '🗺️' }
  ];

  return (
    <>
      {/* Mobile Navigation Button */}
      <button 
        className={`${styles.navButton} ${isOpen ? styles.open : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
      >
        <div className={styles.hamburger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      {/* Navigation Menu */}
      <nav className={`${styles.navMenu} ${isOpen ? styles.menuOpen : ''}`}>
        <div className={styles.navOverlay} onClick={() => setIsOpen(false)} />
        <div className={styles.navContent}>
          <div className={styles.navHeader}>
            <h3>Navigation</h3>
            <button 
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
              aria-label="Fermer le menu"
            >
              ✕
            </button>
          </div>
          <ul className={styles.navList}>
            {navigationItems.map((item, index) => (
              <li 
                key={item.id}
                className={`${styles.navItem} ${styles[`item-${index}`]}`}
              >
                <button
                  className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  <span className={styles.navIcon}>{item.icon}</span>
                  <span className={styles.navLabel}>{item.label}</span>
                  <div className={styles.navIndicator}></div>
                </button>
              </li>
            ))}
          </ul>
          
          {/* Quick Actions */}
          <div className={styles.quickActions}>
            <a 
              href="tel:+33240777381" 
              className={`${styles.quickAction} ${styles.call}`}
            >
              <span className={styles.actionIcon}>📞</span>
              <span className={styles.actionLabel}>Appeler</span>
            </a>
            <a 
              href="https://www.doctolib.fr/cabinet-medical/nantes/cabinet-d-infirmieres-graslin?pid=practice-549225&phs=true&page=1&index=3&highlight%5Bspeciality_ids%5D%5B%5D=30"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.quickAction} ${styles.doctolib}`}
            >
              <span className={styles.actionIcon}>📅</span>
              <span className={styles.actionLabel}>Doctolib</span>
            </a>
          </div>
        </div>
      </nav>

    </>
  );
}

export default MobileNavigation;