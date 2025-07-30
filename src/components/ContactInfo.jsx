import React from 'react';

function ContactInfo() {
  return (
    <section className="contact-info">
      <div className="container">
        <h2>Contact</h2>
        <div className="contact-details">
          <div className="contact-item">
            <h3>Téléphone</h3>
            <p><a href="tel:+33240000000">02 40 00 00 00</a></p>
          </div>
          <div className="contact-item">
            <h3>Email</h3>
            <p><a href="mailto:contact@cabinet-graslin.fr">contact@cabinet-graslin.fr</a></p>
            <p className="email-note">
              <small>Remarque : Les emails sont traités par fusion mail pour une meilleure organisation</small>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;