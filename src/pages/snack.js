import React from "react";

import Layout from "../components/Layout";

import "../styles/SnackPage.css";

import snackImg1 from "../images/rest-img-1.jpeg";

import menu from "../../menu.pdf";

const SnackPage = () => {
  return (
    <>
      <div className="button-container hidden-desktop">
        <a href={menu} target="blank" className=" button-link hidden-desktop">
          Menu PDF
        </a>
      </div>
      <div className="snack-container">
        <div className="snack-1">
          <div className="snack-image-container">
            <img src={snackImg1} className="snack-img" alt="Snack du Caribou" />
          </div>
          <div className="snack-text-container">
            <p className="snack-text">
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
            <div className="button-container hidden-mobile">
              <a
                href={menu}
                target="blank"
                className=" button-link hidden-mobile"
              >
                Menu PDF
              </a>
            </div>
          </div>
        </div>
        {/* <div className="rest-background-img hidden-mobile" />

      <div className="snack-2">
        <div className="snack-image-container">
          <img src={snackImg2} className="snack-img" alt="Snack du Caribou" />
        </div>
        <p className="snack-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet
          felis in est cursus, fringilla finibus ex euismod. Ut maximus nunc sed
          blandit scelerisque. Fusce porta tortor non dignissim facilisis.
          Aenean nec sodales sapien. Donec pretium enim ipsum, eget fermentum
          leo molestie at. Proin eget enim ultricies, tempor tortor a, luctus
          urna. Phasellus dictum neque id tortor congue bibendum. Cras tincidunt
          sem ac erat feugiat pellentesque. Vestibulum a quam enim. Nunc nec
          eros sem. Duis posuere odio non libero mollis suscipit.
        </p>
      </div> */}
      </div>
    </>
  );
};

SnackPage.Layout = Layout;
export default SnackPage;
