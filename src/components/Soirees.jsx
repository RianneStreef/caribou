import React from "react";

import "../styles/Soirees.css";

import Soiree from "../images/Soirees.jpeg";
import Food from "../images/food.jpeg";
import FoodWine from "../images/food-wine.jpeg";
import Fondue from "../images/fondue.jpeg";

import { content } from "../content/languages";

const Soirees = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <div className="new-feature">
      <div className="feature-items soirees">
        <div className="feature-imgs">
          <img src={Soiree} className="feature-img" />
          <h2 className="new-title">{languageToUse.soiree1}</h2>

          <img src={Food} className="feature-img hidden-mobile" />
          {/* <img src={Fondue} className="feature-img hidden-mobile" />
          <img src={FoodWine} className="feature-img hidden-mobile" /> */}
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
