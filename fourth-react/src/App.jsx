import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import { products } from "./mockProducts";
function App() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (productItem) => {
    if (!cartItems.includes(productItem)) {
      productItem.quantity = 1;
      const newCartItems = [...cartItems, productItem];
      setCartItems(newCartItems);
    } else {
      productItem.quantity += 1;
      setCartItems((prev) => [...prev]);
    }
  };
  let quantity = 0;
  cartItems.forEach((item) => (quantity += item.quantity));

  const deleteInCart = (product, id) => {
    if (product.quantity > 1) {
      product.quantity--;
      setCartItems((prev) => [...prev]);
    } else {
      setCartItems((prev) => prev.filter((item) => item.id != id));
    }
  };

  return (
    <>
      <Cart cartItems={cartItems} quantity={quantity} />
      <ProductList
        products={products}
        addToCart={addToCart}
        deleteInCart={deleteInCart}
      />
    </>
  );
}

export default App;
