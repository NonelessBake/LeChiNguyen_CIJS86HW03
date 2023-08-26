import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import { products } from "./mockProducts";
import CartList from "./components/CartList/CartList";
function App() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (productItem) => {
    if (!cartItems.includes(productItem)) {
      productItem.quantity = 1;
      setCartItems((prev) => [...prev, productItem]);
    } else {
      productItem.quantity += 1;
      setCartItems((prev) => [...prev]);
    }
  };

  const onIncrease = (item) => {
    item.quantity++;
    setCartItems((prev) => [...prev]);
  };
  const onDecrease = (item, id) => {
    item.quantity--;
    if (item.quantity === 0)
      return setCartItems((prev) => prev.filter((item) => item.id !== id));
    setCartItems((prev) => [...prev]);
  };
  const clearCart = () => setCartItems([]);
  console.log(cartItems);

  let quantity = 0;
  let totalPrice = 0;
  cartItems.forEach((item) => {
    quantity += item.quantity;
    totalPrice += item.price * item.quantity;
  });

  // const deleteInCart = (product, id) => {
  //   if (product.quantity > 1) {
  //     product.quantity--;
  //     setCartItems((prev) => [...prev]);
  //   } else {
  //     setCartItems((prev) => prev.filter((item) => item.id !== id));
  //   }
  // };
  /*const addToCart = (productItem) => {
    let index = cartItems.findIndex((item) => item.id === productItem.id);
    if (index === -1) return setCartItems((prev) => [...prev, productItem]);
    cartItems[index].quantity += 1;
    setCartItems((prev) => [...prev]);
  };
  const deleteInCart = (productItem) => {
    let item = cartItems.find((item) => item.id === productItem.id);
    if (!item) return;
    if (item.quantity <= 1)
      return setCartItems(
        cartItems.filter((cartItem) => cartItem.id !== item.id)
      );
    item.quantity--;
    setCartItems((prev) => [...prev]);
  };*/

  return (
    <>
      <Cart
        cartItems={cartItems}
        quantity={quantity}
        totalPrice={totalPrice}
        clearCart={clearCart}
      />

      <ProductList
        products={products}
        addToCart={addToCart}
        // deleteInCart={deleteInCart}
      />
      <CartList
        cartItems={cartItems}
        quantity={quantity}
        totalPrice={totalPrice}
        clearCart={clearCart}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </>
  );
}

export default App;
