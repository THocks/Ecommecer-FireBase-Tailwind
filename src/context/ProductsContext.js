import { createContext, useEffect, useState } from "react";
import data from "../data/data";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setProducts(data);
    setLoading(false)
  }, []);

  return (
    <ProductContext.Provider value={{ products,loading }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
