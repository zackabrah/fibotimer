import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface IState {
  seconds: number;
  numbers: number[];
  appState: AppState;
}

export enum AppState {
  PENDING = "PENDING", // waiting for seconds input
  READY = "READY", // waiting for first number input
  RUNNING = "RUNNING", // got first number input, timer started
  PAUSED = "PAUSED", // got pause input, timer paused
}

export type TAppState = keyof typeof AppState;

export type IAction = {
  setSeconds: (seconds: IState["seconds"]) => void;
  addNumber: (number: number) => void;
};

export const useStore = create<IState & IAction>()(
  devtools(
    (set) => ({
      seconds: 0,
      numbers: [],
      appState: AppState.PENDING,
      setSeconds: (seconds: number) =>
        set(() => ({ seconds: seconds, appState: AppState.READY })),
      addNumber: (number: number) =>
        set((state) => {
          return {
            numbers: [...state.numbers, number],
            appState: AppState.RUNNING,
          };
        }),
    }),
    { name: "store" },
  ),
);
