import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

import { content } from "../content/languages";
import "../styles/Landing.css";

const Landing = (props) => {
  // let [scrolled, setScrolled] = useState(false);
  let [pathname, setPathname] = useState("");

  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  useEffect(() => {
    setPathname(window.location.pathname);

    // window.addEventListener("scroll", () => {
    //   if (typeof window !== "undefined") {
    //     var yTop = window.scrollY;
    //     if (yTop > 50) {
    //       setScrolled(true);
    //     }
    //     if (yTop < 50) {
    //       setScrolled(false);
    //     }
    //   }
    // });
  });

  return (
    <div className="landing-container">
      <div className="menu-placeholder" />
      {pathname === "/" ? <div className="panorama home-banner" /> : null}
      {pathname === "/restaurant" ? (
        <div className="panorama restaurant-banner" />
      ) : null}
      {pathname === "/snack" ? <div className="panorama snack-banner" /> : null}
      <div
        className={`landing ${pathname === "/snack" ? "snack-landing" : null}`}
      >
        <div className="title">
          <Link to="/">
            <h1>Chalet du Caribou</h1>
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
  );
};

export default Landing;
