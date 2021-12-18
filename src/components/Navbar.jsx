import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import "../styles/Navbar.css";

import instagram from "../images/instagram-icon.png";
import facebook from "../images/facebook.png";

import flagEn from "../images/icon-en.png";
import flagFr from "../images/icon-fr.png";

import { content } from "../content/languages";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  z-index: 100;
  background-color: #fff;
  margin-top: 0;
  padding-left: 0;
  width: 100%;
  /* @media (min-width: 768px) {
    justify-content: flex-end;
    align-items: center;
    flex-flow: row nowrap;
    background-color: transparent;
    margin-right: 40px;
  } */
  li {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding-right: 25px;
    margin: 10px 0;
    font-family: "Rochester", cursive;
    text-transform: capitalize;
    font-size: 35px;

    a {
      color: #fff;
      transition: color 500ms ease-in;
      text-decoration: none;
    }
    a:visited {
      color: #fff;
      text-decoration: none;
    }
    a:hover {
      color: var(--color-highlight-blue);
      transition: color 500ms ease-in;
    }
    p {
      margin-top: 0;
    }
  }
  flex-flow: column nowrap;
  background-color: #404040;
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  height: 100vh;
  padding-top: 5rem;
  transition: transform 0.3s ease-in-out;
`;

const Navbar = (props) => {
  let { open, setOpen } = props;

  let { language, setLanguage, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  function handleSetLanguage(language) {
    setLanguage(language);
    localStorage.setItem("languageInStorage", language);
  }

  return (
    <div className="nav-bar">
      <Ul open={open}>
        <li>
          <Link to="/" className="nav-link" onClick={() => setOpen(!open)}>
            {languageToUse.home}
          </Link>
        </li>

        <li>
          <Link to="/#new" className="nav-link" onClick={() => setOpen(!open)}>
            {languageToUse.new}
          </Link>
        </li>

        <li>
          <Link
            to="/#contact"
            className="nav-link"
            onClick={() => setOpen(!open)}
          >
            {languageToUse.contact}
          </Link>
        </li>

        <li>
          <Link
            to="/restaurant"
            className="nav-link"
            onClick={() => setOpen(!open)}
          >
            {languageToUse.restaurant}
          </Link>
        </li>

        <li>
          <Link to="/snack" className="nav-link" onClick={() => setOpen(!open)}>
            {languageToUse.snack}
          </Link>
        </li>
        <li className="social-links-header">
          <a href="https://www.instagram.com/chaletlecaribou/">
            <img
              src={instagram}
              className="instagram-icon "
              alt="instagram icon"
            />
          </a>
          <a href="https://www.facebook.com/pages/Chalet%20Le%20Caribou%20Val%20Thorens/172348316165889/">
            <img
              src={facebook}
              className="instagram-icon "
              alt="facebook icon"
            />
          </a>
          <div className="nav-item-language">
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
          </div>
        </li>
      </Ul>
    </div>
  );
};

export default Navbar;
