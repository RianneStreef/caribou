import React from "react";

import Layout from "../components/Layout";

import "../styles/SnackPage.css";
import { content } from "../content/languages";

import { Helmet } from "react-helmet";

import favicon from "../images/icon.png";

// import menuSnack from "../../menuSnack.pdf";
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
        <link rel="icon" href={favicon} />
      </Helmet>
      <img src={barre} className="barre6" alt="" />
      <div>
        <h2 className="title">{languageToUse.snack}</h2>
      </div>

      {/* <div className="button-container">
        <a href={menuSnack} target="blank" className=" button-link hidden-desktop">
          {languageToUse.menu}
        </a>
      </div> */}
      <p>{languageToUse.comingSoon}</p>
      <div className="snack-container">
        <p className="snack-text">{languageToUse.snackText1}</p>
        {/* <div className="button-container hidden-mobile">
          <a
            href={menuSnack}
            target="blank"
            className=" button-link hidden-mobile"
          >
            {languageToUse.menu}
          </a>
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
