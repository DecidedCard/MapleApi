import { AxiosRequestConfig, AxiosResponseHeaders } from "axios";
import { FinalStatType } from "./finalStatType";
import { CheckItemType } from "./itemType";
import { UnionraiderType } from "./unionRaiderType";
import { SkillType } from "./skillType";

export interface UserNameStoreType {
  userName: string;
  setName: (arg: string) => void;
}
export interface AxiosResponse<T = any, D = any> {
  status: number;
  data: T;
  statusText: string;
  headers: AxiosResponseHeaders;
  config: AxiosRequestConfig<D>;
}

export interface CheckOcidType {
  ocid: string;
}

export interface CheckBasicType {
  character_class: string;
  character_class_level: string;
  character_exp: number;
  character_exp_rate: string;
  character_gender: string;
  character_guild_name: string;
  character_image: string;
  character_level: number;
  character_name: string;
  date: string;
  world_name: string;
}

export interface CheckStatType {
  final_stat: FinalStatType;
}

export interface CheckUnionType {
  date: string;
  union_artifact_exp: number;
  union_artifact_level: number;
  union_artifact_point: number;
  union_grade: string;
  union_level: number;
}

export interface CharacterInfoCheckType {
  characterBasicInfo: CheckBasicType;
  characterStatInfo: CheckStatType;
  characterItemInfo: CheckItemType;
  characterUnionInfo: CheckUnionType;
  characterUnionRaiderInfo: UnionraiderType;
  characterSkillInfo5: SkillType;
  characterSkillInfo6: SkillType;
}
