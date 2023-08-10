import React, { useEffect, useState } from "react";

export const TotalItemAccompaniment = ({
  product,
  selectedProducts,
  setSelectedProducts,
  productsList,
  setProductList,
}) => {
  const [idState, setIdSetate] = useState(3);
  useEffect(() => {
    setIdSetate(idState + 1);
  }, [setProductList, productsList]);
  const handleAddProductItem = () => {
    const newProduct = {
      id: idState,
      activo: false,
      idItemGrupo: 1,
      idItemSeleccion: product,
      idProducto: 1,
      porDefecto: false,
    };

    setSelectedProducts([...selectedProducts, newProduct]);
    setProductList(productsList?.filter((item) => item?.id !== product?.id));
  };
  return (
    <div className="flex justify-between items-center  flex-row gap-3">
      <h2>{product?.nombre}</h2>
      <button
        type="button"
        onClick={handleAddProductItem}
        className={
          "border-moss-green bg-moss-green  text-white py-0 px-2 rounded-lg"
        }
      >
        Agregar
      </button>
    </div>
  );
};
