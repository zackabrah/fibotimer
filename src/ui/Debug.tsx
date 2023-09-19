import { useStore } from "~/store";

export default function Debug() {
  const getStore = useStore((state) => state);
  return (
    <div className="absolute bottom-0 bg-white p-4 text-slate-800">
      <pre>{JSON.stringify(getStore, null, 2)}</pre>
    </div>
  );
}
