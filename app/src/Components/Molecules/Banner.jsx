import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick/lib/slider';

export const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="mx-auto w-screen px-4">
      <Slider {...settings}>
        <div className=" text-white p-4">
          <img
            className=" h-[100 rem] object-contain"
            src="https://images.hola.com/imagenes/decoracion/20220321206292/muebles-caracteristicas-por-habitaciones-am/1-63-250/muebles-funciones-6t-t.jpg"
            alt=""
          />
        </div>
        <div className="text-white p-4">
          <img
            className="w-96 h-[100 rem] object-contain"
            src="https://images.hola.com/imagenes/decoracion/20220321206292/muebles-caracteristicas-por-habitaciones-am/1-63-250/muebles-funciones-6t-t.jpg"
            alt="Descripción de la primera imagen"
          />
        </div>
        <div className=" text-white p-4">
          <img
            className="  w-full h-[ 100 rem ] object-contain"
            src="https://trabaja.xyz/wp-content/uploads/2022/10/Mejores-paginas-para-comprar-muebles-para-el-hogar-en-USA-768x572.jpg.webp"
            alt="Descripción de la segunda imagen"
          />
        </div>
      </Slider>
    </div>
  );
};
