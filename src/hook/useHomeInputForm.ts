import { useRouter } from "next/navigation";
import useInput from "./useInput";
import getUserInfo from "@/util/userInfo";
import useUserInfoStore from "@/store/userImfoStore";

export const userNameSessionStorageKey = "userName";

const useHomeInputForm = () => {
  const [userName, onChangeUserNameHandler, setUserName] = useInput();
  const { setInfo } = useUserInfoStore();
  const router = useRouter();

  // sessionStorage를 활용해서 새로고침을 해결했습니다. 그전에는 react-query를 사용했지만 저장할때마다 데이터를 새로 불러와서 하루 횟수를 금방 채워버려서 어쩔 수 없는 선택이었습니다.
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
