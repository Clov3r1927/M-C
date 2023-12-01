import { getMuebles } from "../../data/Data";
import CardAdm from "../Molecules/CardAdm";
import { useEffect, useState } from 'react'

export const Editar = () => {
  
  const [ data, setData ] = useState([])

  useEffect(()=> {
    const consumoAPI = async() => {
      const api = await getMuebles()
      setData(api)
    }
    consumoAPI()
  }, [])

  const filteredData = data.filter(producto => (
    !["Electrónicos", "Ropa", "Hogar", "Deportes", "Electrodomésticos"].includes(producto.categoria)
  ));

  return (
    <div className="p-5">
      <div className="w-full px-4 py-2 flex flex-wrap gap-y-6 justify-center gap-x-[6rem]">
        {
            filteredData.map( (producto, index) => (
                <CardAdm key={index} informacion={ producto } />
            ) )
        }
      </div>
    </div>
  );
};
