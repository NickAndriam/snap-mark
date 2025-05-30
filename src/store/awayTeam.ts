import { create } from "zustand";

type AwayTeamTypes = {
  name: string;
  score: number;
  fouls: number;
  setName: (name: string) => void;
  setScore: (score: number) => void;
  setFouls: (fouls: number) => void;
  resetScore: () => void;
  resetFouls: () => void;
};

export const useAwayTeamStore = create<AwayTeamTypes>((set) => ({
  name: "Jaguar",
  score: 0,
  fouls: 0,
  setName: (name: string) => set({ name }),
  setScore: (score: number) => set({ score }),
  setFouls: (fouls: number) => set({ fouls }),
  resetScore: () => set({ score: 0 }),
  resetFouls: () => set({ fouls: 0 }),
}));
