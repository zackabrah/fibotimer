import { useCallback, useEffect, useState } from "react";

import { useStore } from "~/store";
import { useTimer } from "~/hooks/useTimer";
import { sortNumberFrequencies } from "~/utils/sorting";

export default function NumberFrequencies() {
  const { time, start, pause, reset, status } = useTimer();

  const numbers = useStore((state) => state.numbers);
  const seconds = useStore((state) => state.seconds);

  const [tick, setTick] = useState<number>(0);

  //   const callback = useCallback(() => {
  //     return sortNumberFrequencies(numbers);
  //   }, [numbers]);
  useEffect(() => {
    if (time % seconds === 0) {
      console.log("tick");
      // Call your desired function here
      const sortedNumbers = sortNumberFrequencies(numbers);

      // Do something with the sortedNumbers
    }
  }, [time, seconds, numbers]);

  return (
    <div className="card text-white">
      <h5 className="card-header">Basic timer</h5>
      <div className="card-body">
        {status === "RUNNING" ? (
          <span>Running...</span>
        ) : (
          <button className="btn btn-primary" onClick={start}>
            Start
          </button>
        )}
        <button className="btn btn-primary" onClick={pause}>
          Pause
        </button>
        <button className="btn btn-primary" onClick={reset}>
          Reset
        </button>
      </div>
      <div className="card-footer">
        Elapsed time: <strong>{time}</strong>
        {time % seconds === 0 && <div>{numbers}</div>}
      </div>
    </div>
  );
}
