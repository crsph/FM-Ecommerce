import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    sneakerName: "",
    sneakerPrice: 0.0,
    amount: 0,
  },
  reducers: {
    // increment: (state) => {
    //   state.amount += 1;
    // },
    // decrement: (state) => {
    //   state.amount -= 1;
    // },
    addProductToCart: (state, action) => {
      console.log(action);
      state.amount = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, addProductToCart } = productSlice.actions;

export default productSlice.reducer;
