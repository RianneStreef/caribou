import React from "react";

import "../styles/PlatDuJour.css";

const PlatDuJour = (props) => {
  let { platDuJour, prix, description } = props;

  return (
    <div className="plat-du-jour-container">
      <h3>Dish of the Day</h3>
      <div className="plat-du-jour">
        <h4>{platDuJour}</h4>
        <p>{prix}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PlatDuJour;
