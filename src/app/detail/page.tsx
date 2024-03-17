"use client";

import StatNavigation from "@/components/DetailComponents/StatNavigation";
import UserBasicInfo from "@/components/DetailComponents/UserBasicInfo";
import { userNameSessionStorageKey } from "@/hook/useHomeInputForm";
import useUserInfoStore from "@/store/userImfoStore";

const Detail = () => {
  const { userInfo, setInfo } = useUserInfoStore();

  if (!userInfo && typeof window !== "undefined") {
    const userNameCheck = sessionStorage.getItem(userNameSessionStorageKey);
    const userInfoCheck = JSON.parse(sessionStorage.getItem(userNameCheck!)!);
    if (userInfoCheck) {
      setInfo(userInfoCheck);
    }
  }

  if (!userInfo) {
    return <>로딩중입니다.</>;
  }

  const { characterBasicInfo } = userInfo;

  return (
    <div className="flex justify-center gap-20 mt-20">
      <UserBasicInfo characterBasicInfo={characterBasicInfo} />
      <div>
        <StatNavigation userInfo={userInfo} />
      </div>
    </div>
  );
};

export default Detail;
