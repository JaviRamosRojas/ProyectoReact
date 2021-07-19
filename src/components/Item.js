import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';

function Item({ id, name, price, img }) {
    return (
        <div>
            <ReactBootStrap.Row xs={12} md={12} lg={2}>
            <ReactBootStrap.CardGroup>
                    <ReactBootStrap.Col>
                        
                        <ReactBootStrap.Card>
                            <ReactBootStrap.Card.Img variant="top" src={img} />
                            <ReactBootStrap.Card.Body>
                                <ReactBootStrap.Card.Title>{name}</ReactBootStrap.Card.Title>
                                <ReactBootStrap.Card.Text>
                                    <span>$</span>{price}
                                </ReactBootStrap.Card.Text>
                                <ReactBootStrap.Button variant="primary">Ver Producto</ReactBootStrap.Button>
                            </ReactBootStrap.Card.Body>
                        </ReactBootStrap.Card>
                        
                    </ReactBootStrap.Col>
                    </ReactBootStrap.CardGroup>
            </ReactBootStrap.Row>
        </div>
    )
}

export default Item
