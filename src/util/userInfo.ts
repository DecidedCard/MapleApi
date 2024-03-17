import * as API from "../api/mapleApi";

import type { CheckItem } from "@/types/itemType";
import type { Unionraider } from "@/types/unionRaiderType";
import type { Skill } from "@/types/skillType";
import type {
  CheckBasic,
  CheckOcid,
  CheckStat,
  CheckUnion,
  userInfoCheck,
} from "@/types";

const getUserInfo = async (
  characterInput: string | null
): Promise<userInfoCheck> => {
  try {
    const { data } = await API.checkOcid<CheckOcid>(characterInput);
    const { ocid } = data;
    const response = await Promise.all([
      API.CheckBasic<CheckBasic>(ocid),
      API.checkStat<CheckStat>(ocid),
      API.checkItem<CheckItem>(ocid),
      API.checkUnion<CheckUnion>(ocid),
      API.checkUnionRaider<Unionraider>(ocid),
      API.checkSkill5<Skill>(ocid),
      API.checkSkill6<Skill>(ocid),
    ]);
    const { data: characterBasicInfo } = response[0];
    const { data: characterStatInfo } = response[1];
    const { data: characterItemInfo } = response[2];
    const { data: characterUnionInfo } = response[3];
    const { data: characterUnionRaiderInfo } = response[4];
    const { data: characterSkillInfo5 } = response[5];
    const { data: characterSkillInfo6 } = response[6];

    return {
      characterBasicInfo,
      characterStatInfo,
      characterItemInfo,
      characterUnionInfo,
      characterUnionRaiderInfo,
      characterSkillInfo5,
      characterSkillInfo6,
    };
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

export default getUserInfo;
