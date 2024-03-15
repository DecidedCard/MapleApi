import { CheckBasicType } from "@/types";
import Image from "next/image";

const UserBasicInfo = ({
  characterBasicInfo,
}: {
  characterBasicInfo: CheckBasicType;
}) => {
  return (
    <div>
      <div>
        <Image
          src={characterBasicInfo.character_image}
          alt="캐릭터 이미지입니다."
          width={100}
          height={100}
        />
      </div>
      <div>
        <h3>
          <label>직업: </label>
          {characterBasicInfo.character_class}
        </h3>
        <h3>
          <label>닉네임: </label>
          {characterBasicInfo.character_name}
        </h3>
        <p>
          <label>레벨: </label>
          {characterBasicInfo.character_level}
        </p>
        <p>
          <label>길드: </label>
          {characterBasicInfo.character_guild_name}
        </p>
        <p>
          <label>서버: </label>
          {characterBasicInfo.world_name}
        </p>
        <p>
          <label>경험치: </label>
          {characterBasicInfo.character_exp_rate}%
        </p>
      </div>
    </div>
  );
};

export default UserBasicInfo;
