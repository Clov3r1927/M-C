import { Imagen } from "../Atoms/imagen";
import InformacionCard from "./InformacionCard";


export default function Card({informacion}) {
  return (
    <div className="flex items-center gap-x-4 bg-slate-200 py-2 px-4 rounded-md shadow-sm shadow-black w-[32rem] hover:scale-110 duration-75 opacity-95 hover:opacity-100 cursor-pointer h-64 ">
       <Imagen url={informacion.url}/>
        <InformacionCard/>
    </div>
  )
}
