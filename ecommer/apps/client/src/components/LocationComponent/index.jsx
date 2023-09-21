import { PinMapIcon } from "../Icons"
import { useEffect, useState } from "react";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addPositionUser } from "../../redux/slices/globalCommonSlice"
import { getItemsCategories } from "../../services/itemsCategoriesService"
import { CloseCircle } from "../Icons"


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
                    lat: position.coords.longitude,
                    lng: position.coords.latitude,
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

            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md max-w-3xl p-2">
                {!lat || !lng ?<section className="">
                    <div class=" items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" style={{background:"#F8E2E4",color:"#C70039"}} role="alert">
                        <span className="flex rounded-full uppercase  text-xs font-bold  " style={{width:"2rem"}} ><CloseCircle stroke={"#C70039"} /></span>
                        <span className="font-semibold mr-2 text-left flex-auto">debes permitir el acceso a tu ubicacion</span>
                        <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" /></svg>
                    </div>
                </section>:<></>}
                <span className="block w-full mb-1 leading-normal text-gray-800 sm:w-70 text-md">
                    recuerde que debe de permitir y chequear el valor de su ubicacion actual para realizar pedidos
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
                </div>

                <div className="flex items-center justify-between">
                    <div className="w-70">
                        <button onClick={getLocation} type="button" className="py-2 px-4  bg-yellow-400 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            usar mi ubicacion actual
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
