import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Intro from "../components/Intro";
import New from "../components/New";
import Contact from "../components/Contact";

import ViewImage from "../images/landing.jpg";

import "../styles/IndexPage.css";

const IndexPage = (props) => {
  let { platDuJour, prix, description } =
    props.data.allContentfulPlatDuJour.nodes[0];
  return (
    <div>
      <Intro platDuJour={platDuJour} prix={prix} description={description} />
      <New />
      <img src={ViewImage} className="view-image" />

      <Contact />
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
      }
    }
  }
`;

IndexPage.Layout = Layout;
export default IndexPage;
