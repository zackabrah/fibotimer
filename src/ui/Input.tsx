import React from "react";

interface IInputProps {
  label: string;
  name: string;
  handleUpdate: React.FormEventHandler<HTMLFormElement>;
}

export default function Input({ name, label, handleUpdate }: IInputProps) {
  return (
    <form
      className="flex flex-col items-center justify-center"
      onSubmit={handleUpdate}
    >
      <label className="text-sm text-white" htmlFor={name}>
        {label}
      </label>
      <input required type="number" name={name} id={name} />
    </form>
  );
}
