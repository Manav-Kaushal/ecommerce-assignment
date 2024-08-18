import axios, { AxiosInstance } from "axios";

export interface ApiResponse<T> {
  data: T;
}

const api: AxiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 10000,
});

export default api;
