import { PauseIcon, PlayIcon } from "@heroicons/react/20/solid";
import Toastify from "toastify-js";

interface ITimeCardProps {
  time: number;
  step: number;
  children: React.ReactNode;
  pause: () => void;
  resume: () => void;
  status: string;
}

export default function TimeCard({
  time,
  children,
  pause,
  resume,
  status,
}: ITimeCardProps) {
  return (
    <div className="col-span-1 mb-4  rounded-lg bg-white shadow">
      <div className="py-2x flex items-center justify-between rounded-t-lg bg-indigo-500 px-4">
        <h4 className="font-bold text-white">Frequency Map</h4>
        <div className="flex items-center justify-center">
          <h4 className="font-bold text-white">Time remaining until reorder</h4>
          <div className="my-2 ml-2 flex h-8  w-8 flex-shrink-0 grid-cols-2 items-center justify-center rounded-full bg-indigo-200 font-bold text-indigo-800">
            {time}
          </div>
        </div>
      </div>

      <div className="grid space-x-6 p-6">
        <div className="col-span-10 flex flex-wrap items-center">
          {children}
        </div>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-indigo-700">
          <div className="flex w-0 flex-1 border-r-2">
            <button
              onClick={() => {
                Toastify({
                  text: "Paused",
                  duration: 2000,
                  gravity: "top",
                  position: "right",
                }).showToast();
                pause();
              }}
              className={`relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent bg-indigo-500 py-4 text-sm font-semibold text-white  hover:bg-indigo-800 ${
                status === "PAUSED" ? "bg-indigo-800" : ""
              }`}
            >
              <PauseIcon className="h-5 w-5 text-white" aria-hidden="true" />
              Pause
            </button>
          </div>
          <div className="-ml-px flex w-0 flex-1">
            <button
              onClick={() => {
                Toastify({
                  text: "Resuming",
                  duration: 2000,
                  gravity: "top",
                  position: "right",
                }).showToast();
                resume();
              }}
              className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent bg-indigo-500 py-4 text-sm font-semibold text-white hover:bg-indigo-800"
            >
              <PlayIcon className="h-5 w-5 text-white" aria-hidden="true" />
              Play
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
