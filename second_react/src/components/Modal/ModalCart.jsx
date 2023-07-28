import "../../assets/style/style.css";
function ModalCart(newProps) {
  const { item, openModal } = newProps;
  const { img, name, price, discount, ram, rom, color } = item;
  let newPrice = parseInt(price) * (1 - parseInt(discount) / 100);
  return (
    <div className="cart-item-flex">
      <span className="remove-from-cart"> &#10006;</span>
      <div className="cart-img-container">
        <img src={img} alt={name} title={name} />
      </div>
      <div className="cart-item-info">
        <p>Điện thoại {name}</p>
        <p>
          {ram}GB/{rom}GB {color}
        </p>
      </div>
      <div className="cart-item-price">
        <p className="price">
          {price.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
        </p>
        <p className="new-price">
          {newPrice.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}đ
        </p>
        <div className="add-more">
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </div>
      </div>
    </div>
  );
}

export default ModalCart;
