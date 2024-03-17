import type { CheckStat } from "@/types";

// 지금은 무식하게 그냥 찾아서 넣어 놨지만 나중엔 배열로 바꿔서 필요한 데이터만 넣은 뒤 그걸로 맵을 돌려서 줄이고 싶습니다.
const CharacterStatInfo = ({
  characterStatInfo,
}: {
  characterStatInfo: CheckStat;
}) => {
  return (
    <div className="min-w-[650px] text-base">
      <div className="flex flex-col text-lg">
        <div className="flex justify-between pr-24 pl-12">
          <p>
            <label>스탯공격력: </label>
            {characterStatInfo.final_stat[0].stat_value}~
            {characterStatInfo.final_stat[1].stat_value}
          </p>
          <p>
            <label>{characterStatInfo.final_stat[42].stat_name}: </label>
            {characterStatInfo.final_stat[42].stat_value}
          </p>
        </div>
        <div className="grid grid-cols-2 justify-items-center h-20 text-base">
          <p>
            <label>{characterStatInfo.final_stat[20].stat_name}: </label>
            {characterStatInfo.final_stat[20].stat_value}
          </p>
          <p>
            <label>{characterStatInfo.final_stat[21].stat_name}: </label>
            {characterStatInfo.final_stat[21].stat_value}
          </p>
          <p>
            <label>{characterStatInfo.final_stat[16].stat_name}: </label>
            {characterStatInfo.final_stat[16].stat_value}
          </p>
          <p>
            <label>{characterStatInfo.final_stat[17].stat_name}: </label>
            {characterStatInfo.final_stat[17].stat_value}
          </p>
          <p>
            <label>{characterStatInfo.final_stat[18].stat_name}: </label>
            {characterStatInfo.final_stat[18].stat_value}
          </p>
          <p>
            <label>{characterStatInfo.final_stat[19].stat_name}: </label>
            {characterStatInfo.final_stat[19].stat_value}
          </p>
        </div>
      </div>
      <div className="flex justify-between pr-7 pl-24">
        <div>
          <p>
            <label>{characterStatInfo.final_stat[2].stat_name}: </label>
            {characterStatInfo.final_stat[2].stat_value}%
          </p>
          <p>
            <label>{characterStatInfo.final_stat[3].stat_name}: </label>
            {characterStatInfo.final_stat[3].stat_value}%
          </p>
          <p>
            <label>{characterStatInfo.final_stat[4].stat_name}: </label>
            {characterStatInfo.final_stat[4].stat_value}%
          </p>
          <p>
            <label>{characterStatInfo.final_stat[5].stat_name}: </label>
            {characterStatInfo.final_stat[5].stat_value}%
          </p>
          <p>
            <label>{characterStatInfo.final_stat[6].stat_name}: </label>
            {characterStatInfo.final_stat[6].stat_value}%
          </p>
          <p>
            <label>{characterStatInfo.final_stat[7].stat_name}: </label>
            {characterStatInfo.final_stat[7].stat_value}%
          </p>
          <p>
            <label>{characterStatInfo.final_stat[40].stat_name}: </label>
            {characterStatInfo.final_stat[40].stat_value}
          </p>
          <p>
            <label>{characterStatInfo.final_stat[41].stat_name}: </label>
            {characterStatInfo.final_stat[41].stat_value}
          </p>
        </div>
        <div>
          <p>
            <label>{characterStatInfo.final_stat[30].stat_name}: </label>
            {characterStatInfo.final_stat[30].stat_value}%
          </p>
          <p>
            <label>{characterStatInfo.final_stat[33].stat_name}: </label>
            {characterStatInfo.final_stat[33].stat_value}초
          </p>
          <p>
            <label>{characterStatInfo.final_stat[34].stat_name}: </label>
            {characterStatInfo.final_stat[34].stat_value}%
          </p>
          <p>
            <label>{characterStatInfo.final_stat[35].stat_name}: </label>
            {characterStatInfo.final_stat[35].stat_value}%
          </p>
          <p>
            <label>{characterStatInfo.final_stat[43].stat_name}: </label>
            {characterStatInfo.final_stat[43].stat_value}%
          </p>
          <p>
            <label>{characterStatInfo.final_stat[28].stat_name}: </label>
            {characterStatInfo.final_stat[28].stat_value}%
          </p>
          <p>
            <label>{characterStatInfo.final_stat[29].stat_name}: </label>
            {characterStatInfo.final_stat[29].stat_value}%
          </p>
          <p>
            <label>{characterStatInfo.final_stat[32].stat_name}: </label>
            {characterStatInfo.final_stat[32].stat_value}%
          </p>
        </div>
      </div>
      <div className="flex justify-around items-center h-7">
        <p>
          <label>{characterStatInfo.final_stat[13].stat_name}: </label>
          {characterStatInfo.final_stat[13].stat_value}
        </p>
        <p>
          <label>{characterStatInfo.final_stat[14].stat_name}: </label>
          {characterStatInfo.final_stat[14].stat_value}
        </p>
        <p>
          <label>{characterStatInfo.final_stat[15].stat_name}: </label>
          {characterStatInfo.final_stat[15].stat_value}
        </p>
      </div>
    </div>
  );
};

export default CharacterStatInfo;
