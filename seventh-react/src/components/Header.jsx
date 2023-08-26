import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/invoices">Invoices</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/About">About</Link>
    </div>
  );
};

export default Header;
