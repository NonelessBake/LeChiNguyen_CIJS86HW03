import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <p>
        <Link to="/">Home</Link>
      </p>

      <p>
        <Link to="/auth">Auth </Link>
      </p>
    </div>
  );
};

export default Header;
