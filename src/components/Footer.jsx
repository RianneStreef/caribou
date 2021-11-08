import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import "../styles/Footer.css";

import footerBanner from "../images/footer-banner.jpg";

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
  let [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(window.location.pathname);
  });

  return (
    <>
      <img src={footerBanner} className="footer-banner" />
      <div className="footer">
        <div className="link-winter">
          <p className="link-winter-text">{languageToUse.winterCafe}</p>
          <img src={Winter} className="winter-logo" />
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
              <img src={Mail} className="social-link" />
            </a>
            <a href="tel:0603456223">
              <img src={mobile} className="social-link phone-link" />
            </a>
            <a href="https://instagram.com">
              <img src={instagram} className="social-link" />
            </a>
            <a href="https://facebook.com">
              <img src={facebook} className="social-link" />
            </a>
          </div>

          <div className="copyright">
            <p>
              {languageToUse.copyright}{" "}
              <a href="https://www.vts-webdesign.com" target="blank">
                - VTS web design
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
