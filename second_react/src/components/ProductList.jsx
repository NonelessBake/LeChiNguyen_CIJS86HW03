import { hotTrend, allProduct, productForU } from "../data/data";
import ProductItem from "./ProductItem";
import "../assets/style/style.css";
import { useState } from "react";
import ModalItem from "./Modal/ModalItem";
import FilterButtons from "./FilterButtons";
import ProductForYou from "./ProductForYou";
const ProductList = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((showModal) => !showModal);
  };

  const [itemSelected, setItemSelected] = useState(null);
  const handleSelectItem = (item) => {
    setItemSelected(item);
    openModal();
  };
  const [cart, setCart] = useState([]);

  const handleAddCart = (item) => {
    setCart((prev) => [...prev, item]);
  };
  const localCart = JSON.stringify(cart);
  localStorage.setItem("Item", localCart);

  return (
    <>
      <div className="product-list-container">
        {hotTrend.map((product) => (
          <ProductItem
            key={product.name}
            item={product}
            onSelect={handleSelectItem}
          />
        ))}
      </div>
      {showModal && (
        <ModalItem
          item={itemSelected}
          showModal={showModal}
          openModal={openModal}
          handleAddCart={handleAddCart}
        />
      )}

      <FilterButtons />
      <div className="product-list-container">
        {allProduct.map((product) => (
          <ProductItem
            key={product.name}
            item={product}
            onSelect={handleSelectItem}
          />
        ))}
      </div>
      <h1 className="product-for-you">Sản phẩm dành riêng cho bạn.</h1>
      <div className="product-list-container">
        {productForU.map((product) => (
          <ProductForYou
            key={product.name}
            item={product}
            onSelect={handleSelectItem}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
