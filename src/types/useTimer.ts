// Define a type for the possible values of the 'status' property
export type Status = "RUNNING" | "PAUSED" | "STOPPED";

// Define a type for the configuration object
export type Config = {
  autostart: boolean; // Whether to automatically start the timer
  endTime: number | null; // The end time of the timer (in milliseconds)
  initialStatus: Status; // The initial status of the timer
  initialTime: number; // The initial time of the timer (in milliseconds)
  interval: number; // The interval at which the timer updates (in milliseconds)
  onTimeOver?: () => void; // Callback function when the time is over
  onTimeUpdate?: (time: number) => void; // Callback function when the time updates
  step: number; // The step size by which the time updates
};

// Define a type for the return value of the timer hook
export type ReturnValue = {
  pause: () => void; // Function to pause the timer
  start: () => void; // Function to start/restart the timer
  status: Status; // The current status of the timer
  time: number; // The current time of the timer (in milliseconds)
};

// Define an interface for the state of the timer
export interface State {
  status: Status; // The current status of the timer
  time: number; // The current time of the timer (in milliseconds)
}
