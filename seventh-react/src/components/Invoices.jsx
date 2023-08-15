import { Link, Outlet } from "react-router-dom";

const Invoices = () => {
  const invoices = Array.from({ length: 10 });
  return (
    <div>
      <h1>This is Invoices Page</h1>
      {invoices.map((item, index) => (
        <div key={index}>
          <Link to={`${index + 1}`}>Invoices {index + 1}</Link>
        </div>
      ))}
    </div>
  );
};

export default Invoices;
