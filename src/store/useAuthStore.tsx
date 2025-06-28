import useUserdata from "@/hooks/useUserdata";
import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  user: any;
  login: (user: any) => void;
  logout: () => void;
  setUser: (user: any) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: (user) => {
    set({ isAuthenticated: true, user });
  },
  logout: () => set({ isAuthenticated: false, user: null }),
  setUser: (user) => set({ user }),
}));
