import React from "react";

import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <h1>Chalet le Caribou</h1>

        <ul className="nav">
          <li className="nav-item">New</li>
          <li className="nav-item">Contact</li>
          <li className="nav-item">Restaurant</li>
          <li className="nav-item">Snack</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
