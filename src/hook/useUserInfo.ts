import useUserNameStore from "@/store/userNameStore";
import userInfo from "@/util/userInfo";
import { useRouter } from "next/navigation";

export const QueryKey = ["characterInfo"];

const useUserInfo = async () => {
  const { userName } = useUserNameStore();
  const router = useRouter();
  let check = userName;
  if (!userName) {
    check = sessionStorage.getItem("characterName");
  }
  if (!check) {
    router.replace("/");
  }

  const response = await userInfo(check);

  return response;
};

export default useUserInfo;
