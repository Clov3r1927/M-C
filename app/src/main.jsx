import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Index } from './Components/Organims/Index'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './Components/Organims/Layout'
import {Muebles} from './Components/page/Muebles'
import InfoMuebles from './Components/page/InfoMuebles'

//? Creación de las rutas.
//* Utilizzamos createBrowserRouter de react router para generar el enrutamiento.

const router = createBrowserRouter([{
    path: '/login',
    element: <h1>dfsf</h1>,
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
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/* //? Provider de react-router-dom que utiliza el router creado */}
    <RouterProvider router = { router } />

  </React.StrictMode>,
)
