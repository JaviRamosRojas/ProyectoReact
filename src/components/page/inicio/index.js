import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Banner01 from "images/banner01.jpg";
import Banner02 from "images/banner02.jpg";
import Banner03 from "images/banner03.jpg";

export default function Inicio() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner01}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner02}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Tus Compañeras Infaltables</h3>
                        <p>Te acompañan a todas ¡Ven por las tuyas!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner03}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Para cualquier ocasión</h3>
                        <p>Elige tu talla al mejor precio.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
