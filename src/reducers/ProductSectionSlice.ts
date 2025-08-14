import { createSlice } from "@reduxjs/toolkit";
import type { ProductSection } from "../types/ProductSection.ts";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ProductSectionState {
  sections: ProductSection[];
  intialSections: ProductSection[];
}

const initialState: ProductSectionState = {
  sections: [],
  intialSections: [],
};

const productSectionSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSections(state, action: PayloadAction<ProductSection[]>) {
      state.sections = action.payload;
    },
    setInitalSection(state, action: PayloadAction<ProductSection[]>) {
      state.intialSections = action.payload;
    },
    addSection(state, action: PayloadAction<ProductSection>) {
      state.sections.push(action.payload);
    },
    updateSection(state, action: PayloadAction<ProductSection>) {
      const index = state.sections.findIndex((s) => s.id === action.payload.id);
      if (index !== -1) {
        state.sections[index] = action.payload;
      }
    },
    removeSection(state, action: PayloadAction<string>) {
      state.sections = state.sections.filter((s) => s.id !== action.payload);
    },
    toggleSectionStatus(state, action: PayloadAction<string>) {
      const section = state.sections.find((s) => s.id === action.payload);
      if (section) {
        section.is_active = !section.is_active;
      }
    },
  },
});

export const {
  setSections,
  setInitalSection,
  addSection,
  updateSection,
  removeSection,
  toggleSectionStatus,
} = productSectionSlice.actions;

export default productSectionSlice.reducer;
