import React, { useState } from "react";
import { AdditionIcon, SubstractIcon } from "../../../../../../../components";

export const ItemAdditionalOption = ({
  option,
  selectedOptions,
  setSelectedOptions,
}) => {
  const [amount, setAmount] = useState(
    option?.amount === 0 ? 1 : option?.amount
  );

  const [isActiveChecked, setIsActiveChecked] = useState(option?.state);

  const handleIncrement = () => {
    setAmount(amount + 1);
  };
  const handleDecrement = () => {
    setAmount(amount - 1);
  };
  const changeCheckout = () => {
    const exitItem = selectedOptions?.some((item) => item?.id === option?.id);
    if (exitItem) {
      setSelectedOptions(
        selectedOptions?.filter((item) => item?.id !== option.id)
      );
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
    setIsActiveChecked(!isActiveChecked);
  };

  return (
    <div className="p-1 pl-6 flex justify-between items-center text-chocolate-brown font-bold">
      <div className="flex items-center justify-center gap-3">
        <input
          type="checkbox"
          id={option?.id}
          checked={isActiveChecked}
          onChange={() => changeCheckout()}
        />
        <label htmlFor={option?.id} className="cursor-pointer">
          {option?.name}
        </label>
      </div>
      <div className="flex items-center  w-20  justify-between ">
        <button type="button" className="w-4" onClick={handleIncrement}>
          <AdditionIcon />
        </button>
        <span className=" ">{amount}</span>
        <button type="button" className="w-4" onClick={handleDecrement}>
          <SubstractIcon />
        </button>
      </div>
    </div>
  );
};
