import axios, { Axios, InternalAxiosRequestConfig } from "axios";

const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  config.headers["x-nxopen-api-key"] = process.env.NEXT_PUBLIC_API_KEY;
  return config;
};

const NexonApi: Axios = axios.create({
  baseURL: "https://open.api.nexon.com",
});

NexonApi.interceptors.request.use(onRequest);

export default NexonApi;
