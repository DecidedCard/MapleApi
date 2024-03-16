import Image from "next/image";

import type { ItemEquipment } from "@/types/itemEquipmentType";

const ItemStatContainer = ({ item }: { item: ItemEquipment }) => {
  const itemTotalOptionValueArr = Object.values(item.item_total_option);
  const itemTotalOptionKeyArr = Object.keys(item.item_total_option);

  return (
    <div className="absolute left-60 top-0 z-50 flex justify-evenly items-center w-72 h-72 m-1 bg-slate-950 bg-opacity-80">
      <Image
        src={item.item_shape_icon}
        alt="장비 이미지 입니다."
        width={50}
        height={50}
      />
      {item.starforce !== "0" ? (
        <>
          <p>
            <label>스타포스: </label>
            {item.starforce}
          </p>
          <section>
            <label>최종옵션</label>
            {itemTotalOptionValueArr.map((e, idx) => {
              if (Number(e) === 0) {
                return;
              } else {
                return (
                  <p key={idx}>
                    <label>{itemTotalOptionKeyArr[idx]}: </label>
                    {e}
                  </p>
                );
              }
            })}
          </section>
        </>
      ) : (
        false
      )}
    </div>
  );
};

export default ItemStatContainer;
