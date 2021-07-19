import React from 'react';
import Item from './Item.js';

function ItemList({listProducts}) {
    return (
        <div>
           { listProducts.map(element =>     
    <Item key={element.id} name={element.title} price = {element.price} img={element.thumbnail} />
           )
            }
        </div>
    )
}

export default ItemList


