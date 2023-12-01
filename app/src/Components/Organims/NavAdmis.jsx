import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export const NavAdmis = () => {

    const location = useLocation()

  return (
    <div className=" md:flex md:min-h-screen ">
      <aside className=" md:w-1/4  bg-[#855a51] px-6 py-10">
        <h2 className="text-4xl font-black text-center text-white">
          {" "}
          M & C - Administrador{" "}
        </h2>

        <nav className="mt-10">
          <Link
            className={`${
              location.pathname === "/administrador/agregar"
                ? "text-[#BF8174]"
                : "text-white"
            } text-2xl block mt-2 `}
            to="/administrador/agregar"
          >
            Agregar
          </Link>
          <Link
            className={`${
              location.pathname === "/administrador/editar"
                ? "text-[#BF8174]"
                : "text-white"
            } text-2xl block mt-2`}
            to="/administrador/editar"
          >
            Editar
          </Link>
        </nav>
      </aside>


      <main className=' md:w-3/4  md:h-screen overflow-scroll'>
        <Outlet/>
      </main>

    </div>
  );
};
