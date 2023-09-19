import React, { useRef } from "react";

interface InputProps<T> {
  setValue: (value: T) => void;
  label: string;
  name: string;
}

export default function Input<T>({ setValue, label, name }: InputProps<T>) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpdate = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    e.preventDefault();
    if (inputRef.current !== null) {
      console.log(inputRef.current.value);
      setValue(inputRef.current.value as T);
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <label className="text-sm text-white" htmlFor={name}>
        {label}
      </label>
      <div>
        <input ref={inputRef} required type="number" name={name} id={name} />
        <button onClick={handleUpdate}>Submit</button>
      </div>
    </>
  );
}
