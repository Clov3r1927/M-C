import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Index } from './Components/Organims/Index'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './Components/Organims/Layout'
import {Muebles} from './Components/page/Muebles'
import InfoMuebles from './Components/page/InfoMuebles'
import Personalizacion from './Components/page/Personalizacion'
import { Login } from './Components/Organims/Login'
import { NavAdmis } from './Components/Organims/NavAdmis'
import { Agregar } from './Components/page/Agregar'
import { Editar } from './Components/page/Editar'
import { Modal } from './Components/Molecules/Modal'

//? Creación de las rutas.
//* Utilizzamos createBrowserRouter de react router para generar el enrutamiento.

const router = createBrowserRouter([{
    path: '/',
    element: <Login/>,
    index: true,
  },
  {
    path: '/',
    element: <Layout/>, //? Aquí va el componente Layout
    errorElement: <h2>Error</h2>, //? Aqui va el elemeto de error 
    children: [
      //? Todo lo que esté dentro de este "children" compartirá el mismo diseño (Layout)
      {
        path: '/home',
        element : <Index/>
      },
      {
        path: '/mueble/:id',
        element: <Muebles/>
      }
      ,
      {
        path: '/muebleInfo/:id',
        element: <InfoMuebles/>

      },
      {
        path: '/personalizado',
        element: <Personalizacion/>

      }
    ]
  },
  {
    path: '/administrador',
    element:   <NavAdmis/>,
    children: [
      {
        index: true,
        path: "/administrador/agregar",
        element: <Agregar/>
      },
      {
        path: "/administrador/editar",
        element: <Editar/>
      }
    ]
  },
  {
    path: "/modal",
    element: <Modal/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/* //? Provider de react-router-dom que utiliza el router creado */}
    <RouterProvider router = { router } defaultValues = {{pathname: "/login"}} />

  </React.StrictMode>
)
