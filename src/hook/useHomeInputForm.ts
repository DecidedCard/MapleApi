import useUserNameStore from "@/store/userNameStore";
import useInput from "./useInput";
import { useRouter } from "next/navigation";

export const sessionStorageKey = "userName";

const useHomeInputForm = () => {
  const [userName, onChangeUserNameHandler, setUserName] = useInput();
  const { setName } = useUserNameStore();
  const router = useRouter();

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName(userName);
    setUserName("");
    sessionStorage.setItem(sessionStorageKey, userName);
    router.push("/detail/stat");
  };

  return [userName, onChangeUserNameHandler, onSubmitHandler] as const;
};

export default useHomeInputForm;
