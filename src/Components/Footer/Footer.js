import React from "react";
//React Router
import { Link } from "react-router-dom";
//Icons
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
//Logo
import logo from "../../imgs/Logo.png";

const Footer = () => {
  return (
    <>
      <footer class="bg-violet-100 text-white pt-12 pb-8 px-4 shadow-md">
        <div class="mx-auto px-4 container overflow-hidden flex flex-col lg:flex-row justify-between ">
          <Link href="/" class="block mr-4 w-1/3 ">
            <img src={logo} class="w-40 ml-4 lg:ml-0" alt="logo" />
          </Link>
          <div class="w-2/3 block sm:flex text-sm mt-6 lg:mt-0">
            <ul class="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
              <li class="inline-block py-2 px-3 text-black font-bold uppercase  tracking-wide">
                Categorias
              </li>
              <li>
                <Link class="inline-block py-2 px-3  text-black font-medium hover:text-white no-underline">
                  Funko Pop
                </Link>
              </li>
              <li>
                <Link class="inline-block py-2 px-3  text-black font-medium hover:text-white no-underline">
                  Almofadas
                </Link>
              </li>
              <li>
                <Link class="inline-block py-2 px-3  text-black font-medium hover:text-white no-underline">
                  HoverBoard
                </Link>
              </li>
              <li>
                <Link class="inline-block py-2 px-3 text-black font-medium hover:text-white no-underline">
                  Bicicletas
                </Link>
              </li>
              <li>
                <Link class="inline-block py-2 px-3 text-black font-medium hover:text-white no-underline">
                  Jogos & VideoGames
                </Link>
              </li>
            </ul>
            <ul class="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
              <li class="inline-block py-2 px-3text-black font-bold  uppercase  tracking-wide">
                CONTATO
              </li>
              <li>
                <Link class="inline-block py-2 px-3 text-black font-medium hover:text-white no-underline">
                  Entrar em contato
                </Link>
              </li>
              <li>
                <Link class="inline-block py-2 px-3 text-black font-medium hover:text-white no-underline">
                  Projeto
                </Link>
              </li>
            </ul>

            <div class="text-gray-700 flex flex-col w-full">
              <div class="inline-block py-2 px-3 text-black font-bold  uppercase  tracking-wide">
                REDES sociais
              </div>
              <div class="flex pl-4 justify-start mt-2">
                <Link class="block items-center text-black hover:text-white mr-6 no-underline">
                  <BsFacebook size={25} />
                </Link>
                <Link class="block  items-center text-black hover:text-white mr-6 no-underline">
                  <BsLinkedin size={25} />
                </Link>
                <Link class="block  items-center text-black hover:text-white no-underline">
                  <BsGithub size={25} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-4 pt-6 text-black border-t border-black text-center">
          {" "}
          © 2023 Thiago Lima. Todos os direitos reservados.
        </div>
      </footer>
    </>
  );
};

export default Footer;
