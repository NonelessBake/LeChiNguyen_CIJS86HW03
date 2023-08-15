import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>This is HOME</h1>
      <p>
        <Link to="/products">Products</Link>
      </p>
      <p>
        <Link to="/invoices">Invoices</Link>
      </p>
      <p>
        <Link to="/cart">Cart</Link>
      </p>
      <p>
        <Link to="/profile">Profile</Link>
      </p>
      <p>
        <Link to="/about">About</Link>
      </p>
      <Outlet />
    </>
  );
};

export default Home;
