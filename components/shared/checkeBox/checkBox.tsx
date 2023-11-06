import React from "react";
import { CheckBoxType } from "@/types/radioButtonType/checkBoxType";

export default function CheckBox({
  onChange,
  checked,
  sizeClasses = "w-28 h-12",
  circleClasses = " ",
  backgroundClasses,
}: CheckBoxType) {
  return (
    <div className={`flex items-center justify-center  ${sizeClasses}`}>
      <label
        htmlFor="rr"
        className={`relative ${backgroundClasses}  w-full h-full rounded-full flex justify-between items-center `}
      >
        <input
          id="rr"
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className=" absolute peer w-full h-full appearance-none  left-0 top-0 rounded-full cursor-pointer"
        />
        <span
          className={`${circleClasses} pointer-events-none max-xs:ml-[3px]  ml-1  flex items-center  rounded-full  duration-300 ease-in-out`}
        ></span>
      </label>
    </div>
  );
}
