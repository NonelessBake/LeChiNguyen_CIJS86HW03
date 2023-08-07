import ProductItem from "../ProductItem";
import "./ProductList.css";
function ProductList(newProps) {
  const { products, addToCart, deleteInCart } = newProps;

  return (
    <div className="products-wrapper">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          addToCart={addToCart}
          deleteInCart={deleteInCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
