import React from "react";
import { RadioButtonProps } from "@/types/radioButtonType/radioButtonType";


export default function RadioButton({
  checked ,
  value,
  sizeClasses = "w-28 h-12",
  circleClasses = "peer-checked:translate-x-6 bg-indigo-100 peer-checked:bg-indigo-600 ",
} : RadioButtonProps) {
  return (
    <div
      className={`flex items-center justify-center ${sizeClasses}`}
    >
      <label
        htmlFor="rr"
        className="relative bg-indigo-300 w-full h-full rounded-full flex justify-between items-center "
      >
        <input
          id="rr"
          type="checkbox"
          checked={checked}
          value={value}
          className=" absolute peer w-full h-full appearance-none left-0 top-0 rounded-full cursor-pointer"
        />
        <span
          className={` w-4 h-4 ${circleClasses}   ml-1  flex items-center  rounded-full  duration-300 ease-in-out  `}
        ></span>
      </label>
    </div>
  );
}
