import React from 'react';

export default function FormAdmis({ 
    onImageUrlChange, setCategoria, setPrecio, setDescripcion
 }) {
  return (
    <>
      <div className='mb-4 text-center'>
        <label htmlFor='categoria' className='block text-gray-600 font-semibold text-2xl'>
          Categoría del Mueble
        </label>
        <input
          onChange={ (e) => setCategoria(e.target.value) }
          type='text'
          id='categoria'
          placeholder='Ingrese la categoría'
          className='w-2/3 px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300 inline-block'
        />
      </div>

      <div className='mb-4 text-center'>
        <label htmlFor='precio' className=' text-2xl block text-gray-600 font-semibold'>
          Precio del Mueble
        </label>
        <input
          onChange={ (e) => setPrecio(e.target.value) }
          type='text'
          id='precio'
          placeholder='Ingrese el precio'
          className='w-2/3 px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300 inline-block'
        />
      </div>

      <div className='mb-4 text-center'>
        <label htmlFor='imagen' className=' text-2xl block text-gray-600 font-semibold'>
          Imagen del Mueble
        </label>
        <input
          onChange={onImageUrlChange}
          type='text'
          id='imagen'
          placeholder='Ingrese el url de la imagen'
          className='w-2/3 px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300 inline-block'
        />
      </div>

      <div className=' text-center'>
        <label htmlFor='descripcion' className=' text-2xl block text-gray-600 font-semibold'>
          Descripción del Mueble
        </label>
        <textarea
          onChange={ (e) => setDescripcion(e.target.value) }
          id='descripcion'
          placeholder='Ingrese la descripción'
          rows='4'
          className='w-2/3 px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300 inline-block'
        ></textarea>
      </div>
    </>
  );
}
