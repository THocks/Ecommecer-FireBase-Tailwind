import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CarrouselProdutos from "./Components/CarrouselProdutos/CarrouselProdutos";

function App() {
  return (
    <>
      <Router>
        <Header />
        <CarrouselProdutos />
        <Routes>
          <Route />
          <Route />
        </Routes>
      </Router>
    </>
  );
}

export default App;
