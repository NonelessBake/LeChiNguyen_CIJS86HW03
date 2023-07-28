const Modal = (newProps) => {
  const { openModal, item, handleAddCart } = newProps;
  const { img, name, price, discount } = item;
  let newPrice = parseInt(price) * (1 - discount / 100);

  const addToCart = () => {
    handleAddCart(item);
  };

  return (
    <div className="product-modal">
      <div className="modal-flex">
        <span className="close-modal" onClick={openModal}>
          &#10006;
        </span>
        <div className="modal-img">
          <img src={img} alt={name} title={name} />
        </div>
        <div className="modal-item-container">
          <div>
            <div className="modal-detail">
              <h3>{name}</h3>
              <p className="new-price-item">
                {newPrice
                  .toString()
                  .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
                  .concat("đ")}
              </p>
              <p>
                <span className="discount discount-item">
                  {discount.concat("%")}
                </span>
                <span className="price price-item">
                  {price.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
                </span>
              </p>
              <div>
                <span className="interest-rate">Trả góp 0%</span>
                <span className="status-item"> Mới </span>
              </div>
              <button className="add-to-cart" onClick={addToCart}>
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
