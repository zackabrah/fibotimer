import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { generateFibonacciArr } from "~/utils/fibonacci";

// Define the shape of the state
export interface IState {
  seconds: number;
  numbers: number[];
  frequencyMap: Record<number, number>;
  sortedFrequencyMap: [string, number][]; // Array of [number, count] tuples
  appState: AppState;
  fibArray: number[];
}

// Define the possible states of the application
export enum AppState {
  PENDING = "PENDING", // waiting for seconds input
  READY = "READY", // waiting for first number input
  RUNNING = "RUNNING", // got first number input, timer started
  PAUSED = "PAUSED", // got pause input, timer paused
}

// Define the type of the state
export type TAppState = keyof typeof AppState;

// Define the type of the actions that can be performed on the state
export type IAction = {
  setSeconds: (seconds: IState["seconds"]) => void;
  addNumber: (number: number) => void;
};

// Export a custom hook called `useStore`
export const useStore = create<IState & IAction>()(
  // Use the `immer` library to enable immutable updates to the state
  devtools(
    immer((set) => ({
      // Initial state properties
      seconds: 0, // Number of seconds
      numbers: [], // Array of numbers
      frequencyMap: {}, // Frequency map of numbers
      sortedFrequencyMap: [], // Sorted frequency map of numbers
      appState: AppState.PENDING, // Application state

      // cache the fibonacci array for performance
      fibArray: generateFibonacciArr(1000),

      // Action function to set the number of seconds and update the app state
      setSeconds: (seconds: number) =>
        set(() => ({ seconds: seconds, appState: AppState.READY })),

      // Action function to add a number to the state
      addNumber: (number: number) =>
        set((state: IState) => {
          // Increment the count for the given number in the frequency map
          const frequencyMap = { ...state.frequencyMap };
          frequencyMap[number] = (frequencyMap[number] ?? 0) + 1;

          return {
            frequencyMap,
            // Update the numbers array by copying existing entries and adding the new number
            numbers: [...state.numbers, number],
            // Update the app state to RUNNING
            appState: AppState.RUNNING,
          };
        }),
    })),
  ),
);
