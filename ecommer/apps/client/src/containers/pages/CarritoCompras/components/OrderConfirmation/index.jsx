import { useState } from "react";
import { BackgroundImage } from "../../../../../components";

export const OrderConfirmation = ({ setOption, setFinishOrder }) => {
  const [name, setName] = useState('John Doe');
  const [phone, setPhone] = useState('1234567890');
  const [email, setEmail] = useState('johndoe@example.com');
  const [isNameEditing, setIsNameEditing] = useState(false);
  const [isPhoneEditing, setIsPhoneEditing] = useState(false);
  const [isEmailEditing, setIsEmailEditing] = useState(false);

  const handleNameEditClick = () => {
    setIsNameEditing(true);
  };

  const handlePhoneEditClick = () => {
    setIsPhoneEditing(true);
  };

  const handleEmailEditClick = () => {
    setIsEmailEditing(true);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameSaveClick = () => {
    setIsNameEditing(false);
  };

  const handlePhoneSaveClick = () => {
    setIsPhoneEditing(false);
  };

  const handleEmailSaveClick = () => {
    setIsEmailEditing(false);
  };

  const handleInformation = () => {
    setOption(true);
  };
  const handleFinishOrder = () => {
    setFinishOrder(true);

  };
  return (
    <div className="font-tahoma text-sm flex flex-col h-full px-4 lg:pl-16 lg:pr-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold ">Confirmación del pedido</h1>
        <div className="flex gap-2 mt-4">
          <h3 className="w-32 font-bold">Contacto*</h3>
          {isNameEditing ? (
            <input
              className="text-chocolate-brown mr-0 sm:mr-4 w-full text-[15px] p-1 pl-6 bg-light-ivory rounded-3xl font-medium" 
              placeholder="Nombre + Apellido"
              value={name}
              onChange={handleNameChange}
              required
            />
          ):(
              <input
                className="text-chocolate-brown mr-0 sm:mr-4 w-full text-[15px] p-1 pl-6 bg-light-ivory rounded-3xl font-medium" 
                value={name}
                readOnly 
              />
            )
          }
          {!isNameEditing && (
            <button onClick={handleNameEditClick} className="font-bold">Cambiar</button>
          )}
          {isNameEditing && (
            <button onClick={handleNameSaveClick} className="font-bold">Guardar</button>
          )}
        </div>
        <div className="flex gap-2 mt-2">
          <h3 className="w-32 font-bold">Teléfono*</h3>
          {isPhoneEditing ? (
            <input
              className="text-chocolate-brown mr-0 sm:mr-4 w-full text-[15px] p-1 pl-6 bg-light-ivory rounded-3xl font-medium" 
              placeholder="Número de teléfono"
              value={phone}
              onChange={handlePhoneChange}
              required
            />
          ):(
              <input
                className="text-chocolate-brown mr-0 sm:mr-4 w-full text-[15px] p-1 pl-6 bg-light-ivory rounded-3xl font-medium" 
                placeholder="Número de teléfono"
                value={phone}
                readOnly
              />
            )}
          {!isPhoneEditing && (
            <button onClick={handlePhoneEditClick} className="font-bold">Cambiar</button>
          )}
          {isPhoneEditing && (
            <button onClick={handlePhoneSaveClick} className="font-bold">Guardar</button>
          )}
        </div>
        <div className="flex gap-2 mt-2">
          <h3 className="w-32 font-bold">Email</h3>
          {isEmailEditing ? (
          <input
            className=" text-chocolate-brown mr-0 sm:mr-4 w-full text-[15px] p-1 pl-6 bg-light-ivory rounded-3xl font-medium" 
              placeholder="Correo eléctronico"
              value={email}
              onChange={handleEmailChange}
              required
          />
          ):(
              <input
                className=" text-chocolate-brown mr-0 sm:mr-4 w-full text-[15px] p-1 pl-6 bg-light-ivory rounded-3xl font-medium" 
                placeholder="Correo eléctronico"
                value={email}
                readOnly
              />
            )}
          {!isEmailEditing && (
            <button onClick={handleEmailEditClick} className="font-bold">Cambiar</button>
          )}
          {isEmailEditing && (
            <button onClick={handleEmailSaveClick} className="font-bold">Guardar</button>
          )}
        </div>
        <div className="flex gap-2 mt-2">
          <h3 className="w-32 font-bold">Enviar a*</h3>
          <input
            className="truncate text-chocolate-brown mr-0 sm:mr-4 w-full text-sm p-1 pl-6 bg-light-ivory rounded-3xl font-medium" 
            placeholder="Dirección + casa, apartamento, etc."
            required
          />
          <button className="font-bold">Cambiar</button>

        </div>
        <div className="flex gap-2 mt-2">
          <h3 className="w-32 font-bold">Envió</h3>
          <input
            className="text-chocolate-brown mr-0 sm:mr-4 w-full text-sm p-1 pl-6 bg-light-ivory rounded-3xl font-medium" 
            placeholder="Metodo de pago"
            required
          />
          <button className="font-bold">Cambiar</button>
        </div>
        <h2 className="text-2xl leading-1 mt-4 font-bold">Pago contra entrega</h2>
        <p className="leading-none">
          El pago se realizará al domiciliario que entregará el pedido.
        </p>
      </div>
      <div className="flex pt-12 sm:pt-32 pb-8 sm:pb-20 flex-col gap-6 sm:flex-row items-center">
        <div className="flex-1 flex flex-col gap-3 items-start">
          <button onClick={handleInformation}>
            <span> &lt; </span>
            <span className="hover:underline font-bold">Volver a información</span>
          </button>
          <h4 className="font-bold hidden sm:block">Política de privacidad</h4>
        </div>
        <BackgroundImage image={"/assets/button-maderado-amarillo.png"} className={"bg-cover"}>
          <button
            onClick={handleFinishOrder}
            className="flex-1 text-chocolate-brown py-4 text-2xl px-5 font-bold "
          >
            Finalizar pedido
          </button>
        </BackgroundImage>
        <h4 className="font-bold block sm:hidden">Política de privacidad</h4>
      </div>
    </div>
  );
};
