import { PinMapIcon } from "../Icons"
import { useEffect, useState } from "react";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {addPositionUser } from "../../redux/slices/globalCommonSlice"
import { getItemsCategories } from "../../services/itemsCategoriesService"

export const LocationComponent = () => {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);
    const dispatch = useDispatch();

    const getLocation = () => {
        if (!navigator.geolocation) {
			setStatus('Geolocation is not supported by your browser');
		} else {
            setStatus('Locating...');
            navigator.geolocation.getCurrentPosition((position) => {
                setStatus(null);
                setLat(position.coords.latitude);
                setLng(position.coords.longitude);
                dispatch(addPositionUser({
                    lat:position.coords.longitude,
                    lng:position.coords.latitude,
                }))
            }, () => {
                setStatus('Unable to retrieve your location');
                alert('Please allow location access.');
                window.location.href = "app-settings:location";
                setLat(null);
                setLng(null);
            });
        }
    }

    useEffect(() => {
        getLocation();
      }, []);
    


    return (
        <div className="flex justify-center  pt-40">

<div className="p-4 bg-white rounded-lg shadow-md ">
    <div className="relative w-16 mx-auto mb-3 -mt-10">
        <PinMapIcon />
    </div>
    <span className="block w-full mb-1 leading-normal text-gray-800 sm:w-70 text-md">
        recuerde que debe de permitir y chequear el valor de su ubicacion para permitir las opciones disponibles en la cobertura que se encuentre
    </span>
    <p>{status}</p>
    <div className={`flex justify-around  480:-ml-12 rounded-xl py-4 lg:ml-0 "bg-whitish-blue"`}>
                <div className="flex flex-col ">
                    <p className={`"text-gray"}`}>latitude</p>
                    <p className={`font-bold text-lg 480:text-2xl mx-auto sm:mx-0 "text-dark-navy-blue-2"}`}>{lat}</p>
                </div>
                <div className="flex flex-col">
                    <p className={`"text-gray"}`}>longitude</p>
                    <p className={`font-bold text-lg 480:text-2xl mx-auto sm:mx-0 "text-dark-navy-blue-2"}`}>{lng}</p>
                </div>
                {/* <div className="flex flex-col">
                    <p className={`"text-gray"}`}>direccion</p>
                    <p className={`font-bold text-lg 480:text-2xl mx-auto sm:mx-0 "text-dark-navy-blue-2"}`}>aa</p>
                </div> */}
            </div>

    <div className="flex items-center justify-between">
        <a className="mr-1 text-xs text-gray-400 hover:text-gray-800" href="#">
            Privacy Policy
        </a>
        <div className="w-1/2">
            <button onClick={getLocation} type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                localizar
            </button>
        </div>
    </div>
</div>

        </div>
    )
}
