import { useCallback, useEffect, useState } from "react";
import { type Config, type ReturnValue } from "../types/useTimer";

// Define a custom hook called useTimer
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
  // Initialize state using the useState hook
  const [state, setState] = useState({
    status: initialStatus,
    time: initialTime,
  });

  const { status, time } = state;

  // Define a pause function using the useCallback hook
  const pause = useCallback(() => {
    setState((prevState) => ({ ...prevState, status: "PAUSED" }));
  }, []);

  // Define a start function using the useCallback hook
  const start = useCallback(() => {
    setState((prevState) => ({ ...prevState, status: "RUNNING" }));
  }, []);

  // Use the useEffect hook to handle autostart and initial time changes
  useEffect(() => {
    if (autostart) {
      setState((prevState) => ({ ...prevState, status: "RUNNING" }));
    }
  }, [autostart, initialTime]);

  // Use the useEffect hook to handle time updates and time over event
  useEffect(() => {
    // Call the onTimeUpdate callback if it is a function
    if (typeof onTimeUpdate === "function") {
      onTimeUpdate(time);
    }

    // Stop the timer if time is equal to endTime
    if (status !== "STOPPED" && time === endTime) {
      setState((prevState) => ({ ...prevState, status: "STOPPED" }));

      // Call the onTimeOver callback if it is a function
      if (typeof onTimeOver === "function") {
        onTimeOver();
      }
    }
  }, [time, status, endTime, onTimeUpdate, onTimeOver]);

  // Use the useEffect hook to handle the timer interval and cleanup
  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    // Start the timer if status is "RUNNING"
    if (status === "RUNNING") {
      intervalId = setInterval(() => {
        setState((prevState) => ({
          ...prevState,
          time: prevState.time + step,
        }));
      }, interval);
    }

    // Clean up the setInterval when the component unmounts or status changes
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [status, step, interval]);

  // Return the necessary values and functions for external use
  return { pause, start, status, time };
};
