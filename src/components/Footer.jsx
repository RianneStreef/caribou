import React from "react";

import "../styles/Footer.css";

import Mail from "../images/envelope-icon.png";
import Phone from "../images/mobile-icon.png";
import Instagram from "../images/instagram-icon.png";
import Winter from "../images/logo-winter.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-links">
        <img src={Mail} className="social-link" />
        <img src={Phone} className="social-link" />
        <img src={Instagram} className="social-link" />
      </div>
      <div className="link-winter">
        <p className="link-winter-text">
          Take away and delivery in Val Thorens
        </p>
        <img src={Winter} className="winter-logo" />
      </div>
    </div>
  );
};

export default Footer;
