import axios from "axios";
import { Node_API_URL } from "../constants/Server.ts";
import { ContentType } from "../constants/Server.ts";

const api = axios.create({
  baseURL: Node_API_URL,
  headers: {
    "Content-Type": ContentType.Json,
  },
});

api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const refreshAPI = axios.create({
  baseURL: "http://localhost:5500/api/v1/auth",
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const response = await refreshAPI.post("/refresh-access-token");
        const newAccessToken = response.data.accessToken;
        sessionStorage.setItem("accessToken", newAccessToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return api(originalRequest);
      } catch (err) {
        sessionStorage.removeItem("accessToken");
        console.log("err:", err);
        window.location.href = "/";
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
