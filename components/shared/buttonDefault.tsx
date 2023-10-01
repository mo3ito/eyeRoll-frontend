import React from "react";
import Loading from "../loading/loading";
import { ButtonDefaultProps } from "@/types/buttonsType";

const ButtonDefault = ({
  className,
  text,
  title,
  loading = false,
  onClick,
  isScale = false
}: ButtonDefaultProps) => {
  return (
    <button
      title={title}
      onClick={onClick}
      className={
        `bg-fuchsia-400 w-full  hover:bg-fuchsia-500 ${isScale && 'hover:scale-105 hover:duration-300 hover:ease-in-out'}  rounded-lg ${className}`
      }
    >
      {text}
      {loading && <Loading />}
    </button>
  );
};

export default ButtonDefault;
