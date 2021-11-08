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
  });

  return (
    <>
      <div className="landing-container">
        <div className="menu-placeholder" />
        {pathname === "/" ? (
          <div className="panorama home-banner">
            <img src={logoWhite} className="main-logo" />
          </div>
        ) : null}
        {pathname === "/restaurant" ? (
          <div className="panorama restaurant-banner" />
        ) : null}
        {pathname === "/snack" ? (
          <div className="panorama snack-banner" />
        ) : null}
        <div
          className={`landing ${
            pathname === "/snack" ? "snack-landing" : null
          }`}
        >
          <div className="title">
            <Link to="/">
              {pathname === "/" ? null : null}
              {pathname === "/restaurant" ? (
                <h2 className="hidden-desktop">{languageToUse.restaurant}</h2>
              ) : null}
              {pathname === "/snack" ? (
                <h2 className="hidden-desktop">{languageToUse.snack}</h2>
              ) : null}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
