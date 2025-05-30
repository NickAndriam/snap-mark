import { create } from "zustand";

type ActionProps = {
  openSettings: boolean;
  setOpenSettings: (openSettings: boolean) => void;
};

export const useActions = create<ActionProps>((set) => ({
  openSettings: false,
  setOpenSettings: (openSettings) => set({ openSettings }),
}));
