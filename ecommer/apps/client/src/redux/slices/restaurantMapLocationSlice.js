import { createSlice } from "@reduxjs/toolkit";

const restaurantMapLocationSlice = createSlice({
  name: "restaurantMapLocation",
  initialState: {
    isActiveDescriptionRestauranLocation: false,
    currentRestaurantLocation: {},
  },
  reducers: {
    addRestaurantLocation: (state, action) => {
      state.currentRestaurantLocation = action.payload;
      state.isActiveDescriptionRestauranLocation = true;
    },
    closeDescriptionRestauranLocation: (state) => {
      state.isActiveDescriptionRestauranLocation = false;
    },
  },
});
export const {
  addRestaurantLocation,
  closeDescriptionRestauranLocation,
  addMapConfiguration,
} = restaurantMapLocationSlice.actions;
export default restaurantMapLocationSlice.reducer;
