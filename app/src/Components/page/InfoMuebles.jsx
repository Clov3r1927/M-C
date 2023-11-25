import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PantallaCarga from '../Organims/PantallaCarga';

export default function InfoMuebles() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:9000/producto/${id}`);
        if (!response.ok) {
          throw new Error('Hubo un problema al obtener los datos');
        }
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error(error);
        // Manejar el error, por ejemplo, mostrar un mensaje al usuario
      } finally {
        setCargando(false); // Indicar que la carga ha finalizado
      }
    }

    fetchData();
  }, [id]); // <--- Añade 'id' como dependencia

  return (
    <div className='flex justify-center w-screen mt-10 gap-x-10'>
      {cargando ? (
        // Si cargando es true, muestra la pantalla de carga
       <PantallaCarga/>
      ) : (
        // Si cargando es false, muestra los datos obtenidos
        <div className='flex justify-center w-full gap-x-10'>
          <img src={productos[0]?.imagen} alt="" className='w-96 h-96'/>
          <div className='flex flex-col w-[26rem] items-center h-72'>
            <h1 className='font-mono text-2xl font-bold text-center'>Informacion</h1>
            {/* Mostrar la información del producto */}
            <p>{productos[0]?.descripcion}</p>
             <button className='bg-[#bf8173] text-white w-[10rem] py-1 px-3 absolute bottom-[30%]'>Consultar el provedor</button>
          </div>
        </div>
      )}
    </div>
  )
}
