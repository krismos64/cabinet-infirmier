import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <img 
            src="/src/assets/logo-caducee.svg" 
            alt="Logo caducée"
            className="logo"
            width="40"
            height="40"
          />
          <h1>Cabinet Infirmier Graslin</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;