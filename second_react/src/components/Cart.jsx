import ModalCart from "./Modal/ModalCart";
import "../assets/style/style.css";
// import ModalCart from "./Modal/ModalCart";
function Cart(newProps) {
  const { openModal } = newProps;
  const cart = JSON.parse(localStorage.getItem("Item"));
  let sum = 0;
  cart.forEach((e) => {
    sum += parseInt(e.price) * (1 - parseInt(e.discount) / 100);
  });
  let total = sum.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
  let promotion = 0;
  let transportFee = 0;
  let finalPrice = sum * (1 - promotion / 100) - transportFee;
  return (
    <div className="cart-container">
      <div className="cart-fix">
        <span className="close-cart" onClick={openModal}>
          &#10006;
        </span>
        {cart.map((product, index) => (
          <ModalCart key={index} item={product} openModal={openModal} />
        ))}
        <div className="total-cart-pay">
          <div className="number-flex">
            <p>Tạm tính:</p>
            <span>{total}đ</span>
          </div>
          <div className="number-flex">
            <p>Khuyến mãi:</p>
            <span className="promotion">{promotion}đ</span>
          </div>
          <div className="number-flex">
            <p>Phí vận chuyển:</p>
            <span>{transportFee}đ</span>
          </div>
        </div>
        <div className="number-flex pay">
          <p>Tổng tiền:</p>
          <span className="final-price">
            {finalPrice.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}đ
          </span>
        </div>
      </div>
    </div>
  );
}

export default Cart;
