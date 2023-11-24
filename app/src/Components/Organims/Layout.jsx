import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

export const Layout = () => {

    const location = useLocation()

  return (
    <div className='w-full'>
        
        <nav className = ' bg-[#BF8174] w-full h-16 flex items-center justify-center gap-12 '>
        <h1 className=' text-2xl font-bold mx-2 mr-12'>M & C 
            <span> muebles sobre diseño </span>
        </h1>
            <Link
                className= { ` ${location.ṕathname === '/home' ? ' text-black text-bold' : ' bg-[#855a51] text-white' } hover:bg-[#855a51] px-4 py-6` }
            >
                Cocina
            </Link>
            <Link
                className= 'hover:bg-slate-100 px-4 py-6 ' 
            >
                Cuartos
            </Link>
            <Link
                className= ' hover:bg-slate-100 px-0 py-6' 
            >
                Baños
            </Link>
            <Link
                className= ' hover:bg-slate-100 px-4 py-6' 
            >
                Salas
            </Link>
            <Link
                className= ' hover:bg-slate-100 px-4 py-6' 
            >
                Muebles personalizados
            </Link>
        </nav>

        <main className=' md:w-3/4 p-10  '>
            <Outlet />
        </main>

    </div>
  )
}
