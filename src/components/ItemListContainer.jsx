import { useEffect, useState } from "react";
import ItemList from './ItemList.js';

export const ItemListContainer = () => {
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    async function getDataFromMercadoLibre() {
      const respuesta = await fetch(`https://api.mercadolibre.com/sites/MLC/search?q=zapatillas`);
      const data = await respuesta.json();
      setListProducts(data.results);
    }
    getDataFromMercadoLibre();
  }, []);


  return (
    <div>
        <ItemList listProducts={listProducts}/>
    </div>
  );
};

export default ItemListContainer;
