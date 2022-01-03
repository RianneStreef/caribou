import React, { useEffect, useState } from "react";

import logoWhite from "../images/logo-white.png";

import "../styles/Landing.css";

const Landing = () => {
  let [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(window.location.pathname);
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
