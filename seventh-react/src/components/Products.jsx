import React from "react";
import { NavLink } from "react-router-dom";
function Products() {
  const products = Array.from({ length: 10 });
  return (
    <>
      <div>Đây là list sản phẩm</div>
      {products.map((item, index) => {
        return (
          <div key={index + 1}>
            <h3>Product {index + 1}</h3>
            <button style={{ backgroundColor: `green` }}>
              <NavLink to={`${index + 1}`}>View Detail</NavLink>
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Products;
