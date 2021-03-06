import React from "react";

import Layout from "../components/Layout";
import { Link } from "gatsby";

import barre from "../images/barre-white.png";
import rest from "../images/restaurant.jpg";

import favicon from "../images/icon.png";

import { content } from "../content/languages";
import { Helmet } from "react-helmet";

import "../styles/Restaurant.css";

const RestaurantPage = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <>
      <Helmet>
        <title>Chalet du Caribou - Restaurant</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Chalet d'altitude sur les pistes de Val Thorens, dans les 3 Vallées. Restaurant et terrasse avec vue panoramic."
        />
        <meta
          name="keywords"
          content="restaurant, Val Thorens, 3 Vallées, snack, pistes, chalet, panoramic"
        />
        <link
          rel="canonical"
          href="https://www.chalet-du-caribou.com/restaurant"
        />
        <link rel="icon" href={favicon} />
      </Helmet>
      <img src={barre} className="barre6" alt="" />
      <div>
        <h2 className="title">{languageToUse.restaurant}</h2>
      </div>

      <div className="button-container hidden-desktop">
        <Link to="/menu" className=" button-link hidden-desktop">
          {languageToUse.menu}
        </Link>
      </div>
      <div className="restaurant-container">
        <div className="rest-1">
          <div className="rest-text-container">
            <p className="rest-text">{languageToUse.restText1}</p>
            <div className="button-container hidden-mobile">
              <Link to="/menu" className=" button-link  hidden-mobile">
                {languageToUse.menu}
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="rest-background-img hidden-mobile" />
  <div className="rest-2">
    <div className="rest-image-container">
      <img src={restImg2} className="rest-img" alt="Restaurant du Caribou" />
    </div>
    <p className="rest-text">{languageToUse.restText2}</p>
  </div> */}
      </div>
      <img src={barre} className="barre7" alt="" />

      <div className="rest-image-1-container" hidden-mobile-img />
      <img className="hidden-desktop-img rest-img" src={rest} alt="" />
      <img src={barre} className="barre8" alt="" />
      <div className="footer-margin" />
    </>
  );
};

RestaurantPage.Layout = Layout;
export default RestaurantPage;
