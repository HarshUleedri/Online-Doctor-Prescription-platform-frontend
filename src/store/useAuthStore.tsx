import { create } from "zustand";
import { persist } from "zustand/middleware";

// interface AuthState {
//   isAuthenticated: boolean;
//   user: any;
//   isLoading: boolean;
//   isError: null | string;
//   login: (user: any) => void;
//   logout: () => void;
//   setUser: (user: any) => void;
//   setIsLoading: (isLoading: boolean) => void;
//   setIsError: (error: string) => void;
// }

interface AuthState {
  isAuthenticated: boolean;
  user: any;
  isLoading: boolean;
  isError: string | null;
  login: (user: any) => void;
  logout: () => void;
  setUser: (user: any) => void;
  setIsLoading: (isLoading: boolean) => void;
  setIsError: (error: string | null) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      isLoading: false,
      isError: null,

      login: (user) => set({ isAuthenticated: true, user }),
      logout: () => set({ isAuthenticated: false, user: null }),
      setUser: (user) => set({ user }),
      setIsLoading: (isLoading) => set({ isLoading }),
      setIsError: (error) => set({ isError: error }),
    }),
    {
      name: "auth-storage", // 🔑 key name in localStorage
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
        user: state.user,
      }), // only persist what you need
    }
  )
);

// export const useAuthStore = create<AuthState>((set) => ({
//   isAuthenticated: false,
//   user: null,
//   isLoading: false,
//   isError: null,
//   login: (user) => {
//     set({ isAuthenticated: true, user });
//   },
//   logout: () => set({ isAuthenticated: false, user: null }),
//   setUser: (user) => set({ user }),
//   setIsLoading: (isLoading: boolean) => set({ isLoading }),
//   setIsError: (error: string) => set({ isError: error }),
// }));
