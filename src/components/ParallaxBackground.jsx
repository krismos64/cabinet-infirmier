import React, { useEffect, useState } from 'react';
import styles from './ParallaxBackground.module.css';

function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setWindowHeight(window.innerHeight);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    handleResize();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Parallax calculations for different elements
  const parallaxSpeed1 = scrollY * 0.2;
  const parallaxSpeed2 = scrollY * 0.4;
  const parallaxSpeed3 = scrollY * 0.6;
  const parallaxRotation = scrollY * 0.05;

  return (
    <div className={styles.parallaxContainer}>
      {/* Floating Medical Elements */}
      <div 
        className={`${styles.floatingElement} ${styles.element1}`}
        style={{
          transform: `translateY(${parallaxSpeed1}px) rotate(${parallaxRotation}deg)`
        }}
      >
        <div className={styles.medicalIcon}>🏥</div>
      </div>
      
      <div 
        className={`${styles.floatingElement} ${styles.element2}`}
        style={{
          transform: `translateY(${-parallaxSpeed2}px) rotate(${-parallaxRotation}deg)`
        }}
      >
        <div className={styles.medicalIcon}>💊</div>
      </div>
      
      <div 
        className={`${styles.floatingElement} ${styles.element3}`}
        style={{
          transform: `translateY(${parallaxSpeed3}px) rotate(${parallaxRotation * 1.5}deg)`
        }}
      >
        <div className={styles.medicalIcon}>🩺</div>
      </div>
      
      <div 
        className={`${styles.floatingElement} ${styles.element4}`}
        style={{
          transform: `translateY(${-parallaxSpeed1}px) rotate(${-parallaxRotation * 0.8}deg)`
        }}
      >
        <div className={styles.medicalIcon}>💖</div>
      </div>
      
      <div 
        className={`${styles.floatingElement} ${styles.element5}`}
        style={{
          transform: `translateY(${parallaxSpeed2 * 1.2}px) rotate(${parallaxRotation * 2}deg)`
        }}
      >
        <div className={styles.medicalIcon}>🌿</div>
      </div>
      
      {/* Morphing Background Shapes */}
      <div 
        className={`${styles.morphShape} ${styles.shape1}`}
        style={{
          transform: `translateY(${parallaxSpeed1 * 0.5}px) scale(${1 + scrollY * 0.0002})`
        }}
      />
      
      <div 
        className={`${styles.morphShape} ${styles.shape2}`}
        style={{
          transform: `translateY(${-parallaxSpeed2 * 0.3}px) scale(${1 + scrollY * 0.0001})`
        }}
      />
      
      <div 
        className={`${styles.morphShape} ${styles.shape3}`}
        style={{
          transform: `translateY(${parallaxSpeed3 * 0.4}px) scale(${1 + scrollY * 0.00015})`
        }}
      />
      
      {/* Gradient Orbs */}
      <div 
        className={`${styles.gradientOrb} ${styles.orb1}`}
        style={{
          transform: `translateY(${parallaxSpeed1 * 0.8}px) translateX(${Math.sin(scrollY * 0.01) * 20}px)`
        }}
      />
      
      <div 
        className={`${styles.gradientOrb} ${styles.orb2}`}
        style={{
          transform: `translateY(${-parallaxSpeed2 * 0.6}px) translateX(${Math.cos(scrollY * 0.008) * 30}px)`
        }}
      />
      
      {/* Particle System */}
      <div className={styles.particleSystem}>
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`${styles.particle} ${styles[`particle${i + 1}`]}`}
            style={{
              transform: `translateY(${(parallaxSpeed1 * (1 + i * 0.1))}px) rotate(${scrollY * (0.02 + i * 0.001)}deg)`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ParallaxBackground;