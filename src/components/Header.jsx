import React, { useEffect } from "react";

import { Link } from "gatsby";

import Burger from "../components/Burger";

import "../styles/Header.css";

import mobile from "../images/mobile-black.png";
import instagram from "../images/instagram-black.png";

const Header = () => {
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
  return (
    <>
      <div className="header" id="header">
        <div className="nav-items">
          <a href="tel:0603456223">
            <img src={mobile} className="mobile-icon" />
          </a>
          <a href="https://instagram.com">
            <img src={instagram} className="instagram-icon" />
          </a>
          <Burger />
        </div>
      </div>
      <div className="title">
        <Link to="/">
          <h1>Chalet le Caribou</h1>
        </Link>
      </div>
    </>
  );
};

export default Header;
