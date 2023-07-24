import React from "react";
import "../assets/style/style.css";
import CartIcon from "../assets/images/header-icon/cart.png";
import SearchIcon from "../assets/images/header-icon/search.png";
import LocationIcon from "../assets/images/header-icon/location.png";
import Logo from "../assets/images/logo.png";
import OrderTrackingIcon from "../assets/images/header-icon/order-tracking.png";
import UserIcon from "../assets/images/header-icon/user.png";
import HotlineIcon from "../assets/images/header-icon/hotline.png";
export default function header() {
  return (
    <div className="header">
      <div className="header-item trademark ">
        <a href="">
          <img src={Logo} alt="" />
        </a>
      </div>
      <div className="header-item select-location">
        <div className="icon-container">
          <img src={LocationIcon} alt="" />
        </div>
        <p className="location">
          Xem giá tại
          <p>
            TP.HCM
            <select name="area" id="area" className="area"></select>
          </p>
        </p>
      </div>
      <div className="header-item search ">
        <div className="icon-container">
          <div className="search-icon">
            <img src={SearchIcon} alt="" />
          </div>
        </div>
        <input
          className="search-input"
          type="text"
          placeholder="Bạn cần tìm gì hôm nay ?"
        />
      </div>
      <div className="header-item cart">
        <div className="icon-container">
          <img src={CartIcon} alt="" />
        </div>
        <p>Giỏ hàng</p>
      </div>
      <div className="header-item order-lookup">
        <div className="icon-container">
          <img src={OrderTrackingIcon} alt="" />
        </div>
        <p>Tra cứu đơn hàng</p>
      </div>
      <div className="header-item user">
        <div className="icon-container">
          <img src={UserIcon} alt="" />
        </div>
        <p>Tài khoản</p>
      </div>
      <div className="header-item hotline">
        <div className="icon-container">
          <img src={HotlineIcon} alt="" />
        </div>
        <div className="phone">
          <p>Gọi mua: 1800 6800</p>
          <p>(Miễn Phí)</p>
        </div>
      </div>
    </div>
  );
}
