import React from "react";
//HOOKS
import { useState, useEffect } from "react";

// REACT ICONS
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

// IMGS
import bannerOne from "../../imgs/BannerOne.png";
import bannerTwo from "../../imgs/BannerTwo.png";
import bannerThere from "../../imgs/BannerThree.png";

const CarrouselProdutos = () => {
  const images = [bannerOne, bannerTwo, bannerThere];

  const [currentImage, setCurrentImage] = useState(0);

  function handlePrev() {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  }

  function handleNext() {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  }

  useEffect(() => {
    // define o intervalo para troca de imagem a cada 20 segundos
    const interval = setInterval(() => {
      handleNext();
    }, 20000);

    // limpa o intervalo quando o componente for desmontado
    return () => clearInterval(interval);
  }, [currentImage]);

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
            <BsFillArrowLeftCircleFill size={40} color="black" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            onClick={handleNext}
            className="px-4 py-2 rounded-lg  focus:outline-none"
          >
            <BsFillArrowRightCircleFill size={40} color="black" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CarrouselProdutos;
