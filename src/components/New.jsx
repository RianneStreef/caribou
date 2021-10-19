import React from "react";

import Kotas from "./Kotas";
import Soirees from "./Soirees";

import "../styles/New.css";

const New = () => {
  return (
    <div className="new" id="new">
      <p className="new-title">New this year</p>
      <div className="new-items">
        <Soirees />
        <Kotas />
      </div>
    </div>
  );
};

export default New;
