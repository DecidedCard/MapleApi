import { AxiosRequestConfig, AxiosResponse } from "axios";
import NexonApi from "./AxiosNexon";

let today = new Date();
let yesterday = new Date(today.setDate(today.getDate() - 1));

const checkDate =
  yesterday.getFullYear() +
  "-" +
  (yesterday.getMonth() + 1 < 10
    ? "0" + (yesterday.getMonth() + 1)
    : yesterday.getMonth() + 1) +
  "-" +
  (yesterday.getDate() < 10 ? "0" + yesterday.getDate() : yesterday.getDate());

export const checkOcid = async <T>(
  characterName: string | null,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  try {
    const response = await NexonApi.get(
      `/maplestory/v1/id?character_name=${characterName}`,
      config
    );
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const checkbasic = async <T>(
  ocid: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  try {
    const response = await NexonApi.get(
      `/maplestory/v1/character/basic?ocid=${ocid}&date=${checkDate}`,
      config
    );
    return response;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

export const checkStat = async <T>(
  ocid: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  try {
    const res = await NexonApi.get(
      `/maplestory/v1/character/stat?ocid=${ocid}&date=${checkDate}`,
      config
    );
    return res;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

export const checkItem = async <T>(
  ocid: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  try {
    const res = await NexonApi.get(
      `/maplestory/v1/character/item-equipment?ocid=${ocid}&date=${checkDate}`,
      config
    );
    return res;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

export const checkUnion = async <T>(
  ocid: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  try {
    const res = await NexonApi.get(
      `/maplestory/v1/user/union?ocid=${ocid}&date=${checkDate}`,
      config
    );
    return res;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

export const checkUnionRaider = async <T>(
  ocid: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  try {
    const res = await NexonApi.get(
      `/maplestory/v1/user/union-raider?ocid=${ocid}&date=${checkDate}`,
      config
    );
    return res;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

export const checkSkill5 = async <T>(
  ocid: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  try {
    const res = await NexonApi.get(
      `/maplestory/v1/character/skill?ocid=${ocid}&date=${checkDate}&character_skill_grade=5`,
      config
    );
    return res;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

export const checkSkill6 = async <T>(
  ocid: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  try {
    const res = await NexonApi.get(
      `/maplestory/v1/character/skill?ocid=${ocid}&date=${checkDate}&character_skill_grade=6`,
      config
    );
    return res;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};
