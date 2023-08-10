import { useEffect, useState } from "react";
import { Content } from "../Content";
import { Header } from "../Header";
import { Button, ButtonBorderGreen, ButtonSearch } from "../buttons";
import { BannerItem } from "./BannerItem";
import { Modal } from "@mui/material";
import { ModalDelete } from "../ModalDelete";

export const Banners = () => {
  const [hideSection, setHideSection] = useState(true);
  const [open, setOpen] = useState({
    option: "",
    state: false,
  });
  const [itemsList, setItemsList] = useState([]);
  const [currentItem, setCurrentItem] = useState({
    titulo: "",
    subtitulo: "",
    imagen: "",
    calltoaction: "",
  });
  const [openDelete, setOpenDelete] = useState(false);
  useEffect(() => {
    setItemsList(productosItem);
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
      titulo: "",
      subtitulo: "",
      imagen: "",
      calltoaction: "",
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
    <section id="banners">
      <Header
        title={"Banners"}
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
                {open.option === "create" ? "CREAR BANNER" : "EDITAR BANNER"}
              </h2>
              <form onSubmit={handleSave}>
                <div className="flex gap-5">
                  <section className="flex flex-col gap-6 w-1/3">
                    <label className="text-chocolate-brown text-xl font-bold">
                      Título*
                    </label>
                    <label className="text-chocolate-brown text-xl font-bold">
                      Subtitulo*
                    </label>
                    <label className="text-chocolate-brown text-xl font-bold">
                      Nombre CTA*
                    </label>
                    <label className="text-chocolate-brown text-xl font-bold">
                      Enlace web*
                    </label>
                  </section>
                  <section className="w-2/3 flex flex-col gap-4">
                    <input
                      type="text"
                      className={`sm:mr-28 lg:mr-0 text-lg sm:text-xl bg-white p-1 pl-6 rounded-3xl text-chocolate-brown`}
                      placeholder="Click aquí*"
                      value={currentItem?.titulo}
                      name="titulo"
                      onChange={(e) => changeItem(e)}
                      required
                    />
                    <input
                      value={currentItem?.subtitulo}
                      name="subtitulo"
                      onChange={(e) => changeItem(e)}
                      type="text"
                      className={`sm:mr-28 lg:mr-0 text-lg sm:text-xl bg-white p-1 pl-6 rounded-3xl text-chocolate-brown`}
                      placeholder="Click aquí*"
                      required
                    />

                    <input
                      type="text"
                      className={`sm:mr-28 lg:mr-0 text-lg sm:text-xl bg-white p-1 pl-6 rounded-3xl text-chocolate-brown`}
                      placeholder="Click aquí*"
                      required
                    />
                    <input
                      type="text"
                      className={`sm:mr-28 lg:mr-0 text-lg sm:text-xl bg-white p-1 pl-6 rounded-3xl text-chocolate-brown`}
                      placeholder="Click aquí*"
                      required
                    />
                  </section>
                </div>
                <div className="mt-4 flex flex-col gap-4">
                  <label className="text-chocolate-brown text-xl font-bold">
                    Elige la imagen del banner que deseas subir*
                  </label>
                  <section className="flex gap-4">
                    <div className="flex-1">
                      <input
                        type="file"
                        accept="image/*"
                        className={`w-full sm:mr-28 lg:mr-0 text-lg sm:text-xl bg-white p-1 pl-6 rounded-3xl text-chocolate-brown`}
                        required
                      />
                    </div>
                    <div className="flex justify-end">
                      <ButtonBorderGreen>Subir foto</ButtonBorderGreen>
                    </div>
                  </section>
                </div>
                <footer className="flex justify-center gap-4 mt-5">
                  <Button
                    className={
                      "border-moss-green bg-moss-green px-9 text-white"
                    }
                  >
                    Crear
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
          {itemsList?.map((producto, index) => (
            <BannerItem
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

const productosItem = [
  {
    id: 1,
    titulo: "Evento",
    subtitulo: "Nos encargamos de tus eventos",
    imagen: "28.500",
    calltoaction: "Hamburguesas",
  },
  {
    id: 2,
    titulo: "Combo Dio",
    subtitulo: "asklfas",
    imagen: "28.500",
    calltoaction: "Hamburguesas",
  },
  {
    id: 3,
    titulo: "Hamburguesa Patagonia",
    subtitulo: "askflasklf",
    imagen: "28.500",
    calltoaction: "Hamburguesas",
  },
];
