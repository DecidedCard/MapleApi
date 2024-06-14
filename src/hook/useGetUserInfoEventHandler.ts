import useUserInfoStore from "@/store/userImfoStore";

import { SESSIONSTORAGE_KEY } from "@/util/sessionStorrageKey";
import getUserInfo from "@/util/userInfo";
import { useRouter } from "next/navigation";

const useGetUserInfoEventHandler = () => {
  const { setInfo } = useUserInfoStore();
  const router = useRouter();

  const onClickGetUserInfoHandler = async (userName: string) => {
    setInfo(null);
    sessionStorage.setItem(SESSIONSTORAGE_KEY.userName, userName);
    const userInfo = await getUserInfo(userName);
    setInfo(userInfo);
    sessionStorage.setItem(userName, JSON.stringify(userInfo));
    router.push("/detail");
  };

  return { onClickGetUserInfoHandler };
};

export default useGetUserInfoEventHandler;
