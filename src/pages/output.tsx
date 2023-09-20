import { Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { useStore } from "zustand";
import InputGroup from "~/components/inputGroup";

export default function Output() {
  // local sttate
  const [isShowing, setIsShowing] = useState<boolean>(false);

  // app state

  useEffect(() => {
    setIsShowing(true);
  }, []);

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <Transition
            show={isShowing}
            enter="transform transition duration-[400ms]"
            enterFrom="opacity-0 rotate-[-120deg] scale-50"
            enterTo="opacity-100 rotate-0 scale-100"
            leave="transform duration-200 transition ease-in-out"
            leaveFrom="opacity-100 rotate-0 scale-100 "
            leaveTo="opacity-0 scale-95 "
          >
            <div className="flex flex-col space-y-4  bg-white  px-6 py-8 shadow  sm:px-8"></div>
            <div className="mt-6 flex justify-center">
              <a
                href="https://www.linkedin.com/in/isaac-johnson-a478abaa/"
                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                Made with ❤️ for the FTR team by Isaac Johnson
              </a>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
}
