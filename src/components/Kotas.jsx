import React from "react";

import "../styles/Soirees.css";

import Kota from "../images/kotas.jpg";

const Kotas = () => {
  return (
    <div className="kotas new-feature">
      <h3 className="h3-color-inverse">Kotas</h3>
      <div className="feature-items">
        <img src={Kota} className="feature-img" />
        <div className="feature-description">
          <p>Deux Kotas finlandais</p>
          <p>
            Vous avez envie d'avoir votre petit chalet à la montagne le temps
            d'un repas en famille ou entre amis ? Cela est maintenant possible
            avec nos deux kotas pouvant recevoir jusqu'à 8 personnes chacun...
          </p>
          <p>
            Privatisation possible pour 100 euros par kota avec son petit coin
            de salon extérieur.
          </p>
        </div>
      </div>{" "}
    </div>
  );
};

export default Kotas;
