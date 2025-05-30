import { create } from "zustand";

type State = {
  period: number;
  timer: number;
  shotClock: number;
  isRunning: boolean;
  restartTimer: boolean;
  restartShotClock: boolean;
};

type Actions = {
  setPeriod: (period: number) => void;
  setTimer: (timer: number) => void;
  setShotClock: (shotClock: number) => void;
  setIsRunning: (isRunning: boolean) => void;
  setRestartTimer: (restartTimer: boolean) => void;
  setRestartShotClock: (restartShotClock: boolean) => void;
};

const defaultTimer = {
  period: 1,
  timer: 720,
  shotClock: 24,
  isRunning: false,
  restartTimer: false,
  restartShotClock: false,
};

export const useTimerStore = create<State & Actions>((set) => ({
  ...defaultTimer,
  setPeriod: (period: number) => set({ period }),
  setTimer: (timer: number) => set({ timer }),
  setShotClock: (shotClock: number) => set({ shotClock }),
  setIsRunning: (isRunning: boolean) => set({ isRunning }),
  setRestartTimer: (restartTimer: boolean) => {
    set({ restartTimer });
    setTimeout(() => {
      set({ restartTimer: false });
    });
  },
  setRestartShotClock: (restartShotClock: boolean) => {
    set({ restartShotClock });
    setTimeout(() => {
      set({ restartShotClock: false });
    });
  },
}));
