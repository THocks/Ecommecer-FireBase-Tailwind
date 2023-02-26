import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CarrouselProdutos from "./Components/CarrouselProdutos/CarrouselProdutos";
import SectionProdutos from "./Components/SectionProdutos/SectionProdutos";
import Footer from "./Components/Footer/Footer";
import GaleriaProducts from "./Components/GaleriaProducts/GaleriaProducts";

function App() {
  return (
    <>
      <Router>
        <Header />
        <CarrouselProdutos />
        <SectionProdutos />
        <GaleriaProducts />
        <Routes>
          <Route />
          <Route />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
