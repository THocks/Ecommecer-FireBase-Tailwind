import React, { useContext, useState, useEffect } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { ProductContext } from "../../context/ProductsContext";
import { Link } from "react-router-dom";
import Stars from "../Stars/Stars";
import { BsBag } from "react-icons/bs";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

SwiperCore.use([Navigation, Pagination]);

function CarrouselDetails({ category }) {
  const { products } = useContext(ProductContext);
  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  console.log("filteredProducts", filteredProducts);
  console.log(category);
  const [swiperParams, setSwiperParams] = useState({
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setSwiperParams({
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      } else if (window.innerWidth < 768) {
        setSwiperParams({
          slidesPerView: 2,
          spaceBetween: 10,
          loop: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      } else if (window.innerWidth < 1024) {
        setSwiperParams({
          slidesPerView: 3,
          spaceBetween: 15,
          loop: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      } else {
        setSwiperParams({
          slidesPerView: 5,
          spaceBetween: 20,
          loop: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="relative flex flex-wrap items-center justify-center ">
      <Swiper {...swiperParams}>
        {filteredProducts.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="relative m-10 flex  w-full max-w-xs flex-col overflow-hidden rounded-lg border  border-gray-100 bg-white shadow-md hover:scale-105 mb-20">
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
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute top-1/2 -mt-4 left-4 z-10">
        <button className="swiper-button-prev text-white text-2xl">
          <AiOutlineArrowLeft />
        </button>
      </div>
      <div className="absolute top-1/2 -mt-4 right-4 z-10">
        <button className="swiper-button-next text-white text-2xl">
          <AiOutlineArrowRight />
        </button>
      </div>
      <div className="absolute bottom-4 left-0 right-0 z-10">
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}

export default CarrouselDetails;
