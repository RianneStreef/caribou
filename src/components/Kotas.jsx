import React from "react";

import "../styles/Soirees.css";

import { content } from "../content/languages";
import kotaNight from "../images/kota-night.jpg";

const Kotas = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  return (
    <>
      <h2 className="new-title">Kota</h2>
      <div className="new-feature">
        <div className="feature-items kotas">
          <div className="feature-description">
            <p>{languageToUse.kota1}</p>
            <p>{languageToUse.kota2}</p>
            <p>{languageToUse.kota3}</p>
          </div>
        </div>{" "}
        <img src={kotaNight} alt="Kota by night" className="feature-img" />
      </div>
    </>
  );
};

export default Kotas;
