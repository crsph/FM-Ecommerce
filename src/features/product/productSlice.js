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
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, addProductToCart } = productSlice.actions;

export default productSlice.reducer;
