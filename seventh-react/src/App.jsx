import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Auth from "./components/Auth";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import About from "./components/About";
import Invoices from "./components/Invoices";
import ProductDetail from "./components/ProductDetail";
import InvoiceDetail from "./components/InvoiceDetail";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/invoices/:invoiceId" element={<InvoiceDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="/auth" element={<Auth />}>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/signup" element={<Signup />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
