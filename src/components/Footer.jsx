import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import "../styles/Footer.css";

import Mail from "../images/envelope-icon-black.png";
import MailWhite from "../images/envelope-icon.png";
import mobile from "../images/mobile-black.png";
import mobileWhite from "../images/mobile-icon.png";
import instagram from "../images/instagram-black.png";
import instagramWhite from "../images/instagram-icon.png";
import Winter from "../images/logo-winter-black.png";
import WinterWhite from "../images/logo-winter.png";

const Footer = () => {
  let [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(window.location.pathname);
  });

  return (
    <>
      <div
        className={`footer ${pathname === "/" ? null : "footer-background"}`}
      >
        <div className="link-winter">
          <p className="link-winter-text">
            Take away and delivery in Val Thorens
          </p>
          {pathname === "/" ? (
            <img src={Winter} className="winter-logo" />
          ) : (
            <img src={WinterWhite} className="winter-logo" />
          )}
        </div>

        <div className="right-footer">
          <div className="page-links">
            <AnchorLink to="/#new">
              <div className="footer-nav-item">New</div>
            </AnchorLink>
            <AnchorLink to="/#contact">
              <div className="footer-nav-item">Contact</div>
            </AnchorLink>
            <Link to="/restaurant">
              <div className="footer-nav-item">Restaurant</div>
            </Link>
            <Link to="/snack">
              <div className="footer-nav-item">Snack</div>
            </Link>
          </div>
          <div className="social-links">
            <a href="mailto:sarahmariem@hotmail.fr">
              {pathname === "/" ? (
                <img src={Mail} className="social-link" />
              ) : (
                <img src={MailWhite} className="social-link" />
              )}
            </a>
            <a href="tel:0603456223">
              {pathname === "/" ? (
                <img src={mobile} className="social-link phone-link" />
              ) : (
                <img src={mobileWhite} className="social-link phone-link" />
              )}
            </a>
            <a href="https://instagram.com">
              {pathname === "/" ? (
                <img src={instagram} className="social-link" />
              ) : (
                <img src={instagramWhite} className="social-link" />
              )}{" "}
            </a>
          </div>

          <div className="copyright">
            <p>
              Copyright Caribou 2021 Created by Rianne Streef - VTS web design
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
