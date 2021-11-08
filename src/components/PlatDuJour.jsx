import React from "react";

import "../styles/PlatDuJour.css";
import { content } from "../content/languages";

const PlatDuJour = (props) => {
  let { platDuJour, prix, description, descriptionEn } = props;

  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  return (
    <div className="plat-du-jour-container">
      <div class="top left"></div>
      <div class="top right"></div>
      <div class="bottom right"></div>
      <div class="bottom left"></div>
      <h3>{languageToUse.dish}</h3>
      <div className="plat-du-jour">
        <h4>{platDuJour}</h4>
        <p>{prix}</p>
        {languageToUse.language == "french" ? (
          <p>{description}</p>
        ) : (
          <p>{descriptionEn}</p>
        )}
      </div>
    </div>
  );
};

export default PlatDuJour;
