import { create } from "zustand";

// Define the shape of the state
export interface IState {
  seconds: number;
  numbers: bigint[];
  frequencyMap: Record<string, bigint>;
}

// Define the type of the actions that can be performed on the state
export type IAction = {
  setSeconds: (seconds: IState["seconds"]) => void;
  addNumber: (number: bigint) => void;
};

// Export a custom hook called `useStore`
export const useStore = create<IState & IAction>()((set) => ({
  // Initial state properties
  seconds: 10, // Number of seconds
  numbers: [], // Array of numbers
  frequencyMap: {}, // Frequency map of numbers

  // cache the fibonacci array for performance

  setSeconds: (seconds: number) => set(() => ({ seconds: seconds })),

  addNumber: (number: bigint) =>
    set((state: IState) => {
      // Increment the count for the given number in the frequency map
      const frequencyMap = { ...state.frequencyMap };
      frequencyMap[Number(number)] =
        BigInt(frequencyMap[Number(number)] ?? 0) + BigInt(1);

      return {
        frequencyMap,
        // Update the numbers array by copying existing entries and adding the new number
        numbers: [...state.numbers, number],
      };
    }),
}));
