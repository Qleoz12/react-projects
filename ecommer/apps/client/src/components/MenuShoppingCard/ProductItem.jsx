import React from "react";
import { AdditionIcon, DropItemIcon, SubstractIcon } from "../Icons";
import { useDispatch } from "react-redux";
import {
  decrementItem,
  incrementItem,
} from "../../redux/slices/menuProductSelectedCartSlice";
import { SnackbarUtilities } from "../../utilities";

export const ProductItem = ({ product, toppings, amount }) => {

  // const {toppings} = product;

  let bebidas = []
  let acompanamiento = []
  let valor = 0
  for (let i = 0; i < toppings.length; i++) {
    if (toppings[i].nombreGrupoSeleccion === "BEBIDAS_COMBOS") {
      bebidas.push(toppings[i].ItemSeleccion)
    } if (toppings[i].nombreGrupoSeleccion === "ACOMPANAMIENTO") {
      acompanamiento.push(toppings[i].ItemSeleccion)
    }
    valor += parseInt(toppings[i].precioSeleccion)
  }

  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(incrementItem({ amount: amount + 1, product }));
  };
  const handleDecrement = () => {
    if (amount - 1 === 0) {
      SnackbarUtilities.error("Se ha eliminado el producto");
    }
    dispatch(decrementItem({ amount: product?.amount - 1, product }));

  };
  const handleRemove = () => {
    SnackbarUtilities.error("Se ha eliminado el producto");
    dispatch(decrementItem({ amount: 0, product }));
  };



  return (
    <div className="relative flex gap-4">
      <div className="absolute right-0">
        <button className="w-4" onClick={handleRemove}>
          <DropItemIcon />
        </button>
      </div>
      <div className="w-1/3">
        <img src={product?.categoryId?.image} alt="foto" />
      </div>

      <div className="w-2/3 flex flex-col gap-2  mr-[3px]">
        <h3 className="text-lg font-bold text-chocolate-brown leading-[15px] mt-[0.5px]">
          {product?.itemName}
        </h3>
        {/* <span className="uppercase text-xs text-intense-orange font-bold">
          SIN COMBO
          
        </span> */}

        {product?.BeverageItemGroups?.map((BeverageItemGroup) => (
          <div>
            <h3 className="">{BeverageItemGroup.name}</h3>
            {BeverageItemGroup?.beverages?.map((beverage) => (
              <h4 className="font-normal">{beverage.itemName} {beverage.price}</h4>
            ))}

          </div>
        ))}

        <div className="leading-[15px]">

          <h4 className="font-bold text-chocolate-brown text-sm leading-[5px]">
            Bebida:
          </h4>
          <span className="text-sm text-chocolate-brown">{bebidas.map((topping) => (
            <div>
              {topping}
            </div>
          )

          )}</span>

        </div>
        <div className="flex items-center gap-6">
          <button className="w-4" onClick={handleIncrement}>
            <AdditionIcon />
          </button>
          <span className="text-chocolate-brown font-bold ">
            {product?.amount}
          </span>
          <button className="w-4" onClick={handleDecrement}>
            <SubstractIcon />
          </button>
        </div>
        <span className="text-moss-green font-bold"> {
          product?.price + valor}</span>
      </div>
    </div>
  );
};
