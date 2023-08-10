import { ButtonDelete, ButtonEdit } from "../buttons";

export const TicketItem = ({
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
      <div className="flex justify-between items-center px-10">
        <div className="flex gap-4 items-center">
          <aside></aside>
          <div>
            <img
              className="w-14 pb-2 pt-5 px-2"
              src="/assets/menu/HAMBURGUESAS.png"
              alt="item"
            />
          </div>
          <article className="text-chocolate-brown">
            <h3 className="text-xl">
              <strong className="mr-3">Código:</strong>
              <span className="uppercase">{producto?.nombre}</span>
            </h3>
            <ul className="leading-4">
              <li>
                <span className="font-bold mr-2">Categoria:</span>
                <span>{producto.categoria}</span>
              </li>
              <li>
                <span className="font-bold mr-2">Porcentaje descuento:</span>
                <span>$ {producto.descuento}</span>
              </li>
            </ul>
          </article>
        </div>
        <section className="min-h-0 my-auto">
          <div className="grid grid-flow-col auto-cols-min gap-2">
            <ButtonEdit onClick={handleEdit} />
            <ButtonDelete onClick={handleSelectedProductByDelete}>
              Eliminar
            </ButtonDelete>
          </div>
        </section>
      </div>
    </li>
  );
};
