import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductsContext";
import { Link } from "react-router-dom";
import Stars from "../Components/Stars/Stars";
import { BsBag } from "react-icons/bs";
import brasilSvg from "../ImagePr/brasil.png";
import retorno from "../ImagePr/retorno.png";
import caminhaofrete from "../ImagePr/caminhaofrente.png";
import CarrouselDetails from "../Components/CarrouselProdutosDetails/CarrouselDetails";

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

  const { name, preco, description, marca, image, rating, precoAnt, category } =
    product;

  return (
    <>
      <section className="py-12 mt-28 sm:py-16">
        <div className="container mx-auto px-4">
          <nav className="flex">
            <ol role="list" className="flex items-center">
              <li className="text-left">
                <div className="-m-1">
                  <Link
                    to="/"
                    className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                  >
                    {" "}
                    Home{" "}
                  </Link>
                </div>
              </li>

              <li className="text-left">
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <div className="-m-1">
                    <Link
                      to="/produtos"
                      className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                    >
                      {" "}
                      Produtos{" "}
                    </Link>
                  </div>
                </div>
              </li>
            </ol>
          </nav>

          <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3 lg:row-end-1">
              <div className="lg:flex lg:items-start">
                <div className="lg:order-2 lg:ml-5">
                  <div className="max-w-xl overflow-hidden rounded-lg">
                    <img
                      className="h-full w-full max-w-full object-cover"
                      src={image}
                      alt="imagedoobjeto"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
              <h1 className="sm: text-lg p-5 font-bold text-gray-900 sm:text-xl">
                {name}
                <span className="ml-8 rounded-full bg-red-500 px-2 py-2 font-hk text-sm font-bold uppercase leading-none text-white">
                  off 25%
                </span>
              </h1>

              <div className="mt-5 flex items-center">
                <div className="flex items-center">{Stars(rating)}</div>
                <p className="ml-2 text-sm font-medium text-gray-500">
                  {rating}
                </p>
              </div>

              <h2 className="mt-8 text-base text-gray-900">Marca</h2>
              <div className="mt-3 flex select-none flex-wrap items-center gap-1">
                <label className="">
                  <input
                    type="radio"
                    name="type"
                    value="Powder"
                    className="peer sr-only"
                    checked
                  />
                  <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                    {marca}
                  </p>
                </label>
              </div>

              <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                <div className="flex items-end">
                  <h1 className="text-3xl font-bold">R${preco}</h1>
                  <span className="text-sm text-slate-900 line-through ml-2">
                    R${precoAnt}
                  </span>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                >
                  <BsBag size={20} className="mr-2" />
                  Adicionar ao carrinho
                </button>
              </div>

              <ul className="mt-8 space-y-2">
                <li className="flex items-center text-left text-lg font-medium text-gray-600">
                  <img
                    src={brasilSvg}
                    alt="iconbrasil"
                    className="h-16 w-16 object-contain object-center"
                  />
                  Atendemos todo o Brasil
                </li>

                <li className="flex items-center text-left text-lg font-medium text-gray-600 ">
                  <img
                    src={retorno}
                    alt="retorno"
                    className="h-16 w-16 object-contain object-center"
                  />
                  <span className="ml-2">Retorno grátis 30 dias</span>
                </li>

                <li className="flex items-center text-left text-lg font-medium text-gray-600 ">
                  <img
                    src={caminhaofrete}
                    alt="frete"
                    className="h-16 w-16 object-contain object-center"
                  />
                  <span className="ml-2">
                    Frete grátis em produtos acima de R$30,00
                  </span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <div className="border-b border-gray-300">
                <nav className="flex gap-4">
                  <Link className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800">
                    {" "}
                    Description{" "}
                  </Link>

                  <Link className="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600">
                    Avaliação
                    <span className="ml-2 block rounded-full bg-yellow-300 px-2 py-px text-xs font-bold text-gray-100">
                      {" "}
                      {rating}{" "}
                    </span>
                  </Link>
                </nav>
              </div>

              <div className="mt-8 flow-root sm:mt-12">
                <h1 className="text-3xl font-bold">Descrição do Produto</h1>
                <p className="mt-4">{description}</p>
              </div>
            </div>
          </div>
        </div>
        <ul className="flex justify-center mt-14">
          <li className="py-8 text-left border px-4 m-2">
            <div className="flex items-start">
              <img
                className="block h-10 w-10 max-w-full flex-shrink-0 rounded-full align-middle"
                src="https://i.pravatar.cc/150"
                alt=""
              />

              <div className="ml-6">
                <div className="flex items-center">{Stars(rating)}</div>
                <p className="mt-5 text-base text-gray-900">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Porro blanditiis sapiente ab dolores, ad dignissimos
                  perspiciatis.
                </p>
                <p className="mt-5 text-sm font-bold text-gray-900"></p>
                <p className="mt-1 text-sm text-gray-600">Março 01, 2023</p>
              </div>
            </div>
          </li>
        </ul>
        <ul className="flex justify-center mt-8">
          <li className="py-8 text-left border px-4 m-2">
            <div className="flex items-start">
              <img
                className="block h-10 w-10 max-w-full flex-shrink-0 rounded-full align-middle"
                src="https://i.pravatar.cc/151"
                alt=""
              />

              <div className="ml-6">
                <div className="flex items-center">{Stars(rating)}</div>
                <p className="mt-5 text-base text-gray-900">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Porro blanditiis sapiente ab dolores, ad dignissimos
                  perspiciatis.
                </p>
                <p className="mt-5 text-sm font-bold text-gray-900"></p>
                <p className="mt-1 text-sm text-gray-600">Fevereiro 25, 2023</p>
              </div>
            </div>
          </li>
        </ul>
        <ul className="flex justify-center mt-8">
          <li className="py-8 text-left border px-4 m-2">
            <div className="flex items-start">
              <img
                className="block h-10 w-10 max-w-full flex-shrink-0 rounded-full align-middle"
                src="https://i.pravatar.cc/152"
                alt=""
              />

              <div className="ml-6">
                <div className="flex items-center">{Stars(rating)}</div>
                <p className="mt-5 text-base text-gray-900">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Porro blanditiis sapiente ab dolores, ad dignissimos
                  perspiciatis.
                </p>
                <p className="mt-5 text-sm font-bold text-gray-900"></p>
                <p className="mt-1 text-sm text-gray-600">Fevereiro 01, 2023</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <CarrouselDetails category={category} />
    </>
  );
};

export default ProductDetails;
