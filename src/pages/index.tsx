import { Transition } from "@headlessui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import InputGroup from "~/components/inputGroup";
import { useRouter } from "next/router";
import { useStore } from "~/store";
import Footer from "~/components/footer";

export default function Index() {
  const router = useRouter();

  // local sttate
  const [isShowing, setIsShowing] = useState<boolean>(false);

  // app state
  // const appState = useStore((state) => state.appState);
  const setSeconds = useStore((state) => state.setSeconds);
  const addNumber = useStore((state) => state.addNumber);

  useEffect(() => {
    setIsShowing(true);
  }, []);

  function handleSubmit(e: React.SyntheticEvent): void {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      time: { value: string };
      number: { value: string };
    };
    const time = target.time.value; // typechecks!
    const number = target.number.value; // typechecks!

    if (time && number) {
      setSeconds(Number(time));
      addNumber(Number(number));
      // route change to output page
      void router.push("/output");
    }

    // etc...
  }

  return (
    <>
      <div className="z-10 flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <Transition
            show={isShowing}
            enter="transform transition duration-[400ms]"
            enterFrom="opacity-0 scale-50"
            enterTo="opacity-100 rotate-0 scale-100"
            leave="transform duration-200 transition ease-in-out"
            leaveFrom="opacity-100 rotate-0 scale-100 "
            leaveTo="opacity-0 scale-95 "
          >
            <div className="flex flex-col space-y-4 rounded-lg bg-white shadow">
              <h2 className="mx-auto w-full rounded-t-lg bg-indigo-500 p-4 text-center text-xl font-bold tracking-tight text-white sm:text-4xl">
                <span className="animate-pulse">🔥</span> FIBOTIMER{" "}
                <span className="animate-pulse">🔥</span>
              </h2>
              <div className="p-6 pt-0">
                <p className="mx-auto mt-2 max-w-xl text-center text-lg text-slate-600">
                  Please input the amount of time in seconds between emitting
                  numbers and their frequency and an initial number to begin.
                </p>
                <hr className="my-6" />
                <form
                  className="flex flex-col space-y-4"
                  onSubmit={handleSubmit}
                >
                  <InputGroup label="Time" id="time" name="time" />
                  <InputGroup label="Inital value" id="number" name="number" />
                  <button
                    type="submit"
                    className="relative flex-1 items-center justify-center gap-x-3 rounded-lg border border-transparent bg-indigo-500 py-4 text-sm font-semibold text-white  hover:bg-indigo-800"
                  >
                    LET&apos;S GET FIBBY!
                  </button>
                </form>
              </div>
            </div>
            <Footer />
          </Transition>
        </div>
      </div>
    </>
  );
}
