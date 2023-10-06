import React, { useEffect, useState } from "react";
import { SnackbarProvider } from "notistack";
import { Categories, Products } from "./components";
import { SnackbarUtilitiesConfigurator } from "../../../utilities";
import { getItemsbyCategory } from "../../../services/itemsService"
import { getItemsCategoriesByListPrice,getItemsCategories } from "../../../services/itemsCategoriesService"
import { useDispatch } from "react-redux";
import { addSelectedCategory } from "../../../redux/slices/menuProductSelectedCartSlice";
import { useSelector } from "react-redux";
import { setLoading } from "../../../redux/slices/globalCommonSlice"
import { setListPrice,setIdPunto } from "../../../redux/slices/restaurantMapLocationSlice"

export const Menu = () => {
  const dispatch = useDispatch();
  const [categorieSelected, setCategorieSelected] = useState();
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);

  const { currentCategory } = useSelector(
    (state) => state.menuProductSelectedCart
  );

  const { currentPositionUser } = useSelector(state => state.globalCommon);
  const getCategorieSelected = async (selected) => {
    setCategorieSelected(selected.id);
    dispatch(addSelectedCategory({ category: selected }));
    const data = await handleCategorieSelection(selected.id);
    console.log("items",data)
    setItems(data);
    dispatch(setLoading(false))
  }

  const handleCategorieSelection = async (term) => {
    const response = await getItemsbyCategory(term);
    const data = response.dataConverted;
    return data;
  };

  
  useEffect(() => {
    console.log('hello',currentPositionUser);
    const fetchCategories = async () => {
      try {
        dispatch(setLoading(true))
        if (currentPositionUser && currentPositionUser.lat && currentPositionUser.lng) {
          // Fetch categories and set in Redux state
          const categoriesResponse = await getItemsCategoriesByListPrice(currentPositionUser);
          console.log('punto',categoriesResponse);
          
          dispatch(setListPrice({listPrice:categoriesResponse.data[0][0].listaPrecio}));
          dispatch(setIdPunto({listPrice:categoriesResponse.data[0][0].idPunto}));


          const response = await getItemsCategories(categoriesResponse.data[0][0].listaPrecio);
          setCategories(response.data);
          // dispatch(setCategories(response.data));

          dispatch(setLoading(false));
        }
      } catch (error) {
        console.error('Error fetching categories and items:', error);
      }
    };

    fetchCategories();
  },[currentPositionUser, dispatch])

  useEffect(() => {
    if (categories.length > 0) {
      getCategorieSelected(categories[0]);
    }
  }, [categories]);


  return (
    <>
      <SnackbarProvider>
        <SnackbarUtilitiesConfigurator />
        <section className="border-t-fire-red border-t-8">
          <div className="max-w-5xl mx-auto relative">
            <div className="flex justify-center gap-12">
              <span className="font-ifc-insane-rodeo-bold text-9xl text-intense-orange">
                -
              </span>
              <div>
                <h1 className="text-7xl text-center font-ifc-insane-rodeo-bold text-fire-red">
                  Hola
                </h1>
                <h2 className="text-3xl font-bold text-chocolate-brown">
                  ¿Qué vas a pedir hoy?
                </h2>
              </div>
              <span className="font-ifc-insane-rodeo-bold text-9xl text-intense-orange">
                -
              </span>
            </div>
          </div>
        </section>
        <header className="bg-vibrant-yellow">
          <div className="md:flex md:justify-center md:items-center mx-auto max-w-xl md:max-w-5xl px-6 py-0 sm:py-2 md:py-0 gap-4">
            <div className="flex items-center justify-center py-1 md:mb-2 h-11 sm:h-auto">
              <span className="md:mr-4 h-14 flex items-center font-ifc-insane-rodeo-bold text-intense-orange text-7xl sm:text-8xl md:text-8xl lg:text-9xl">
                --
              </span>
              <h2 className="mx-5 md:mx-0 text-3xl sm:text-5xl md:text-5xl lg:text-6xl text-white font-ifc-insane-rodeo-bold">
                Domicilios AL
              </h2>
              <span className="md:hidden h-14 flex items-center font-ifc-insane-rodeo-bold text-intense-orange text-7xl sm:text-8xl">
                --
              </span>
            </div>
            <div className="flex justify-between mx-auto md:mx-0 m-0 max-w-[300px] md:max-w-xs py-1 md:py-3 sm:max-w-[440px] gap-4">
              <div className="flex items-center bg-fire-red px-4 py-1 sm:px-5 sm:py-2 md:px-4 text-white font-bold md:text-base sm:text-2xl rounded-lg m-0">
                <span className="m-0 h-5 sm:h-auto p-0">601 519 09 99</span>
              </div>
              <div className="flex items-center bg-fire-red px-4 py-1 sm:px-5 sm:py-2 md:px-4  text-white font-bold md:text-base sm:text-2xl rounded-lg m-0">
                <span className="m-0 h-5 sm:h-auto p-0">300 599 99 00</span>
              </div>
            </div>
            <div className="hidden md:inline-flex items-center h-11 mb-3">
              <span className="leading-[1] font-ifc-insane-rodeo-bold text-intense-orange text-7xl sm:text-8xl md:text-8xl lg:text-9xl">
                --
              </span>
            </div>
          </div>
        </header>
        <section className="max-w-5xl mx-auto">
          <Categories
            categories={categories}
            handleSelected={getCategorieSelected} />
          <Products itemsdata={items} />
        </section>
      </SnackbarProvider>
    </>
  );
};
