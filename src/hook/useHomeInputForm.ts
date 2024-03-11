import useUserNameStore from "@/store/userNameStore";
import useInput from "./useInput";
import { setRequestMeta } from "next/dist/server/request-meta";
import { useRouter } from "next/navigation";

const useHomeInputForm = () => {
  const [userName, onChangeUserNameHandler, setUserName] = useInput();
  const { setName } = useUserNameStore();
  const router = useRouter();

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName(userName);
    setUserName("");
    router.push("/detail/stat");
  };

  return [userName, onChangeUserNameHandler, onSubmitHandler] as const;
};

export default useHomeInputForm;
