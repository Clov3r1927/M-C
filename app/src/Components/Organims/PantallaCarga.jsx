import Pulsante from "../Atoms/Pulsante";


export default function PantallaCarga() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen pb-8">
        <h1 className="mb-5 font-mono text-3xl font-semibold">Cargando la informacion del servidor</h1>
        <div className="flex gap-x-2">
          <Pulsante/>
          <Pulsante/>
          <Pulsante/>
          <Pulsante/>
          <Pulsante/>

        </div>
    </div>
  )
}
