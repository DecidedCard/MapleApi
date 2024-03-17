import axios, { Axios, InternalAxiosRequestConfig } from "axios";

const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  // 리퀘스트를 보낼 때 api key가 무조건 들어가게 세팅 했습니다.
  config.headers["x-nxopen-api-key"] = process.env.NEXT_PUBLIC_API_KEY2;
  return config;
};

const NexonApi: Axios = axios.create({
  baseURL: "https://open.api.nexon.com",
});

NexonApi.interceptors.request.use(onRequest);

export default NexonApi;
