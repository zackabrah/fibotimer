import React, { type FormEvent, useRef } from "react";

interface InputProps<T> {
  setValue: (value: T) => void;
  label: string;
  name: string;
  validator?: (value: T) => string | undefined;
}

export default function Input<T>({
  setValue,
  label,
  name,
  validator,
}: InputProps<T>) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpdate = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (inputRef.current !== null && inputRef.current.value !== "") {
      const value = inputRef.current.value as T;

      // input valudation
      if (validator instanceof Function) {
        console.log(value);
        const error = validator(value);
        if (error) {
          // set errors
          console.error(error);
          return;
        }
      }

      setValue(inputRef.current.value as T);
      inputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <label className="text-sm text-white" htmlFor={name}>
        {label}
      </label>
      <div className="flex">
        <input
          required
          type="number"
          ref={inputRef}
          className="p-4 outline-none"
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
