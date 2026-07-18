import React from 'react';
import styles from './Footer.module.css';
import { CABINET } from '../config/cabinet';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Cabinet Infirmier Graslin - Nantes
          </p>
          <div className={styles.links}>
            <a 
              href={CABINET.doctolibUrl}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Prendre rendez-vous sur Doctolib"
            >
              <svg 
                className={styles.doctolibIcon}
                viewBox="0 0 24 24" 
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm2.5 6.5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1z"/>
              </svg>
              Doctolib
            </a>
            <span className={styles.separator}>|</span>
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
