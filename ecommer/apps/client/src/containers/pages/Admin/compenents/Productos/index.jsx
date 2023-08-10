import { useEffect, useState } from "react";
import { Content } from "../Content";
import { Header } from "../Header";
import { ButtonBorderGreen, ButtonSearch } from "../buttons";
import { ProductItem } from "./ProductoItem";

import { ModalDelete } from "../ModalDelete";
import { GestionModalProduct } from "./GestionModalProduct/GestionModalProduct";

const pList = [
  {
    id: 1,
    nombre: "Hamburguesa Patagonia",
    precio: "20.400",
    precioCombo: "28.500",
    categoria: "Hamburguesas",
    entrega: "entrega 1",
    imagen: "imagen1",
    adicionales: "adicionales",
    acompanamento: "acompanamiento",
    bebidad: "bebidas",
  },
  {
    id: 2,
    nombre: "Hamburguesa Western",
    precio: "20.400",
    precioCombo: "28.500",
    categoria: "Hamburguesas",
    entrega: "entrega 2",
    imagen: "imagen2",
    adicionales: "adicionales 1",
    acompanamento: "acompanamiento 1",
    bebidad: "bebidas 1",
  },
  {
    id: 3,
    nombre: "Hamburguesa Rodeo",
    precio: "20.400",
    precioCombo: "28.500",
    categoria: "Hamburguesas",
    entrega: "entrega 4",
    imagen: "imagen3",
  },
  {
    id: 4,
    nombre: "Hamburguesa 4",
    precio: "20.400",
    precioCombo: "28.500",
    categoria: "Hamburguesas",
    entrega: "entrega 5",
    imagen: "imagen4",
  },

  {
    id: 5,
    nombre: "Hamburguesa 5",
    precio: "20.400",
    precioCombo: "28.500",
    categoria: "Hamburguesas",
    entrega: "entrega 5",
    imagen: "imagen4",
  },
  {
    id: 6,
    nombre: "Hamburguesa grande 6",
    precio: "20.400",
    precioCombo: "28.500",
    categoria: "Hamburguesas",
    entrega: "entrega 11",
  },
];

export const Productos = () => {
  const [hideSection, setHideSection] = useState(true);
  const [open, setOpen] = useState({
    option: "",
    state: false,
  });
  const [itemsList, setItemsList] = useState([]);
  const [currentItem, setCurrentItem] = useState({
    nombre: "",
    precio: "",
    precioCombo: "",
    categoria: "",
    entrega: "",
    imagen: "",
    adicionales: "",
    acompanamento: "",
    bebidad: "",
  });
  const [openDelete, setOpenDelete] = useState(false);
  useEffect(() => {
    setItemsList(pList);
  }, []);

  const handleCreate = () => {
    setOpen({
      option: "create",
      state: true,
    });
    setCurrentItem({
      ...currentItem,
      nombre: "",
      precio: "",
      precioCombo: "",
      categoria: "",
      entrega: "",
      imagen: "",
      adicionales: "",
      acompanamento: "",
      bebidad: "",
    });
  };

  const handleDelete = () => {
    setItemsList((itemsList) =>
      itemsList?.filter((item) => item?.id !== currentItem?.id)
    );
    setOpenDelete(false);
  };

  return (
    <section id="productos">
      <Header
        title={"Productos"}
        setHideSection={setHideSection}
        hideSection={hideSection}
      >
        <ButtonBorderGreen onClick={handleCreate}>Crear</ButtonBorderGreen>
        <ButtonSearch />
      </Header>
      {hideSection && (
        <Content>
          {itemsList?.map((producto) => (
            <ProductItem
              key={`${producto?.id}_${producto?.nombre}`}
              producto={producto}
              setOpen={setOpen}
              setCurrentItem={setCurrentItem}
              setOpenDelete={setOpenDelete}
            />
          ))}
        </Content>
      )}
      {/* eliminar */}
      <ModalDelete
        openDelete={openDelete}
        handleDelete={handleDelete}
        setOpenDelete={setOpenDelete}
      />
      {/* crear y actualizar */}
      <GestionModalProduct
        currentItem={currentItem}
        open={open}
        setCurrentItem={setCurrentItem}
        setItemsList={setItemsList}
        setOpen={setOpen}
      />
    </section>
  );
};
