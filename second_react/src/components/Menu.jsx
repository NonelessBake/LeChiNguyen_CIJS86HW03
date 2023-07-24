import React from "react";
import "../assets/style/style.css";
import ListButton from "../assets/images/menu-icon/listbutton.png";
export default function Menu() {
  return (
    <div className="menu-container">
      <div className="menu-item product-list-type">
        <div className="menu-icon">
          <img src={ListButton} alt="1" />
        </div>
        <div>Danh mục sản phẩm </div>
      </div>
      <div className="menu-item">
        <div className="menu-icon"></div>
        <div>Giao lắp chuyên nghiệp</div>
      </div>
      <div className="menu-item">
        <div className="menu-icon"></div>
        <div>Bảo hành nhanh gọn</div>
      </div>
      <div className="menu-item">
        <div className="menu-icon"></div>
        <div>Tổng hợp khuyến mãi</div>
      </div>
      <div className="menu-item">
        <div className="menu-icon"></div>
        <div>Nguyễn Kim Luxury</div>
      </div>
    </div>
  );
}
