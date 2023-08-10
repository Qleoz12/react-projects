import Modal from "@mui/material/Modal";
import { SelectItemAccompaniment } from "./SelectItemAccompaniment";
import { TotalItemAccompaniment } from "./TotalItemAccompaniment";
import { useEffect, useState } from "react";

export const SelectAccompanimentMultilpleOption = ({
  setOpenAccompanimet,
  openAccompaniment,
  currentItem,
  openModalGestion,
}) => {
  const [productsList, setProductList] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleClose = () => setOpenAccompanimet(false);

  useEffect(() => {
    let idItems = itemSeleccion?.map((item) => item?.idItemSeleccion?.id);
    setProductList(
      productosTotales?.filter((item) => !idItems.includes(item?.id))
    );
    setSelectedProducts(itemSeleccion);
  }, [openModalGestion]);

  return (
    <div>
      <Modal
        open={openAccompaniment}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="bg-light-ivory w-[900px] rounded-[40px]  mx-auto absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] flex flex-col p-5 text-chocolate-brown">
          <h1 className="text-center font-bold  pb-2">ACOMPAÑAMIENTOS</h1>
          <div className="flex w-full">
            {/* Todos los productos seleccionados */}
            <div className="flex-1 h-96 overflow-hidden overflow-y-scroll flex flex-col gap-1 pr-5">
              {selectedProducts?.map((item, index) => (
                <SelectItemAccompaniment
                  key={index}
                  productsList={productsList}
                  setProductList={setProductList}
                  selectedProducts={selectedProducts}
                  setSelectedProducts={setSelectedProducts}
                  product={item}
                />
              ))}
            </div>

            {/* Todos los productos Existented */}

            <div className="flex-1 h-96 overflow-hidden overflow-y-scroll flex flex-col gap-1 px-5">
              {productsList?.map((item, index) => (
                <TotalItemAccompaniment
                  key={index}
                  product={item}
                  selectedProducts={selectedProducts}
                  setSelectedProducts={setSelectedProducts}
                  productsList={productsList}
                  setProductList={setProductList}
                />
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

const itemSeleccion = [
  {
    id: 1,
    idItemGrupo: 1,
    porDefecto: true,
    activo: true,
    idItemSeleccion: {
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
    idProducto: 1,
  },
  {
    id: 2,
    idItemGrupo: 1,
    porDefecto: false,
    activo: true,
    idItemSeleccion: {
      id: 3,
      nombre: "Hamburguesa Rodeo",
      precio: "20.400",
      precioCombo: "28.500",
      categoria: "Hamburguesas",
      entrega: "entrega 4",
      imagen: "imagen3",
    },
    idProducto: 1,
  },
  {
    id: 3,
    idItemGrupo: 1,
    porDefecto: false,
    activo: false,
    idItemSeleccion: {
      id: 4,
      nombre: "Hamburguesa 4",
      precio: "20.400",
      precioCombo: "28.500",
      categoria: "Hamburguesas",
      entrega: "entrega 5",
      imagen: "imagen4",
    },
    idProducto: 1,
  },
];
const productosTotales = [
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
