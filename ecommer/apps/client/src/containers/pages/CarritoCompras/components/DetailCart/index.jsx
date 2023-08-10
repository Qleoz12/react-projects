export const DetailCart = () => {
  return (
    <div className="font-tahoma font-bold text-sm text-black mx-4">
      <div className="overflow-hidden h-96 overflow-y-scroll">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((cart, index) => (
          <div className="flex mt-6  " key={index}>
            <div className="mr-4   flex  flex-col items-center relative pt-4">
              <h4 className="bg-chocolate-brown  rounded-full w-5 h-5 font-bold text-white flex items-center justify-center absolute top-2  ">
                2
              </h4>
              <div>
                <img
                  className="w-20 h-20 object-cover"
                  src="https://www.infobae.com/new-resizer/xHORBTTOvi76_TX7OOanBUblR-0=/1200x900/filters:format(webp):quality(85)//arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/FJKXKQKMMJBV7KQ7XQ3YNFO7LU.jpg"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2 leading-none">
              <h2>Hamburgues Western</h2>
              <h2 className="text-intense-orange">Compo</h2>
              <h2 className="text-fire-red">Descripción</h2>
              <div>
                <h3 className="">Adiciones:</h3>
                <h4 className="font-normal">Tocineta</h4>
              </div>
              <div>
                <h3 className="">Acompañamiento:</h3>
                <h4 className="font-normal">Papa cosquito</h4>
              </div>
              <div>
                <h3 className="">Bebida:</h3>
                <h4 className="font-normal">Hit de lulo</h4>
              </div>
            </div>
            <div className="flex-1 text-moss-green">
              <span>$57.600</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-8">
        <button className="bg-slate-300 rounded-lg  px-3 py-2">
          Código de descuento
        </button>
        <button>Canjear</button>
      </div>
      <div className="mt-4 font-normal">
        <div className="flex">
          <span className="flex-1 ">Subtotal</span>
          <span className="flex-1  flex justify-end">$ 81.900</span>
        </div>
        <div className="flex">
          <span className="flex-1">Envíos</span>
          <span className="flex-1 flex justify-end">$ 2.500</span>
        </div>
        <div className="flex font-bold text-lg">
          <span className="flex-1">Total</span>
          <span className="flex-1 flex justify-end text-moss-green">
            $ 84.400 COP
          </span>
        </div>
      </div>
    </div>
  );
};
