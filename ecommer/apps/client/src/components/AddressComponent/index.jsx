import { PinMapIcon } from "../Icons"
import { useEffect, useState } from "react";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addPositionUser } from "../../redux/slices/globalCommonSlice"
import { getVias } from "../../services/viasService"

export const AddressComponent = ({vias}) => {

  useEffect(() => {
    console.log(" AddressComponen loaded")
  }, []);

  return (
    
    <div className="mt-4">
      <h3 className="font-bold">Direccion*</h3>
      <div className="grid sm:grid-cols-6  grid-cols-3  gap-2  place-items-center">
        <section>
          vía
          <select
            className="rounded-full text-[15px] p-1 pl-2 font-medium bg-light-ivory text-chocolate-brown focus:outline-none focus:border-none w-full"
          >
            {vias?.map((item) => (
              <option
                className="max-w-[15rem]"
                key={item?.id}
                value={item?.id}
              >
                {item.name}
              </option>
            ))}
          </select>
        </section>
        <input
          placeholder="#"
          className="text-chocolate-brown w-full text-[15px] p-1 pl-2 bg-light-ivory rounded-3xl font-medium"
          required
        />
        <select
          className="rounded-full text-[15px] p-1 pl-2 font-medium bg-light-ivory text-chocolate-brown focus:outline-none focus:border-none w-full"
        >
          <option>-</option>
          <option>xxx xxx </option>
        </select>
        <select
          className="rounded-full text-[15px] p-1 pl-2 font-medium bg-light-ivory text-chocolate-brown focus:outline-none focus:border-none w-full"
        >
          <option>-</option>
          <option>y</option>
        </select>
        <select
          className="rounded-full text-[15px] p-1 pl-2 font-medium bg-light-ivory text-chocolate-brown focus:outline-none focus:border-none w-full"
        >
          <option>-</option>
          <option>xxx xxx </option>
        </select>
        <input
          placeholder="#"
          className="text-chocolate-brown w-full text-[15px] p-1 pl-2 bg-light-ivory rounded-3xl font-medium"
          required
        />
      </div>
    </div>
  )
}