import React from "react";
import UserStatInfo from "./UserStatInfo";
import UserUnionInfo from "./UserUnionInfo";
import UserItemInfo from "./UserItemInfo";
import UserSkillInfo from "./UserSkillInfo";
import { Tab, Tabs } from "@nextui-org/react";

import type { userInfoCheck } from "@/types";

const StatNavigation = ({ userInfo }: { userInfo: userInfoCheck }) => {
  const {
    characterStatInfo,
    characterItemInfo,
    characterUnionInfo,
    characterUnionRaiderInfo,
    characterSkillInfo5,
    characterSkillInfo6,
  } = userInfo;

  return (
    <div className="flex flex-col items-center">
      <Tabs aria-label="Options">
        <Tab key="stat" title="상세 스탯">
          <UserStatInfo characterStatInfo={characterStatInfo} />
        </Tab>
        <Tab key="union" title="유니온">
          <UserUnionInfo
            characterUnionInfo={characterUnionInfo}
            characterUnionRaiderInfo={characterUnionRaiderInfo}
          />
        </Tab>
        <Tab key="item" title="장착 장비">
          <UserItemInfo characterItemInfo={characterItemInfo} />
        </Tab>
        <Tab key="skill" title="스킬">
          <UserSkillInfo
            characterSkillInfo5={characterSkillInfo5}
            characterSkillInfo6={characterSkillInfo6}
          />
        </Tab>
      </Tabs>
    </div>
  );
};

export default StatNavigation;
