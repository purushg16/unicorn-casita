import axios, { AxiosRequestConfig } from "axios";
const baseURL = "https://krishtex-server.onrender.com";

export interface FetchResponse<T> {
  data: T[];
}

export interface SinglePropertyResponse<T> {
  data: T;
}

const axiosAuthInstance = axios.create({
  baseURL: baseURL,
});

const axiosInstance = axios.create({
  baseURL: baseURL,
});

export default class APIClient<T> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  authorizationPost = (data: T) => {
    return axiosAuthInstance.post(this.endpoint, data).then((res) => {
      localStorage.setItem("token", res.data.token);
      axiosInstance.defaults.headers.common["Authorization"] = res.data.token;
      return res;
    });
  };

  getRequest = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, {
        ...config,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => res.data)
      .catch((error) => {
        throw error;
      });
  };

  getSingleItem = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<SinglePropertyResponse<T>>(this.endpoint, {
        ...config,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => res.data)
      .catch((error) => {
        console.error("Get Request error:", error);
        throw error;
      });
  };

  postRequest = (data: T) =>
    axiosInstance
      .post(this.endpoint, data, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        return res;
      });
}
