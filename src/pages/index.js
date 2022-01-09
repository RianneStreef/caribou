import React from "react";
import { graphql } from "gatsby";

import favicon from "../images/icon.png";

import Layout from "../components/Layout";
import Intro from "../components/Intro";
import New from "../components/New";
import Contact from "../components/Contact";

import { content } from "../content/languages";
import { Helmet } from "react-helmet";

import "../styles/IndexPage.css";

import barre from "../images/barre-white.png";

const IndexPage = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  let { platDuJour, prix, description, descriptionEn, date } =
    props.data.allContentfulPlatDuJour.nodes[0];

  return (
    <div>
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
      <img src={barre} className="barre1" alt="" />
      <Intro
        platDuJour={platDuJour}
        prix={prix}
        description={description}
        descriptionEn={descriptionEn}
        date={date}
        language={language}
        languageToUse={languageToUse}
      />
      <img src={barre} className="barre2" alt="" />
      <div className="banner banner-middle">
        <h2>{languageToUse.new}!</h2>
      </div>
      <img src={barre} className="barre3" alt="" />
      <New language={language} languageToUse={languageToUse} />
      <img src={barre} className="barre4" alt="" />{" "}
      <div className="banner banner-bottom">
        <h2>{languageToUse.contact}</h2>
      </div>
      <img src={barre} className="barre5" alt="" />
      <Contact language={language} languageToUse={languageToUse} />
    </div>
  );
};

export const platDuJourQuery = graphql`
  query platDuJourQuery {
    allContentfulPlatDuJour {
      nodes {
        platDuJour
        prix
        description
        descriptionEn
        date(formatString: "DD-MM-YYYY")
      }
    }
  }
`;

IndexPage.Layout = Layout;
export default IndexPage;
