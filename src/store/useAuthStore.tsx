import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  user: any;
  isLoading: boolean;
  isError: null | string;
  login: (user: any) => void;
  logout: () => void;
  setUser: (user: any) => void;
  setIsLoading: (isLoading: boolean) => void;
  setIsError: (error: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  isLoading: false,
  isError: null,
  login: (user) => {
    set({ isAuthenticated: true, user });
  },
  logout: () => set({ isAuthenticated: false, user: null }),
  setUser: (user) => set({ user }),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  setIsError: (error: string) => set({ isError: error }),
}));
