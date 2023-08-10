import { createSlice } from "@reduxjs/toolkit";

const restaurantMapLocationSlice = createSlice({
  name: "restaurantMapLocation",
  initialState: {
    isActiveDescriptionRestauranLocation: false,
    currentRestaurantLocation: {},
    listPrice:0,
    idPunto:0
  },
  reducers: {
    addRestaurantLocation: (state, action) => {
      state.currentRestaurantLocation = action.payload;
      state.isActiveDescriptionRestauranLocation = true;
    },
    closeDescriptionRestauranLocation: (state) => {
      state.isActiveDescriptionRestauranLocation = false;
    },
    setListPrice: (state,action) => {
      const {
        listPrice
      } = action.payload;
      state.listPrice = listPrice;
    },
    setIdPunto: (state,action) => {
      const {
        idpunto
      } = action.payload;
      state.idPunto = idpunto;
    },
  },
});
export const {
  addRestaurantLocation,
  closeDescriptionRestauranLocation,
  addMapConfiguration,
  setListPrice,
  setIdPunto,
} = restaurantMapLocationSlice.actions;
export default restaurantMapLocationSlice.reducer;
