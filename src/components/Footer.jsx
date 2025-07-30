import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Cabinet Infirmier Graslin - Nantes</p>
        <p>
          <a href="#mentions-legales">Mentions légales</a> | 
          <a href="#protection-donnees"> Protection des données</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;