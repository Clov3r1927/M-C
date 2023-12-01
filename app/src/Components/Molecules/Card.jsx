import { useState } from "react";
import ImagenCard from "../Atoms/ImagenCard";

import InformacionCard from "./InformacionCard";
import { useNavigate } from "react-router-dom";


export default function Card({ informacion }) {
  const navegar = useNavigate();


  const viewInfo = ()=>{
     navegar(`/muebleInfo/${id2}`)
  }
  return (
    <div className="flex items-center gap-x-4 bg-slate-200 py-2 px-4 rounded-md shadow-sm shadow-black w-[32rem] hover:scale-110 duration-75 opacity-95 hover:opacity-100 cursor-pointer h-64 " onClick={viewInfo}>
      <ImagenCard url={informacion.imagen} />
      <InformacionCard descripcion={informacion.descripcion} precio={informacion.precio}/>
    </div>
  );
}
