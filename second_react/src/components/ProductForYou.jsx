import "../assets/style/style.css";

const ProductForYou = (newProps) => {
  const { item, onSelect } = newProps;
  const { img, name, price, discount } = item;
  let newPrice = parseInt(price) * (1 - parseInt(discount) / 100);
  return (
    <div className="product-item">
      <div className="product-image-container">
        <img
          src={img}
          alt={name}
          title={name}
          className="product-img"
          onClick={() => onSelect(item)}
        />
      </div>
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p className="product-discount">
          <span className="new-price">
            {newPrice
              .toString()
              .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
              .concat("đ")}
          </span>
        </p>
        <p className="product-price">
          <span className="price">
            {price.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
          </span>
          <span className="discount">{discount.concat("%")}</span>
        </p>
      </div>
      <div>
        <a href="" className="add-to-compare">
          Thêm vào so sánh
        </a>
      </div>
      <button className="show-detail-button" onClick={() => onSelect(item)}>
        Show detail
      </button>
    </div>
  );
};
export default ProductForYou;
