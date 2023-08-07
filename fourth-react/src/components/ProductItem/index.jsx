import "./ProductItem.css";
function ProductItem(newProps) {
  const { product, addToCart, deleteInCart } = newProps;
  return (
    <div className="product-item">
      <img
        className="product-img"
        src={"https://xcafe.space" + product.image}
      />
      <p className="product-name">{product.name}</p>
      <div className="btn">
        <button onClick={() => addToCart(product)}>Add</button>
        <button onClick={() => deleteInCart(product, product.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
