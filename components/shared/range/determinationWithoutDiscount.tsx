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
      <div className='w-10/12'>
       <p className="inline-block max-xs:text-xs text-sm  sm:text-lg font-medium "><InformationButton onClick={showInformation}/> {title}</p>
      </div>

        <CheckBox
          onChange={cheangeCheckedHandler}
          checked={isChecked}
          backgroundClasses={isChecked ? "bg-pink-400" : "bg-pink-300"}
          sizeClasses="max-xs:w-6 max-xs:h-[14px]   w-8 h-[18px]   sm:w-12 sm:h-6 ml-auto "
          circleClasses=" max-xs:w-2 max-xs:h-2 max-xs:peer-checked:translate-x-[10px] w-3 h-3 sm:w-4 sm:h-4 bg-gray-200 peer-checked:translate-x-3 sm:peer-checked:translate-x-6   peer-checked:bg-violet-500"
        />
      </div>
    </div>
  );
}
