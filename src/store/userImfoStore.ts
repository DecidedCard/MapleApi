import { create } from "zustand";

import type { UserInfoStore } from "@/types";

const useUserInfoStore = create<UserInfoStore>()((set) => ({
  userInfo: null,
  setInfo: (arg) => set({ userInfo: arg }),
}));

export default useUserInfoStore;
