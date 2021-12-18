import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import "../styles/Footer.css";

import Mail from "../images/envelope-icon-black.png";
import mobile from "../images/mobile-black.png";
import instagram from "../images/instagram-black.png";
import facebook from "../images/facebook-black.png";
import Winter from "../images/logo-winter-black.png";

import { content } from "../content/languages";

const Footer = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  return (
    <>
      <div className="footer">
        <div className="link-winter">
          <p className="link-winter-text">{languageToUse.winterCafe}</p>
          <img src={Winter} className="winter-logo" alt="Winter Cafe Logo" />
        </div>

        <div className="right-footer">
          <div className="page-links">
            <AnchorLink to="/#new">
              <div className="footer-nav-item">{languageToUse.new}</div>
            </AnchorLink>
            <AnchorLink to="/#contact">
              <div className="footer-nav-item">{languageToUse.contact}</div>
            </AnchorLink>
            <Link to="/restaurant">
              <div className="footer-nav-item">{languageToUse.restaurant}</div>
            </Link>
            <Link to="/snack">
              <div className="footer-nav-item">{languageToUse.snack}</div>
            </Link>
          </div>
          <div className="social-links">
            <a href="mailto:sarahmariem@hotmail.fr">
              <img src={Mail} className="social-link" alt="mail icon" />
            </a>
            <a href="tel:0603456223">
              <img
                src={mobile}
                className="social-link phone-link"
                alt="telephone icon"
              />
            </a>
            <a href="https://www.instagram.com/chaletlecaribou/">
              <img
                src={instagram}
                className="social-link"
                alt="instagram icon"
              />
            </a>
            <a href="https://www.facebook.com/pages/Chalet%20Le%20Caribou%20Val%20Thorens/172348316165889/">
              <img src={facebook} className="social-link" alt="facebook icon" />
            </a>
          </div>

          <div className="copyright">
            <p className="copyright-text">
              {languageToUse.copyright}{" "}
              <a href="https://www.vts-webdesign.com" target="blank">
                - VTS web design
              </a>
              <Link to="/legal">- {languageToUse.legal}</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
