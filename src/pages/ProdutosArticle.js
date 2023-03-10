import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductsContext'
import { useParams } from 'react-router-dom';
import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Stars from '../Components/Stars/Stars';


const ProdutosArticle = () => {
  const { category } = useParams();

  const {products} = useContext(ProductContext)
  const filteredProducts = products.filter(product => product.category === category);

  return (
    <> 
    <div className="flex flex-wrap items-center justify-center " style={{ width: "100%" }}>
       {filteredProducts.map((product)=>(

 <div
                key={product.id}
                className="relative m-10 flex   w-full max-w-xs flex-col overflow-hidden rounded-lg border  border-gray-100 bg-white shadow-md hover:scale-105"
              >
                <Link
                  className="relative mx-3 mt-3  h-60 overflow-hidden rounded-xl  justify-center"
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
                  <div className="flex items-center mt-8">
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
 
     

    </>
  )
}

export default ProdutosArticle
