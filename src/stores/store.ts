import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducers/ProductSlice.ts";
import uiReducer from "../reducers/UiSlice.ts";
import productSectionReducer from "../reducers/ProductSectionSlice.ts";

export const store = configureStore({
  reducer: {
    product: productReducer,
    ui: uiReducer,
    productSection: productSectionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
