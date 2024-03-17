import Image from "next/image";

import type { Skill } from "@/types/skillType";

const CharacterSkillInfo = ({
  characterSkillInfo5,
  characterSkillInfo6,
}: {
  characterSkillInfo5: Skill;
  characterSkillInfo6: Skill;
}) => {
  return (
    <div className="text-base">
      <div className="w-[650px]">
        <section className="flex flex-col mx-3">
          <h2 className="text-center text-2xl">5차</h2>
          <div className="flex flex-wrap justify-center items-center">
            {characterSkillInfo5.character_skill.map((item, idx) => {
              return (
                <div key={idx} className="flex flex-col w-32 m-1">
                  <Image
                    src={item.skill_icon}
                    alt="스킬이미지 입니다."
                    width={50}
                    height={100}
                    className="mx-auto"
                  />
                  <p className="mt-1 text-center whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.skill_name}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
        <section className="flex flex-col mx-3">
          <h2 className="text-center text-2xl">6차</h2>
          <div className="flex flex-wrap justify-center items-center">
            {characterSkillInfo6.character_skill.map((item, idx) => {
              return (
                <div key={idx} className="flex flex-col w-32 m-1">
                  <Image
                    src={item.skill_icon}
                    alt="스킬이미지 입니다."
                    width={50}
                    height={100}
                    className="mx-auto"
                  />
                  <p className="mt-1 text-center whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.skill_name}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CharacterSkillInfo;
