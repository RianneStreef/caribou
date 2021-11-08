import React, { useEffect } from "react";

import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Burger from "../components/Burger";

import "../styles/Header.css";

import logoBlack from "../images/logo-black.png";

import mobile from "../images/mobile-black.png";
import instagram from "../images/instagram-black.png";
import facebook from "../images/facebook-black.png";

import flagEn from "../images/icon-en.png";
import flagFr from "../images/icon-fr.png";

import { content } from "../content/languages";

const Header = (props) => {
  let { language, setLanguage, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  const opacity = 0.1;
  let header;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (typeof window !== "undefined") {
        header = document.getElementById("header");
        const y = 1 + (window.scrollY || window.pageYOffset);
        const o = (opacity + y) / 600;
        header.style.backgroundColor = `rgb(255, 255, 255s, ${o} `;
      }
    });
  });

  function handleSetLanguage(language) {
    setLanguage(language);
    localStorage.setItem("languageInStorage", language);
  }

  return (
    <>
      <div className="header" id="header">
        <img scr={logoBlack} className="logo" />
        <nav className="navbar hidden-menu-mobile">
          <ul className="nav">
            <AnchorLink to="/#new">
              <li className="nav-item">{languageToUse.new}</li>
            </AnchorLink>
            <AnchorLink to="/#contact">
              <li className="nav-item"> {languageToUse.contact}</li>
            </AnchorLink>

            <Link to="/restaurant">
              <li className="nav-item"> {languageToUse.restaurant}</li>
            </Link>
            <Link to="/snack">
              <li className="nav-item"> {languageToUse.snack}</li>
            </Link>
          </ul>
        </nav>
        <div className="nav-items">
          {language === "english" ? (
            <img
              className="language-icon"
              src={flagFr}
              onClick={() => handleSetLanguage("french")}
              alt="Set language to French"
            />
          ) : (
            <img
              className="language-icon"
              src={flagEn}
              onClick={() => handleSetLanguage("english")}
              alt="Set language to English"
            />
          )}
          <a href="tel:0603456223">
            {" "}
            <img src={mobile} className="mobile-icon" />
          </a>
          <a href="https://instagram.com">
            <img src={instagram} className="instagram-icon" />
          </a>
          <a href="https://facebook.com">
            <img src={facebook} className="instagram-icon" />
          </a>
          <Burger />
        </div>
      </div>
    </>
  );
};

export default Header;
