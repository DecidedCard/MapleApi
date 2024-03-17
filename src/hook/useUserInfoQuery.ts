"use client";

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
  if (!userName && typeof window !== "undefined") {
    check = sessionStorage.getItem(sessionStorageKey);
  }
  if (!check) {
    router.replace("/");
  }

  const {
    data: userInformation,
    isLoading,
    isError,
  } = useQuery({
    queryKey,
    queryFn: () => userInfo(check),
    retry: 0,
    refetchOnWindowFocus: false,
  });

  return { userInformation, isLoading, isError };
};

export default useUserInfoQuery;
