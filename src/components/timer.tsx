import { useTimer } from "~/hooks/useTimer";
import TimeControls from "./timeControls";
import { useStore } from "~/store";
import { useEffect, useState } from "react";
import React from "react";
import { sortMap } from "~/utils/sorting";

export default function Timer() {
  const { time, start, pause, status } = useTimer();

  const seconds = useStore((state) => state.seconds);

  useEffect(() => {
    if (time % seconds === 0) {
      console.log("tick");
    }
  }, [seconds, time]);

  return (
    <>
      <div className="flex w-full items-center">
        <div className="h-32 w-full overflow-y-scroll bg-black p-8 text-left font-bold text-green-700"></div>
      </div>
      <TimeControls pause={pause} start={start} status={status} />
    </>
  );
}
