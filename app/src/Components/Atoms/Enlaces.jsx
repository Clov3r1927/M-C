import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Enlaces = () => {
  const location = useLocation();

  return (
    <div className="flex gap-9">
      <Link
        className={` ${
          location.pathname === "/home"
            ? " bg-[#855a51] text-white  text-bold"
            : "  text-black text-bold"
        } hover:bg-[rgb(133,90,81)] px-4 py-6`}
        to="/home"
      >
        Home
      </Link>
      <Link
        className={` ${
          location.pathname === "/mueble/cocina"
            ? " bg-[#855a51] text-white  text-bold"
            : "  text-black text-bold"
        } hover:bg-[rgb(133,90,81)] px-4 py-6`}
        to={"/mueble/cocina"}
      >
        Cocina
      </Link>
      <Link
        className={` ${
          location.pathname === "/mueble/cuartos"
            ? " bg-[#855a51] text-white text-bold"
            : " text-black text-bold"
        } hover:bg-[#855a51] px-4 py-6`}
        to={"/mueble/cuartos"}
      >
        Cuartos
      </Link>
      <Link
        to={"/mueble/banios"}
        className={` ${
          location.pathname === "/mueble/banios"
            ? " bg-[#855a51] text-white text-bold"
            : " text-black text-bold"
        } hover:bg-[#855a51] px-4 py-6`}
      >
        Baños
      </Link>
      <Link
        to={"/mueble/sala"}
        className={` ${
          location.pathname === "/mueble/sala"
            ? " bg-[#855a51] text-white text-bold"
            : " text-black text-bold"
        } hover:bg-[#855a51] px-4 py-6`}
      >
        Salas
      </Link>
      <Link
        to={"/personalizado"}
        className={` ${
          location.pathname === "/muebles/perso"
            ? " bg-[#855a51] text-white text-bold"
            : " text-black text-bold"
        } hover:bg-[#855a51] px-4 py-6`}
      >
        Muebles personalizados
      </Link>
    </div>
  );
};
