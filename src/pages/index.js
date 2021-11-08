import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Intro from "../components/Intro";
import New from "../components/New";
import Contact from "../components/Contact";

import { content } from "../content/languages";

import "../styles/IndexPage.css";

import barre from "../images/barre-white.png";

const IndexPage = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  let { platDuJour, prix, description, descriptionEn } =
    props.data.allContentfulPlatDuJour.nodes[0];

  return (
    <div>
      <img src={barre} className="barre" />
      <Intro
        platDuJour={platDuJour}
        prix={prix}
        description={description}
        descriptionEn={descriptionEn}
        language={language}
        languageToUse={languageToUse}
      />
      <img src={barre} className="barre-top" />
      <div className="banner banner-middle">New!</div>
      <img src={barre} className="barre" />
      <New language={language} languageToUse={languageToUse} />
      <img src={barre} className="barre-top" />{" "}
      <div className="banner banner-bottom">
        <h2>{languageToUse.contact}</h2>
      </div>
      <img src={barre} className="barre" />
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
      }
    }
  }
`;

IndexPage.Layout = Layout;
export default IndexPage;
