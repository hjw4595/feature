import { MouseEvent } from "react";

const SIZES = {
  s: "p-1",
  m: "p-1.5 py-1.5",
  l: "p-2.5 py-2",
};

interface Props {
  label: string;
  size: "s" | "m" | "l";
  onClick: () => void;
}

export default function Button({ onClick, label, size }: Props) {
  const handleClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    onClick();
  };

  return (
    <button
      className={`border-black border-2 rounded-md ${SIZES[size]}`}
      onClick={(e) => handleClick(e)}
    >
      <div>{label}</div>
    </button>
  );
}
