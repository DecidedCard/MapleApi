import { AxiosRequestConfig, AxiosResponse } from "axios";
import NexonApi from "./AxiosNexon";

// 데이터를 fetching 할 때 필수 데이터로 날짜가 필요해서 그에 맞는 날짜 설정입니다.
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

// 모든 userinfo에 대해서 검색을 ocid로 하기 때문에 제일 먼저 검색해야 되는 함수 입니다.
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

// user의 기본 정보를 가져오는 함수 입니다. 여기에 캐릭터 이미지도 들어있습니다.
export const CheckBasic = async <T>(
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

// 캐릭터의 상세스탯을 가져옵니다.
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

// 캐릭터가 장착하고 있는 아이템 및 프리셋 데이터를 가져옵니다.
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

// 메이플 주요 성장 컨텐츠인 유니온의 대한 기본적인 정보를 줍니다.
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

// 유니온 배치되어 있는 x,y좌표값과 배치되어서 받고 있는 능력치들의 데이터를 가져옵니다.
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

// 스킬 정보를 가져옵니다.
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
