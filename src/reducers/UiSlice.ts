import { createSlice } from "@reduxjs/toolkit";

interface UiState {
  showBanner: boolean;
  showSaveButton: boolean;
}

const initialState: UiState = {
  showBanner: true,
  showSaveButton: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    hideBanner: (state) => {
      state.showBanner = false;
    },
    showBanner: (state) => {
      state.showBanner = true;
    },
    toggleBanner: (state) => {
      state.showBanner = !state.showBanner;
    },
    setHideSaveButton: (state) => {
      state.showSaveButton = false;
    },
    setShowSaveButton: (state) => {
      state.showSaveButton = true;
    },
  },
});

export const {
  hideBanner,
  showBanner,
  toggleBanner,
  setHideSaveButton,
  setShowSaveButton,
} = uiSlice.actions;
export default uiSlice.reducer;
