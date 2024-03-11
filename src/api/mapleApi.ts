import {
  CheckBasicType,
  CheckOcidType,
  CheckStatType,
  CheckUnionType,
} from "@/types";
import { CheckItemType } from "@/types/itemType";
import { SkillType } from "@/types/skillType";
import { UnionraiderType } from "@/types/unionRaiderType";
import { error } from "console";

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

const url = "https://open.api.nexon.com";

export const checkOcid = async (characterName: string | null) => {
  const response = await fetch(
    `${url}/maplestory/v1/id?character_name=${characterName}`,
    {
      cache: "no-cache",
      headers: {
        "x-nxopen-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
      },
    }
  );
  const result: CheckOcidType = await response.json();
  return result;
};

export const checkbasic = async (ocid: string) => {
  const response = await fetch(
    `${url}/maplestory/v1/character/basic?ocid=${ocid}&date=${checkDate}`,
    {
      cache: "no-cache",
      headers: {
        "x-nxopen-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
      },
    }
  );
  const result: CheckBasicType = await response.json();
  return result;
};

export const checkStat = async (ocid: string) => {
  const response = await fetch(
    `${url}/maplestory/v1/character/stat?ocid=${ocid}&date=${checkDate}`,
    {
      cache: "no-cache",
      headers: {
        "x-nxopen-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
      },
    }
  );
  const result: CheckStatType = await response.json();
  return result;
};

export const checkItem = async (ocid: string) => {
  const response = await fetch(
    `${url}/maplestory/v1/character/item-equipment?ocid=${ocid}&date=${checkDate}`,
    {
      cache: "no-cache",
      headers: {
        "x-nxopen-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
      },
    }
  );
  const result: CheckItemType = await response.json();
  return result;
};

export const checkUnion = async (ocid: string) => {
  const response = await fetch(
    `${url}/maplestory/v1/user/union?ocid=${ocid}&date=${checkDate}`,
    {
      cache: "no-cache",
      headers: {
        "x-nxopen-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
      },
    }
  );
  const result: CheckUnionType = await response.json();
  return result;
};

export const checkUnionRaider = async (ocid: string) => {
  const response = await fetch(
    `${url}/maplestory/v1/user/union-raider?ocid=${ocid}&date=${checkDate}`,
    {
      cache: "no-cache",
      headers: {
        "x-nxopen-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
      },
    }
  );
  const result: UnionraiderType = await response.json();
  return result;
};

export const checkSkill5 = async (ocid: string) => {
  const response = await fetch(
    `${url}/maplestory/v1/character/skill?ocid=${ocid}&date=${checkDate}&character_skill_grade=5`,
    {
      cache: "no-cache",
      headers: {
        "x-nxopen-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
      },
    }
  );
  const result: SkillType = await response.json();
  return result;
};

export const checkSkill6 = async (ocid: string) => {
  const response = await fetch(
    `${url}/maplestory/v1/character/skill?ocid=${ocid}&date=${checkDate}&character_skill_grade=6`,
    {
      cache: "no-cache",
      headers: {
        "x-nxopen-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
      },
    }
  );
  const result: SkillType = await response.json();
  return result;
};
