import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import React from "react";
import UserStatInfo from "./UserStatInfo";
import UserUnionInfo from "./UserUnionInfo";
import UserItemInfo from "./UserItemInfo";
import UserSkillInfo from "./UserSkillInfo";

import type { CharacterInfoCheck } from "@/types";

const StatNavigation = ({
  userInformation,
}: {
  userInformation: CharacterInfoCheck;
}) => {
  const {
    characterStatInfo,
    characterItemInfo,
    characterUnionInfo,
    characterUnionRaiderInfo,
    characterSkillInfo5,
    characterSkillInfo6,
  } = userInformation;

  return (
    <div className="flex flex-col items-center">
      <Tabs aria-label="Options">
        <Tab key="stat" title="상세 스탯">
          <Card>
            <CardBody>
              <UserStatInfo characterStatInfo={characterStatInfo} />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="union" title="유니온">
          <Card>
            <CardBody>
              <UserUnionInfo
                characterUnionInfo={characterUnionInfo}
                characterUnionRaiderInfo={characterUnionRaiderInfo}
              />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="item" title="장착 장비">
          <Card>
            <CardBody>
              <UserItemInfo characterItemInfo={characterItemInfo} />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="skill" title="스킬">
          <Card>
            <CardBody>
              <UserSkillInfo
                characterSkillInfo5={characterSkillInfo5}
                characterSkillInfo6={characterSkillInfo6}
              />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export default StatNavigation;
