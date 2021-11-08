import React from "react";

import restImg1 from "../images/rest-img-1.jpeg";
import restImg2 from "../images/rest-img-2.jpeg";

import menu from "../../menu.pdf";

import { content } from "../content/languages";

import "../styles/Restaurant.css";

const Restaurant = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <>
      <div className="button-container hidden-desktop">
        <a href={menu} target="blank" className=" button-link hidden-desktop">
          {languageToUse.menu}
        </a>
      </div>
      <div className="restaurant-container">
        <div className="rest-1">
          <div className="rest-image-container">
            <img src={restImg1} className="rest-img" />
          </div>
          <div className="rest-text-container">
            <p className="rest-text">{languageToUse.restText1}</p>
            <div className="button-container hidden-mobile">
              <a
                href={menu}
                target="blank"
                className=" button-link  hidden-mobile"
              >
                {languageToUse.menu}
              </a>
            </div>
          </div>
        </div>
        {/* <div className="rest-background-img hidden-mobile" />
      <div className="rest-2">
        <div className="rest-image-container">
          <img src={restImg2} className="rest-img" />
        </div>
        <p className="rest-text">{languageToUse.restText2}</p>
      </div> */}
      </div>
    </>
  );
};

export default Restaurant;
