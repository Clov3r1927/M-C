import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
import Image from "../Atoms/Image";


export const Banner = () => {
  const image = [
    "https://images.hola.com/imagenes/decoracion/20220321206292/muebles-caracteristicas-por-habitaciones-am/1-63-250/muebles-funciones-6t-t.jpg",
    "https://alvetadesign.com/cdn/shop/articles/ventajas-de-los-muebles-de-madera-modernos-931522_1200x630.jpg?v=1666267463",
  ];

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
    <Slider className="mx-auto mt-10 ">
      {image.map((url,i) => (
        <Imagen url={url} key = {i}/>
      ))}
    </Slider>
  );
};
