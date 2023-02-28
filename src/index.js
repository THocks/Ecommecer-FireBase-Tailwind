import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductProvider from "./context/ProductsContext";
import CardProvider from "./context/CardContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CardProvider>
    <ProductProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProductProvider>
  </CardProvider>
);
