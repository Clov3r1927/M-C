import Card from '../Molecules/Card';
import { useEffect, useState } from 'react';
import PantallaCarga from '../Organims/PantallaCarga';
import { useParams } from 'react-router-dom';

export const Muebles = () => {
  const [cargado, setCargado] = useState(false);
  const [productos, setProductos] = useState([]);
  const { id } = useParams();
  console.log("el id es:",id)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:9000/producto/categoria/${id}`);
        if (!response.ok) {
          throw new Error('Hubo un problema al obtener los datos');
        }
        const data = await response.json();
        setProductos(data);
        setCargado(true);
      } catch (error) {
        console.error(error);
        // Manejar el error, por ejemplo, mostrar un mensaje al usuario
      }
    }

    fetchData();
  }, [id]); // <--- Añade 'id' como dependencia

  return (
    <div>
      {!cargado ? (
        <PantallaCarga />
      ) : (
        <div className="w-full py-2 flex flex-wrap gap-y-6 justify-center gap-x-[6rem]">
          {productos.map((producto, index) => (
            <Card key={index} informacion={producto} />
          ))}
        </div>
      )}
    </div>
  );
};
