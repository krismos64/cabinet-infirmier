import React from "react";
import styles from "./SEOLocalNantes.module.css";
import { CABINET } from "../config/cabinet";

function SEOLocalNantes() {
  return (
    <section
      className={styles.seoLocal}
      aria-label="Zones d'intervention à Nantes"
    >
      <div className="container">
        <h2 id="seo-local-title" className={styles.title}>
          Infirmières à Domicile dans tous les Quartiers de Nantes Centre
        </h2>

        <div className={styles.intro}>
          <p className={styles.introText}>
            <strong>Cabinet Infirmier Graslin</strong> : votre partenaire santé
            de proximité dans le centre-ville de Nantes. Notre équipe
            d'infirmières diplômées d'État intervient
            <em> 7 jours sur 7, de 7h à 20h</em>, dans tous les quartiers du
            centre de Nantes pour des soins infirmiers professionnels à domicile
            ou au cabinet.
          </p>
        </div>

        <div className={styles.servicesSection}>
          <h3 className={styles.servicesTitle}>
            Nos Services Infirmiers à Nantes Centre-Ville
          </h3>
          <div className={styles.servicesList}>
            <div className={styles.serviceColumn}>
              <h4>Soins Quotidiens</h4>
              <ul>
                <li>Pansements simples et complexes</li>
                <li>Injections (IM, SC, IV)</li>
                <li>Prélèvements sanguins</li>
                <li>Administration et surveillance de traitement</li>
              </ul>
            </div>
            <div className={styles.serviceColumn}>
              <h4>Soins Spécialisés</h4>
              <ul>
                <li>
                  Vaccins (prescription et injection vaccins selon le calendrier
                  vaccinal)
                </li>
                <li>Perfusions</li>
                <li>Chimiothérapie</li>
                <li>Soins post-opératoires</li>
                <li>Soins palliatifs et accompagnement</li>
                <li>Diabétologie et éducation thérapeutique</li>
              </ul>
            </div>
            <div className={styles.serviceColumn}>
              <h4>Urgences & Disponibilité</h4>
              <ul>
                <li>Ouvert 7j/7 même dimanche et jours fériés</li>
                <li>Horaires étendus : 7h-20h</li>
                <li>Prise en charge rapide</li>
                <li>Conventionné Sécurité Sociale</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h3>Besoin d'une Infirmière à Domicile à Nantes ?</h3>
          <p className={styles.ctaText}>
            Contactez le <strong>Cabinet Infirmier Graslin</strong> au
            <a href={CABINET.phoneHref} className={styles.phoneLink}>
              {" "}
              {CABINET.phoneDisplay}
            </a>{" "}
            ou prenez rendez-vous sur
            <a
              href={CABINET.doctolibUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.doctolibLink}
            >
              {" "}
              Doctolib
            </a>
            . Nous intervenons rapidement dans tout Nantes centre-ville.
          </p>
        </div>

        {/* Section cachée pour SEO avec plus de mots-clés locaux */}
        <div className={styles.seoHidden} aria-hidden="true">
          <p>
            Infirmier Nantes 44000 - Infirmière libérale Nantes centre - Cabinet
            infirmier Nantes Graslin - Soins infirmiers à domicile Nantes -
            Infirmière Dobrée - Infirmier Guist'hau - Soins à domicile Place
            Royale Nantes - Cabinet infirmier Quai de la Fosse - Infirmière
            Canclaux Mellinet - Pansements Nantes - Injections Nantes - Prises
            de sang à domicile Nantes - Perfusions Nantes - Soins
            post-opératoires Nantes - Infirmière week-end Nantes - Infirmier
            dimanche Nantes - Soins infirmiers urgents Nantes - Cabinet
            infirmier ouvert dimanche - Infirmière conventionnée Nantes - Soins
            palliatifs Nantes - Chimiothérapie à domicile Nantes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SEOLocalNantes;
