import React from "react";
import Layout from "../components/Layout";

import { Helmet } from "react-helmet";
import favicon from "../images/icon.png";

import menu1 from "../content/menu-snack/menuSnack-page-001.jpg";
import menu2 from "../content/menu-snack/menuSnack-page-002.jpg";
import menu3 from "../content/menu-snack/menuSnack-page-003.jpg";
import menu4 from "../content/menu-snack/menuSnack-page-004.jpg";
import menu5 from "../content/menu-snack/menuSnack-page-005.jpg";
import menu6 from "../content/menu-snack/menuSnack-page-006.jpg";

const SnackMenuPage = () => {
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
      <div className="restaurant-menu">
        <img src={menu1} alt="snack menu" className="restaurant-menu-page" />
        <img src={menu2} alt="snack menu" className="restaurant-menu-page" />
        <img src={menu3} alt="snack menu" className="restaurant-menu-page" />
        <img src={menu4} alt="snack menu" className="restaurant-menu-page" />
        <img src={menu5} alt="snack menu" className="restaurant-menu-page" />
        <img src={menu6} alt="snack menu" className="restaurant-menu-page" />
      </div>
    </>
  );
};

SnackMenuPage.Layout = Layout;
export default SnackMenuPage;
