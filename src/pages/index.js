import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Landing from "../components/Landing";
import Intro from "../components/Intro";
import PlatDuJour from "../components/PlatDuJour";
import Promo from "../components/Promo";
import Contact from "../components/Contact";

const IndexPage = () => {
  return (
    <div>
      <Landing />
      <Intro />
      <Promo />
      <Contact />
    </div>
  );
};

export const platDuJourQuery = graphql`
  query platDuJourQuery {
    allContentfulPlatDuJour {
      nodes {
        description
        platDuJour
        prix
      }
    }
  }
`;

IndexPage.Layout = Layout;
export default IndexPage;
