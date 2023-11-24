import TextCard from "../Atoms/TextCard";


export default function InformacionCard() {
  return (
    <div className="flex-col flex">
       <TextCard texto={"Cubierta de cocina Dos piezas"}/>
       <TextCard texto={"Material: Madera"}/>
       <TextCard texto={"Medida: 12 X 4 X 2"}/>
       <TextCard texto={"Precio:$2.000"}/>
    </div>
  )
}
