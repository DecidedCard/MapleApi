"use client";

import StatNavigation from "@/components/DetailComponents/StatNavigation";
import UserBasicInfo from "@/components/DetailComponents/UserBasicInfo";
import useUserInfoQuery from "@/hook/useUserInfoQuery";

const Detail = () => {
  const { userInformation, isLoading, isError } = useUserInfoQuery();

  if (isLoading) {
    return <>로딩중입니다.</>;
  }

  if (isError) {
    return <>에러!</>;
  }

  const { characterBasicInfo } = userInformation!;

  return (
    <div className="flex justify-center gap-20 mt-20">
      <UserBasicInfo characterBasicInfo={characterBasicInfo} />
      <div>
        <StatNavigation userInformation={userInformation!} />
      </div>
    </div>
  );
};

export default Detail;
