import React from "react";
//RectRouter

//Images
import almofadasCategoria from "../../imgs/AlmofadasCat.png";
import jogoTabuleiroCat from "../../imgs/JogoTabuleiroCat.png";
import funkoPopCat from "../../imgs/FunkoPopCat.png";
import bicletaCat from "../../imgs/bicletaCat.png";
const SectionProdutos = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-md sm:max-w-lg md:max-w-screen-xl ">
          <div className="px-4 py-8 md:px-6 md:py-12 lg:px-20 ">
            <div className="mt-8 grid grid-cols-2 gap-6 md:mt-10 md:grid-cols-4 lg:gap-10  cursor-pointer relative">
              <article className="bg-violet-100 p-8 rounded-lg hover:scale-105 shadow-md ">
                <div className=""></div>
                <div className="mt-6 flex items-center justify-center md:mt-24">
                  <img
                    className="object-cover bg-transparent"
                    src="https://assets.stickpng.com/images/5a5cbc319538462e5a82d524.png"
                    alt="HoverBoard"
                  />
                </div>
              </article>
              <article className="bg-violet-100 p-8 rounded-lg hover:scale-105 shadow-md ">
                <div className=""></div>
                <div className="mt-6 flex items-center justify-center md:mt-24">
                  <img
                    className="object-cover"
                    src={almofadasCategoria}
                    alt="Almofada"
                  />
                </div>
              </article>

              <article className="bg-violet-100 p-8 rounded-lg hover:scale-105 shadow-md">
                <div className=""></div>
                <div className="mt-6 flex items-center justify-center md:mt-24">
                  <img
                    className="object-cover"
                    src={jogoTabuleiroCat}
                    alt="Jogo de tabuleiro"
                  />
                </div>
              </article>

              <article className="bg-violet-100 p-8 rounded-lg hover:scale-105 shadow-md">
                <div className=""></div>
                <div className="mt-6 flex items-center justify-center md:mt-24">
                  <img
                    className="object-cover"
                    src="https://img.terabyteshop.com.br/produto/g/jogo-the-last-of-us-part-1-ps5_153687.png"
                    alt=""
                  />
                </div>
              </article>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-5 md:mt-6 md:grid-cols-2 md:gap-6 lg:mt-8 lg:gap-8 ">
              <article className="bg-violet-100 p-8 rounded-md cursor-pointer shadow-md">
                <div></div>
                <div className="mt-28 flex items-center justify-center md:mt-3">
                  <img
                    src={funkoPopCat}
                    alt="Funkop"
                    className="mt-14 object-cover"
                  />
                </div>
              </article>

              <article className="bg-violet-100 p-8 rounded-md cursor-pointer shadow-md">
                <div></div>
                <div className="mt-28 flex items-center justify-center md:mt-1">
                  <img
                    src={bicletaCat}
                    alt="Bike"
                    className="mt-14 object-cover"
                  />
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionProdutos;
