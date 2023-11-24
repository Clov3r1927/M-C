import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Enlaces = () => {

  const location = useLocation();

  return (
    <div className=' flex gap-9'>
         <Link
                className= { ` ${location.pathname === '/home' ? ' bg-[#855a51] text-white  text-bold' : '  text-black text-bold' } hover:bg-[#855a51] px-4 py-6` }
            >
                Cocina
            </Link>
            <Link
                className= { ` ${location.pathname === '/cocina' ? ' bg-[#855a51] text-white text-bold' : ' text-black text-bold' } hover:bg-[#855a51] px-4 py-6` }
            >
                Cuartos
            </Link>
            <Link
                className= { ` ${location.pathname === '/banos' ? ' bg-[#855a51] text-white text-bold' : ' text-black text-bold' } hover:bg-[#855a51] px-4 py-6` }
            >
                Baños
            </Link>
            <Link
                 className= { ` ${location.pathname === '/sala' ? ' bg-[#855a51] text-white text-bold' : ' text-black text-bold' } hover:bg-[#855a51] px-4 py-6` }
            >
                Salas
            </Link>
            <Link
                 className= { ` ${location.pathname === '/muebles/perso' ? ' bg-[#855a51] text-white text-bold' : ' text-black text-bold' } hover:bg-[#855a51] px-4 py-6` } 
            >
                Muebles personalizados
            </Link>
    </div>
  )
}
