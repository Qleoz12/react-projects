import React, { useState } from "react";
import { Button, ButtonBorderGreen } from "../../buttons";
import { Modal } from "@mui/material";
import { SelectAdditionalMultipleOption } from "./SelectAdditionalMultipleOption/SelectAdditionalMultipleOption";
import { SelectAccompanimentMultilpleOption } from "./SelectAccompanimentMultilpleOption/SelectAccompanimentMultilpleOption";

export const GestionModalProduct = ({
  open,
  setCurrentItem,
  currentItem,
  setOpen,
  setItemsList,
}) => {
  //activar el selector del acompañamiento
  const [openAccompaniment, setOpenAccompanimet] = useState(false);

  const handleClose = () => {
    setOpen({
      option: "",
      state: false,
    });
  };
  const changeItem = (e) => {
    const { name, value } = e.target;
    setCurrentItem({
      ...currentItem,
      [name]: value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (open.option === "create") {
      setItemsList((itemsList) => [...itemsList, currentItem]);
      setOpen({
        ...open,
        option: "",
        state: false,
      });
    } else {
      setItemsList((itemsList) =>
        itemsList?.map((item) =>
          item?.id === currentItem?.id ? currentItem : item
        )
      );
      setOpen({
        ...open,
        option: "",
        state: false,
      });
    }
  };

  return (
    <>
      <Modal
        open={open?.state}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="bg-light-ivory w-[820px] rounded-[40px]  mx-auto absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]">
          <div className=" py-10 px-20">
            <h2 className="text-5xl font-ifc-insane-rodeo-bold text-center mb-6 text-fire-red">
              {open.option === "create"
                ? "CREAR NUEVO PRODUCTO"
                : "EDITAR PRODUCTO"}
            </h2>
            <form onSubmit={handleSave}>
              <section className="flex gap-8">
                <div className="flex">
                  <label className="text-chocolate-brown text-xl font-bold">
                    Nombre producto<span className="text-fire-red">*</span>
                  </label>
                </div>
                <div className="flex-1">
                  <input
                    onChange={(e) => changeItem(e)}
                    name="nombre"
                    value={currentItem?.nombre}
                    type="text"
                    className={`w-full sm:mr-28 lg:mr-0 text-lg sm:text-xl bg-white p-1 pl-6 rounded-3xl text-chocolate-brown`}
                    placeholder="Click aquí*"
                    required
                  />
                </div>
              </section>
              <section className="grid grid-cols-4 gap-4 py-4">
                <label className="text-chocolate-brown text-xl font-bold">
                  Precio unidad<span className="text-fire-red">*</span>
                </label>
                <input
                  type="text"
                  onChange={(e) => changeItem(e)}
                  value={currentItem?.precio}
                  name="precio"
                  className={`w-full sm:mr-28 lg:mr-0 text-lg sm:text-xl bg-white p-1 pl-6 rounded-3xl text-chocolate-brown`}
                  placeholder="Click aquí*"
                  required
                />
                <label className="text-chocolate-brown text-xl font-bold">
                  Entrega<span className="text-fire-red">*</span>
                </label>
                <select
                  className={`w-full sm:mr-28 lg:mr-0 text-lg sm:text-xl bg-white p-1 pl-6 rounded-3xl text-chocolate-brown`}
                  placeholder="Click aquí*"
                  required
                >
                  <option value="">Selecciona</option>
                  <option value={currentItem?.entrega}>Domicilio</option>
                </select>
                <label className="text-chocolate-brown text-xl font-bold">
                  Precio combo<span className="text-fire-red">*</span>
                </label>
                <input
                  type="text"
                  onChange={(e) => changeItem(e)}
                  value={currentItem?.precioCombo}
                  name="precioCombo"
                  className={`w-full sm:mr-28 lg:mr-0 text-lg sm:text-xl bg-white p-1 pl-6 rounded-3xl text-chocolate-brown`}
                  placeholder="Click aquí*"
                  required
                />
                <label className="text-chocolate-brown text-xl font-bold">
                  Categoria<span className="text-fire-red">*</span>
                </label>
                <select
                  onChange={(e) => changeItem(e)}
                  className={`w-full sm:mr-28 lg:mr-0 text-lg sm:text-xl bg-white p-1 pl-6 rounded-3xl text-chocolate-brown`}
                  required
                >
                  <option value="selecciona">Selecciona</option>
                  <option value={currentItem?.categoria}>Hamburguesas</option>
                </select>
              </section>
              <section className="flex gap-8">
                <div className="flex">
                  <label className="text-chocolate-brown text-xl font-bold">
                    Ingredientes<span className="text-fire-red">*</span>
                  </label>
                </div>
                <div className="flex-1">
                  <textarea
                    rows="3"
                    cols=""
                    className="w-full text-chocolate-brown text-xl bg-white pl-6 rounded-3xl"
                  ></textarea>
                </div>
              </section>
              <div className="mb-4 flex flex-col gap-4">
                <label className="text-chocolate-brown text-xl font-bold">
                  Elige la imagen del banner que deseas subir<span className="text-fire-red">*</span>
                </label>
                <section className="flex gap-4">
                  <div className="flex-1">
                    <input
                      onChange={(e) => changeItem(e)}
                      value={currentItem?.imagen}
                      name="imagen"
                      accept="image/*"
                      type="file"
                      className={`w-full sm:mr-28 lg:mr-0 text-lg sm:text-xl bg-white p-1 pl-6 rounded-3xl text-chocolate-brown`}
                      required
                    />
                  </div>
                  <div className="flex justify-end">
                    <ButtonBorderGreen>Subir foto</ButtonBorderGreen>
                  </div>
                </section>
              </div>
              <div className="flex gap-5">
                <section className="flex flex-col gap-6 w-1/3">
                  <label className="text-chocolate-brown text-xl font-bold">
                    Adicionales
                  </label>
                  <label className="text-chocolate-brown text-xl font-bold">
                    Acompañamiento
                  </label>
                  <label className="text-chocolate-brown text-xl font-bold">
                    Bebidas
                  </label>
                </section>
                <section className="w-2/3 flex flex-col gap-4">
                  <SelectAdditionalMultipleOption />

                  <button
                    type="button"
                    className={`sm:mr-28 lg:mr-0 text-lg bg-white border-2 border-moss-green p-1 pl-6 rounded-3xl text-moss-green font-bold`}
                    onClick={() => setOpenAccompanimet(true)}
                  >
                    Añadir acompañamiento
                  </button>

                  <select
                    onChange={(e) => changeItem(e)}
                    className={`sm:mr-28 lg:mr-0 text-lg sm:text-xl bg-white p-1 pl-6 rounded-3xl text-chocolate-brown`}
                    required
                  >
                    <option value="">Selecciona Elementos</option>
                    <option value={currentItem?.bebidad}>Coca Cola</option>
                    <option value={currentItem?.bebidad}>Cola Pepsi</option>
                  </select>
                </section>
              </div>
              <footer className="flex justify-center gap-4 mt-5">
                <Button
                  className={"border-moss-green bg-moss-green px-9 text-white"}
                >
                  {open.option === "create" ? "Crear" : "Editar"}
                </Button>
                <Button
                  onClick={handleClose}
                  className={"border-fire-red bg-fire-red text-white px-9"}
                >
                  Cancelar
                </Button>
              </footer>
            </form>
          </div>
        </div>
      </Modal>
      {/* Modal del acompañamiento */}
      <SelectAccompanimentMultilpleOption
        setOpenAccompanimet={setOpenAccompanimet}
        openAccompaniment={openAccompaniment}
        currentItem={currentItem}
        openModalGestion={open}
      />
    </>
  );
};
