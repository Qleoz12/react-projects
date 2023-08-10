import React from "react";
import { EstrellaIcon, PinIcon, WazeIcon } from "../../../../components/Icons";
import { useState } from "react";
import { useEffect } from "react";
import { BackgroundImage } from "../../../../components";

const restaurantLocation = [
  {
    id: 1,
    geocode: [4.7155912, -74.0290976],
    name: "Patalino",
    direction: "CARRERA 7 No. 139 07 Local 305",
  },
  {
    id: 2,
    geocode: [4.6176034, -74.1361687],
    name: "Americas",
    direction: "Calle 8 Sur #71b-65 a 71b-1",
  },
  {
    id: 3,
    geocode: [4.683463000000001, -74.059772],
    name: "Castellana",
    direction: "CRA 47 No. 94 A 56",
  },
  {
    id: 4,
    geocode: [4.711103, -74.1125518],
    name: "C.C Portal 80",
    direction: "Calle 80 #100 - 52 Local 3044",
  },
];

export const MovileDescriptionRestaurantLocation = ({ map }) => {
  const [valueLocation, setValueLocation] = useState({});
  const changeRestaurantLocation = (e) => {
    const id = e.target.value;
    const restaurant = restaurantLocation?.find((item) => item?.id == id);
    map.setView(restaurant?.geocode, 20);
    setValueLocation(restaurant);
  };
  useEffect(() => {
    setValueLocation(restaurantLocation?.[0]);
  }, []);

  return (
    <div className="h-[32rem] bg-moss-green relative z-20 sm:hidden block font-tahoma ">
      <div className="absolute -top-16 left-0 right-0 ">
        <div className="max-w-[15rem] mx-auto pb-2 ">
          <select
            onChange={(e) => changeRestaurantLocation(e)}
            className="font-bold text-sm rounded-full block w-full p-2 px-4 bg-fire-red border-gray-600 text-white"
            defaultValue={restaurantLocation?.[0].id}
            value={valueLocation.id}
          >
            {restaurantLocation?.map((location) => (
              <option
                className="max-w-[15rem]"
                key={location?.id}
                value={location.id}
              >
                {location?.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-between">
          <div className="w-10 bg-intense-orange mr-3 rounded-tr-[2rem]"></div>
          <div className="bg-fire-red text-white flex-1 rounded-t-[2rem] flex flex-col items-center max-h-max py-8">
            <div className="w-12 fill-light-ivory ">
              <EstrellaIcon />
            </div>
            <h1 className="font-ifc-insane-rodeo-bold  text-light-ivory text-4xl">
              {valueLocation?.name}
            </h1>
          </div>
          <div className="bg-intense-orange w-10 ml-3 rounded-tl-[2rem]"></div>
        </div>
        <aside className="text-white bg-fire-red flex flex-col items-center py-4">
          <div className="flex flex-col gap-4">
            <h1 className="font-ifc-insane-rodeo-bold text-7xl text-light-ivory">
              {valueLocation?.name}
            </h1>
            <h3 className="leading-[25px] text-[23px] w-60 text-light-ivory">
              {valueLocation?.direction}
            </h3>
            <div className="leading-[25px]">
              <span className="block pt-2  text-light-ivory">
                De domingo a domingo
              </span>
              <span className="text-[23px] text-light-ivory">
                11.30 am - 8:30 pm
              </span>
            </div>
            <div className="flex gap-3 flex-col justify-end md:pb-5 px-5">
              <BackgroundImage
                image={"/assets/button-maderado-green.png"}
                className={"bg-cover"}
              >
                <a
                  target="_blank"
                  href={`https://maps.google.com/?q=${valueLocation?.geocode}`}
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
                  href={`https://www.waze.com/ul?ll=${valueLocation?.geocode}&navigate=yes&zoom=17`}
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
        </aside>
      </div>
    </div>
  );
};
