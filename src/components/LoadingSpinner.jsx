import React from 'react';
import styles from './LoadingSpinner.module.css';

function LoadingSpinner({ size = 'medium' }) {
  return (
    <div className={`${styles.spinner} ${styles[size]}`} role="status" aria-label="Chargement">
      <div className={styles.spinnerInner}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
      <span className={styles.srOnly}>Chargement en cours...</span>
    </div>
  );
}

export default LoadingSpinner;