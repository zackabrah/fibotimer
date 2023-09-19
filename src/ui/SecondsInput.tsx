import { useStore } from "~/store";
import Input from "./Input";

interface ISecondsInputProps {
  label: string;
  name: string;
}

export default function SecondsInput({ label, name }: ISecondsInputProps) {
  const setSeconds = useStore((state) => state.setSeconds);

  const handleUpdateSeconds: React.FormEventHandler<HTMLFormElement> = (
    e: React.SyntheticEvent,
  ) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      seconds: { value: string };
    };

    setSeconds(Number(target.seconds.value));
    target.seconds.value = "";
  };

  return <Input label={label} name={name} handleUpdate={handleUpdateSeconds} />;
}
