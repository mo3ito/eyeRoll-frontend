import React from "react";
import Loading from "@/components/loading/loading";
import { ButtonProps } from "@/types/buttonsType";

const Button = ({ onClick, text, title, loading = false }: ButtonProps) => {
  return (
    <button
      title={title}
      className="mb-2 w-64 text-xl shadow-md hover:scale-105 hover:duration-300 ease-in sm:w-96 h-16 rounded-2xl bg-violet-500 mt-11 hover:bg-violet-600 flex items-center justify-center gap-x-2 text-white "
      onClick={onClick}
    >
      {text}
      {loading && <Loading />}
    </button>
  );
};

export default Button;
