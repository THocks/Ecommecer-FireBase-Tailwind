import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductsContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center text-white">
        Sinto muito ainda não capturamos esse pokemon em nossa Pokedex
      </section>
    );
  }

  const { name, preco, description, image } = product;

  return (
    <>
      <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
        <div className="container mx-auto">
          {/* image & text wrapper */}
          <div className="flex flex-col lg:flex-row items-center">
            {/* image */}
            <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
              <img className="max-w-[200px] lg:max-w-sm" src={image} alt="" />
            </div>
            {/* text */}
            <div className="flex text-center items-center">
              <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
                {name}
              </h1>
              <div className="text-xl text-red-500 font-medium mb-6">
                R$ {preco}
              </div>
              <p className="mb-8 flex flex-col">
                <span className="font-bold">Descrição</span>
                {description}
              </p>
              <button className="bg-cyan-200 py-4 px-8 text-black">
                Adicionar ao carrinho
              </button>

              {/* <div className="w-80">
                <img src={metodosPagamentos} alt="" />
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
