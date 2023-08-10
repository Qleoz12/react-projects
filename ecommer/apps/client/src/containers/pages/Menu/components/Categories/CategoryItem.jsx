import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
export const CategoryItem = ({ category, index  }) => {
  const dispatch = useDispatch();


  const { currentCategory } = useSelector(
    (state) => state.menuProductSelectedCart
  );

  return (
    <button
      type="button"
      className={` w-full mt-[5rem] flex flex-col  items-center sm:h-48 h-44 ${
        currentCategory?.id === category.id
          ? "  border-b-fire-red border-b-8 text-fire-red"
          : " pb-3  text-chocolate-brown "
      }`}
    >
      <div
        className={`h-28 object-cover w-32 sm:w-full flex justify-center   ${
          currentCategory?.id === category?.id ? "" : " grayscale"
        }`}
      >
        <img src={category?.image} className="h-full w-full " />
      </div>
      <h3 className="text-center  text-xl font-bold leading-none sm:line-clamp-3  line-clamp-1">
        {category?.name}
      </h3>
    </button>
  );
};
