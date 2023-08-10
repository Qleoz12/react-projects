import { ButtonDelete, ButtonEdit } from "../buttons";
export const BannerItem = ({
  producto,
  setOpen,
  setCurrentItem,
  setOpenDelete,
}) => {
  const handleEdit = () => {
    setOpen({
      option: "edit",
      state: true,
    });
    setCurrentItem(producto);
  };
  const handleSelectedProductByDelete = () => {
    setOpenDelete(true);
    setCurrentItem(producto);
  };
  return (
    <li>
      <div className="flex  px-10 justify-between">
        <div className="flex gap-4">
          <aside></aside>
          <div>
            <img
              className="w-24 pb-2 pt-5 px-2"
              src="/assets/menu/HAMBURGUESAS.png"
              alt="item"
            />
          </div>
          <article className="text-chocolate-brown">
            <h3 className="text-xl mb-2">Detalles</h3>
            <ul className="leading-4">
              <li className="grid grid-cols-2 w-96">
                <span className="font-bold">Titulo</span>
                <span>$ {producto?.titulo}</span>
              </li>
              <li className="grid grid-cols-2 w-96">
                <span className="font-bold">Subtitulo</span>
                <span className="line-clamp-1">$ {producto?.subtitulo}</span>
              </li>
              <li className="grid grid-cols-2 w-96">
                <span className="font-bold">Imagen</span>
                <span>{producto?.imagen}</span>
              </li>
              <li className="grid grid-cols-2 w-96">
                <span className="font-bold">Call to action</span>
                <span>{producto?.calltoaction}</span>
              </li>
            </ul>
          </article>
        </div>
        <section className="flex flex-col justify-end gap-2">
          <ButtonEdit onClick={handleEdit} />
          <ButtonDelete onClick={handleSelectedProductByDelete}>
            Eliminar
          </ButtonDelete>
          {/* <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div className="bg-light-ivory w-[820px] rounded-[40px]  mx-auto absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]">
              <div className=" py-10 px-20">
                <h2 className="font-bold text-5xl text-center mb-6 text-chocolate-brown">
                  ¿Deseas eliminar este elemento?
                </h2>
                <footer className="flex justify-center gap-4">
                  <Button
                    className={"border-fire-red bg-fire-red text-white px-9"}
                  >
                    Eliminar
                  </Button>
                  <ButtonDelete onClick={handleClose} className="">
                    Cancelar
                  </ButtonDelete>
                </footer>
              </div>
            </div>
          </Modal> */}
        </section>
      </div>
    </li>
  );
};
