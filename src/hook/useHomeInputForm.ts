import useInput from "./useInput";
import { useRouter } from "next/navigation";
import getUserInfo from "@/util/userInfo";
import useUserInfoStore from "@/store/userImfoStore";

export const userNameSessionStorageKey = "userName";

const useHomeInputForm = () => {
  const [userName, onChangeUserNameHandler, setUserName] = useInput();
  const { setInfo } = useUserInfoStore();
  const router = useRouter();

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/detail");
    setInfo(null);
    sessionStorage.setItem(userNameSessionStorageKey, userName);
    const userInfo = await getUserInfo(userName);
    setInfo(userInfo);
    sessionStorage.setItem(userName, JSON.stringify(userInfo));
    setUserName("");
  };

  return [userName, onChangeUserNameHandler, onSubmitHandler] as const;
};

export default useHomeInputForm;
