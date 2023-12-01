import React, { useEffect, useState } from "react";
import { editarMueble, getMuebleId } from "../../data/Data";
import { FormEdit } from "./FormEdit";

export const Modal = ({ setModal, id }) => {

  return (
    <div className=" fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center  ">
      <div className="bg-white p-8 w-[40rem] h-[38rem] rounded-md shadow-md ">
        <h2 className=" text-center text-2xl font-bold mb-4">Editar Mueble</h2>
        <FormEdit
          id = { id }
          setModal={setModal}
        />
      </div>
    </div>
  );
};
