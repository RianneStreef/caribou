import React from "react";

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

  function handleSetLanguage(language) {
    setLanguage(language);
    localStorage.setItem("languageInStorage", language);
  }

  return (
    <>
      <nav className="header" id="header">
        <Link to="/">
          <img
            src={logoBlack}
            className="header-logo"
            alt="Logo Chalet du Caribout"
          />
        </Link>
        <ul className="nav">
          <li className="nav-item hidden-mobile">
            <AnchorLink to="/#new">{languageToUse.new}</AnchorLink>
          </li>
          <li className="nav-item hidden-mobile">
            <AnchorLink to="/#contact">{languageToUse.contact}</AnchorLink>
          </li>
          <li className="nav-item hidden-mobile">
            <Link to="/restaurant">{languageToUse.restaurant}</Link>
          </li>
          <li className="nav-item hidden-mobile">
            <Link to="/snack">{languageToUse.snack}</Link>
          </li>
        </ul>
        <div className="mobile-icons">
          <div className="social-links-header">
            <a href="tel:0603456223">
              {" "}
              <img src={mobile} className="mobile-icon" alt="telephone icon" />
            </a>
            <a
              href="https://www.instagram.com/chaletlecaribou/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={instagram}
                className="instagram-icon hidden-mobile"
                alt="instagram icon"
              />
            </a>
            <a
              href="https://www.facebook.com/pages/Chalet%20Le%20Caribou%20Val%20Thorens/172348316165889/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={facebook}
                className="instagram-icon hidden-mobile"
                alt="facebook icon"
              />
            </a>
            <div className="nav-item-language hidden-mobile">
              {language === "english" ? (
                <img
                  className="language-icon"
                  src={flagEn}
                  onClick={() => handleSetLanguage("french")}
                  alt="Set language to French"
                />
              ) : (
                <img
                  className="language-icon"
                  src={flagFr}
                  onClick={() => handleSetLanguage("english")}
                  alt="Set language to English"
                />
              )}
            </div>
          </div>

          <div className="hidden-desktop">
            <Burger />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
