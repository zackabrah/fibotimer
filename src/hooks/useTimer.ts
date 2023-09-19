import { useCallback, useEffect, useState } from "react";
import { type Config, type ReturnValue } from "../types/useTimer";
export const useTimer = ({
  autostart = true,
  endTime,
  initialStatus = "RUNNING",
  initialTime = 0,
  interval = 1000,
  onTimeOver,
  onTimeUpdate,
  step = 1,
}: Partial<Config> = {}): ReturnValue => {
  const [state, setState] = useState({
    status: initialStatus,
    time: initialTime,
  });

  const { status, time } = state;

  const pause = useCallback(() => {
    setState((prevState) => ({ ...prevState, status: "PAUSED" }));
  }, []);

  const reset = useCallback(() => {
    setState((prevState) => ({ ...prevState, time: initialTime }));
  }, [initialTime]);

  const start = useCallback(() => {
    setState((prevState) => ({ ...prevState, status: "RUNNING" }));
  }, []);

  useEffect(() => {
    if (autostart) {
      setState((prevState) => ({ ...prevState, status: "RUNNING" }));
    }
  }, [autostart, initialTime]);

  useEffect(() => {
    if (typeof onTimeUpdate === "function") {
      onTimeUpdate(time);
    }

    if (status !== "STOPPED" && time === endTime) {
      setState((prevState) => ({ ...prevState, status: "STOPPED" }));

      if (typeof onTimeOver === "function") {
        onTimeOver();
      }
    }
  }, [time, status, endTime, onTimeUpdate, onTimeOver]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (status === "RUNNING") {
      intervalId = setInterval(() => {
        setState((prevState) => ({
          ...prevState,
          time: prevState.time + step,
        }));
      }, interval);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [status, step, interval]);

  return { pause, reset, start, status, time };
};
