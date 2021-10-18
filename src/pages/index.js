import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Landing from "../components/Landing";
import Intro from "../components/Intro";
import New from "../components/New";
import Contact from "../components/Contact";

const IndexPage = (props) => {
  let { platDuJour, prix, description } =
    props.data.allContentfulPlatDuJour.nodes[0];
  return (
    <div>
      <Landing />
      <Intro platDuJour={platDuJour} prix={prix} description={description} />
      <New />
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
