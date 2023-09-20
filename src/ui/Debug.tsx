import { useStore } from "~/store";

export default function Debug() {
  // useStore is a custom hook that returns the store state
  const getStore = useStore((state) => state);

  return (
    <div className="absolute bottom-0 bg-white p-4 text-slate-800">
      {/* Render the JSON representation of the store state */}
      <pre>{JSON.stringify(getStore, null, 2)}</pre>
    </div>
  );
}
