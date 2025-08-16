import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducers/ProductSlice.ts";
import uiReducer from "../reducers/UiSlice.ts";
import productSectionReducer from "../reducers/ProductSectionSlice.ts";
import authReducer from "../reducers/AuthSlice.ts";

export const store = configureStore({
  reducer: {
    product: productReducer,
    ui: uiReducer,
    productSection: productSectionReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
