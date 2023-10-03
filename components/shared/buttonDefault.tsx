import React from "react";
import Loading from "../loading/loading";
import { ButtonDefaultProps } from "@/types/buttonsType";

const ButtonDefault = ({
  className,
  text,
  title,
  loading = false,
  onClick,
  isScale = false,
  disabled = false
}: ButtonDefaultProps) => {
  return (
    <button
    disabled={disabled}
      title={title}
      onClick={onClick}
      className={
        `bg-fuchsia-400 w-full ${disabled && 'bg-gray-300 hover:bg-gray-300' }  hover:bg-fuchsia-500 ${(isScale && !disabled) && 'hover:scale-105 hover:duration-500 hover:ease-in-out'}  rounded-lg ${className}`
      }
    >
      {text}
      {loading && <Loading />}
    </button>
  );
};

export default ButtonDefault;
