import { useParams } from "react-router-dom";

const InvoiceDetail = () => {
  const params = useParams();
  return <div>Invoice {params.invoiceId}</div>;
};

export default InvoiceDetail;
