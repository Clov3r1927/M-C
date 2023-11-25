import { useState } from 'react';

export default function InputOne({ texto, onChange }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    onChange(value); // Llama a la función proporcionada por el padre con el nuevo valor
  };

  return (
    <>
      <input
        placeholder={texto}
        value={inputValue} // Establece el valor del input controlado por el estado local
        onChange={handleChange} // Maneja el cambio en el input
        className="bg-[#bf8173] text-white font-normal placeholder:text-white py-2 px-2 w-[21rem] rounded-lg font-mono"
      />
    </>
  );
}
