import { useDispatch } from "react-redux";
import { addRestaurantLocation } from "../../../../redux/slices/restaurantMapLocationSlice";
import { useCallback } from "react";
import { EstrellaIcon } from "../../../../components/Icons";

export const RestauranItemLocation = ({ itemRestaurantLocation, map }) => {
  const dispatch = useDispatch();

  const handleDescriptionRestauranLocation = useCallback(() => {
    dispatch(addRestaurantLocation(itemRestaurantLocation));
    map.setView(itemRestaurantLocation?.geocode, 20);
  }, [dispatch, itemRestaurantLocation, map]);

  return (
    <button
      onClick={handleDescriptionRestauranLocation}
      type="button"
      className="flex flex-col h-full w-full cursor-pointer font-tahoma"
    >
      <div className="mt-[2rem] relative rounded-t-[2rem] pb-4 bg-intense-orange w-full md:h-48 lg:h-full">
        <div className="flex justify-center pt-5">
          <div className="w-11 fill-light-ivory">
            <EstrellaIcon />
          </div>
        </div>
        <div className="px-4 pt-2">
          <h2 className="text-light-ivory line-clamp-1 leading-[25px] font-ifc-insane-rodeo-bold text-4xl">
            {itemRestaurantLocation?.name}
          </h2>
          <h3 className="text-light-ivory line-clamp-1 pb-5 text-lg leading-[20px] pt-2.5">
            {itemRestaurantLocation?.direction}
          </h3>
        </div>
      </div>
    </button>
  );
};
