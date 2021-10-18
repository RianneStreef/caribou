import React from "react";

import Kotas from "./Kotas";
import Soirees from "./Soirees";

import "../styles/New.css";

const New = () => {
  return (
    <div className="new" id="new">
      <h2 className="h2-color-inverse">New</h2>
      <div className="new-items">
        <Kotas />
        <Soirees />
      </div>
    </div>
  );
};

export default New;
