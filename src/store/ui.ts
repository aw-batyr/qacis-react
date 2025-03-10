import { create } from "zustand";

interface Store {
  burger: boolean;
  setBurger: (burger: boolean) => void;
}

export const useUiStore = create<Store>()((set) => ({
  burger: false,
  setBurger: (burgerState) => set({ burger: burgerState }),
}));
