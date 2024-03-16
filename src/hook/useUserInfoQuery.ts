import useUserNameStore from "@/store/userNameStore";
import userInfo from "@/util/userInfo";
import { useQuery } from "@tanstack/react-query";
import { sessionStorageKey } from "./useHomeInputForm";
import { useRouter } from "next/navigation";

const queryKey = ["userInfo"];

const useUserInfoQuery = () => {
  const { userName } = useUserNameStore();
  const router = useRouter();
  let check = userName;
  if (!userName) {
    check = sessionStorage.getItem(sessionStorageKey);
  }
  if (!check) {
    router.replace("/");
  }

  const {
    data: userInformation,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey,
    queryFn: () => userInfo(check),
    retry: 0,
    refetchOnWindowFocus: false,
  });

  if (isLoading || !isSuccess) {
    return { isLoading: true } as const;
  }

  return { userInformation, isLoading: false };
};

export default useUserInfoQuery;
