import { BackgroundImage } from "../../../../../components";
import { ButtonDelete, ButtonEdit } from "../buttons";

export const ProductItem = ({
  producto,
  setOpen,
  setCurrentItem,
  setOpenDelete,
  maxByGroup,
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
      <div className="flex justify-between px-10">
        <div className="flex gap-4">
          <aside></aside>
          <div>
            <BackgroundImage
              className={"bg-cover"}
              image={"/assets/menu/FONDO_MENU_PRODUCTOS.jpg"}
            >
              <img
                className="w-24 pb-2 pt-5 px-2"
                src="/assets/menu/HAMBURGUESAS.png"
                alt="item"
              />
            </BackgroundImage>
          </div>
          <article className="text-chocolate-brown">
            <h3 className="text-xl mb-2">{producto?.nombre}</h3>
            <ul className="leading-4">
              <li className="grid grid-cols-2 w-96">
                <span className="font-bold">Nombre</span>
                <span>{producto?.nombre}</span>
              </li>
              <li className="grid grid-cols-2 w-96">
                <span className="font-bold">Precio unitario</span>
                <span>$ {producto.precio}</span>
              </li>
              <li className="grid grid-cols-2 w-96">
                <span className="font-bold">Precio combo</span>
                <span>$ {producto.precioCombo}</span>
              </li>
              <li className="grid grid-cols-2 w-96">
                <span className="font-bold">Categoria</span>
                <span>{producto.categoria}</span>
              </li>
            </ul>
          </article>
        </div>
        <section className="flex flex-col justify-end gap-2">
          <ButtonEdit onClick={handleEdit} />
          <ButtonDelete onClick={handleSelectedProductByDelete}>
            Eliminar
          </ButtonDelete>
        </section>
      </div>
    </li>
  );
};
