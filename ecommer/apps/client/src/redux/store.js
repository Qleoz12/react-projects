import { configureStore } from "@reduxjs/toolkit";
import restaurantMapLocationSlice from "./slices/restaurantMapLocationSlice";
import menuProductSelectedCartSlice from "./slices/menuProductSelectedCartSlice";
import globalCommonSlice from "./slices/globalCommonSlice";

const store = configureStore({
  reducer: {
    restaurantMapLocation: restaurantMapLocationSlice,
    menuProductSelectedCart: menuProductSelectedCartSlice,
    globalCommon: globalCommonSlice,
  },
});

export default store;
