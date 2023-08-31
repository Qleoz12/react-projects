import { useState,useEffect } from "react";
import { BackgroundImage } from "../../../../../components";
import { AddressComponent } from "../../../../../components/AddressComponent";
import { getVias } from "../../../../../services/viasService"
import { SnackbarProvider } from "notistack";
import { SnackbarUtilitiesConfigurator } from "../../../../../utilities";


export const Information = ({ setOption }) => {
  const [status, setStatus] = useState(null);
  const [vias, setVias] = useState([]);
  
  // const dispatch = useDispatch();
  useEffect(() => {

    const getvias = async () => {
      const response = await getVias();
      setVias(response.data)
    }
    getvias();
  }, [])

  const [selectedOption, setSelectedOption] = useState('');
  const handleOrderConfirmation = () => {
    setOption(false);
  };

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value === selectedOption ? '' : value);
  };

  return (
    <>
      <SnackbarProvider>
      <SnackbarUtilitiesConfigurator />
    <div className="text-sm pb-16 px-4 md:pl-16 md:pr-12">
      <h1 className="font-bold pb-2 text-light-ivory text-xl">Informatión del cliente</h1>
      <div className="flex gap-8">
        <div className="flex-1">
          <h3 className="font-bold">Nombre*</h3>
          <input 
            type="text" 
            className="text-chocolate-brown w-full text-[15px] p-1 pl-6 bg-light-ivory rounded-3xl font-medium" 
            placeholder="Nombre" 
            required 
          />
        </div>
        <div className="flex-1 ">
          <h3 className="text-light-ivory font-bold">Apellido*</h3>
          <input 
            type="text" 
            className="text-chocolate-brown w-full text-[15px] p-1 pl-6 bg-light-ivory rounded-3xl font-medium" 
            placeholder="Apellido" 
            required 
          />
        </div>
      </div>
      <div className="flex gap-8 mt-2">
        <div className="flex-1">
          <h3 className="font-bold">Pais*</h3>
          <input
            placeholder="Colombia"
            disabled
            className="text-chocolate-brown placeholder-chocolate-brown w-full text-[15px] p-1 pl-6 bg-light-ivory rounded-3xl font-medium" 
          />
        </div>
        <div className="flex-1">
          <h3 className="font-bold">Ciudad*</h3>
          <select 
            className="rounded-full text-[15px] p-1 pl-2 font-medium bg-light-ivory text-chocolate-brown focus:outline-none focus:border-none w-full"
          >
            <option>Bogotá</option>
            <option>Medillin</option>
          </select>
        </div>
      </div>
      <AddressComponent vias={vias}></AddressComponent>
      <h2 className="mt-4 font-bold">Casa, apartamento, etc. (optional)</h2>
      <input
        placeholder="Casa, apartamento, etc. "
        className="text-chocolate-brown w-full text-[15px] p-1 pl-6 bg-light-ivory rounded-3xl font-medium" 
            required 
      />
      <h2 className="mt-4 font-bold">Comentarios adicionales del pedido (optional)</h2>
      <textarea
        className="text-chocolate-brown w-full h-24 max-h-36 text-[15px] p-1 pl-6 bg-light-ivory rounded-2xl font-medium" 
        placeholder="Comentarios adicionales"
        required
      />
      <h2 className="mt-6 text-xl font-bold">Método de envío</h2>
      <div className="flex mt-1 gap-5">
        <div className="flex-1">
          <span className="font-bold">Envio</span>
          <div className="bg-light-ivory text-[15px] font-extrabold text-chocolate-brown p-1 pl-6 rounded-full">
            A Domicilio
          </div>
        </div>
        <div className="flex-1 flex-col leading-4 items-center">
          <span className="font-bold">Costo envio</span>
          <h3 className="text-xl font-bold">$ 2.500</h3>
        </div>
      </div>
      <h2 className="mt-6 text-xl font-bold">Método de pago</h2>
      <div className="grid sm:grid-cols-2 grid-cols-1 mt-4 sm:gap-8 gap-2">
        <div className="flex-1 flex flex-col items-center">
          <h3 className="text-xl font-bold">Físico</h3>
          <ul className="flex gap-3 sm:justify-between justify-center  w-full sm:px-0 px-10">
            <li className="bg-moss-green px-6 font-bold py-1 rounded-full">Efectivo</li>
            <li className="bg-white text-chocolate-brown font-bold px-6 py-1 rounded-full">
              Tarjeta
            </li>
          </ul>
          <p className="text-xs leading-1 mt-2">
            *Para pago mediante opción física con tarjeta, el domiciliario
            llegará con el datáfono.
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center sm:mt-0 mt-4">
          <h3 className="text-xl font-bold">Online</h3>
          <h3 className="border font-bold text-xs border-white rounded-full py-1 px-6 flex justify-center">
            No Disponible
          </h3>

          <p className="text-xs leading-1 mt-2 text-center sm:text-start">
            *Para pago mediante opción online se puede hacer con tarjeta débito
            o crédito a través de medio online.
          </p>
        </div>
      </div>
      <h3 className="mt-4 text-xs">
        Todas las transacciones son seguras y están encriptadas.
      </h3>
      <h3 className="mt-6 text-xl font-bold">Registro y facturación</h3>
      <h4 className="mt-2 font-bold">Correo eletrónico*</h4>
      <input
        className="text-chocolate-brown w-full text-[15px] p-1 pl-6 bg-light-ivory rounded-3xl font-medium" 
        placeholder="alguienejemplo@algo.com"
            required 
      />
      <h4 className="mt-4 font-bold">Número de teléfono*</h4>
      <div className="flex gap-2">
        <span>+57</span>
        <input
          className="text-chocolate-brown text-[15px] p-1 pl-6 bg-light-ivory rounded-3xl font-medium" 
          placeholder="313 313 33 11"
            required 
        ></input>
      </div>
      <h4 className="mt-2 leading-4">
        Puedes recibir mensajes de texto relacionados con la confirmación del
        pedido y actualizaciones de envío.
      </h4>
      <div className="flex gap-2 mt-4 mb-2">
        <input type="radio" className="radio h-4 w-4 bg-light-ivory" value="option1" checked={selectedOption === 'option1'} onChange={handleOptionChange}/>
        <span className="text-xs font-medium">
          Guardar mi información y consultar más rápidamente la próxima vez
        </span>
      </div>
      <div className="flex gap-2">
        <input type="radio" value="option2" className="radio h-4 w-4 bg-light-ivory" checked={selectedOption === 'option2'} onChange={handleOptionChange}/>
        <span className="text-xs font-medium">Enviarme novedades y ofertas por SMS</span>
      </div>
      <p className="mt-4 leading-4 text-xs">
        Al registrarse por SMS, aceptas recibir mensajes autom atizados de
        marketing recurrentes al número proporcionado, incluyendo recordatorios
        de carritos. El concentimiento no es una condición de compra. Responde
        STOP para darte de baja. Responde HELP para obtener ayuda. La frecuencia
        de los mensajes varía. Pueden aplicarse tarifas de mensajes y datos. Ve
        nuestra <span className="font-bold underline underline-offset-2">Política de privacidad</span> y nuestros <span className="font-bold underline underline-offset-1">Términos del servicio.</span>
      </p>
      <div className="flex mt-5 gap-3">
        <h3 className="flex-1 font-bold text-xs flex justify-start items-end">
          Políticas de privacidad
        </h3>
        <BackgroundImage className={"bg-cover"} image={"/assets/button-maderado-amarillo.png"}>
          <button
            type="button"
            onClick={handleOrderConfirmation}
            className="flex-1 py-4 text-xl text-chocolate-brown px-10 font-bold "
          >
            Continuar
          </button>
        </BackgroundImage>
      </div>
    </div>
    </SnackbarProvider>
    </>
 );
};
