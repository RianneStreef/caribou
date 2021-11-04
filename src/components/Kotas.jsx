import React from "react";

import "../styles/Soirees.css";

import Kota from "../images/kotas.jpg";
import Kota2 from "../images/kota2.jpeg";
import Kota3 from "../images/kota3.jpeg";
import Kota4 from "../images/kota4.jpeg";

const Kotas = () => {
  return (
    <div className="new-feature">
      <div className="feature-items kotas">
        <div className="feature-description">
          <h2>Kota</h2>
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
        <div className="feature-imgs">
          <img src={Kota} className="feature-img" />
          <img src={Kota3} className="feature-img hidden-mobile" />
          <img src={Kota2} className="feature-img hidden-mobile" />
          <img src={Kota4} className="feature-img hidden-mobile" />
        </div>
      </div>{" "}
    </div>
  );
};

export default Kotas;
