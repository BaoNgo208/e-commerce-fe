import api from "./ApiClient.ts";

export const getAllActiveProductSection = async () => {
  return api.get("/product-section/get-all-active");
};

export const getAllProductSection = async () => {
  return api.get("/product-section/get-all");
};

export const getAllPublicActiveProductSection = async () => {
  return api.get("/product-section/public/get-all-active");
};

export const reOrderProductSection = async (
  payload: Record<string, number>
) => {
  return api.post("/product-section/reorder-sections", payload);
};
