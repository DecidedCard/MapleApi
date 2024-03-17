import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";

import type { CheckBasic } from "@/types";

const UserBasicInfo = ({
  characterBasicInfo,
}: {
  characterBasicInfo: CheckBasic;
}) => {
  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[300px] max-h-[200px]"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              height={200}
              src={characterBasicInfo.character_image}
              width={100}
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-foreground/90">
                  <label>닉네임: </label>
                  {characterBasicInfo.character_name}
                </h3>
                <p className="text-small text-foreground/80">
                  <label>직업: </label>
                  {characterBasicInfo.character_class}
                </p>
                <h1 className="text-large font-medium mt-2">
                  <label>레벨: </label>
                  {characterBasicInfo.character_level}
                </h1>
              </div>
            </div>
            <div className="flex flex-col mt-3 gap-1">
              <p className="text-small">
                <label>길드: </label>
                {characterBasicInfo.character_guild_name}
              </p>
              <p className="text-small text-foreground/50">
                <label>서버: </label>
                {characterBasicInfo.world_name}
              </p>
              <p className="text-small text-foreground/50">
                <label>경험치: </label>
                {characterBasicInfo.character_exp_rate}%
              </p>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default UserBasicInfo;
