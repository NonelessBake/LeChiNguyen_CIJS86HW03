import hotTrend from "../data/data";
import ProductItem from "./ProductItem";
import "../assets/style/style.css";
import { useState } from "react";
import ModalItem from "./Modal/ModalItem";

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

  //nay cung truyen vao trong modal, nhan gia tri tra ra ngoai thi luu lai
  const handleAddCart = (item) => {
    setCart((prev) => [...prev, item]);
  };
  const localCart = JSON.stringify(cart);
  localStorage.setItem("Item", localCart);

  return (
    <>
      <div className="product-list-container">
        {hotTrend.map((product, index) => (
          <ProductItem key={index} item={product} onSelect={handleSelectItem} />
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
    </>
  );
};

export default ProductList;
