import React from "react";

import Kotas from "./Kotas";
import Soirees from "./Soirees";

import "../styles/New.css";

import { content } from "../content/languages";

const New = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <div className="new" id="new">
      {/* <p className="new-title">{languageToUse.new}</p> */}
      <div className="new-items">
        <Soirees language={language} languageToUse={languageToUse} />
        <Kotas language={language} languageToUse={languageToUse} />
      </div>
    </div>
  );
};

export default New;
