import { NavLink } from "react-router-dom";
import { BackgroundImage } from "../../../../../components";
import { Happy } from "../Icons/Happy";

export const DetailFinishOrder = () => {
  return (
    <section className="px-4 pt-12 pb-8 text-sm md:px-16 md:pt-14 md:pb-20">
      <div className="flex gap-2 sm:gap-7">
        <div className=" w-16 fill-light-ivory">
          <Happy />
        </div>
        <div className="font-semibold">
          <h1 className="font-ifc-insane-rodeo-bold text-3xl">
            GRACIAS NOMBRE
          </h1>
          <h3 className="text-lg">Pedido #34567</h3>
        </div>
      </div>
      <h2 className="mt-4 font-bold text-xl">Tu pedido está confirmado</h2>
      <p className="leading-none">
        Recibirás en breve un mensaje de texto de confirmación con su número de
        pedido. Adicionalmente, recibirás actualizaciones del envío y entrega de
        tu pedido por mensaje de texto.
      </p>
      <h2 className="font-bold mt-8 text-xl">Detalles del pedido</h2>
      <div className="flex gap-6 mt-4">
        <div className="flex-1">
          <h2 className="font-semibold text-[17px]">Información de cliente</h2>
          <ul className="leading-1 text-xs font-light mt-2">
            <li>Nombre + apellido</li>
            <li>Telefono</li>
            <li>Correo electrónico</li>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="font-semibold text-[17px]">Método de pago</h2>
          <ul className="leading-1 font-light text-xs mt-2">
            <li>Pago contra entrega</li>
            <li>$ 84.400 COP</li>
          </ul>
        </div>
      </div>
      <div className="w-full h-[1px] mt-6 bg-white my-4" />
      <div className="flex">
        <div className="flex-1">
          <h1 className="font-semibold text-[17px]">Dirección de envió y facturación</h1>
          <ul className="leading-5 mt-2">
            <li>Dirección</li>
            <li>Casa, apartamento, etc.</li>
            <li>Comentarios</li>
            <li>Ciudad</li>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="font-bold mt-5 text-lg">Método de envío</h2>
          <h3>A Domicilio</h3>
          <h1 className="font-bold mt-5 text-lg">Número de pedido</h1>
          <h2>#34567</h2>
        </div>
      </div>
      <div className="flex flex-col items-end gap-4 mt-6">
        <h3 className="text-xs font-bold">¿Necesitas ayuda? Ponte en contacto con nosotros.</h3>
        <BackgroundImage className={"bg-cover"} image={"/assets/button-maderado-amarillo.png"}>
          <div className="py-4 px-8">
            <NavLink
              to={"/"}
              className="text-2xl text-chocolate-brown font-bold"
            >
              Regresa al inicio
            </NavLink>
          </div>
        </BackgroundImage>
      </div>
    </section>
  );
};
