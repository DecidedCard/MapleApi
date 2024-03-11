"use client";

import StatNavigation from "@/components/DetailComponents/StatNavigation";
import UserBasicInfo from "@/components/DetailComponents/UserBasicInfo";
import UserItemInfo from "@/components/DetailComponents/UserItemInfo";
import UserSkillInfo from "@/components/DetailComponents/UserSkillInfo";
import UserStatInfo from "@/components/DetailComponents/UserStatInfo";
import UserUnionInfo from "@/components/DetailComponents/UserUnionInfo";
import useUserNameStore from "@/store/userNameStore";
import { CharacterInfoCheckType } from "@/types";
import userInfo from "@/util/userInfo";
import React, { useEffect, useState } from "react";

const Detail = ({ params }: { params: string }) => {
  const { userName } = useUserNameStore();
  const [result, setResult] = useState<CharacterInfoCheckType>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await userInfo(userName);
      setResult(response);
    };
    fetchData();
  }, [userName]);

  console.log(result);
  if (!result) {
    return <>로딩중입니다.</>;
  }

  const {
    characterBasicInfo,
    characterStatInfo,
    characterItemInfo,
    characterUnionInfo,
    characterUnionRaiderInfo,
    characterSkillInfo5,
    characterSkillInfo6,
  } = result as CharacterInfoCheckType;
  return (
    <div>
      {" "}
      <UserBasicInfo characterBasicInfo={characterBasicInfo} />
      <div>
        <StatNavigation />
        {params === "stat" ? (
          <UserStatInfo characterStatInfo={characterStatInfo} />
        ) : (
          false
        )}
        {params === "union" ? (
          <UserUnionInfo
            characterUnionInfo={characterUnionInfo}
            characterUnionRaiderInfo={characterUnionRaiderInfo}
          />
        ) : (
          false
        )}
        {params === "item" ? (
          <UserItemInfo characterItemInfo={characterItemInfo} />
        ) : (
          false
        )}
        {params === "skill" ? (
          <UserSkillInfo
            characterSkillInfo5={characterSkillInfo5}
            characterSkillInfo6={characterSkillInfo6}
          />
        ) : (
          false
        )}
      </div>
    </div>
  );
};

export default Detail;
