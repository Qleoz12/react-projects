import {
  createSlice
} from "@reduxjs/toolkit";
import MenuItem from "../../interface/MenuItem"

const menuProductSelectedCartSlice = createSlice({
  name: "menuProductSelectedCart",
  initialState: {
    cart: [],
    subtotal: 0,
    currentCategory: {},
    currentPositionSwiper: 0,
  },
  reducers: {
    addProductToCart: (state, action) => {
      const {
        product,
        amount,
        toppings,
        subTotal
      } = action.payload;

      const exitProduct = state.cart.find((itemProduct) => itemProduct?.skuItem === product?.skuItem);
      state.cart.forEach(console.log)
      if (!exitProduct) {
        const itemProduct = {
          product,
          amount,
          toppings,
          subTotal
        };
        state.subtotal = subTotal;
        state.cart.push(itemProduct);
      } else {
        exitProduct.amount = amount;
      }
    },
    incrementItem: (state, action) => {
      const {
        product,
        amount
      } = action.payload;
      const exitProduct = state.cart.find((item) => item?.id === product?.id);

      if (exitProduct) {
        exitProduct.amount = amount;
      }
    },
    decrementItem: (state, action) => {
      const {
        product,
        amount
      } = action.payload;
      const exitProduct = state.cart.find((item) => item?.id === product?.id);

      if (exitProduct) {
        if (amount == 0) {
          const newCart = state.cart.filter((item) => item?.id != product?.id);
          state.cart = newCart;
        } else {
          exitProduct.amount = amount;
        }
      }
      if (state.cart.length === 0) {
        state.subtotal = 0;
      }
    },
    subtotalProduct: (state) => {
      if (state.cart.length !== 0) {
        state.subtotal = state.cart?.reduce(function (
            accumulator,
            currentValue

          ) {
            return Number(currentValue?.subTotal) + accumulator;
          },
          0);
      } else {
        state.subtotal = 0;
      }
    },
    addSelectedCategory: (state, action) => {
      const {
        category,
        currentPositionSwiper
      } = action.payload;
      state.currentCategory = category;
      state.currentPositionSwiper = currentPositionSwiper;
    },
  },
});

export const {
  addProductToCart,
  incrementItem,
  decrementItem,
  subtotalProduct,
  addSelectedCategory,
} = menuProductSelectedCartSlice.actions;
export default menuProductSelectedCartSlice.reducer;