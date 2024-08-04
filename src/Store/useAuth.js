import { create } from "zustand";

export const useAuth = create((set) => ({
  isAuth: false,
  login: () => set({ isAuth: true }),
  logout: () => set({ isAuth: false })
}))
