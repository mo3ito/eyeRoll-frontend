import React from "react";
import Loading from "@/components/loading/loading";
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
        ` w-full ${disabled && 'bg-gray-300 hover:bg-gray-300' } ${(isScale && !disabled) && 'hover:scale-105 hover:duration-500 hover:ease-in-out'}  ${className}`
      }
    >
      {text}
      {loading && <Loading />}
    </button>
  );
};

export default ButtonDefault;
