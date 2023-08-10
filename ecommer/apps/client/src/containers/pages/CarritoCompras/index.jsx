import { useEffect, useState } from "react";
import { Footer, ShoppingBag } from "../../../components";
import { DetailCartMovile, DetailFinishOrder, Information, OrderConfirmation } from "./components";
import { DetailCart } from "./components/DetailCart";

export const CarritoCompras = () => {
  const [option, setOption] = useState(true);
  const [activeDetailMovile, setActiveDetailMovile] = useState(false);
  const [finishOrder, setFinishOrder] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [option]);
  const handleDetailCartMovile = () => {
    setActiveDetailMovile(!activeDetailMovile);
  };
  return (
    <div className="">
      <header className="fixed w-full bg-light-ivory flex justify-center  border-b-8 border-golden-yellow  h-24 z-40">
        <img
          className="w-40 sm:w-60 h-full  object-cover scale-75 "
          src="/assets/LOGO-PW.png"
          alt="Logo"
        />
        <div
          className={`md:hidden block absolute right-0 top-32 text-black font-bold text-sm ${
            activeDetailMovile ? "sm:w-96 w-full" : ""
          } `}
        >
          <button
            type="button"
            onClick={handleDetailCartMovile}
            className="bg-moss-green w-full rounded-l-2xl"
          >
            <div className="w-24 mr-7 sm:mr-20 pl-6 flex justify-center py-2 flex-col">
              <div className="mx-auto">
                <div className="w-8 fill-light-ivory">
                  <ShoppingBag />
                </div>
              </div>
              <h2 className="text-light-ivory">Tu pedido final</h2>
            </div>
          </button>

          {activeDetailMovile && (
            <div>
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={handleDetailCartMovile}
              ></div>
              <div className="relative bg-white ">
                <DetailCartMovile />
              </div>
            </div>
          )}
        </div>
      </header>
      <div className="pt-24">
        <div className="flex md:max-w-6xl sm:max-w-2xl w-full mx-auto ">
          {finishOrder ? (
            <div className="flex-1 bg-fire-red px-4  py-5 text-white">
              <DetailFinishOrder />
            </div>
          ) : (
            <div className="flex-1 bg-fire-red px-4 py-5 text-light-ivory">
              <h1 className="font-ifc-insane-rodeo-bold leading-8 pt-12 px-4 md:px-16 text-[34px]">
                Hamburguesas del Rodeo
              </h1>
              <div className="flex gap-2 mb-5 font-tahoma px-4 md:px-16 text-sm">
                <h3 className={`${option ? "font-bold" : ""}`}>Información</h3>
                <span> &gt; </span>
                <h3 className={`${option ? "" : "font-bold"}`}>
                  Confirmación del pedido
                </h3>
              </div>
              {option ? (
                <Information setOption={setOption} />
              ) : (
                <OrderConfirmation
                  setOption={setOption}
                  setFinishOrder={setFinishOrder}
                />
              )}
            </div>
          )}
          <div className="md:flex-1  hidden md:block  sticky top-24 h-min">
            <DetailCart />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
