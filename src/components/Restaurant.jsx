import React from "react";

import restImg1 from "../images/rest-img-1.jpeg";
import restImg2 from "../images/rest-img-2.jpeg";

import menu from "../../menu.pdf";

import "../styles/Restaurant.css";

const Restaurant = () => {
  return (
    <div className="restaurant-container">
      <div className="rest-1">
        <div className="rest-image-container">
          <img src={restImg1} className="rest-img" />
        </div>
        <div className="rest-text-container">
          <p className="rest-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            laoreet felis in est cursus, fringilla finibus ex euismod. Ut
            maximus nunc sed blandit scelerisque. Fusce porta tortor non
            dignissim facilisis. Aenean nec sodales sapien. Donec pretium enim
            ipsum, eget fermentum leo molestie at. Proin eget enim ultricies,
            tempor tortor a, luctus urna. Phasellus dictum neque id tortor
            congue bibendum. Cras tincidunt sem ac erat feugiat pellentesque.
            Vestibulum a quam enim. Nunc nec eros sem. Duis posuere odio non
            libero mollis suscipit.
          </p>
          <div className="button-container">
            <a
              href={menu}
              target="blank"
              style={{ color: "white" }}
              className=" button-link"
            >
              Menu PDF
            </a>
          </div>
        </div>
      </div>
      <div className="rest-background-img hidden-mobile" />
      <div className="rest-2">
        <div className="rest-image-container">
          <img src={restImg2} className="rest-img" />
        </div>
        <p className="rest-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet
          felis in est cursus, fringilla finibus ex euismod. Ut maximus nunc sed
          blandit scelerisque. Fusce porta tortor non dignissim facilisis.
          Aenean nec sodales sapien. Donec pretium enim ipsum, eget fermentum
          leo molestie at. Proin eget enim ultricies, tempor tortor a, luctus
          urna. Phasellus dictum neque id tortor congue bibendum. Cras tincidunt
          sem ac erat feugiat pellentesque. Vestibulum a quam enim. Nunc nec
          eros sem. Duis posuere odio non libero mollis suscipit.
        </p>
      </div>
    </div>
  );
};

export default Restaurant;
