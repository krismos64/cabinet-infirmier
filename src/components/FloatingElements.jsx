import React from 'react';
import styles from './FloatingElements.module.css';

function FloatingElements() {
  return (
    <div className={styles.floatingContainer}>
      {/* Medical Icons */}
      <div className={`${styles.floatingIcon} ${styles.icon1}`}>🏥</div>
      <div className={`${styles.floatingIcon} ${styles.icon2}`}>💊</div>
      <div className={`${styles.floatingIcon} ${styles.icon3}`}>🩺</div>
      <div className={`${styles.floatingIcon} ${styles.icon4}`}>💖</div>
      <div className={`${styles.floatingIcon} ${styles.icon5}`}>🌿</div>
      <div className={`${styles.floatingIcon} ${styles.icon6}`}>✨</div>
      
      {/* Decorative Shapes */}
      <div className={`${styles.decorativeShape} ${styles.shape1}`}></div>
      <div className={`${styles.decorativeShape} ${styles.shape2}`}></div>
      <div className={`${styles.decorativeShape} ${styles.shape3}`}></div>
      
      {/* Particle Effects */}
      <div className={styles.particleContainer}>
        {Array.from({ length: 8 }, (_, i) => (
          <div 
            key={i} 
            className={`${styles.particle} ${styles[`particle${i + 1}`]}`}
          />
        ))}
      </div>
      
      {/* Gradient Orbs */}
      <div className={`${styles.gradientOrb} ${styles.orb1}`}></div>
      <div className={`${styles.gradientOrb} ${styles.orb2}`}></div>
      <div className={`${styles.gradientOrb} ${styles.orb3}`}></div>
    </div>
  );
}

export default FloatingElements;