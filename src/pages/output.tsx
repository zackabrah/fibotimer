import { Transition } from "@headlessui/react";
import { PhoneIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import InputGroup from "~/components/inputGroup";
import TimeCard from "~/components/timeCard";
import { useTimer } from "~/hooks/useTimer";
import { useStore } from "~/store";
import { sortMap } from "~/utils/sorting";

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
  const router = useRouter();

  // local sttate
  const [isShowing, setIsShowing] = useState<boolean>(false);

  const [numberList, setNumberList] = useState<[string, number][]>([]);

  const seconds = useStore((state) => state.seconds);
  const addNumber = useStore((state) => state.addNumber);
  const frequencyMap = useStore((state) => state.frequencyMap);

  const { pause, start, status, time, step, restart } = useTimer({
    initialTime: seconds,
    endTime: 0,
    onTimeOver: () => {
      restart();
    },
  });
  // app state

  useEffect(() => {
    setIsShowing(true);

    // if no seconds have been set redirect to home
    if (seconds === 0) {
      void router.push("/");
    }

    // if time matching requested frequency
    if (time % seconds === 0) {
      // sort the frequency map
      const sortedFrequencyMap = sortMap(frequencyMap);
      // push a new element to th enumber list
      console.log(sortedFrequencyMap);

      setNumberList(sortedFrequencyMap);
    }
  }, [frequencyMap, router, seconds, time]);

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-xl">
          <Transition
            show={isShowing}
            enter="transform transition duration-[400ms]"
            enterFrom="opacity-0 scale-50"
            enterTo="opacity-100 rotate-0 scale-100"
            leave="transform duration-200 transition ease-in-out"
            leaveFrom="opacity-100 rotate-0 scale-100 "
            leaveTo="opacity-0 scale-95"
          >
            <div className="flex flex-col space-y-4 rounded-lg bg-white shadow">
              <form
                className="flex flex-col space-y-4 p-6"
                onSubmit={(e: React.SyntheticEvent) => {
                  e.preventDefault();
                  const target = e.target as typeof e.target & {
                    number: { value: string };
                  };
                  const number = target.number.value; // typechecks!

                  if (number) {
                    addNumber(parseInt(number));

                    // clear the input
                    target.number.value = "";
                  }
                }}
              >
                <InputGroup label="Add new value" id="number" name="number" />
                <button
                  type="submit"
                  className="flex-1 items-center justify-center gap-x-3 rounded-b-lg border border-transparent bg-indigo-500 py-4 text-sm font-semibold text-white  hover:bg-indigo-800"
                >
                  Add Number
                </button>
              </form>
            </div>
            <div className="mt-4">
              <TimeCard time={time} step={step}>
                {numberList.map((number, i) => (
                  <div
                    className="animate__animated animate__bounce relative mb-2 mr-2 "
                    // using a random number here to force a re-render
                    key={number[0]}
                  >
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full p-2 text-xs font-bold text-white ${
                        colors[i % colors.length]
                      }`}
                    >
                      {number[0]}
                    </span>
                    <span className="absolute -right-2 -top-2 flex h-1 w-1 items-center justify-center rounded-full border-2 border-slate-800 bg-white p-2 font-mono text-xs font-bold">
                      {number[1]}
                    </span>
                  </div>
                ))}
              </TimeCard>
            </div>
          </Transition>

          <div className="mt-6 flex justify-center">
            <a
              href="https://www.linkedin.com/in/isaac-johnson-a478abaa/"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              Made with ❤️ for the FTR team by Isaac Johnson
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
