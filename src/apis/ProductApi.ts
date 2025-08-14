import axios from "axios";
import { Node_API_URL } from "../constants/Server.ts";
import { ContentType } from "../constants/Server.ts";
import type { UniqueIdentifier } from "@dnd-kit/core";

export const getAllProductNotInSection = async (sectionId: string) => {
  return axios.get(`${Node_API_URL}/product/not-in-section/${sectionId}`, {
    headers: {
      "Content-Type": ContentType.Json,
    },
  });
};

export const addProductsToSection = async (
  sectionId: UniqueIdentifier,
  productIds: UniqueIdentifier[]
) => {
  const payload = {
    sectionId,
    productIds,
  };

  return axios.post(`${Node_API_URL}/product/add-to-section`, payload, {
    headers: {
      "Content-Type": ContentType.Json,
    },
  });
};

export const deleteProductsFromSection = async (
  sectionId: UniqueIdentifier,
  productIds: UniqueIdentifier[]
) => {
  const payload = { sectionId, productIds };
  return axios.delete(`${Node_API_URL}/product/remove-from-section`, {
    data: payload,
    headers: {
      "Content-Type": ContentType.Json,
    },
  });
};
