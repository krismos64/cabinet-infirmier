import React, { useEffect, useState } from 'react';
import styles from './LoadingScreen.module.css';

function LoadingScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Chargement');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const loadingSteps = [
      { text: 'Initialisation...', duration: 500 },
      { text: 'Chargement des ressources...', duration: 800 },
      { text: 'Préparation de l\'interface...', duration: 600 },
      { text: 'Configuration des animations...', duration: 700 },
      { text: 'Finalisation...', duration: 400 }
    ];

    let currentStep = 0;
    let currentProgress = 0;
    const totalDuration = loadingSteps.reduce((sum, step) => sum + step.duration, 0);

    const progressInterval = setInterval(() => {
      currentProgress += 2;
      setProgress(Math.min(currentProgress, 100));

      if (currentProgress >= 100) {
        clearInterval(progressInterval);
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => {
            onLoadingComplete?.();
          }, 500);
        }, 200);
      }
    }, totalDuration / 50);

    const textInterval = setInterval(() => {
      if (currentStep < loadingSteps.length) {
        setLoadingText(loadingSteps[currentStep].text);
        currentStep++;
      } else {
        clearInterval(textInterval);
        setLoadingText('Prêt !');
      }
    }, totalDuration / loadingSteps.length);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className={`${styles.loadingScreen} ${!isVisible ? styles.fadeOut : ''}`}>
      <div className={styles.loadingContent}>
        {/* Logo Animation */}
        <div className={styles.logoContainer}>
          <div className={styles.logoIcon}>🏥</div>
          <div className={styles.logoGlow}></div>
          <div className={styles.logoRipple}></div>
        </div>

        {/* Title */}
        <h1 className={styles.title}>
          <span className={styles.titleMain}>Cabinet Infirmier</span>
          <span className={styles.titleSub}>Graslin</span>
        </h1>

        {/* Progress Bar */}
        <div className={styles.progressContainer}>
          <div className={styles.progressTrack}>
            <div 
              className={styles.progressFill}
              style={{ width: `${progress}%` }}
            >
              <div className={styles.progressGlow}></div>
            </div>
          </div>
          <div className={styles.progressText}>
            {Math.round(progress)}%
          </div>
        </div>

        {/* Loading Text */}
        <p className={styles.loadingText}>
          {loadingText}
        </p>

        {/* Floating Medical Elements */}
        <div className={styles.floatingElements}>
          <div className={`${styles.floatingElement} ${styles.element1}`}>💊</div>
          <div className={`${styles.floatingElement} ${styles.element2}`}>🩺</div>
          <div className={`${styles.floatingElement} ${styles.element3}`}>💖</div>
          <div className={`${styles.floatingElement} ${styles.element4}`}>🌿</div>
          <div className={`${styles.floatingElement} ${styles.element5}`}>✨</div>
        </div>

        {/* Pulse Rings */}
        <div className={styles.pulseRings}>
          <div className={`${styles.pulseRing} ${styles.ring1}`}></div>
          <div className={`${styles.pulseRing} ${styles.ring2}`}></div>
          <div className={`${styles.pulseRing} ${styles.ring3}`}></div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className={styles.backgroundGradient}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
        <div className={styles.gradientOrb3}></div>
      </div>
    </div>
  );
}

export default LoadingScreen;