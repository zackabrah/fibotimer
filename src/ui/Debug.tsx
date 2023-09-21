import { useEffect, useState } from "react";
import { useStore } from "~/store";

export default function Debug() {
  // useStore is a custom hook that returns the store state
  const store = useStore((state) => state);

  // subscribe to store updates
  useEffect(() => {
    useStore.subscribe(console.log);
  }, []);

  return (
    <div className="w-full bg-slate-800 p-4 text-green-400">
      {/* Render the JSON representation of the store state */}
      {/* <pre className="text-sm">{JSON.stringify(storeUpdates)}</pre> */}
    </div>
  );
}
