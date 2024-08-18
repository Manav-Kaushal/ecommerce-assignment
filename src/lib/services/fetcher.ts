import api, { ApiResponse } from "./api";

type HttpMethod = "get" | "post" | "put" | "delete";

interface FetcherOptions<T> {
  method: HttpMethod;
  url: string;
  data?: T;
  params?: Record<string, any>;
}

interface FetcherError {
  message: string;
}

const fetcher = async <T, R>({
  method,
  url,
  data,
  params,
}: FetcherOptions<T>): Promise<ApiResponse<R>> => {
  try {
    const response = await api.request<ApiResponse<R>>({
      method,
      url,
      data,
      params,
    });
    return response.data;
  } catch (error) {
    const axiosError = error as FetcherError;
    throw new Error(
      `Error with ${method.toUpperCase()} request to ${url}: ${
        axiosError.message
      }`
    );
  }
};

export default fetcher;
