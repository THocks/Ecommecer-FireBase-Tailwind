import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
