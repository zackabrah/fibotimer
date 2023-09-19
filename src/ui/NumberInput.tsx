import { useStore } from "~/store";
import Input from "./Input";

interface INumberInputProps {
  label: string;
  name: string;
}

export default function NumberInput({ label, name }: INumberInputProps) {
  const addNumber = useStore((state) => state.addNumber);

  const handleUpdate: React.FormEventHandler<HTMLFormElement> = (
    e: React.SyntheticEvent,
  ) => {
    e.preventDefault();

    e.preventDefault();
    const target = e.target as typeof e.target & {
      number: { value: string };
    };

    addNumber(Number(target.number.value));
  };

  return <Input label={label} name={name} handleUpdate={handleUpdate} />;
}
