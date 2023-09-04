import { PinMapIcon } from "../Icons"
import { useEffect, useState } from "react";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addPositionUser } from "../../redux/slices/globalCommonSlice"
import { getVias } from "../../services/viasService"

export const AddressComponent = ({ vias, onAddressChange,externalState }) => {
  const [selectedVia, setSelectedVia] = useState("");
  const [parta, setParta] = useState("");
  const [partb, setPartb] = useState("");
  const [partc, setPartc] = useState("");
  const [neighborhood, setNeighborhood] = useState("");

  useEffect(() => {
    console.log(" AddressComponen loaded")
  }, []);

  useEffect(() => {
    console.log(" vias loaded")
    if(vias && vias.length>0) setSelectedVia(vias[0].id)
  }, [vias]);

  useEffect(() => {
    onAddressChange({
      selectedVia,
      parta,
      partb,
      partc,
      neighborhood,
    });
  }, [selectedVia, parta, partb, partc, neighborhood]);

  useEffect(() => {
    console.log("AddressComponent externalState loaded");
    if (externalState) {
      setSelectedVia(externalState.selectedVia);
      setParta(externalState.parta);
      setPartb(externalState.partb);
      setPartc(externalState.partc);
      setNeighborhood(externalState.neighborhood);
    }
  }, [externalState]);

  return (

    <div className="mt-4">
      <h3 className="font-bold">Direccion*</h3>
      <div className="grid sm:grid-cols-4  grid-cols-4  gap-3  place-items-start place-content-center items-center">
        <section>
          <select
            className="rounded-full text-[15px] p-1 pl-2 font-medium bg-light-ivory text-chocolate-brown focus:outline-none focus:border-none w-full"
            value={selectedVia}
            onChange={(e) => setSelectedVia(e.target.value)}
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
          placeholder="134A"
          value={parta}
          onChange={(e) => setParta(e.target.value)}
          className="text-chocolate-brown w-full text-[15px] p-1 pl-2 bg-light-ivory rounded-3xl font-medium"
          required
        />
        <input
          placeholder="57B"
          value={partb}
          onChange={(e) => setPartb(e.target.value)}
          className="text-chocolate-brown w-full text-[15px] p-1 pl-2 bg-light-ivory rounded-3xl font-medium"
          required
        />
        <input
          placeholder="02"
          value={partc}
          onChange={(e) => setPartc(e.target.value)}
          className="text-chocolate-brown w-full text-[15px] p-1 pl-2 bg-light-ivory rounded-3xl font-medium"
          required
        />

        <input
          placeholder="nombre de tu barrio"
          value={neighborhood}
          onChange={(e) => setNeighborhood(e.target.value)}
          className="text-chocolate-brown text-[15px] col-span-2 p-1 pl-2 bg-light-ivory rounded-2xl font-medium"
          required
        />
      </div>
    </div>
  )
}