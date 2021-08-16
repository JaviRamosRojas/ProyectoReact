import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from "context/DataProvider";
import { useParams } from "react-router-dom";
import './ProductosDetalles.css';
import { ProductoItem } from "./ProductoItem";


export const ProductosDetalles = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  const addCarrito = value.addCarrito;
  const [detalle, setDetalle] = useState([])
  const [url, setUrl] = useState(0)
  const params = useParams();
  let item = 0;

  useEffect(() =>{
    productos.forEach(producto =>{
      if(producto.id === parseInt(params.id)){
        setDetalle(producto)
        setUrl(0)
      }
    })
  },[params.id, productos])

  console.log(url)


  if (detalle.length < 1) return null;

  return (
    <>
      <div className="all">
        <div className="details">
          <div className="big-img">
            <img src={detalle.image} alt={detalle.title} />
          </div>
        </div>


        <div className="box">
          <div className="fila">
            <h2>{detalle.title}</h2>
            <span>${detalle.price}</span>
          </div>
          <hr></hr>

          <p>{detalle.category}</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Nisi, a sunt, tempora, reprehenderit quas sed maxime eaque labore commodi animi molestias rem aut iure natus reiciendis, ipsum quasi velit iusto.
            Doloremque corrupti atque dolorum ipsum, nisi illum non magni ipsam est id. Nesciunt nihil eaque corporis unde nostrum delectus quibusdam soluta laboriosam voluptas ipsum sunt debitis corrupti praesentium, eligendi impedit.</p>

          <button className="carta" onClick={() => addCarrito(detalle.id)}>Agregar al carrito</button>

        </div>
      </div>
            
      
      <h2 className="relacionados">Productos relacionados</h2>
      <div className="productos">
        {
          productos.map((producto) => {
            if ((item < 6) && (detalle.category === producto.category)) {
              item++;
              return <ProductoItem
                key={producto.id}
                title={producto.title}
                image={producto.image}
                category={producto.category}
                price={producto.price}
                id={producto.id}
              />
            }
          })
        }
      </div> 
    </>
  )
}
