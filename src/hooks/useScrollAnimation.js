import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Add stagger animations for child elements
          const staggerElements = entry.target.querySelectorAll('[class*="stagger-"]');
          staggerElements.forEach((element, index) => {
            setTimeout(() => {
              element.classList.add('visible');
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    // Observe all animation classes
    const animationClasses = [
      '.fade-in',
      '.fade-in-left', 
      '.fade-in-right',
      '.scale-in'
    ];

    animationClasses.forEach(className => {
      const elements = document.querySelectorAll(className);
      elements.forEach((element) => {
        observer.observe(element);
      });
    });

    // Add loading animation for the page
    document.body.style.opacity = '0';
    setTimeout(() => {
      document.body.style.transition = 'opacity 0.5s ease-in-out';
      document.body.style.opacity = '1';
    }, 100);

    return () => {
      animationClasses.forEach(className => {
        const elements = document.querySelectorAll(className);
        elements.forEach((element) => {
          observer.unobserve(element);
        });
      });
    };
  }, []);
};