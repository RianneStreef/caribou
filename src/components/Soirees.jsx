import React from "react";

import "../styles/Soirees.css";
import dammeuse from "../images/dammeuse.jpg";

import { content } from "../content/languages";

const Soirees = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <div className="new-feature new-feature-soirees">
      <img src={dammeuse} alt="Dammeuse" className="feature-img" />

      <div className="feature-items soirees">
        <div className="feature-imgs">
          <h2 className="new-title">{languageToUse.soiree1}</h2>
        </div>
        <div className="feature-description">
          <p>{languageToUse.soiree2}</p>
          <p>{languageToUse.soiree3}</p>
        </div>
      </div>
    </div>
  );
};

export default Soirees;
