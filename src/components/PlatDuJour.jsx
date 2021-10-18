import React from "react";

import "../styles/PlatDuJour.css";

const PlatDuJour = (props) => {
  console.log(props);
  let { platDuJour, prix, description } = props;
  console.log(PlatDuJour);
  console.log(prix);
  console.log(description);

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
