import React, { useContext } from "react";
import { Link } from "react-router-dom";
//Context
import { ProductContext } from "../../context/ProductsContext";
//React Icons
import { BsBag } from "react-icons/bs";

//Imgs
import legoImgs from "../../ImagePr/legomarca.png";
import funkoLogo from "../../ImagePr/funko-logo.png";
import nerfLogo from "../../ImagePr/Nerf-Logo.png";
import dcLogo from "../../ImagePr/dclogo.svg";
import caloiMarca from "../../ImagePr/caloimarca.jpg";
import babykids from "../../ImagePr/babykids logo.png";
//Components
import Stars from "../Stars/Stars";
const GaleriaProducts = () => {
  const { products } = useContext(ProductContext);
  const productsByItens = products.slice(14, 22);

  return (
    <>
      <div className="flex flex-wrap items-center justify-center ">
        {productsByItens.map((product) => (
          <div
            key={product.id}
            className="relative m-10 flex  w-full max-w-xs flex-col overflow-hidden rounded-lg border  border-gray-100 bg-white shadow-md hover:scale-105"
          >
            <Link className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl  justify-center">
              <img
                className="object-cover"
                src={product.image}
                alt="productimage"
              />
              <span className="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-2 text-center text-sm font-medium text-white">
                25% OFF
              </span>
            </Link>
            <div className="mt-4 px-5 pb-5">
              <Link to={`/product/${product.id}`}>
                <h5 className="text-xl tracking-tight text-slate-900 h-12">
                  {product.name}
                </h5>
              </Link>
              <div className="flex items-center mt-4">
                {Stars(product.rating)}
                <span className="mr-2 ml-3 rounded bg-yellow-300 px-2.5 py-0.5 text-xs font-semibold">
                  {product.rating.toFixed(1)}
                </span>
              </div>
              <div className="mt-2 mb-5 flex items-center justify-between">
                <p>
                  <span className="text-3xl font-bold text-slate-900">
                    R${product.preco.toFixed(2)}
                  </span>
                  <span className="text-sm text-slate-900 line-through ml-2">
                    R${product.precoAnt.toFixed(2)}
                  </span>
                </p>
              </div>
              <Link
                href="#"
                className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 "
              >
                <BsBag size={20} className="mr-2" />
                Adicionar ao Carrinho
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mb-2">
        <a href="#_" className="relative inline-block text-lg group ">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-slate-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">Ver Mais</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-slate-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
      </div>
      <hr className="mt-4 " />
      {/** Mostrar as marcas Slogan */}
      <div className="border-b border-grey-dark mt-8 px-4 py-8 md:px-6 md:py-12 lg:px-20  ">
        <h4 className="text-center font-hk text-xl uppercase text-gray-800 font-bold">
          Nossos Parceiros
        </h4>
        <div className="grid grid-cols-2 gap-5 pt-8 sm:grid-cols-3 lg:grid-cols-6">
          <img
            className="mb-8 h-24 w-full object-contain sm:mb-10 lg:mb-0"
            src={legoImgs}
            alt="legoicon"
          />
          <img
            className="mb-8 h-24 w-full object-contain sm:mb-10 lg:mb-0"
            src={funkoLogo}
            alt="funkoicon"
          />
          <img
            className="mb-8 h-24 w-full object-contain sm:mb-10 lg:mb-0"
            src={nerfLogo}
            alt="nerficon"
          />
          <img
            className="mb-8 h-24 w-full object-contain sm:mb-10 lg:mb-0"
            src={dcLogo}
            alt="Dclogo"
          />
          <img
            className="mb-8 h-24 w-full object-contain sm:mb-10 lg:mb-0"
            src={caloiMarca}
            alt="CaloiMarca"
          />
          <img
            className="mb-8 h-24 w-full object-contain sm:mb-10 lg:mb-0"
            src={babykids}
            alt="baby kids"
          />
        </div>
      </div>
    </>
  );
};

export default GaleriaProducts;
