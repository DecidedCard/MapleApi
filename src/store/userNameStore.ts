import { create } from "zustand";

import type { UserNameStore } from "@/types";

const useUserNameStore = create<UserNameStore>()((set) => ({
  userName: "",
  setName: (arg) => set({ userName: arg }),
}));

export default useUserNameStore;
