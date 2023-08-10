import { useEffect, useState } from "react";
import { Content } from "../Content";
import { Header } from "../Header";
import { Button, ButtonBorderGreen, ButtonSearch } from "../buttons";
import { TicketItem } from "./TicketItem";
import { Modal } from "@mui/material";
import { ModalDelete } from "../ModalDelete";

export const Tickets = () => {
  const [hideSection, setHideSection] = useState(true);
  const [open, setOpen] = useState({
    option: "",
    state: false,
  });
  const [itemsList, setItemsList] = useState([]);
  const [currentItem, setCurrentItem] = useState({
    nombre: "",
    categoria: "",
    descuento: "",
  });
  const [openDelete, setOpenDelete] = useState(false);
  useEffect(() => {
    setItemsList(tickets);
  }, []);

  const handleClose = () => {
    setOpen({
      option: "",
      state: false,
    });
  };

  const handleCreate = () => {
    setOpen({
      option: "create",
      state: true,
    });
    setCurrentItem({
      ...currentItem,
      nombre: "",
      categoria: "",
      descuento: "",
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

  const handleDelete = () => {
    setItemsList((itemsList) =>
      itemsList?.filter((item) => item?.id !== currentItem?.id)
    );
    setOpenDelete(false);
  };

  return (
    <section id="tickets">
      <Header
        title={"Codigos de descuento"}
        hideSection={hideSection}
        setHideSection={setHideSection}
      >
        <ButtonBorderGreen onClick={handleCreate}>Crear</ButtonBorderGreen>
        <ButtonSearch />
        {/* eliminar */}
        <ModalDelete
          openDelete={openDelete}
          handleDelete={handleDelete}
          setOpenDelete={setOpenDelete}
        />
        {/* crear y actualizar */}

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
                  ? "CREAR CODIGO DE DESCUENTO"
                  : "EDITAR CODIGO DE DESCUENTO"}
              </h2>
              <form onSubmit={handleSave}>
                <div className="flex gap-5">
                  <section className="flex flex-col gap-6 w-1/3">
                    <label className="text-chocolate-brown text-xl font-bold">
                      Nombre Código*
                    </label>
                    <label className="text-chocolate-brown text-xl font-bold">
                      Tipo de Descuento*
                    </label>
                  </section>
                  <section className="w-2/3 flex flex-col gap-4">
                    <input
                      name="nombre"
                      onChange={(e) => changeItem(e)}
                      type="text"
                      className={`sm:mr-28 lg:mr-0 text-lg sm:text-xl bg-white p-1 pl-6 rounded-3xl text-chocolate-brown`}
                      placeholder="Click aquí*"
                      required
                    />
                    <select
                      name="categoria"
                      onChange={(e) => changeItem(e)}
                      type="text"
                      className={`sm:mr-28 lg:mr-0 text-lg sm:text-xl bg-white p-1 pl-6 rounded-3xl text-chocolate-brown`}
                      placeholder="Click aquí*"
                      required
                    >
                      <option value={currentItem?.categoria}>{currentItem?.categoria}</option>
                    </select>
                  </section>
                </div>
                <div className="mt-4 flex flex-col gap-4">
                  <section className="flex gap-4">
                    <div className="flex-1">
                      <label className="text-chocolate-brown text-xl font-bold">
                        Porcentaje descuento*
                      </label>
                    </div>
                    <div className="flex-1">
                      <div htmlFor="flex">
                        <input
                          value={currentItem?.descuento}
                          name="descuento"
                          onChange={(e) => changeItem(e)}
                          type="text"
                          className={`sm:mr-28 lg:mr-0 text-lg sm:text-xl bg-white p-1 pl-6 rounded-3xl text-chocolate-brown`}
                          placeholder="Click aquí*"
                          required
                        />
                      </div>
                    </div>
                  </section>
                </div>
                <footer className="flex justify-center gap-4 mt-4">
                  <Button
                    className={
                      "border-moss-green bg-moss-green px-9 text-white"
                    }
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
      </Header>
      {hideSection && (
        <Content>
          {itemsList.map((producto) => (
            <TicketItem
              key={`${producto?.id}_${producto?.nombre}`}
              producto={producto}
              setOpen={setOpen}
              setCurrentItem={setCurrentItem}
              setOpenDelete={setOpenDelete}
            />
          ))}
        </Content>
      )}
    </section>
  );
};

const tickets = [
  {
    id: 1,
    nombre: "Domigratis",
    categoria: "domicilio",
    descuento: "15",
  },
  {
    id: 2,
    nombre: "rodeodeo",
    categoria: "Total",
    descuento: "10",
  },
  {
    id: 3,
    nombre: "rodeoverde",
    categoria: "Total",
    descuento: "15",
  },
];
