import type { Dispatch } from "redux";
import {
  getAllProductSection,
  getAllPublicActiveProductSection,
} from "../apis/ProductSectionApi.ts";
import { setSections } from "../reducers/ProductSectionSlice.ts";
import { setInitalSection } from "../reducers/ProductSectionSlice.ts";

export const fetchSections = () => async (dispatch: Dispatch) => {
  try {
    const response = await getAllProductSection();
    dispatch(setSections(response.data));
    dispatch(setInitalSection(response.data));
  } catch (error) {
    console.error("Failed to fetch sections", error);
  }
};

export const fetchPublicSections = () => async (dispatch: Dispatch) => {
  try {
    const response = await getAllPublicActiveProductSection();
    dispatch(setSections(response.data));
  } catch (error) {
    console.error("Failed to fetch sections", error);
  }
};
