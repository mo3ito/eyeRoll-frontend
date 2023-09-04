import React from "react";
import { Loading } from "../loading/loading";
import { ButtonProps } from "@/types/buttonsType";

const Button = ({ onClick, text, title, loading = false }: ButtonProps) => {
  return (
    <button
      title={title}
      className="my-2 w-64 sm:w-96 h-10 bg-zinc-500 mt-7 hover:bg-zinc-600 flex items-center justify-center gap-x-2 text-white"
      onClick={onClick}
    >
      {text}
      {loading && <Loading />}
    </button>
  );
};

export default Button;
