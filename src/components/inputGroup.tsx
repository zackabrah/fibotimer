interface IInputGroup {
  label: string;
  id: string;
  name: string;
}

export default function InputGroup({ label, id, name }: IInputGroup) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-bold leading-6 text-slate-600"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={name}
          type="number"
          autoComplete="off"
          required
          max={99}
          min={1}
          className="block w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}
