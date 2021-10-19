import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import "../styles/Landing.css";

import Panorama from "../images/Panorama.jpg";
import Restaurant from "../images/restaurant-header.jpeg";
import Snack from "../images/snack-header.jpeg";

const Landing = () => {
  let [scrolled, setScrolled] = useState(false);
  let [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(window.location.pathname);
    console.log("pathname");
    console.log(pathname);

    window.addEventListener("scroll", () => {
      if (typeof window !== "undefined") {
        var yTop = window.scrollY;
        if (yTop > 10) {
          setScrolled(true);
        }
        if (yTop < 10) {
          setScrolled(false);
        }
      }
    });
  });

  return (
    <div className="landing">
      <nav className="navbar">
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
      {pathname == "/" ? <img src={Panorama} className="panorama" /> : null}
      {pathname == "/restaurant" ? (
        <img src={Restaurant} className="panorama" />
      ) : null}
      {pathname == "/snack" ? <img src={Snack} className="panorama" /> : null}
    </div>
  );
};

export default Landing;
