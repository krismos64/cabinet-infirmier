import React from "react";
import styles from "./ContactInfo.module.css";

function ContactInfo() {
  return (
    <section className={`${styles.section} fade-in`}>
      <div className="container">
        <h2 className={`${styles.title} scale-in`}>Contact</h2>
        <div className={styles.contactGrid}>
          <div className={`${styles.contactCard} scale-in stagger-1 hover-lift touch-feedback`}>
            <div className={styles.contactHeader}>
              <svg
                className={`${styles.contactIcon} scale-in stagger-2`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <h3 className={`${styles.contactTitle} fade-in stagger-3`}>Téléphone</h3>
            </div>
            <a href="tel:+332440777381" className={`${styles.contactLink} fade-in stagger-4 touch-feedback`}>
              02 40 77 73 81
            </a>
          </div>
          <div className={`${styles.contactCard} scale-in stagger-2 hover-lift touch-feedback`}>
            <div className={styles.contactHeader}>
              <svg
                className={`${styles.contactIcon} scale-in stagger-3`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m4 4 16 0 0 16-16 0z" />
                <path d="m22 6-10 7L2 6" />
              </svg>
              <h3 className={`${styles.contactTitle} fade-in stagger-4`}>Email</h3>
            </div>
            <a
              href="mailto:infirmiere.cabinet.le.heron@gmail.com"
              className={`${styles.contactLink} fade-in stagger-5 touch-feedback`}
            >
              infirmiere.cabinet.le.heron@gmail.com
            </a>
            <div className={`${styles.emailNote} fade-in stagger-6`}>
              <p>
                <strong>Paiements acceptés :</strong> Espèces et chèques uniquement.
                <br />Pas de carte bancaire.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;