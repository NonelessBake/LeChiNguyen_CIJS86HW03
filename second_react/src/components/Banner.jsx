import React from "react";
import "../assets/style/style.css";
import BannerSlide from "../assets/images/banner-image/banner-item-slide.jpg";
import BannerItem1 from "../assets/images/banner-image/banner-item-1.jpg";
import BannerItem2 from "../assets/images/banner-image/banner-item-2.jpg";
export default function Banner() {
  const left = "<";
  const right = ">";
  return (
    <div className="banner-container">
      <div className="banner-slide">
        <button className="left-slide"> {left} </button>
        <button className="right-slide"> {right} </button>
        <img src={BannerSlide} alt="" />
      </div>
      <div className="banner-item">
        <img src={BannerItem1} alt="BannerItem1" className="banner-item-1" />
        <img src={BannerItem2} alt="BannerItem2" className="banner-item-2" />
      </div>
    </div>
  );
}
