import React from "react";
import ReactDOM from "react-dom/client";
import restaurants from "./data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import "/node_modules/bootstrap-icons/font/bootstrap-icons.css";
import swiggy_logo from "/assets/swiggy_logo.jpeg";
import { Carousel } from "/Carousel.js";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <Navbar />
        <Carousel />
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        <ul className="nav-items-right">
          <li>
            <a class="navbar-brand" href="#">
              <img src={swiggy_logo} className="logo" />
            </a>
          </li>
          <li>
            <a href="#" className="other_link">
              Other
            </a>
          </li>
          <li>
            <p>selected location name displays here</p>
          </li>
          <li>
            <i class="bi bi-chevron-down"></i>
          </li>
        </ul>
        <ul className="nav_items">
          <li class="nav-item">
            <i class="bi bi-search"></i>
            <a href="#">Search</a>
          </li>
          <li class="nav-item">
            <i class="bi bi-info-circle"></i>
            <a href="#">Offers</a>
          </li>
          <li class="nav-item">
            <i class="bi bi-patch-question"></i>
            <a href="#">Help</a>
          </li>
          <li class="nav-item">
            <i class="bi bi-person-fill"></i>
            <a href="#">Sign In</a>
          </li>
          <li class="nav-item">
            <i class="bi bi-cart"></i>
            <a href="#">Cart</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
