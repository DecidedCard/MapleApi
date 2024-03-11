import { UserNameStoreType } from "@/types";
import { create } from "zustand";

const useUserNameStore = create<UserNameStoreType>()((set) => ({
  userName: "",
  setName: (arg) => set({ userName: arg }),
}));

export default useUserNameStore;
