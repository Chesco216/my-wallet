import { create } from "zustand";

export const useUser = create((set) => ({
  user: null,
  setUser: (user) => set({ user: user }),
  clear: () => set({ user: null })
}))
