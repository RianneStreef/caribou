import React from "react";

import Layout from "../components/Layout";
import favicon from "../images/icon.png";
import { Helmet } from "react-helmet";

import { content } from "../content/languages";

import "../styles/SuccessPage.css";

const SuccessPage = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <>
      <Helmet>
        <title>Chalet du Caribou</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Chalet d'altitude sur les pistes de Val Thorens, dans les 3 Vallées"
        />
        <meta
          name="keywords"
          content="restaurant, Val Thorens, 3 Vallées, snack, pistes, chalet, panoramic"
        />
        <link rel="canonical" href="https://www.chalet-du-caribou.com/" />
        <link rel="icon" href={favicon} />
      </Helmet>
      <div className="success-page">
        <div className="menu-placeholder" />
        <h2 className="success-message">{languageToUse.successMessage}</h2>
      </div>
    </>
  );
};

SuccessPage.Layout = Layout;
export default SuccessPage;
