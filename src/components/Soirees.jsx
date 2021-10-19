import React from "react";

import "../styles/Soirees.css";

import Soiree from "../images/Soirees.jpeg";
import Food from "../images/food.jpeg";
import FoodWine from "../images/food-wine.jpeg";
import Fondue from "../images/fondue.jpeg";

const Soirees = () => {
  return (
    <div className="soirees new-feature">
      <div className="feature-items">
        <div className="feature-imgs">
          <img src={Soiree} className="feature-img" />
          <img src={Food} className="feature-img" />
          <img src={Fondue} className="feature-img" />
          <img src={FoodWine} className="feature-img" />
        </div>
        <div className="feature-description">
          <h2>Soirées</h2>

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
