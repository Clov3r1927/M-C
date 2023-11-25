import React from 'react'
import InputOne from '../Atoms/InputOne'

export default function Inputs() {
  return (
    <div className='flex flex-col items-center h-[28rem] bg-slate-100 shadow-sm gap-y-6 shadow-black justify-center px-6 slide-in-right'>
        <InputOne texto={"Numero telefonico"}/>
        <InputOne texto={"Correo Electronico"}/>
        <InputOne texto={"Nombre"}/>
        <textarea className='bg-[#bf8173] text-white font-normal placeholder:text-white py-2 px-2 w-[21rem] rounded-lg font-mono h-[7rem] placeholder:text-[0.7rem] placeholder:text-center' placeholder='Comenta tu idea entre mas explicita mejor'/>
        <button className='bg-[#734439] text-white w-64 py-1 rounded-md'>Enviar</button> 
    </div>
  )
}
