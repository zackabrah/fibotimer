import React from "react";
import { useRouter } from "next/router";
import InputGroup from "~/components/inputGroup";
import { useStore } from "~/store";
import Footer from "~/components/footer";

export default function Index() {
  const router = useRouter();

  // const appState = useStore((state) => state.appState);
  const setSeconds = useStore((state) => state.setSeconds);
  const addNumber = useStore((state) => state.addNumber);

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
      addNumber(BigInt(number));
      // route change to output page
      void router.push("/output");
    }
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center bg-gradient-to-t from-sky-400 to-sky-200  py-12 sm:px-6 lg:px-8">
        <div className="z-50 mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="flex flex-col space-y-6 rounded-lg bg-white shadow">
            <h2 className="mx-auto w-full rounded-t-lg bg-indigo-500 p-4 text-center text-xl font-bold tracking-tight text-white sm:text-4xl">
              <span className="animate-pulse">🔥</span> FIBOTIMER{" "}
              <span className="animate-pulse">🔥</span>
            </h2>
            <p className="mx-auto max-w-xl text-center text-lg text-slate-600">
              Please input the amount of time in seconds between emitting
              numbers and their frequency and an initial number to begin.
            </p>

            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              <div className="mb-4 flex flex-col space-y-4 px-6">
                <InputGroup label="Time" id="time" name="time" />
                <InputGroup label="Inital value" id="number" name="number" />
              </div>

              <button
                role="button"
                name="submit"
                type="submit"
                className="relative flex-1 items-center justify-center gap-x-3 rounded-b-lg border border-transparent bg-indigo-500 py-4 text-sm font-semibold text-white  hover:bg-indigo-800"
              >
                LET&apos;S GET FIBBY!
              </button>
            </form>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
