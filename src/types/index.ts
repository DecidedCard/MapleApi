import { AxiosRequestConfig, AxiosResponseHeaders } from "axios";
import { FinalStat } from "./finalStatType";
import { CheckItem } from "./itemType";
import { Unionraider } from "./unionRaiderType";
import { Skill } from "./skillType";

export interface UserNameStoreType {
  userName: string | null;
  setName: (arg: string | null) => void;
}
export interface AxiosResponse<T = any, D = any> {
  status: number;
  data: T;
  statusText: string;
  headers: AxiosResponseHeaders;
  config: AxiosRequestConfig<D>;
}

export interface CheckOcid {
  ocid: string;
}

export interface CheckBasic {
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

export interface CheckStat {
  final_stat: FinalStat;
}

export interface CheckUnion {
  date: string;
  union_artifact_exp: number;
  union_artifact_level: number;
  union_artifact_point: number;
  union_grade: string;
  union_level: number;
}

export interface CharacterInfoCheck {
  characterBasicInfo: CheckBasic;
  characterStatInfo: CheckStat;
  characterItemInfo: CheckItem;
  characterUnionInfo: CheckUnion;
  characterUnionRaiderInfo: Unionraider;
  characterSkillInfo5: Skill;
  characterSkillInfo6: Skill;
}
