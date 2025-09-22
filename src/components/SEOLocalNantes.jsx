import React from 'react';
import styles from './SEOLocalNantes.module.css';

const quartiersNantes = [
  {
    id: 'graslin',
    nom: 'Quartier Graslin',
    description: 'Notre cabinet principal est situé au cœur du quartier Graslin, à deux pas du théâtre et de la place emblématique.',
    motsClés: ['infirmière Graslin', 'cabinet infirmier Graslin', 'soins à domicile Graslin Nantes'],
    distance: '0 km - Cabinet principal',
    services: 'Tous les soins au cabinet et à domicile'
  },
  {
    id: 'dobree',
    nom: 'Quartier Dobrée',
    description: 'Intervention rapide dans le quartier Dobrée, secteur résidentiel prisé de Nantes centre.',
    motsClés: ['infirmier Dobrée', 'soins infirmiers Dobrée Nantes', 'pansements à domicile Dobrée'],
    distance: '1.2 km du cabinet',
    services: 'Priorité aux soins à domicile'
  },
  {
    id: 'guisthau',
    nom: "Quartier Guist'hau",
    description: "Nous couvrons tout le quartier Guist'hau, de la place Zola au jardin des Plantes.",
    motsClés: ["infirmière Guist'hau", "soins à domicile Guist'hau", "prélèvements sanguins Guist'hau"],
    distance: '1.5 km du cabinet',
    services: 'Soins à domicile 7j/7'
  },
  {
    id: 'place-royale',
    nom: 'Place Royale',
    description: 'Secteur Place Royale et Bouffay, intervention dans tout le quartier historique.',
    motsClés: ['infirmier Place Royale Nantes', 'cabinet infirmier Bouffay', 'soins centre historique Nantes'],
    distance: '0.8 km du cabinet',
    services: 'Disponibilité rapide'
  },
  {
    id: 'quai-fosse',
    nom: 'Quai de la Fosse',
    description: 'Du quai de la Fosse au quartier Decré, notre équipe intervient quotidiennement.',
    motsClés: ['infirmière quai de la Fosse', 'soins infirmiers Decré', 'injections à domicile quai Nantes'],
    distance: '1 km du cabinet',
    services: 'Passages quotidiens'
  },
  {
    id: 'canclaux',
    nom: 'Quartier Canclaux',
    description: 'Présence régulière dans le quartier Canclaux et Mellinet pour les soins à domicile.',
    motsClés: ['infirmier Canclaux', 'soins Mellinet Nantes', 'perfusions à domicile Canclaux'],
    distance: '2 km du cabinet',
    services: 'Soins complexes à domicile'
  }
];

function SEOLocalNantes() {
  return (
    <section className={styles.seoLocal} aria-label="Zones d'intervention à Nantes">
      <div className="container">
        <h2 className={styles.title}>
          Infirmières à Domicile dans tous les Quartiers de Nantes Centre
        </h2>

        <div className={styles.intro}>
          <p className={styles.introText}>
            <strong>Cabinet Infirmier Graslin</strong> : votre partenaire santé de proximité dans le
            centre-ville de Nantes. Notre équipe d'infirmières diplômées d'État intervient
            <em> 7 jours sur 7, de 7h à 20h</em>, dans tous les quartiers du centre de Nantes
            pour des soins infirmiers professionnels à domicile ou au cabinet.
          </p>
        </div>

        <div className={styles.quartiersGrid}>
          {quartiersNantes.map(quartier => (
            <article key={quartier.id} className={styles.quartierCard}>
              <h3 className={styles.quartierTitle}>
                Infirmière {quartier.nom} Nantes
              </h3>
              <p className={styles.quartierDescription}>
                {quartier.description}
              </p>
              <div className={styles.quartierInfo}>
                <span className={styles.distance}>📍 {quartier.distance}</span>
                <span className={styles.services}>✅ {quartier.services}</span>
              </div>
              <div className={styles.keywords}>
                {quartier.motsClés.map((mot, index) => (
                  <span key={index} className={styles.keyword}>
                    {mot}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className={styles.servicesSection}>
          <h3 className={styles.servicesTitle}>
            Nos Services Infirmiers à Nantes Centre-Ville
          </h3>
          <div className={styles.servicesList}>
            <div className={styles.serviceColumn}>
              <h4>Soins Quotidiens</h4>
              <ul>
                <li>Pansements simples et complexes Nantes</li>
                <li>Injections (IM, SC, IV) à domicile</li>
                <li>Prélèvements sanguins Nantes centre</li>
                <li>Surveillance de traitement</li>
              </ul>
            </div>
            <div className={styles.serviceColumn}>
              <h4>Soins Spécialisés</h4>
              <ul>
                <li>Perfusions et chimiothérapie à domicile</li>
                <li>Soins post-opératoires Nantes</li>
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
            <a href="tel:+33240777381" className={styles.phoneLink}> 02 40 77 73 81</a> ou
            prenez rendez-vous sur
            <a href="https://www.doctolib.fr/cabinet-medical/nantes/cabinet-d-infirmieres-graslin"
               target="_blank"
               rel="noopener noreferrer"
               className={styles.doctolibLink}> Doctolib</a>.
            Nous intervenons rapidement dans tout Nantes centre-ville.
          </p>
        </div>

        {/* Section cachée pour SEO avec plus de mots-clés locaux */}
        <div className={styles.seoHidden} aria-hidden="true">
          <p>
            Infirmier Nantes 44000 - Infirmière libérale Nantes centre - Cabinet infirmier Nantes Graslin -
            Soins infirmiers à domicile Nantes - Infirmière Dobrée - Infirmier Guist'hau -
            Soins à domicile Place Royale Nantes - Cabinet infirmier Quai de la Fosse -
            Infirmière Canclaux Mellinet - Pansements Nantes - Injections Nantes -
            Prises de sang à domicile Nantes - Perfusions Nantes - Soins post-opératoires Nantes -
            Infirmière week-end Nantes - Infirmier dimanche Nantes - Soins infirmiers urgents Nantes -
            Cabinet infirmier ouvert dimanche - Infirmière conventionnée Nantes -
            Soins palliatifs Nantes - Chimiothérapie à domicile Nantes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SEOLocalNantes;