import React from "react";

const CartList = (newProps) => {
  const { cartItems, onIncrease, onDecrease, totalPrice } = newProps;

  return (
    <div>
      <hr />
      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>
            <div>{item.name}</div>
            <div style={{ width: 100 }}>
              <img
                src={`https://xcafe.space${item.image}`}
                alt=""
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div>
            <div style={{ display: "flex", gap: 20 }}>
              <button onClick={() => onDecrease(item, item.id)}>-1</button>
              {item.quantity}
              <button onClick={() => onIncrease(item)}>+1</button>
            </div>
            <div>{item.price * item.quantity}</div>
          </div>
        </div>
      ))}
      <div>{totalPrice}</div>
    </div>
  );
};

export default CartList;
