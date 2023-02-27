import React from "react";
import GaleriaProducts from "../Components/GaleriaProducts/GaleriaProducts";
import CarrouselProdutos from "../Components/CarrouselProdutos/CarrouselProdutos";
import SectionProdutos from "../Components/SectionProdutos/SectionProdutos";
const Home = () => {
  return (
    <div>
      <CarrouselProdutos />
      <SectionProdutos />
      <GaleriaProducts />
    </div>
  );
};

export default Home;
