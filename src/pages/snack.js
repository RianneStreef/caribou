import React from "react";

import Layout from "../components/Layout";

import "../styles/SnackPage.css";
import { content } from "../content/languages";

import { Helmet } from "react-helmet";

import snackImg1 from "../images/rest-img-1.jpeg";

import menu from "../../menu.pdf";
import barre from "../images/barre-white.png";

const SnackPage = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <>
      <Helmet>
        <title>Chalet du Caribou - Snack</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Chalet d'altitude sur les pistes de Val Thorens, dans les 3 Vallées. Snack et terrasse avec vue panoramic."
        />
        <meta
          name="keywords"
          content="restaurant, Val Thorens, 3 Vallées, snack, pistes, chalet, panoramic"
        />
        <link rel="canonical" href="https://www.chalet-du-caribou.com/snack" />
      </Helmet>
      <img src={barre} className="barre6" alt="" />
      <div>
        <h2 className="hidden-desktop title">{languageToUse.snack}</h2>
      </div>

      <div className="button-container hidden-desktop">
        <a href={menu} target="blank" className=" button-link hidden-desktop">
          {languageToUse.menu}
        </a>
      </div>
      <div className="snack-container">
        <div className="snack-1">
          <div className="snack-text-container">
            <p className="snack-text">{languageToUse.snackText1}</p>
            <div className="button-container hidden-mobile">
              <a
                href={menu}
                target="blank"
                className=" button-link hidden-mobile"
              >
                {languageToUse.menu}
              </a>
            </div>
          </div>
        </div>
        {/* <div className="rest-background-img hidden-mobile" />

      <div className="snack-2">
        <div className="snack-image-container">
          <img src={snackImg2} className="snack-img" alt="Snack du Caribou" />
        </div>
        <p className="snack-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet
          felis in est cursus, fringilla finibus ex euismod. Ut maximus nunc sed
          blandit scelerisque. Fusce porta tortor non dignissim facilisis.
          Aenean nec sodales sapien. Donec pretium enim ipsum, eget fermentum
          leo molestie at. Proin eget enim ultricies, tempor tortor a, luctus
          urna. Phasellus dictum neque id tortor congue bibendum. Cras tincidunt
          sem ac erat feugiat pellentesque. Vestibulum a quam enim. Nunc nec
          eros sem. Duis posuere odio non libero mollis suscipit.
        </p>
      </div> */}
      </div>
      <img src={barre} className="barre7" alt="" />

      <div className="rest-image-1-container" />
      <img src={barre} className="barre8" alt="" />
      <div className="footer-margin" />
    </>
  );
};

SnackPage.Layout = Layout;
export default SnackPage;
