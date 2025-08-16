import axios from "axios";
import { Node_API_URL } from "../constants/Server.ts";
import { ContentType } from "../constants/Server.ts";

export const signIn = async (email: string, password: string) => {
  const payload = {
    email,
    password,
  };

  return axios.post(`${Node_API_URL}/auth/sign-in`, payload, {
    headers: {
      "Content-Type": ContentType.Json,
    },
    withCredentials: true,
  });
};

export const refreshToken = async () => {};
