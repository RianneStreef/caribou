import React from "react";
import PlatDuJour from "../components/PlatDuJour";

import "../styles/Intro.css";

import { content } from "../content/languages";

const Intro = (props) => {
  let { language, languageToUse } = props;
  let { platDuJour, prix, description, descriptionEn } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  return (
    <>
      <div className="welcome">
        <div className="welcome-text">
          <p className="padding intro-text">{languageToUse.intro}</p>
        </div>
        <PlatDuJour
          language={language}
          languageToUse={languageToUse}
          platDuJour={platDuJour}
          prix={prix}
          description={description}
          descriptionEn={descriptionEn}
        />
      </div>
    </>
  );
};

export default Intro;
