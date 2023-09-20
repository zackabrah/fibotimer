import { parse } from "path";
import React, { type FormEvent, useRef, useState, useCallback } from "react";
import Toastify from "toastify-js";
import { useStore } from "~/store";
import confetti from "canvas-confetti";

interface InputProps {
  setValue: (value: number) => void;
  label: string;
  name: string;
  validator?: (value: number) => string | undefined;
}

export default function Input({
  setValue,
  label,
  name,
  validator,
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const fibArray = useStore((state) => state.fibArray);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const inputValue = inputRef.current?.value;

    // If input value is empty or undefined, return without executing further logic
    if (!inputValue || inputValue === "") return;

    const value = inputValue;

    // check fibonacci number

    if (fibArray.includes(parseInt(value))) {
      Toastify({
        text: `Fibonacci number!`,
        duration: 3000,
        gravity: "top",
        position: "center",
      }).showToast();
    }

    // Execute validator function if it exists
    if (validator && validator instanceof Function) {
      console.log(value);
      const error = validator(parseInt(value));

      // If there's an error returned from the validator, log it and return without setting the value
      if (error) {
        console.error(error);
        return;
      }
    }

    // Set the value using the provided setValue function
    setValue(parseInt(value));

    // Clear the input field after setting the value
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <label className="text-sm text-white" htmlFor={name}>
        {label}
      </label>
      <div className="flex w-full">
        <input
          required
          type="number"
          ref={inputRef}
          className="w-full p-4 outline-none"
          name={name}
          id={name}
        />
        <button type="submit" className="bg-green-500 p-4 font-bold text-white">
          Submit
        </button>
      </div>
    </form>
  );
}
