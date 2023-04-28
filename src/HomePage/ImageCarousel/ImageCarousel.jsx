import React from "react";
import kaigocup from './CoffeeImgs/kaigocup.jpg';
import pourover from './CoffeeImgs/pourover.jpg';
import sohoindoor from './CoffeeImgs/sohoindoors.jpg';
import portafilter from './CoffeeImgs/portafilter.jpg';
import './ImageCarousel.css';

const ImageCarousel = () => {
    return (
        <div className="carousel">
            <button className="carousel-button-prev"></button>
            <button className="carousel-button-next"></button>
            <ul>
                <li className="slide">
                    <img src={kaigocup} alt="kaigoCup" />
                </li>
                <li className="slide">
                    <img src={pourover} alt="pourover" />
                </li>
                <li className="slide">
                    <img src={sohoindoor} alt="soho indoors" />
                </li>
                <li className="slide">
                    <img src={portafilter} alt="portafilter" />
                </li>
            </ul>
        </div>
    )
}

export default ImageCarousel;