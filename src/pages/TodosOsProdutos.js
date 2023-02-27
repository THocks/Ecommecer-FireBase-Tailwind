import React, { useContext } from "react";
import { useState, useEffect } from "react";
// REACT ICONS
import { BsFillArrowLeftCircleFill, BsTypeH1 } from "react-icons/bs";
import { BsFillArrowRightCircleFill, BsBag } from "react-icons/bs";
import { ProductContext } from "../context/ProductsContext";
import Stars from "../Components/Stars/Stars";
import { Link } from "react-router-dom";

import bannerOne from "../ImagePr/bannerOne.png";
import bannerTwo from "../ImagePr/bannerTwo.png";
import bannerThere from "../imgs/BannerThree.png";
const TodosOsProdutos = () => {
  const { products } = useContext(ProductContext);
  const images = [bannerOne, bannerTwo, bannerThere];
  const [open, setOpen] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentPages, setCurrentPages] = useState(1);

  const pages = 12;
  const firstItemIndex = (currentPages - 1) * pages;

  function handlePrev() {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  }

  function handleNext() {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 20000);

    return () => clearInterval(interval);
  }, [currentImage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPages(pageNumber);
  };

  return (
    <>
      <div className="relative h-96  shadow-md mt-64 ">
        <div className="absolute top-0 left-0 w-full h-auto">
          <img
            src={images[currentImage]}
            alt="imagens do carrousel"
            className=" object-cover w-full h-96"
          />
        </div>

        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            onClick={handlePrev}
            className="px-4 py-2 rounded-lg  mr-4 focus:outline-none"
          >
            <BsFillArrowLeftCircleFill size={40} color="white" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            onClick={handleNext}
            className="px-4 py-2 rounded-lg  focus:outline-none"
          >
            <BsFillArrowRightCircleFill size={40} color="white" />
          </button>
        </div>
      </div>
      {/******************************************************************************* */}
      <div className="flex">
        <div
          className={`bg-white h-96 shadow-lg p-5 pt-8 my-6  ${
            open ? " w-96" : "w-14"
          }  relative`}
        >
          <BsFillArrowLeftCircleFill
            className={` text-gray-900 text-4xl rounded-full absolute -right-3 top-9 cursor-pointer ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="flex flex-wrap items-center justify-center ">
          {products
            .slice(firstItemIndex, firstItemIndex + pages)
            .map((product) => (
              <div
                key={product.id}
                className="relative m-10 flex  w-full max-w-xs flex-col overflow-hidden rounded-lg border  border-gray-100 bg-white shadow-md hover:scale-105"
              >
                <Link
                  className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl  justify-center"
                  to={`/product/${product.id}`}
                >
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
      </div>
      <div className="flex justify-center mb-7">
        <nav aria-label="Page navigation example">
          <ul className="list-style-none flex">
            <li>
              <button
                className="relative block rounded bg-transparent py-1.5 px-3 text-2xl text-gray-900 shadow-md transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                onClick={() => handlePageChange(currentPages - 1)}
                disabled={currentPages === 1}
              >
                <span aria-hidden="true">&laquo;</span>
              </button>
            </li>
            <li>
              <button
                className={`relative block rounded bg-transparent py-1.5 px-3   text-2xl text-gray-900 shadow-md transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
                  currentPages === 1 ? "font-bold" : ""
                }`}
                onClick={() => handlePageChange(1)}
              >
                1
              </button>
            </li>
            <li aria-current="page">
              <button
                className={`relative block rounded bg-transparent py-1.5 px-3  text-2xl text-gray-900 shadow-md transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
                  currentPages === 2 ? "font-bold" : ""
                }`}
                onClick={() => handlePageChange(2)}
              >
                2
              </button>
            </li>
            <li>
              <button
                className={`relative block rounded bg-transparent py-1.5 px-3   text-2xl text-gray-900 shadow-md transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
                  currentPages === 3 ? "font-bold" : ""
                }`}
                onClick={() => handlePageChange(3)}
              >
                3
              </button>
            </li>
            <li>
              <button
                className={`relative block rounded bg-transparent py-1.5 px-3   text-2xl text-gray-900 shadow-md transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
                  currentPages === 4 ? "font-bold" : ""
                }`}
                onClick={() => handlePageChange(4)}
              >
                4
              </button>
            </li>
            <li>
              <button
                className={`relative block rounded bg-transparent py-1.5 px-3   text-2xl text-gray-900 shadow-md transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
                  currentPages === 5 ? "font-bold" : ""
                }`}
                onClick={() => handlePageChange(5)}
              >
                5
              </button>
            </li>
            <li>
              <button
                className={`relative block rounded bg-transparent py-1.5 px-3   text-2xl text-gray-900 shadow-md transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
                  currentPages === 6 ? "font-bold" : ""
                }`}
                onClick={() => handlePageChange(6)}
              >
                6
              </button>
            </li>
            <li>
              <button
                className="relative block rounded bg-transparent py-1.5 px-3   text-2xl text-gray-900 shadow-md transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                onClick={() => handlePageChange(currentPages + 1)}
                disabled={currentPages === 6}
              >
                <span aria-hidden="true">&raquo;</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default TodosOsProdutos;