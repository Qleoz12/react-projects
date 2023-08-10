import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { closeDescriptionRestauranLocation } from "../../../../redux/slices/restaurantMapLocationSlice";
import { EstrellaIcon, PinIcon, WazeIcon } from "../../../../components/Icons";
import { BackgroundImage } from "../../../../components";

export const DescriptionRestauranLocation = ({ map }) => {
  const dispatch = useDispatch();
  const { currentRestaurantLocation } = useSelector(
    (state) => state?.restaurantMapLocation
  );
  const handleClose = () => {
    dispatch(closeDescriptionRestauranLocation());
    map.setView([4.7155912, -74.0290976], 11);
  };
  return (
    <div className=" max-w-md md:max-w-4xl z-50 mx-auto relative bg-intense-orange">
      <div className="flex gap-10 w-full justify-between absolute md:-top-[20rem] -top-[28rem]">
        <div className="-mt-16 md:w-56 md:mt-0 flex-1 md:flex-none mb-20 bg-fire-red relative p-3 text-center rounded-t-[2rem]">
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-0 -right-0 bg-intense-orange p-3 w-10 h-10 text-white z-10 rounded-tr-[2rem] hover:cursor-pointer hover:bg-golden-yellow"
          >
            X
          </button>
          <div className="pt-2 flex justify-center">
            <div className="w-9 fill-light-ivory">
              <EstrellaIcon />
            </div>
          </div>
          <div className="pt-2 text-light-ivory leading-7 line-clamp-1 text-3xl mb-10 font-ifc-insane-rodeo-bold ">
            {currentRestaurantLocation?.name}
          </div>
        </div>
        <div className="-mt-16 md:mt-0 flex-1 lg:flex-none bg-intense-orange relative h-[20rem] p-3 overflow-hidden text-center rounded-t-[2rem] md:hidden visible">
          <div className="flex justify-center">
            <div className="w-9 fill-light-ivory">
              <EstrellaIcon />
            </div>
          </div>
          <div className="my-1">
            <h2 className="text-3xl font-ifc-insane-rodeo-bold line-clamp-1 leading-5 text-light-ivory">
              {currentRestaurantLocation?.name} ahora
            </h2>
            <h2 className="mt-1 leading-[16px] text-sm text-light-ivory line-clamp-2">
              CARRERA 7 No. 139 07 Local 305
            </h2>
          </div>
        </div>
      </div>

      <div className="mt-10 w-full bg-fire-red flex rounded-tr-[2rem] absolute bottom-0 md:flex-row flex-col">
        <div className="flex md:flex-1">
          <div className="flex md:flex-row flex-1 flex-col ">
            <div className="flex-1 flex flex-col gap-5 m-5">
              <h1 className="text-white text-4xl leading-7 line-clamp-1 font-ifc-insane-rodeo-bold">
                {currentRestaurantLocation?.name}
              </h1>
              <h2 className="text-white text-lg leading-5 line-clamp-2">
                {currentRestaurantLocation?.direction}
              </h2>
              <h2 className="text-white leading-4 text-lg">
                <span className="block text-sm">De domingo a domingo</span>
                11:30 am - 8:30 pm
              </h2>
            </div>
            <div className="flex gap-3 flex-col justify-end md:pb-5 px-5">
              <BackgroundImage
                image={"/assets/button-maderado-green.png"}
                className={"bg-cover"}
              >
                <a
                  target="_blank"
                  href={`https://maps.google.com/?q=${currentRestaurantLocation?.geocode[0]},${currentRestaurantLocation?.geocode[1]}`}
                  className="flex gap-2 px-4 items-center justify-between text-white md:py-3 py-2 font-bold text-[16px]"
                >
                  Ir con Google
                  <div className="w-6 fill-light-ivory">
                    <PinIcon />
                  </div>
                </a>
              </BackgroundImage>
              <BackgroundImage
                image={"/assets/button-maderado-green.png"}
                className={"bg-cover"}
              >
                <a
                  target="_blank"
                  href={`https://www.waze.com/ul?ll=${currentRestaurantLocation.geocode[0]},${currentRestaurantLocation.geocode[1]}&navigate=yes&zoom=17`}
                  className="flex gap-4 px-4 justify-between items-center text-[16px] text-white md:py-3 py-2 font-bold"
                >
                  Ir con Waze
                  <div className="w-7 fill-light-ivory">
                    <WazeIcon />
                  </div>
                </a>
              </BackgroundImage>
            </div>
          </div>

          <div className="md:w-52 mr-5 md:mr-0 md:flex-none flex-1 md:h-48 max-h-96 bg-yellow-50 mt-16 md:mt-0">
            <img
              className="h-full w-full object-center object-none bg-fire-red"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB9keDEQNpvr_2hJd-Nx5E48ChJk49ua5F7g&usqp=CAU"
              alt=""
            />
          </div>
        </div>
        <footer className="flex justify-center items-center px-2 pb-6 pt-3">
          <div className="w-10 fill-light-ivory">
            <EstrellaIcon />
          </div>
        </footer>
      </div>
    </div>
  );
};
