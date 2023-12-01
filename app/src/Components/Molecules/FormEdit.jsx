import { useState } from "react";
import { editarMueble } from "../../data/Data";
import { Error } from "../Atoms/Error,";

export const FormEdit = ({
    setModal, id
 }) => {

    const [error, setError] = useState(false);
    const [imagen, setImageUrl] = useState("");
    const [categoria, setCategoria] = useState("");
    const [precio, setPrecio] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const handleOnClickClose = () => {
        setModal(false);
      }

    const handleOnClickPut = async () => {

        console.log(imagen, categoria, precio, descripcion, id );
    
        if ([imagen, categoria, precio, descripcion].includes('')) {
          setError(true)
          return;
        }
        const objectMueble = {
          imagen,
          categoria,
          precio,
          descripcion,
          id
        }
    
        await editarMueble(id, objectMueble)
    
      }

  return (
    <form >
        {
            error &&
            <Error>Datos vacios</Error>
        }
    <div className="mb-4">
        <label htmlFor="categoria" className="block text-sm font-medium text-gray-600">
          Categoria del Mueble:
        </label>
        <input
          type="text"
          id="categoria"
          className=" shadow-md mt-1 p-2 border rounded-md w-full"
          onChange={ (e) => setCategoria(e.target.value) }
        />
      </div>

      <div className="mb-4">
        <label htmlFor="precio" className="block text-sm font-medium text-gray-600">
          Precio del Mueble:
        </label>
        <input
          type="text"
          id="precio"
          className=" shadow-md mt-1 p-2 border rounded-md w-full"
          onChange={ (e) => setPrecio(e.target.value) }
        />
      </div>

      <div className="mb-4">
        <label htmlFor="imagen" className="block text-sm font-medium text-gray-600">
          Imagen del Mueble:
        </label>
        <input
          type="text"
          id="imagen"
          className=" shadow-md mt-1 p-2 border rounded-md w-full"
          onChange={ (e) => setImageUrl(e.target.value) }
        />
      </div>
      <div className="mb-4">
        <label htmlFor="descripcion" className="block text-sm font-medium text-gray-600">
          Descripción del Mueble
        </label>
        <textarea
        id='descripcion'
        placeholder='Ingrese la descripción'
        rows = "4"
        onChange={ (e) => setDescripcion(e.target.value) }
        className=' shadow-md w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300 inline-block'
      ></textarea>
      </div>


      {/* Agrega más campos de entrada según tus necesidades */}
      
      <div className="flex justify-end">
        <button
          onClick = { handleOnClickClose }
          type="button"
          className="mr-2 px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:border-gray-700 focus:ring focus:ring-gray-200 active:bg-gray-800"
        >
          Cancelar
        </button>
        <button
          onClick={ handleOnClickPut }
          type="button"
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 active:bg-blue-800"
        >
          Enviar
        </button>
      </div>
    </form>
  )
}
