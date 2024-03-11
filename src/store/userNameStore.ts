import { UserNameType } from "@/types";
import { create } from "zustand";

const useUserNameStore = create<UserNameType>()((set) => ({
  userName: "",
  setName: (arg) => set({ userName: arg }),
}));

export default useUserNameStore;
