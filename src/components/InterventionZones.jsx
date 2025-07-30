import React from 'react';

function InterventionZones() {
  const zones = [
    'Quartier Graslin',
    'Dobrée',
    'Guist\'hau',
    'Place Royale',
    'Quai de la Fosse',
    'Place René Bouhier',
    'Quartier Canclaux'
  ];

  return (
    <section className="intervention-zones">
      <div className="container">
        <h2>Zone d'intervention</h2>
        <ul className="zones-list">
          {zones.map((zone, index) => (
            <li key={index}>{zone}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default InterventionZones;