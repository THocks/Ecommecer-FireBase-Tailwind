import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import TodosOsProdutos from "./pages/TodosOsProdutos";
import ProdutosArticle from "./pages/ProdutosArticle";
import Error from "./pages/Error";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<TodosOsProdutos />} />
          <Route path="/sobre" element={<Sobre/>} />
          <Route path="/contato" element={<Contato/>} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/product/:categoria" element={<ProdutosArticle/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
