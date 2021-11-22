import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

import logoWhite from "../images/logo-white.png";

import { content } from "../content/languages";
import "../styles/Landing.css";

const Landing = (props) => {
  let [pathname, setPathname] = useState("");

  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  useEffect(() => {
    setPathname(window.location.pathname);
    console.log(pathname);
  });

  return (
    <>
      <div className="landing-container">
        <div className="menu-placeholder" />
        {pathname === "/" ? (
          <div className="panorama home-banner">
            <img
              src={logoWhite}
              className="main-logo"
              alt="Logo Chalet du Caribou"
            />
          </div>
        ) : null}
        {pathname === "/restaurant" ? (
          <div className="panorama restaurant-banner" />
        ) : null}
        {pathname === "/snack" ? (
          <div className="panorama snack-banner" />
        ) : null}
      </div>
    </>
  );
};

export default Landing;
