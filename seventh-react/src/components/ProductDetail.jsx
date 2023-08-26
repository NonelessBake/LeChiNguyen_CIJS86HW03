import { useParams } from "react-router-dom";
function ProductDetail() {
  const { productId } = useParams();
  return <div>Đây là sản phẩm {productId}</div>;
}

export default ProductDetail;
