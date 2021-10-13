import React from "react";

import Layout from "../components/Layout";
import RestaurantLanding from "../components/RestaurantLanding";

const RestaurantPage = () => {
  return (
    <div>
      <RestaurantLanding />
    </div>
  );
};

RestaurantPage.Layout = Layout;
export default RestaurantPage;
