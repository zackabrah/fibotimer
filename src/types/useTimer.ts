export type Status = "RUNNING" | "PAUSED" | "STOPPED";

export type Config = {
  autostart: boolean;
  endTime: number | null;
  initialStatus: Status;
  initialTime: number;
  interval: number;
  onTimeOver?: () => void;
  onTimeUpdate?: (time: number) => void;
  step: number;
};

export type ReturnValue = {
  pause: () => void;
  reset: () => void;
  start: () => void;
  status: Status;
  time: number;
};

export interface State {
  status: Status;
  time: number;
}
