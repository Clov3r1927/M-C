import React from "react";

export const CardMuebles = ({title,children, src}) => {
  return (
    <div className="bg-[#73443A] text-white p-4 relative ">
      <div className="flex flex-col justify-center items-center text-center md:flex-row">
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p>{children}</p>
        </div>
        <div className="md:w-1/2">
          <img
            className="w-full"
            src="https://images.hola.com/imagenes/decoracion/20220321206292/muebles-caracteristicas-por-habitaciones-am/1-63-250/muebles-funciones-6t-t.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
