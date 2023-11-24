import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './Components/Organims/Layout'

//? Creación de las rutas.
//* Utilizzamos createBrowserRouter de react router para generar el enrutamiento.

const router = createBrowserRouter([{
    path: '/',
    element: <Home/>, 
  },
  {
    path: '/home',
    element: <Layout/>, //? Aquí va el componente Layout
    errorElement: <h2>Error</h2>, //? Aqui va el elemeto de error 
    children: [
      //? Todo lo que esté dentro de este "children" compartirá el mismo diseño (Layout)
      {
        index: true,
        element: <h1>Componente</h1>,
      },
   
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/* //? Provider de react-router-dom que utiliza el router creado */}
    <RouterProvider router = { router } />

  </React.StrictMode>,
)
