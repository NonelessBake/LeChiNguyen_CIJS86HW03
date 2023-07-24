import React from "react";
import hotTrend from "../data/data";
import ProductItem from "./ProductItem";
import "../assets/style/style.css";
export default function ProductList() {
  return (
    <div className="product-list-container">
      {hotTrend.map((product) => (
        // eslint-disable-next-line react/jsx-key
        <ProductItem
          img={product.img}
          name={product.name}
          price={product.price}
          discount={product.discount}
          chip={product.chip}
          sizeScreen={product.sizeScreen}
          ram={product.ram}
          rom={product.rom}
        />
      ))}
    </div>
  );
}
