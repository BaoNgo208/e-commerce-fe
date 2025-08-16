import type { UniqueIdentifier } from "@dnd-kit/core";
import api from "./ApiClient.ts";

export const getAllProductNotInSection = async (sectionId: string) => {
  return api.get(`/product/not-in-section/${sectionId}`);
};

export const addProductsToSection = async (
  sectionId: UniqueIdentifier,
  productIds: UniqueIdentifier[]
) => {
  const payload = { sectionId, productIds };
  return api.post("/product/add-to-section", payload);
};

export const deleteProductsFromSection = async (
  sectionId: UniqueIdentifier,
  productIds: UniqueIdentifier[]
) => {
  const payload = { sectionId, productIds };
  return api.delete("/product/remove-from-section", { data: payload });
};
