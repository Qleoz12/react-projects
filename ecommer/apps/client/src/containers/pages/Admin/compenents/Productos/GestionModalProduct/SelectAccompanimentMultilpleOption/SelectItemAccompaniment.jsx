import React, { useEffect, useState } from "react";
import { AdditionIcon, SubstractIcon } from "../../../../../../../components";

export const SelectItemAccompaniment = ({
  product,
  productsList,
  setProductList,
  selectedProducts,
  setSelectedProducts,
}) => {
  const handleIncrement = () => {
    // setAmount(amount + 1);
  };
  const handleDecrement = () => {
    // setAmount(amount - 1);
  };
  const handleRemove = () => {
    setProductList([...productsList, product?.idItemSeleccion]);
    setSelectedProducts(
      selectedProducts?.filter((item) => item?.id !== product?.id)
    );
  };

  const changeSelectedCheckout = () => {
    setSelectedProducts(
      selectedProducts?.map((item) => {
        if (item.idItemSeleccion.id === product?.idItemSeleccion?.id) {
          return { ...item, activo: !item.activo };
        }
        return item;
      })
    );
  };
  const changePriority = () => {
    setSelectedProducts(
      selectedProducts?.map((item) => {
        if (item.idItemSeleccion.id === product?.idItemSeleccion?.id) {
          return { ...item, porDefecto: true };
        } else {
          return { ...item, porDefecto: false };
        }
      })
    );
  };

  return (
    <div className="flex justify-between items-center  flex-row ">
      <div className="flex gap-2 items-center">
        <input
          type="radio"
          onChange={(e) => changePriority(e)}
          checked={product?.porDefecto}
        />
        <input
          type="checkbox"
          id={product?.id}
          checked={product?.activo}
          onChange={() => changeSelectedCheckout()}
        />
        <label htmlFor={product?.id} className="cursor-pointer">
          {product?.idItemSeleccion?.nombre}
        </label>
      </div>

      <div className="flex gap-2">
        <div className="flex items-center  w-20  justify-between ">
          <button
            onClick={handleIncrement}
            type="button"
            className="w-4"
            // onClick={handleIncrement}
          >
            <AdditionIcon />
          </button>
          <span className=" ">0</span>
          <button
            onClick={handleDecrement}
            type="button"
            className="w-4"
            // onClick={handleDecrement}
          >
            <SubstractIcon />
          </button>
        </div>
        <button
          onClick={handleRemove}
          type="button"
          className="bg-fire-red rounded-lg text-white px-2"
        >
          Elimiar
        </button>
      </div>
    </div>
  );
};
