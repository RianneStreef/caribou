import React from "react";

import "../styles/Soirees.css";

import { content } from "../content/languages";

const Kotas = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  return (
    <div className="new-feature">
      <div className="feature-items kotas">
        <h2 className="new-title">Kota</h2>
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
