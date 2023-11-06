import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import CheckBox from "../checkeBox/checkBox";
import InformationButton from "@/components/informationButton/informationButton";

interface DeterminationWithoutDiscountProps {
  isChecked: boolean;
  title: string;
  showInformation: () => void;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
}

export default function DeterminationWithoutDiscount({
  isChecked,
  title,
  showInformation,
  setIsChecked,
}: DeterminationWithoutDiscountProps) {
  const cheangeCheckedHandler = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setIsChecked(event.target.checked);
  };
  return (
    <div className={` ${isChecked ? ' bg-indigo-100' : 'bg-gray-200'}  w-full h-max  rounded-xl my-2  p-2`}>
      <div className="flex items-center justify-center  ">
        <div className=" h-max">
          <InformationButton onClick={showInformation} />
          <p className="inline-block max-[420px]:text-xs text-lg font-medium ">{title}</p>
        </div>

        <CheckBox
          onChange={cheangeCheckedHandler}
          checked={isChecked}
          backgroundClasses={isChecked ? "bg-pink-400" : "bg-pink-300"}
          sizeClasses="max-[420px]:w-7 max-[420px]:h-[14px]    w-12 h-6 ml-auto "
          circleClasses=" max-[420px]:w-[8px] max-[420px]:h-[8px] max-[420px]:peer-checked:translate-x-3 w-4 h-4 bg-gray-200 peer-checked:translate-x-6  peer-checked:bg-violet-500"
        />
      </div>
    </div>
  );
}
