interface ITimeControls {
  start: () => void;
  pause: () => void;
  status: string;
}

export default function TimeControls({ start, pause, status }: ITimeControls) {
  return (
    <>
      {status === "RUNNING" ? (
        <button className="w-full bg-red-500 p-2 text-white" onClick={pause}>
          Pause
        </button>
      ) : (
        <button className="w-full bg-green-500 p-2 text-white" onClick={start}>
          Start
        </button>
      )}
    </>
  );
}
