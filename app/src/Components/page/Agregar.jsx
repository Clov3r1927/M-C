import React, { useState } from 'react';
import { ImageAd } from '../Atoms/ImageAd';
import FormAdmis from '../Molecules/FormAdmis';
import { Error } from '../Atoms/Error,';
import { agregarMueble } from '../../data/Data';

export const Agregar = () => {
  const [imagen, setImageUrl] = useState('https://cdn.pixabay.com/photo/2017/01/25/17/35/picture-2008484_1280.png');
  const [categoria, setCategoria] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([categoria, precio, descripcion, imagen].includes('')) {
      setError(true);
      setErrorMessage('Datos vacíos');
      return;
    }

    const objectMueble = {
      imagen,
      categoria,
      precio,
      descripcion,
    };

    await agregarMueble(objectMueble);

    setCategoria('');
    setPrecio('');
    setDescripcion('');
    setImageUrl('https://cdn.pixabay.com/photo/2017/01/25/17/35/picture-2008484_1280.png'); // Reset image URL

    setSuccessMessage('¡Dato agregado exitosamente!');
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);

    // Clear error message on successful form submission
    setError(false);
    setErrorMessage('');

    // Reload the component

   setTimeout(()=> {
    window.location.reload();
   }, 1000)
  };

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  return (
    <div className="bg-[#f1f1f1] min-h-screen flex flex-col items-center justify-center px-8">
              {successMessage && (
          <div className="bg-green-200 text-green-800 p-2 mb-4 rounded-md">
            {successMessage}
          </div>
        )}
      <h1 className="text-4xl font-extrabold text-gray-800 mb-10">Añadir Muebles Nuevos</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-8 bg-white p-8 rounded-lg shadow-lg">
        <ImageAd url={imagen} />
        {error && (
          <Error>
            <p>{errorMessage}</p>
          </Error>
        )}

        <form
          className="w-full lg:w-1/2 bg-white rounded-lg p-8 shadow-lg"
          onSubmit={handleSubmit}
        >
          <FormAdmis
            onImageUrlChange={handleImageUrlChange}
            setCategoria={setCategoria}
            setPrecio={setPrecio}
            setDescripcion={setDescripcion}
          />
          <input
            type="submit"
            value="Agregar Mueble"
            className="mx-56 py-3 mt-10 rounded-xl active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out bg-violet-500 p-4 text-white uppercase font-bold flex items-center"
          />
        </form>
      </div>
    </div>
  );
};
