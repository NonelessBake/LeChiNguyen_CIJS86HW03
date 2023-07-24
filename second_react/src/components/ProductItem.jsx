import React from "react";
import "../assets/style/style.css";
function ProductItem(item) {
  const { img, name, price, discount, chip, sizeScreen, ram, rom } = item;
  let newPrice = parseInt(price) * (1 - discount / 100);
  return (
    <div className="product-item">
      <div className="product-image-container">
        <img src={img} alt={name} title={name} className="product-img" />
      </div>
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p className="product-discount">
          <span className="new-price">
            {newPrice
              .toString()
              .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
              .concat("đ")}
          </span>
        </p>
        <p className="product-price">
          <span className="price">
            {price.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
          </span>

          <span className="discount">{discount.concat("%")}</span>
        </p>

        <p className="product-chip">Chipset: {chip}</p>
        <p className="product-sizeScreen">Kích thước màn hình: {sizeScreen}</p>
        <p className="product-ram">Ram: {ram}</p>
        <p className="product-rom">Bộ nhớ trong: {rom}</p>
      </div>
      <div>
        <a href="" className="add-to-compare">
          Thêm vào so sánh
        </a>
      </div>
    </div>
  );
}
export default ProductItem;
