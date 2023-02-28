import { createContext, useEffect, useState } from "react";
import bannerOne from "../ImagePr/bannerOne.png";
import bannerTwo from "../ImagePr/bannerTwo.png";
import bannerThere from "../imgs/BannerThree.png";

export const CardContext = createContext();

const CardProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [categoria, setCategoria] = useState("");
  const [preco, SetPreco] = useState("");
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentPages, setCurrentPages] = useState(1);
  const [open, setOpen] = useState(true);
  //Carrousel Função ***********************************************/
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 20000);

    return () => clearInterval(interval);
  }, [currentImage]);

  function handlePrev() {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  }

  function handleNext() {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  }
  const images = [bannerOne, bannerTwo, bannerThere];

  /********************************************************* */
  // Paginação
  const handlePageChange = (pageNumber) => {
    setCurrentPages(pageNumber);
  };
  const pages = 12;
  const firstItemIndex = (currentPages - 1) * pages;
  /*************************************************************** */
  // Pesquisar pelo Name
  const handleFilterName = (product) => {
    return product.name.toLowerCase().includes(name.toLowerCase());
  };

  return (
    <CardContext.Provider
      value={{
        name,
        setName,
        categoria,
        setCategoria,
        preco,
        SetPreco,
        handleFilterName,
        currentImage,
        setCurrentImage,
        currentPages,
        setCurrentPages,
        open,
        setOpen,
        handlePageChange,
        handlePrev,
        handleNext,
        images,
        pages,
        firstItemIndex,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardProvider;
