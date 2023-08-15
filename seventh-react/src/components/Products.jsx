import { Link, Outlet } from "react-router-dom";

const Products = () => {
  const products = Array.from({ length: 10 });
  return (
    <div>
      <h1>This is Products Page</h1>
      {products.map((item, index) => (
        <div key={index}>
          <Link to={`${index + 1}`}>Product {index + 1}</Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
