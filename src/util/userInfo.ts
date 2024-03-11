import {
  CharacterInfoCheckType,
  CheckBasicType,
  CheckOcidType,
  CheckStatType,
  CheckUnionType,
} from "@/types";
import * as API from "@/api/mapleApi";
import { CheckItemType } from "@/types/itemType";
import { UnionraiderType } from "@/types/unionRaiderType";
import { SkillType } from "@/types/skillType";

const userInfo = async (
  characterInput: string | null
): Promise<CharacterInfoCheckType> => {
  try {
    const { ocid } = await API.checkOcid(characterInput);
    const response = await Promise.all([
      API.checkbasic(ocid),
      API.checkStat(ocid),
      API.checkItem(ocid),
      API.checkUnion(ocid),
      API.checkUnionRaider(ocid),
      API.checkSkill5(ocid),
      API.checkSkill6(ocid),
    ]);

    const characterBasicInfo = response[0];
    const characterStatInfo = response[1];
    const characterItemInfo = response[2];
    const characterUnionInfo = response[3];
    const characterUnionRaiderInfo = response[4];
    const characterSkillInfo5 = response[5];
    const characterSkillInfo6 = response[6];

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

export default userInfo;
