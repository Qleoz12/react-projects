import {
  createSlice,
  current
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
      } = action.payload;

      let currentState = current(state)
      const {
        cart,
      } = currentState;

      const before = currentState.cart.find((itemProduct) => itemProduct?.product.skuItem === product?.skuItem);
      if (!before) {
        const itemProduct = {
          product,
          amount,
          toppings,
          subTotal: product.price* amount
        };
        let newcart = [...cart, itemProduct]
        currentState = {
          ...currentState,
          subtotal: currentState.subtotal+itemProduct.subTotal,
          cart: newcart
        };
      } else {
        let newcart = [...cart,]
        newcart = newcart.map((productvalue) => productvalue.product.skuItem === product?.skuItem ? {
          ...productvalue,
          amount: productvalue.amount + 1,
          subTotal: productvalue.product.price*(productvalue.amount + 1)
        } : productvalue)

        const actual = newcart.find((itemProduct) => itemProduct?.product.skuItem === product?.skuItem);
        currentState = {
          ...currentState,
          subtotal:  currentState.subtotal-before.subTotal+actual.subTotal,
          cart: newcart
        };
      }
      return currentState;
    },
    incrementItem: (state, action) => {
      let currentState = current(state)
      const {
        cart,
      } = currentState;

      const {
        product,
        amount
      } = action.payload;

      let newcart = [...cart,]

      const before = newcart.find((itemProduct) => {
        return itemProduct?.product.skuItem === product?.skuItem
      });

      newcart = newcart.map((productvalue) => productvalue.product.skuItem === product?.skuItem ? {
        ...productvalue,
        amount: amount,
        subTotal: productvalue.product.price*amount
      } : productvalue)

      const actual = newcart.find((itemProduct) => itemProduct?.product.skuItem === product?.skuItem);
      

      currentState = {
        ...currentState,
        subtotal: (currentState.subtotal-before.subTotal+actual.subTotal),
        cart: newcart
      };
      return currentState;
    },
    decrementItem: (state, action) => {
      let currentState = current(state)
      const {
        product,
        amount
      } = action.payload;
      const {
        cart
      } = currentState;

      const before = cart.find((itemProduct) => itemProduct?.product.skuItem === product?.skuItem);
      let newcart = [...currentState.cart]
      if (before) {
        if (amount == 0 || amount < 0) {
          newcart = cart.filter((item) => item?.product.skuItem != product?.skuItem);
        } else {
          newcart = newcart.map((productvalue) => productvalue.product.skuItem === product?.skuItem ? {
            ...productvalue,
            amount: amount,
            subTotal: productvalue.product.price*amount
          } : productvalue)
        }
      }
      const actual = newcart.find((itemProduct) => itemProduct?.product.skuItem === product?.skuItem);
      if (newcart.length === 0) {
        currentState = {
          ...currentState,
          subtotal: 0,
          cart: newcart
        };
        return currentState;
      }

      currentState = {
        ...currentState,
        subtotal:  (currentState.subtotal-before.subTotal+actual.subTotal),
        cart: newcart
      };
      return currentState;
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