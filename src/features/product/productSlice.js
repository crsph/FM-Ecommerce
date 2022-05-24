import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    productObject: {},
    amount: 0,
  },
  reducers: {
    addProductToCart: (state, action) => {
      state.productObject = action.payload.productObject;
      state.amount = action.payload.productAmount;
    },
    emptyCart: (state) => {
      state.productObject = {};
      state.amount = 0;
    }
  },
});

// Action creators are generated for each case reducer function
export const { addProductToCart, emptyCart } = productSlice.actions;

export default productSlice.reducer;
