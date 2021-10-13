import React from "react";

import Layout from "../components/Layout";
import SnackLanding from "../components/SnackLanding";

const SnackPage = () => {
  return (
    <div>
      <SnackLanding />
    </div>
  );
};

SnackPage.Layout = Layout;
export default SnackPage;
