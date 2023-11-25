import TextCard from "../Atoms/TextCard";


export default function InformacionCard({descripcion,precio}) {
  return (
    <div className="flex flex-col overflow-y-auto h-[12rem] gap-y-5">
       <TextCard texto={"Precio: " + precio}/>
       <TextCard texto={"Descripcion: " +descripcion}/>
      
     
    </div>
  )
}
