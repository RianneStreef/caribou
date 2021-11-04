import React from "react";

import Layout from "../components/Layout";
import Restaurant from "../components/Restaurant";

import "../styles/RestaurantPage.css";

const RestaurantPage = () => {
  return (
    <div>
      <Restaurant />
    </div>
  );
};

RestaurantPage.Layout = Layout;
export default RestaurantPage;
