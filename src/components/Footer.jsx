import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Cabinet Infirmier Graslin - Nantes
          </p>
          <div className={styles.links}>
            <a href="#mentions-legales" className={styles.link}>Mentions légales</a>
            <span className={styles.separator}>|</span>
            <a href="#protection-donnees" className={styles.link}>Protection des données</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;