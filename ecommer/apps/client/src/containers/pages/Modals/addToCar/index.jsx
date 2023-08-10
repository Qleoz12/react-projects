import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "@mui/material";
import { SnackbarUtilities } from "../../../../utilities";
import { addProductToCart } from "../../../../redux/slices/menuProductSelectedCartSlice";
import { BackgroundImage } from "../../../../components";


export const ModalAddToCar = ({product,open, handleClose}) => {
  const dispatch = useDispatch();
  const [amountSelected, setAmountSelected] = useState(Number(1));
  const [subtotal, setSubtotal] = useState(product.price * amountSelected);


  
  const handleAddToCart = () => {
    if (amountSelected !== 0) {
      SnackbarUtilities.success("Producto agregado");

      dispatch(addProductToCart({ product, amount: amountSelected }));
    }
  };
  const handleIncrement = () => {
    const newAmountSelected = amountSelected + 1;
    setAmountSelected(newAmountSelected);
    setSubtotal(product.price*newAmountSelected)
  };
  const handleDecrement = () => {
    const newAmountSelected = amountSelected - 1;
    if (amountSelected > 0) {
      setAmountSelected(newAmountSelected);
      setSubtotal(product.price*newAmountSelected)
    }
  };


  return (
    <>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="bg-light-ivory w-[620px] rounded-[40px]  mx-auto absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]">
        <div className="border-t-intense-orange mt-16 py-4 border-t-8">
          <h2 className="flex-2 text-4xl text-center font-ifc-insane-rodeo-bold text-fire-red">
            {product?.itemName}
          </h2>
        </div>
        <div className="flex gap-10 px-20">
          <div className="flex-1">
            <header className="flex justify-center">
              <div className="flex items-center gap-8">
                <span className="text-intense-orange font-ifc-insane-rodeo-bold text-7xl">
                  -
                </span>
                <h4 className="font-bold text-chocolate-brown text-xl">
                  Ingredientes
                </h4>
                <span className="text-intense-orange font-ifc-insane-rodeo-bold text-7xl">
                  -
                </span>
              </div>
            </header>
            <p className="text-center text-chocolate-brown text-sm">
            {product?.description}
            </p>
            <div className="flex justify-center">
              <span className="text-chocolate-brown">
                Entrega: <span className="text-moss-green">60 minutos</span>
              </span>
            </div>
          </div>
          <div className="flex-1">
            <span className="text-chocolate-brown text-4xl flex justify-center font-bold mb-4">
              $ {product.price}
            </span>
            <div className="flex justify-between items-center">
              <span className="text-chocolate-brown font-bold">Cantidad</span>
              <div>
                <button
                  className="text-lg px-2 border-fire-red border-2 rounded-full font-bold"
                  onClick={handleIncrement}
                >
                  +
                </button>
                <span className="text-2xl"> {amountSelected} </span>
                <button
                  className="text-lg px-2.5 border-fire-red border-2 rounded-full font-bold"
                  onClick={handleDecrement}
                >
                  -
                </button>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-chocolate-brown font-bold">
                Adicionales
              </span>
              <span className="text-moss-green font-bold">+94.023</span>
            </div>
            <section>
              <span className=" font-bold text-chocolate-brown mt-4">
                ¿Deseas este pedido en combo?
              </span>
              <span className="block text-xs text-chocolate-brown">
                *se modificara el precio de combo
              </span>
              <div className="flex mt-3 w-full justify-center items-center">
                <div className="flex gap-6">
                  <button className="py-0.5 px-5 bg-fire-red font-bold rounded-full text-light-ivory border-2 border-fire-red">
                    SI
                  </button>
                  <button className="py-0.5 px-4 border-2 border-fire-red font-bold rounded-full text-chocolate-brown">
                    NO
                  </button>
                </div>
              </div>
            </section>
            <section className="mt-4 border-t-fire-red border-t-2 pt-1 leading-[13px]">
              <span className="text-chocolate-brown text-xs">
                <strong>Si lo pediste en combo, </strong>por favor, responde
                los siguientes apartados,{" "}
                <strong className="text-fire-red">
                  caso de que no, omite este paso.
                </strong>
              </span>
            </section>
            <section className="mt-2">
              <div className="flex justify-between">
                <span className="font-bold text-chocolate-brown">
                  Acompañamiento:
                </span>
                <span className="font-bold text-moss-green">+$0</span>
              </div>
            </section>
            <section>
              <div className="flex justify-between">
                <span className="font-bold text-chocolate-brown">
                  Bebida:
                </span>
                <span className="font-bold text-moss-green">+$0</span>
              </div>
            </section>
          </div>
        </div>
        <footer className="flex gap-6 px-20 pb-20">
          <button className="w-2/5 font-bold text-chocolate-brown border-fire-red border-2 py-1">
            <h4 className="text-xl">Subtotal:</h4>
            <span className="text-fire-red text-xl">$ {subtotal}</span>
          </button>
          <BackgroundImage className={"w-3/5 hero-content bg-cover"} image={'/assets/button-maderado-amarillo.png'}>
            <button
              className=" text-xl font-bold text-chocolate-brown"
              onClick={handleAddToCart}
            >
              <span>Añadir al carrito</span>
            </button>
          </BackgroundImage>
        </footer>
      </div>
    </Modal>
    </>
  );

};