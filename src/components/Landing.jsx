import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import "../styles/Landing.css";

const Landing = () => {
  let [scrolled, setScrolled] = useState(false);
  let [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(window.location.pathname);

    window.addEventListener("scroll", () => {
      if (typeof window !== "undefined") {
        var yTop = window.scrollY;
        if (yTop > 50) {
          setScrolled(true);
        }
        if (yTop < 50) {
          setScrolled(false);
        }
      }
    });
  });

  return (
    <div className="landing-container">
      <div className="menu-placeholder" />
      <div
        className={`landing ${pathname === "/snack" ? "snack-landing" : null}`}
      >
        <nav className="navbar hidden-menu-mobile">
          <ul className="nav">
            <AnchorLink to="/#new">
              <li className={`nav-item ${scrolled && "hide"}`}>New</li>
            </AnchorLink>
            <AnchorLink to="/#contact">
              <li className={`nav-item ${scrolled && "hide"}`}>Contact</li>
            </AnchorLink>

            <Link to="/restaurant">
              <li className={`nav-item ${scrolled && "hide"}`}>Restaurant</li>
            </Link>
            <Link to="/snack">
              <li className={`nav-item ${scrolled && "hide"}`}>Snack</li>
            </Link>
          </ul>
        </nav>
        <div className="title">
          <Link to="/">
            <h1>Chalet le Caribou</h1>
            {pathname === "/" ? null : null}
            {pathname === "/restaurant" ? (
              <h2 className="hidden-desktop">Restaurant</h2>
            ) : null}
            {pathname === "/snack" ? (
              <h2 className="hidden-desktop">Snack</h2>
            ) : null}
          </Link>
        </div>
      </div>

      {pathname === "/" ? <div className="panorama home-banner" /> : null}
      {pathname === "/restaurant" ? (
        <div className="panorama restaurant-banner" />
      ) : null}
      {pathname === "/snack" ? <div className="panorama snack-banner" /> : null}
    </div>
  );
};

export default Landing;
