import React from "react";
import Layout from "../components/Layout";

import { Helmet } from "react-helmet";
import favicon from "../images/icon.png";

import menu1 from "../content/menu-restaurant/menuRestaurant-page-001.jpg";
import menu2 from "../content/menu-restaurant/menuRestaurant-page-002.jpg";
import menu3 from "../content/menu-restaurant/menuRestaurant-page-002.jpg";
import menu4 from "../content/menu-restaurant/menuRestaurant-page-002.jpg";
import menu5 from "../content/menu-restaurant/menuRestaurant-page-002.jpg";
import menu6 from "../content/menu-restaurant/menuRestaurant-page-002.jpg";
import menu7 from "../content/menu-restaurant/menuRestaurant-page-002.jpg";
import menu8 from "../content/menu-restaurant/menuRestaurant-page-002.jpg";
import menu9 from "../content/menu-restaurant/menuRestaurant-page-002.jpg";
import menu10 from "../content/menu-restaurant/menuRestaurant-page-002.jpg";
import menu11 from "../content/menu-restaurant/menuRestaurant-page-002.jpg";
import menu12 from "../content/menu-restaurant/menuRestaurant-page-002.jpg";
import menu13 from "../content/menu-restaurant/menuRestaurant-page-002.jpg";
import menu14 from "../content/menu-restaurant/menuRestaurant-page-002.jpg";

const MenuPage = () => {
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
        <img
          src={menu1}
          alt="restaurant menu"
          className="restaurant-menu-page"
        />
        <img
          src={menu2}
          alt="restaurant menu"
          className="restaurant-menu-page"
        />
        <img
          src={menu3}
          alt="restaurant menu"
          className="restaurant-menu-page"
        />
        <img
          src={menu4}
          alt="restaurant menu"
          className="restaurant-menu-page"
        />
        <img
          src={menu5}
          alt="restaurant menu"
          className="restaurant-menu-page"
        />
        <img
          src={menu6}
          alt="restaurant menu"
          className="restaurant-menu-page"
        />
        <img
          src={menu7}
          alt="restaurant menu"
          className="restaurant-menu-page"
        />
        <img
          src={menu8}
          alt="restaurant menu"
          className="restaurant-menu-page"
        />
        <img
          src={menu9}
          alt="restaurant menu"
          className="restaurant-menu-page"
        />
        <img
          src={menu10}
          alt="restaurant menu"
          className="restaurant-menu-page"
        />
        <img
          src={menu11}
          alt="restaurant menu"
          className="restaurant-menu-page"
        />
        <img
          src={menu12}
          alt="restaurant menu"
          className="restaurant-menu-page"
        />
        <img
          src={menu13}
          alt="restaurant menu"
          className="restaurant-menu-page"
        />
        <img
          src={menu14}
          alt="restaurant menu"
          className="restaurant-menu-page"
        />
      </div>
    </>
  );
};

MenuPage.Layout = Layout;
export default MenuPage;
