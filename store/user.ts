import { create } from "zustand";

type UserStore = {
  email: string;
  name: string;
};

type UserState = {
  user: UserStore;
  setUser: (user: UserStore) => void;
  clearUser: () => void;
};

export const useUserStore = create<UserState>((set) => ({
  user: { email: "", name: "" },
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: { email: "", name: "" } }),
}));
