import React, { useEffect, useState } from "react";
import { Modal } from "@mui/material";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../../../../redux/slices/menuProductSelectedCartSlice";
import { useSelector } from "react-redux";
import { SnackbarUtilities } from "../../../../../utilities";
import { BackgroundImage } from "../../../../../components";
import { ModalAddToCar } from "../../../Modals/addToCar";

const NOT_FOUNT_IMAGE_PRODUCT =
  "https://www.hostinet.com/formacion/wp-content/uploads/2017/01/agotado-chincheta.png";
export const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.menuProductSelectedCart);
  const [amountSelected, setAmountSelected] = useState(Number(0));
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  useEffect(() => {
    const exitProduct = cart?.find((item) => item.id === product?.id);
    if (exitProduct) {
      setAmountSelected(exitProduct?.amount);
    } else {
      setAmountSelected(0);
    }
  }, [cart, product, open]);

  // const handleAddToCart = () => {
  //   if (amountSelected !== 0) {
  //     SnackbarUtilities.success("Producto agregado");

  //     dispatch(addProductToCart({ product, amount: amountSelected }));
  //   }
  // };
  // const handleIncrement = () => {
  //   setAmountSelected(amountSelected + 1);
  // };
  // const handleDecrement = () => {
  //   if (amountSelected > 0) {
  //     setAmountSelected(amountSelected - 1);
  //   }
  // };

  return (
    <>
      <button
        onClick={handleOpen}
        className={`bg-red-50 flex flex-col items-center `}
      >
        <div
          className={`bg-[url('/assets/menu/FONDO_MENU_PRODUCTOS.jpg')] w-full h-24 flex justify-center overflow-hidden`}
        >
          <img
            src={
              product?.image == undefined
                ? NOT_FOUNT_IMAGE_PRODUCT
                : product?.image
            }
            className="h-full  object-cover hover:scale-105 transition-all duration-100"
          />
        </div>

        <h2 className="border-t-chocolate-brown leading-5 border-t-8 text-lg font-bold text-chocolate-brown">
          {product?.itemName}
        </h2>
        <p>
        {product?.description}
        </p>
      </button>
      <ModalAddToCar 
      open={open}
      handleClose={handleClose}
      product={product}></ModalAddToCar>
    </>
  );
};
