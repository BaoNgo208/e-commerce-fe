import { createSlice } from "@reduxjs/toolkit";

interface ProductState {
  value: number;
}

const initialState: ProductState = {
  value: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrememt: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrememt } = productSlice.actions;

export default productSlice.reducer;
