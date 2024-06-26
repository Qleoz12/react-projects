import { useState, useEffect } from "react";
import { BackgroundImage } from "../../../../../components";
import { AddressComponent } from "../../../../../components/AddressComponent";
import { getVias } from "../../../../../services/viasService"
import { SnackbarProvider } from "notistack";
import { SnackbarUtilitiesConfigurator } from "../../../../../utilities";
import { useDispatch } from "react-redux";
import { setLoading } from "../../../../../redux/slices/globalCommonSlice"
import { TcprOrderGeneralDto } from "../../../../../dtos/OrdenGeneral.dto"
import { TcprClientDto } from "../../../../../dtos/tcpr-client.dto"
import { saveOrdenGeneral, creaidordengeneral, saveOrdenDetalle } from "../../../../../services/orderGeneral.service"
import { saveClient, getClientByEmail } from "../../../../../services/client.service"
import { delay } from "../../../../../utilities/delay"


export const Information = ({ setOption, cart }) => {
  const [status, setStatus] = useState(null);
  const [vias, setVias] = useState([]);
  const [addressData, setAddressData] = useState({
    selectedVia: "",
    parta: "",
    partb: "",
    partc: "",
    neighborhood: "",
  });

  const [addressDataExternal, setAddressDataExternal] = useState({
    selectedVia: "",
    parta: "",
    partb: "",
    partc: "",
    neighborhood: "",
  });

  const [customerId, setCustomerId] = useState("");
  const [orderGeneralId, setOrderGeneralId] = useState("");
  const [idOrdenDia, setIdOrdenDia] = useState("");


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cellPhone, setCellPhone] = useState("");
  const [email, setEmail] = useState("");

  const [city, setCity] = useState("Bogotá"); // Default city value
  const [optionalAddress, setOptionalAddress] = useState("");
  const [additionalComments, setAdditionalComments] = useState("");
  const [selectedOption, setSelectedOption] = useState(""); // Radio button state


  const dispatch = useDispatch();


  // const dispatch = useDispatch();
  useEffect(() => {

    const getvias = async () => {
      const response = await getVias();
      setVias(response.data)
    }
    getvias();
  }, [])

  //TODO validar que todos los campos esten llenos o mostrar mensajes de error
  const handleOrderConfirmation = async () => {
    try {
      dispatch(setLoading(true))
      let req = new TcprOrderGeneralDto()
      let reqClient = new TcprClientDto()
      let address = `${addressData.selectedVia} - ${addressData.parta} ${addressData.partb} ${addressData.partc}`

      const clientData = {
        name: `${firstName} ${lastName}`,
        cellPhone,
        nit: cellPhone,
        address,
        neighborhood: addressData.neighborhood,
        identification: cellPhone,
        email,
        agregadorInternalId: "19",
        company: "PaginaWeb",
      };

      const orderData = {
        firstName,
        customerName: `${firstName} ${lastName}`,
        cellPhone,
        address,
        neighborhood: addressData.neighborhood,
        identification: cellPhone,
        customerId,
        brandAggregatorId: 2,
        clientName: `${firstName} ${lastName}`,
        company: "PaginaWeb",
        orderGeneralId,
        orderDayId: idOrdenDia,
        orderNumberId: idOrdenDia,
        cityId: 11001,
        pointId: 70,
        email,
        stateOrderId: 2,
        aggregatorId: 1,
        discountValue: 0,
        couponId: 0,
        nameCoupon: "",
      };

      const idPintorq = {
        "idPunto": 70
      }

      // Check if the client already exists by email
      const clientResponse = await getClientByEmail(email);
      if (clientResponse.statusCode === 200) {
        setCustomerId(clientResponse.data.customerId);
      } else {
        // Save the client if not found and create the order general
        const savedClientResponse = await saveClient(clientData);
        setCustomerId(savedClientResponse.data.customerId);
        const orderGeneralResponse = await creaidordengeneral(idPintorq);
        setOrderGeneralId(orderGeneralResponse.data.idOrdenGeneral);
        setIdOrdenDia(orderGeneralResponse.data.idOrdenDia);
      }

      // Save the order general
      await delay(2500);
      const result = await saveOrdenGeneral(orderData);
      let list=[]
      cart.map((item) => {
        console.log(item)
        const itemParsed = {
          customer: clientData,
          pointId: idPintorq.idPunto,
          multiPointId: 0,
          orderGeneralId: result.data.id,
          orderNumberId: idOrdenDia,
          idSkuItem: item.product.id, 
          skuItem: item.product.skuItem,
          itemName: item.product.ItemSeleccion,
          skuItemPrincipal: "",
          valueBaseUni: 0,
          valueUnitary: item.product.precioSeleccion,
          percentageDiscount: 0,
          discountvalue: 0,
          amount: 1,
          valueBaseTotal: 0,
          valueTotal: 0,
        }
        list.push(itemParsed)
      })


      const resultdetail = await saveOrdenDetalle(list);
      console.log(result);
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  };


  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value === selectedOption ? '' : value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleOptionalAddressChange = (event) => {
    setOptionalAddress(event.target.value);
  };

  const handleAdditionalCommentsChange = (event) => {
    setAdditionalComments(event.target.value);
  };

  const handleCellphone = (event) => {
    setCellPhone(event.target.value);
  };
  // Handler function to update the email state when the input value changes
  const handleEmailChange = async (event) => {

    setEmail(event.target.value);
    // don't remember from where i copied this code, but this works.
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(event.target.value)) {
      // Invalid email, you can show an error to the user here if needed
      return;
    }

    try {
      const response = await getClientByEmail(event.target.value);
      let client = response.data; // Remove 'const' here
      console.log(response);
      setCustomerId(client.customerId);
      setCellPhone(client.cellPhone)
      setFirstName(client.name.split(" ")[0])
      setLastName(client.name.split(" ")[1])
      console.log(client.address)
      let keyVia=client.address.split("-")[0].trim()
      let address=client.address.split("-")[1].trim().split(" ")
      setAddressDataExternal({selectedVia:keyVia,parta:address[0],partb:address[1],partc:address[2],neighborhood:client.neighborhood})
    } catch (error) {
      // Handle the error here, e.g., show an error message to the user
      console.error(error);
    }
  }

  const handleAddressChange = (newAddressData) => {
    setAddressData((prevAddressData) => ({
      ...prevAddressData,
      ...newAddressData,
    }));
  };

  return (
    <>
      <SnackbarProvider>
        <SnackbarUtilitiesConfigurator />
        <div className="text-sm pb-16 px-4 md:pl-16 md:pr-12">
          <h1 className="font-bold pb-2 text-light-ivory text-xl">Informatión del cliente</h1>
          <form onSubmit={handleOrderConfirmation}>
            <h3 className="mt-6 text-xl font-bold">Registro y facturación</h3>
            <h4 className="mt-2 font-bold">Correo eletrónico*</h4>
            <input
              className="text-chocolate-brown w-full text-[15px] p-1 pl-6 bg-light-ivory rounded-3xl font-medium"
              placeholder="alguienejemplo@algo.com"
              required
              value={email} // Bind the input value to the email state
              onChange={handleEmailChange} // Handle input changes
            />
            <h4 className="mt-4 font-bold">Número de teléfono*</h4>
            <div className="flex gap-2">
              <span>+57</span>
              <input
                className="text-chocolate-brown text-[15px] p-1 pl-6 bg-light-ivory rounded-3xl font-medium"
                placeholder="313 313 33 11"
                required
                value={cellPhone}
                onChange={handleCellphone}
              ></input>
            </div>
            <div className="flex gap-8">
              <div className="flex-1">
                <h3 className="font-bold">Nombre*</h3>
                <input
                  type="text"
                  className="text-chocolate-brown w-full text-[15px] p-1 pl-6 bg-light-ivory rounded-3xl font-medium"
                  placeholder="Nombre"
                  required
                  value={firstName}
                  onChange={handleFirstNameChange}
                />
              </div>
              <div className="flex-1 ">
                <h3 className="text-light-ivory font-bold">Apellido*</h3>
                <input
                  type="text"
                  className="text-chocolate-brown w-full text-[15px] p-1 pl-6 bg-light-ivory rounded-3xl font-medium"
                  placeholder="Apellido"
                  required
                  value={lastName}
                  onChange={handleLastNameChange}
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
                  value={city}
                  onChange={handleCityChange}
                >
                  <option>Bogotá</option>
                  <option>Medillin</option>
                </select>
              </div>
            </div>
            <AddressComponent vias={vias} onAddressChange={handleAddressChange} externalState={addressDataExternal} ></AddressComponent>
            <h2 className="mt-4 font-bold">Casa, apartamento, etc. (optional)</h2>
            <input
              placeholder="Casa, apartamento, etc. "
              className="text-chocolate-brown w-full text-[15px] p-1 pl-6 bg-light-ivory rounded-3xl font-medium"
              required
              value={optionalAddress}
              onChange={handleOptionalAddressChange}
            />
            <h2 className="mt-4 font-bold">Comentarios adicionales del pedido (optional)</h2>
            <textarea
              className="text-chocolate-brown w-full h-24 max-h-36 text-[15px] p-1 pl-6 bg-light-ivory rounded-2xl font-medium"
              placeholder="Comentarios adicionales"
              required
              value={additionalComments}
              onChange={handleAdditionalCommentsChange}
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

            <h4 className="mt-2 leading-4">
              Puedes recibir mensajes de texto relacionados con la confirmación del
              pedido y actualizaciones de envío.
            </h4>
            <div className="flex gap-2 mt-4 mb-2">
              <input type="radio" className="radio h-4 w-4 bg-light-ivory" value="option1" checked={selectedOption === 'option1'} onChange={handleOptionChange} />
              <span className="text-xs font-medium">
                Guardar mi información y consultar más rápidamente la próxima vez
              </span>
            </div>
            <div className="flex gap-2">
              <input type="radio" value="option2" className="radio h-4 w-4 bg-light-ivory" checked={selectedOption === 'option2'} onChange={handleOptionChange} />
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
          </form>
        </div>
      </SnackbarProvider>
    </>
  );
};
