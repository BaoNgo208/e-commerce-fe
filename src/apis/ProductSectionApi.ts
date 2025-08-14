import axios from "axios";
import { Node_API_URL } from "../constants/Server.ts";
import { ContentType } from "../constants/Server.ts";

export const getAllActiveProductSection = async () => {
  return axios.get(`${Node_API_URL}/product-section/get-all-active`, {
    headers: {
      "Content-Type": ContentType.Json,
    },
  });
};

export const getAllProductSection = async () => {
  return axios.get(`${Node_API_URL}/product-section/get-all`, {
    headers: {
      "Content-Type": ContentType.Json,
    },
  });
};

export const getAllPublicActiveProductSection = async () => {
  return axios.get(`${Node_API_URL}/product-section/get-all-active`, {
    headers: {
      "Content-Type": ContentType.Json,
    },
  });
};

export const reOrderProductSection = async (
  payload: Record<string, number>
) => {
  return axios.post(
    `${Node_API_URL}/product-section/reorder-sections`,
    payload,
    {
      headers: {
        "Content-Type": ContentType.Json,
      },
    }
  );
};
