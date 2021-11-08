import React from "react";

import "../styles/Soirees.css";

import Kota from "../images/kotas.jpg";
import Kota3 from "../images/kota3.jpeg";

import { content } from "../content/languages";

const Kotas = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  return (
    <div className="new-feature">
      <div className="feature-items kotas">
        <div className="feature-imgs">
          <img src={Kota} className="feature-img" />
          <h2 className="new-title">Kota</h2>

          <img src={Kota3} className="feature-img hidden-mobile" />
        </div>
        <div className="feature-description">
          <p>{languageToUse.kota1}</p>
          <p>{languageToUse.kota2}</p>
          <p>{languageToUse.kota3}</p>
        </div>
      </div>{" "}
    </div>
  );
};

export default Kotas;
