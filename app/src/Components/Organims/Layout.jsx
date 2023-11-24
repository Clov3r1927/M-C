import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Enlaces } from '../Atoms/Enlaces'

export const Layout = () => {

    const location = useLocation()

  return (
    <div className='w-full'>
        
        <nav className = ' bg-[#BF8174] w-full h-16 flex items-center justify-between '>
        <h1 className=' text-2xl font-bold mx-2 mr-12'>M & C 
            <span className=' font-light uppercase'> muebles sobre diseño </span>
        </h1>
         <Enlaces/>
        </nav>
        <main>
            <Outlet />
        </main>

    </div>
  )
}
