import React from "react";

import Layout from "../components/Layout";
import favicon from "../images/icon.png";
import { Helmet } from "react-helmet";

import "../styles/SuccessPage.css";

const SuccessPage = () => {
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
      <div className="menu-placeholder" />
      <div>Thank you for your message!</div>
    </>
  );
};

SuccessPage.Layout = Layout;
export default SuccessPage;
