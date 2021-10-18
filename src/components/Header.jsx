import React from "react";

import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <h1>Chalet le Caribou</h1>

        <ul className="nav">
          <AnchorLink to="/#new">
            <li className="nav-item">New</li>
          </AnchorLink>
          <AnchorLink to="/#contact">
            <li className="nav-item">Contact</li>
          </AnchorLink>

          <Link to="/restaurant">
            <li className="nav-item">Restaurant</li>
          </Link>
          <Link to="/snack">
            <li className="nav-item">Snack</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
