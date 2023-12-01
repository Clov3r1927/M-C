import { deleteMueble } from "../../data/Data";
import ImagenCard from "../Atoms/ImagenCard";
import InformacionCard from "./InformacionCard";
import { useState } from "react";
import { Modal } from "./Modal";

export default function CardAdm({ informacion, onDelete }) {
  const [isDeleted, setDeleted] = useState(false);
  const [modal, setModal] = useState(false)

  const handleOnClickDelete = async ({ id }) => {
    await deleteMueble(id);
    setDeleted(true);
    onDelete && onDelete();
  }

  const handleOnClickUpdate = () => {
    setModal(true)
  }

  if (isDeleted) {
    // Puedes mostrar un mensaje de eliminación aquí
    return (
      <div className="text-red-500 font-bold">¡Elemento eliminado con éxito!</div>
    );
  }

  return (
    <>
    <div className="flex flex-col items-center gap-x-4 mb-2 mt-4 bg-slate-200 py-2 px-4 rounded-md shadow-lg shadow-black w-[32rem] cursor-pointer h-66">
      <ImagenCard url={informacion.imagen} />
      <InformacionCard
      categoria = { informacion.categoria }
        descripcion={informacion.descripcion}
        precio={informacion.precio}
      />
      <div className="flex justify-center gap-x-10 mt-10 mb-5 text-white text-lg font-bold">
        <button onClick={ handleOnClickUpdate } className="bg-blue-500 p-4 rounded-md active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out">Editar</button>
        <button onClick={() => handleOnClickDelete({ id: informacion.id })} className="bg-red-500 p-4 rounded-lg active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out">Eliminar</button>
      </div>
    </div>
    {modal && (

        <Modal setModal= { setModal } id = { informacion.id } />
      )}
    </>
  );
}
