import { create } from "zustand";

interface AuthStore {
  collapsed: boolean;
  setCollapsed(collapsed: boolean): void;
}

export const useSidebarStore = create<AuthStore>((set) => ({
  collapsed: false,
  setCollapsed: (collapsed) => set({ collapsed }),
}));
