import React from "react";

import "../styles/Soirees.css";

import Soiree from "../images/Soirees.jpeg";

const Soirees = () => {
  return (
    <div className="soirees new-feature">
      <h3 className="h3-color-inverse">Soirées</h3>
      <div className="feature-items">
        <img src={Soiree} className="feature-img" />
        <div className="feature-description">
          <p>Le mardi et le jeudi soir. Sur réservation.</p>
          <p>
            Soirée savoyarde avec au choix fondue savoyarde, raclette ou
            tartiflette au choix. 30 euros / personnes, boissons en supplément.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Soirees;
