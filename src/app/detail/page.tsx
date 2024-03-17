"use client";

import StatNavigation from "@/components/DetailComponents/StatNavigation";
import UserBasicInfo from "@/components/DetailComponents/UserBasicInfo";
import Loading from "@/components/Loading";
import { userNameSessionStorageKey } from "@/hook/useHomeInputForm";
import useUserInfoStore from "@/store/userImfoStore";

const Detail = () => {
  // user의 정보를 가져오는 store입니다.
  const { userInfo, setInfo } = useUserInfoStore();

  // 새로고침시 데이터를 가져오는 로직입니다.
  if (!userInfo && typeof window !== "undefined") {
    const userNameCheck = sessionStorage.getItem(userNameSessionStorageKey);
    const userInfoCheck = JSON.parse(sessionStorage.getItem(userNameCheck!)!);
    if (userInfoCheck) {
      setInfo(userInfoCheck);
    }
  }

  // 데이터를 가져오는 중이나 아니먄 처음 검색 했을 때 로딩 중 일때 나오는 화면입니다.
  if (!userInfo) {
    return (
      <div className="flex justify-center items-center h-96">
        <Loading />
      </div>
    );
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
