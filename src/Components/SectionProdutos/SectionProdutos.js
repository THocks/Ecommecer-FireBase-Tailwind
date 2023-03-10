//ReactRouter
import {Link} from 'react-router-dom'

//Images
import almofadasCategoria from "../../imgs/AlmofadasCat.png";
import jogoTabuleiroCat from "../../imgs/JogoTabuleiroCat.png";
import funkoPopCat from "../../imgs/FunkoPopCat.png";
import bicletaCat from "../../imgs/bicletaCat.png";
import hoverBoardCat from "../../imgs/hoverBoardCat.png";
import videoGamesCat from "../../imgs/videogames.webp";
import FreteGratis from "../../imgs/FreteGratis.png";
import caminhafrete from "../../ImagePr/caminhaofrente.png";
import suporte from "../../ImagePr/suporte.jpg";
import retorno from "../../ImagePr/retorno.png";

const SectionProdutos = () => {




  return (
    <>
    
      <div className="flex flex-col py-20 md:flex-row md:py-24">
        <div className="mx-auto flex w-4/5 items-start justify-start pb-3 last:border-r-0 sm:w-1/2 md:w-2/5 md:flex-col md:items-center md:justify-center md:border-r-2 md:border-primary-lighter md:pb-0 md:text-center lg:mx-0 lg:w-1/3 lg:flex-row lg:text-left">
          <div>
            <img
              className="h-12 w-12 object-contain object-center"
              src={caminhafrete}
              alt="iconcaminhao"
            />
          </div>
          <div className="ml-6 md:mt-3 lg:mt-0">
            <h3 className="font-hk text-xl font-semibold tracking-wide text-primary">
              Frete Gratis
            </h3>
            <p className="font-hk text-base tracking-wide text-secondary-lighter text-gray-500">
              Em todos os pedidos acima de R$ 30
            </p>
          </div>
        </div>
        <div className="mx-auto flex w-4/5 items-start justify-start pb-3 last:border-r-0 sm:w-1/2 md:w-2/5 md:flex-col md:items-center md:justify-center md:border-r-2 md:border-primary-lighter md:pb-0 md:text-center lg:mx-0 lg:w-1/3 lg:flex-row lg:text-left">
          <div>
            <img
              className="h-12 w-12 object-contain object-center"
              src={suporte}
              alt="Suporte"
            />
          </div>
          <div className="ml-6 md:mt-3 lg:mt-0">
            <h3 className="font-hk text-xl font-semibold tracking-wide text-primary">
              Suporte
            </h3>
            <p className="font-hk text-base tracking-wide text-secondary-lighter  text-gray-500">
              Seg a Sab 09:00 as 18:00
            </p>
          </div>
        </div>
        <div className="mx-auto flex w-4/5 items-start justify-start pb-3 last:border-r-0 sm:w-1/2 md:w-2/5 md:flex-col md:items-center md:justify-center md:border-r-2 md:border-primary-lighter md:pb-0 md:text-center lg:mx-0 lg:w-1/3 lg:flex-row lg:text-left">
          <div>
            <img
              className="h-12 w-12 object-contain object-center"
              src={retorno}
              alt="retornologo"
            />
          </div>
          <div className="ml-6 md:mt-3 lg:mt-0">
            <h3 className="font-hk text-xl font-semibold tracking-wide text-primary">
              Retorno Grátis
            </h3>
            <p className="font-hk text-base tracking-wide text-secondary-lighter">
              30 dias gratis política de devolução
            </p>
          </div>
        </div>
      </div>
      <section>
        <div className="mx-auto max-w-md sm:max-w-lg md:max-w-screen-xl ">
          <div className="px-4 py-8 md:px-6 md:py-12 lg:px-20 ">
            <div className="mt-8 grid grid-cols-2 gap-6 md:mt-10 md:grid-cols-4 lg:gap-10  cursor-pointer relative">
             
              <Link to={`/product/category/HoverBoard`} className="bg-violet-100 p-8 rounded-lg hover:scale-105 shadow-md ">
                <div className="mt-6 flex items-center justify-center md:mt-24">
                  <img
                    className="object-cover bg-transparent"
                    src={hoverBoardCat}
                    alt="HoverBoard"
                  />
                </div>
              </Link>
              <Link to={`/product/category/traveseiro`} className="bg-violet-100 p-8 rounded-lg hover:scale-105 shadow-md ">
                <div className="mt-6 flex items-center justify-center md:mt-24">
                  <img
                    className="object-cover"
                    src={almofadasCategoria}
                    alt="Almofada"
                  />
                </div>
              </Link>

              <Link to={`/product/category/tabuleiro`} className="bg-violet-100 p-8 rounded-lg hover:scale-105 shadow-md">
                <div className="mt-6 flex items-center justify-center md:mt-24">
                  <img
                    className="object-cover"
                    src={jogoTabuleiroCat}
                    alt="Jogo de tabuleiro"
                  />
                </div>
              </Link>

              <Link to={`/product/category/jogosevideogames`} className="bg-violet-100 p-8 rounded-lg hover:scale-105 shadow-md">
                <div className="mt-6 flex items-center justify-center md:mt-24">
                  <img
                    className="object-cover"
                    src={videoGamesCat}
                    alt="Jogos e & Video Games"
                  />
                </div>
              </Link>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-5 md:mt-6 md:grid-cols-2 md:gap-6 lg:mt-8 lg:gap-8  ">
              <Link  to={`/product/category/Funko`} className="bg-violet-100 p-8 rounded-md cursor-pointer shadow-md hover:scale-105">
                <div className="mt-28 flex items-center justify-center md:mt-3">
                  <img
                    src={funkoPopCat}
                    alt="Funkop"
                    className="mt-14 object-cover"
                  />
                </div>
              </Link>
              <Link to={`/product/category/bicicletas`} className="bg-violet-100 p-8 rounded-md cursor-pointer shadow-md hover:scale-105">
                <div className="mt-28 flex items-center justify-center md:mt-1">
                  <img
                    src={bicletaCat}
                    alt="Bike"
                    className="mt-14 object-cover"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-md sm:max-w-lg md:max-w-screen-xl mb-24 px-4 py-8 md:px-6 md:py-12 lg:px-20 cursor-pointer  ">
          <img
            src={FreteGratis}
            alt="FreteGratis"
            className="object-contain rounded-md shadow-lg "
          />
        </div>
      </section>
    </>
  );
};

export default SectionProdutos;
