import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import List from '@mui/material/List';
import { FormLabel, Modal, deprecatedPropType } from "@mui/material";
import { useSelector } from "react-redux";
import { SnackbarUtilities } from "../../../../utilities";
import { addProductToCart } from "../../../../redux/slices/menuProductSelectedCartSlice";
import { BackgroundImage } from "../../../../components";
import { getToppings } from "../../../../services/itemsCategoriesService"
import { SidebarMini } from "../../../../components/SidebarMini";
import { ToppingList } from "../../../../components/ToppingList"
// import { PinMapIcon } from "../Icons"
import MenuItem from "../../../../interface/MenuItem"
import BeverageItemGroup from "../../../../interface/BeverageItemGtoup";
import BeverageItem from "../../../../interface/BeverageItem";



export const ModalAddToCar = ({ product, open, handleClose }) => {
  const dispatch = useDispatch();
  const [amountSelected, setAmountSelected] = useState(Number(1));
  const [drinks, setDrinks] = useState();
  const [toppings, setToppings] = useState([]);
  const [withToppings, setwithToppings] = useState(true);
  const [selections, setSelections] = useState([]);
  const [fullToppings, setFullToppings] = useState({});
  const [selectedValues, setSelectedValues] = useState([0]);
  const [subTotal, setSubtotal] = useState((product.price * amountSelected));
  const [isChecked,] = useState(false);
  const [maxbyGroup, setMaxbyGroup] = useState([]);

  const { idPunto } = useSelector(
    (state) => state?.restaurantMapLocation
  );

  useEffect(() => {
    if (open) {
      const getToppingsData = async (idPunto, skuItem) => {
        const dataToppings = { idPunto: 70, skuItem: 7 };
        const response = await getToppings(dataToppings);
        // console.log(1, response)
        // console.log(2, response.data[0])
        setMaxbyGroup(response.indexes)
        const data = response.data;
        var decoupleToppings = { grupos: [], objects: [] }
        data[0]
          .filter(x => x.skuItemSeleccion != null)
          .forEach(topping => {
            if (topping.nombreGrupoSeleccion != null &&
              !decoupleToppings.grupos.includes(topping.nombreGrupoSeleccion)) {
              decoupleToppings.grupos.push(topping.nombreGrupoSeleccion)
              decoupleToppings.objects.push([])
            }
            if (decoupleToppings.grupos.includes(topping.nombreGrupoSeleccion)) {
              decoupleToppings.objects[
                decoupleToppings.grupos.indexOf(topping.nombreGrupoSeleccion)
              ].push(topping)
            }
            console.log(decoupleToppings)
          })
        console.log(3, decoupleToppings)
        setFullToppings(decoupleToppings);
        console.log('toppings', decoupleToppings);
        return data;
      };

      getToppingsData();

    }
  }, [open]);

  const handleAddToCart = () => {

    const groupedToppings = [];

    Object.keys(toppings).forEach((grupo) => {
      let beverages = toppings[grupo].map((item) => {
        let beverageItem = new BeverageItem()
        beverageItem.itemName = item.ItemSeleccion
        beverageItem.price = item.precioSeleccion
        return beverageItem
      })
      groupedToppings.push(new BeverageItemGroup(grupo, beverages));
    });

    console.log(maxbyGroup)

    if (toppings.length == 0 || !isValidToppings(groupedToppings, maxbyGroup)) {
      SnackbarUtilities.error("Toppings incompletos")
      return;
    }
    if (amountSelected !== 0) {

      const menuItem = new MenuItem();
      menuItem.skuItem = product.skuItem
      menuItem.itemName = product.itemName
      menuItem.description = product.description
      menuItem.price = product.price
      menuItem.id = product.id
      menuItem.BeverageItemGroups = groupedToppings
      dispatch(addProductToCart({ product: menuItem, amount: amountSelected, toppings, subTotal }));
      SnackbarUtilities.success("Producto agregado");
      handleClose()
    }
  };
  const handleIncrement = () => {
    const newAmountSelected = amountSelected + 1;
    setAmountSelected(newAmountSelected);
    setSubtotal(product.price * newAmountSelected)
  };
  const handleDecrement = () => {
    const newAmountSelected = amountSelected - 1;
    if (amountSelected > 0) {
      setAmountSelected(newAmountSelected);
      setSubtotal(product.price * newAmountSelected)
    }
  };


  const isValidToppings = (groupedToppings, maxbyGroup) => {
    for (const maxGroup of maxbyGroup) {
      const matchingGroup = groupedToppings.find(group => group.name === maxGroup.nombreGrupoSeleccion);

      if (!matchingGroup || matchingGroup.beverages.length != maxGroup.cantidadMaxima) {
        return false;
      }
    }
    return true;
  }

  const handleYES = () => {
    setwithToppings(true)
    // setIsChecked(true)
  };

  const handleNO = () => {
    setwithToppings(false)
    // setIsChecked(false)
  };
  const changeTittle = (grupo) => {

    return grupo.replace("_", " ")

  }


  const handleChangee = (grupo, e) => {
    const selectedValue = e?.target?.value;

    if (e.target.checked) {
      const { objects } = fullToppings
      let updatedToppings = { ...toppings }; // Copy the existing toppings object

      for (let i = 0; i < objects.length; i++) {
        for (let j = 0; j < objects[i].length; j++) {
          let topping = objects[i][j]
          if (topping.skuItemSeleccion === selectedValue) {
            let precio = parseInt(topping.precioSeleccion)
            // Check if the grupo exists in updatedToppings, if not, create it
            if (!updatedToppings[grupo]) {
              updatedToppings[grupo] = [];
            }
            // Add the topping to the corresponding grupo
            updatedToppings[grupo].push(topping);
            // setToppings([...toppings, topping]);
            setSubtotal(subTotal + precio)
            // Update the toppings state with the grouped toppings
            setToppings(updatedToppings);
          }
        }
      }
      // Si el checkbox está marcado, agrégalo a la listalis
      setSelectedValues([...selectedValues, selectedValue]);
    } else {
      // Si el checkbox se desmarca, elimínalo de la lista
      setSelectedValues(selectedValues.filter(value => value !== selectedValue));
      let toppingUnselect = toppings[grupo].filter(topping=> topping.skuItemSeleccion === selectedValue)
      let precio = parseInt(toppingUnselect[0].precioSeleccion)
      setSubtotal(subTotal - precio)
      toppings[grupo]=toppings[grupo].filter(value => value.skuItemSeleccion !== selectedValue)
      setToppings(toppings);


    }
    //JSON.stringify(toppings)

  };



  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="bg-light-ivory  left-0 top-0 z-[1055] h-5/6 w-full overflow-y-auto overflow-x-hidden outline-none rounded-[40px]">
          <div className="border-t-intense-orange mt-8 py-4 border-t-8">
            <h2 className="flex-2 text-4xl md:text-5xl text-center font-ifc-insane-rodeo-bold text-fire-red">
              {product?.itemName}
            </h2>
          </div>
          <div className="flex gap-10 px-[20px] md:px-[40px]">
            <div className="flex-1 ">
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
              {/* <div className="flex justify-between">
                <span className="text-chocolate-brown font-bold">
                  Adicionales
                </span>
                <span className="text-moss-green font-bold">+94.023</span>
              </div> */}
              <section>
                <span className=" font-bold text-chocolate-brown mt-4">
                  ¿Deseas este pedido en combo?
                </span>
                <span className="block text-xs text-chocolate-brown">
                  *se modificara el precio de combo
                </span>
                <div className="flex mt-3 w-full justify-center items-center">
                  <div className="flex gap-6">
                    <button onClick={handleYES} className="py-0.5 px-5 bg-fire-red font-bold rounded-full text-light-ivory border-2 border-fire-red">
                      SI
                    </button>
                    <button onClick={handleNO} className="py-0.5 px-4 border-2 border-fire-red font-bold rounded-full text-chocolate-brown">
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
              {/* <section>
                <div className="flex justify-between">
                  <span className="font-bold text-chocolate-brown">
                    Bebida:
                  </span>
                  <span className="font-bold text-moss-green">+$0</span>
                </div>
              </section> */}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 px-20 overflow-y-auto">

            {withToppings && fullToppings ?
              <div className="list-none w-full  ">

                {fullToppings?.grupos?.map((grupo, index) => (

                  <div className="siderbar-contender text-gray-600">
                    <div className="flex justify-between">
                      <SidebarMini title={changeTittle(grupo)} />
                      <div className=" rounded bg-orange-500 text-white p-1 w-24">
                        Obligatorio
                      </div>
                    </div>

                    <span>Seleciona maximo  {maxbyGroup
                      .filter((x) => x.nombreGrupoSeleccion === grupo)
                      .map((filteredGroup) => filteredGroup.cantidadMaxima)
                      .join(', ')}</span>
                    <div className="overflow-y-auto h-56">

                      {fullToppings?.objects[index].map((detail) => (

                        <ToppingList
                          detail={detail}
                          handleCheckboxChange={(e) => handleChangee(grupo, e)}
                          handlechecked={selectedValues.includes(detail.skuItemSeleccion)} />


                      ))}

                    </div>
                  </div>


                )

                )}
              </div>
              : <></>
            }


          </div>
          <footer className="flex flex-col md:flex-row gap-6 md:px-20 pb-5">
            <button className="md:w-2/5 flex flex-col items-center font-bold text-chocolate-brown border-fire-red border-2 py-1">
              <h4 className="text-xl">Subtotal:</h4>
              <span className="text-fire-red text-xl">$ {subTotal}</span>
            </button>
            <BackgroundImage className={"md:w-3/5 hero-content bg-cover"}
              onClick={handleAddToCart}
              image={'/assets/button-maderado-amarillo.png'}>
              <button
                className="text-xl md:text-2xl font-bold text-chocolate-brown w-full h-full"
                onClick={handleAddToCart}
                disabled={isChecked}
              >
                <span className="relative z-10">Añadir al carrito</span>
              </button>
            </BackgroundImage>
          </footer>

        </div>
      </Modal>
    </>
  );

};