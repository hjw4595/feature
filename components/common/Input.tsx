import { ChangeEvent, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  onClick: () => void;
}

export function Input({ onClick, ...props }: Props) {
  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log(value);
    onClick();
  };

  return <input {...props} onChange={(e) => handleClick(e)} />;
}
