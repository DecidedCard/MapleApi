import Image from "next/image";
import ItemStatContainer from "./ItemStatContainer";

import type { CheckItem } from "@/types/itemType";

const CharacterItemInfo = ({
  characterItemInfo,
}: {
  characterItemInfo: CheckItem;
}) => {
  return (
    <div className="grid grid-cols-3">
      {characterItemInfo.item_equipment.map((item, idx) => {
        return (
          <div key={idx} className="group flex items-center m-2 text-sm">
            <Image
              src={item.item_shape_icon}
              alt="아이템 이미지 입니다."
              width={50}
              height={50}
            />
            <div className="flex flex-col justify-evenly items-center w-full h-10">
              <p>
                <label>부위: </label>
                {item.item_equipment_part}
              </p>
              <p>
                <label>장비: </label>
                {item.item_name}
              </p>
            </div>
            <span className="opacity-0 invisible group-hover:visible group-hover:opacity-100">
              <ItemStatContainer item={item} />
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default CharacterItemInfo;
