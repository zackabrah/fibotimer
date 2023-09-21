import Toastify from "toastify-js";
import { useState } from "react";
import { useTimer } from "use-timer";

import Footer from "~/components/footer";
import InputGroup from "~/components/inputGroup";
import TimeCard from "~/components/timeCard";
import { useStore } from "~/store";
import { sortMap } from "~/utils/sorting";

import { FIB_ARRAY_1000, gettingFibbyWidit } from "~/constants";

// just for fun
const colors = [
  "bg-red-500",
  "bg-yellow-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-indigo-500",
  "bg-purple-500",
  "bg-pink-500",
];

export default function Output() {
  // local state
  const [numberList, setNumberList] = useState<[string, bigint][]>([]);

  // store
  const seconds = useStore((state) => state.seconds);
  const frequencyMap = useStore((state) => state.frequencyMap);
  const numbers = useStore((state) => state.numbers);

  // useTimer hook
  const { pause, reset, start, status, time } = useTimer({
    autostart: true,
    endTime: 0,
    initialTime: seconds,
    onTimeOver: () => {
      const sortedFrequencyMap = sortMap(frequencyMap);
      setNumberList(sortedFrequencyMap);
      reset();
      start();
    },
    step: 1,
    timerType: "DECREMENTAL",
  });

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="z-50 mt-10 sm:mx-auto sm:w-full sm:max-w-xl">
        <div className="mt-4">
          <TimeCard time={time} pause={pause} resume={start} status={status}>
            {numberList.map(([key, value], i) => {
              return (
                <div
                  className="animate__animated animate__bounce relative mb-2 mr-2 "
                  key={`${i}-${value}`}
                >
                  <span
                    className={`flex h-10 min-w-[2.5rem] items-center justify-center rounded-full p-3 text-sm font-bold text-white ${
                      // this should keep the balls the same color after sorting
                      colors[parseInt(key) % colors.length]
                    }`}
                  >
                    {key}
                  </span>
                  <span className="absolute -right-1 -top-2 flex h-1 w-1 items-center justify-center rounded-full border-2 border-slate-800 bg-white p-2 font-mono text-xs font-bold">
                    {value.toString()}
                  </span>
                </div>
              );
            })}
          </TimeCard>
        </div>
        <NumberInput />
        <NumberHistory numbers={numbers} />
      </div>
      <Footer />
    </div>
  );
}

interface INumberHistoryProps {
  numbers: bigint[];
}

// Renders the number input history and highlights fibonacci numbers
function NumberHistory({ numbers }: INumberHistoryProps) {
  return (
    <div className="mt-4 flex flex-col flex-wrap rounded-lg bg-indigo-500 p-4 text-white">
      <span className="block text-sm font-bold leading-6 text-white">
        Number history{" "}
        <span className="text-xs font-light">(hover to see full value)</span>
      </span>

      <div className="relative flex flex-wrap">
        {numbers.map((number, i) => (
          <p
            key={i}
            className={`has-tooltip mr-2 mt-2 flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden overflow-ellipsis whitespace-nowrap rounded-full text-xs ${
              FIB_ARRAY_1000.includes(BigInt(number))
                ? "border-4 border-green-500"
                : "bg-indigo-600"
            }`}
          >
            {number.toString()}
            <span className="tooltip mt-20 max-w-xl whitespace-pre-wrap break-words rounded-lg bg-white p-3 text-sm text-slate-800 shadow-lg">
              {number.toString()}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
}

function checkMaxNumber(number: bigint) {
  if (number > FIB_ARRAY_1000[999]!) {
    Toastify({
      text: "Number is too large! Please try again.",
      duration: 2000,
      gravity: "top",
      position: "center",
      style: {
        background: "linear-gradient(to right, #FF9633, #FF6833)",
      },
    }).showToast();
    return false;
  }

  return true;
}

function NumberInput() {
  const addNumber = useStore((state) => state.addNumber);

  return (
    <div className="flex flex-col space-y-4 rounded-lg bg-white shadow">
      <form
        className="flex flex-col space-y-4 p-6"
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault();

          const target = e.target as typeof e.target & {
            number: { value: string };
          };

          const number = target.number.value; // typechecks!

          // double check that this number isn't greater than the max... can't trust the browser
          const isValid = checkMaxNumber(BigInt(number));

          if (number && isValid) {
            addNumber(BigInt(number));
            // if number is in the fibonacci sequence render a toast message
            if (FIB_ARRAY_1000.includes(BigInt(number))) {
              Toastify({
                text: gettingFibbyWidit[
                  Math.floor(Math.random() * gettingFibbyWidit.length)
                ],
                duration: 2000,
                gravity: "top",
                position: "center",
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
              }).showToast();
            }

            // clear the input
            target.number.value = "";
          }
        }}
      >
        <InputGroup
          label="Add a new number to the list"
          id="number"
          name="number"
        />
        <button
          type="submit"
          className="flex-1 items-center justify-center gap-x-3 rounded-lg border border-transparent bg-indigo-500 py-4 text-sm font-semibold text-white  hover:bg-indigo-800"
        >
          Add a new number
        </button>
      </form>
    </div>
  );
}
