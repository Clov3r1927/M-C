import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
import { CardMuebles } from "./CardMuebles";

export const Carrusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    sliderToScroll: 1,
    autoplay: true, // Agrega la propiedad autoplay para que el carrusel se mueva automáticamente
    autoplaySpeed: 3000, // Especifica la velocidad en milisegundos (por ejemplo, 3000 ms = 3 segundos)
  };

  return (
    <div>
       <Slider className = ' px-2 mt-10' {...settings}>
        <CardMuebles/>
      </Slider>
    </div>
     
  );
};
