import { create } from "zustand";

interface AuthStore {
  user: null;
  authenticated: boolean;
  accessToken: string | null;
  loading: boolean;
  initAuthenticate?(data?: any): Promise<void> | void;
  logOut(): void;
}

export const useAuthStore = create<AuthStore>(() => ({
  authenticated: false,
  loading: true,
  user: null,
  initAuthenticate() {},
  logOut() {},
  accessToken: null,
}));
