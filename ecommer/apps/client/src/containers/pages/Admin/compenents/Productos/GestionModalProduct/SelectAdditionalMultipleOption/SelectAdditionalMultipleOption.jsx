import React, { useEffect, useState } from "react";
import { ItemAdditionalOption } from "./ItemAdditionalOption";

const optionesDisponibles = [
  { id: 1, name: "Opción 1", amount: 0, state: false },
  { id: 2, name: "Opción 2", amount: 1, state: true },
  { id: 3, name: "Opción 3", amount: 2, state: true },
  { id: 5, name: "Opción 5", amount: 3, state: true },
  { id: 6, name: "Opción 6", amount: 4, state: false },
];

export const SelectAdditionalMultipleOption = () => {
  const [isActiveOptions, setIsActiveOptions] = useState(false);
  const handleActiveOption = () => setIsActiveOptions(!isActiveOptions);

  const [selectedOptions, setSelectedOptions] = useState([]);

  const [options, setOptions] = useState([]);
  useEffect(() => {
    setOptions(optionesDisponibles);
    setSelectedOptions(
      optionesDisponibles?.filter((item) => item.state === true)
    );
  }, []);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleActiveOption}
        className="w-full text-lg sm:text-xl bg-white p-1 pl-6 rounded-3xl text-chocolate-brown flex justify-between items-center"
      >
        {selectedOptions?.length === 0 && "Seleccionar elementos"}
        {selectedOptions?.length !== 0 &&
          selectedOptions?.map((item) => `${item?.name},`)}

        <h1>x</h1>
      </button>
      {isActiveOptions && (
        <div className="absolute top-0 right-0 left-0 bg-white mt-[2.2rem]">
          {options?.map((option, index) => (
            <ItemAdditionalOption
              option={option}
              key={index}
              selectedOptions={selectedOptions}
              setSelectedOptions={setSelectedOptions}
            />
          ))}
        </div>
      )}
    </div>
  );
};
