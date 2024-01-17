import React from "react";
import biriyani from "./assets/Biryani_2.avif";
import burger from "./assets/Burger.avif";
import chinese from "./assets/Chinese.avif";
import dosa from "./assets/Dosa.avif";
import idli from "./assets/Idli.avif";
import momos from "./assets/Momos.avif";
import noodles from "./assets/Noodles.avif";
import pav from "./assets/Pav_Bhaji.avif";
import sandwich from "./assets/Sandwich.avif";
import shawarma from "./assets/Shawarma.avif";
import "./app.css";

export const Carousel = () => {
  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={biriyani}></img>
        </div>
        <div className="carousel-item ">
          <img src={burger}></img>
        </div>
        <div className="carousel-item">
          <img src={chinese}></img>
        </div>
        <div className="carousel-item">
          <img src={dosa}></img>
        </div>
        <div className="carousel-item">
          <img src={idli}></img>
        </div>
        <div className="carousel-item">
          <img src={momos}></img>
        </div>
        <div className="carousel-item">
          <img src={noodles}></img>
        </div>
        <div className="carousel-item">
          <img src={pav}></img>
        </div>
        <div className="carousel-item">
          <img src={sandwich}></img>
        </div>
        <div className="carousel-item">
          <img src={shawarma}></img>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
