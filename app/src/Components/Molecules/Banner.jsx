import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick/lib/slider';

export const Banner = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        sliderToScroll: 1,
        autoplay: true, // Agrega la propiedad autoplay para que el carrusel se mueva automáticamente
        autoplaySpeed: 3000, // Especifica la velocidad en milisegundos (por ejemplo, 3000 ms = 3 segundos)
    }

  return (
   <Slider {...settings}>
    <div className="bg-blue-500 text-white p-4">
        <img  className='w-full' src="https://images.hola.com/imagenes/decoracion/20220321206292/muebles-caracteristicas-por-habitaciones-am/1-63-250/muebles-funciones-6t-t.jpg" alt="" />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-center">
          <h1 className="text-2xl font-bold">¡Bienvenido al Sitio!</h1>
          <p>Descubre nuestras increíbles ofertas y novedades.</p>
        </div>
      </div>
      <div className="bg-green-500 text-white p-4">
        <img src="https://images.hola.com/imagenes/decoracion/20220321206292/muebles-caracteristicas-por-habitaciones-am/1-63-250/muebles-funciones-6t-t.jpg" alt="Descripción de la primera imagen" />
      </div>
      <div className="bg-red-500 text-white p-4">
        <img src="https://trabaja.xyz/wp-content/uploads/2022/10/Mejores-paginas-para-comprar-muebles-para-el-hogar-en-USA-768x572.jpg.webp" alt="Descripción de la segunda imagen" />
      </div>
   </Slider>
  )
}
