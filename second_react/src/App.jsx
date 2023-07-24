import "./App.css";
import Header from "./components/header";
import Menu from "./components/Menu";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Banner />
      <h3 className="top-10">Top 10 điện thoại được yêu thích nhất</h3>
      <ProductList />
    </div>
  );
}

export default App;
