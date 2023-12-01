import TextCard from "../Atoms/TextCard";


export default function InformacionCard({descripcion,precio, categoria}) {
  return (
    <div className="flex flex-col overflow-y-auto h-[12rem] gap-y-5 mt-5">
      <TextCard texto = { "Categoria: " + categoria } />
       <TextCard texto={"Precio: " + precio}/>
       <TextCard texto={"Descripcion: " +descripcion}/>
      
     
    </div>
  )
}
