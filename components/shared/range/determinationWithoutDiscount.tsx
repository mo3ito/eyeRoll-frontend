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
    <div className="w-full h-14 bg-indigo-100 rounded-xl p-4">
      <div className="flex items-center justify-center   ">
        <div className=" h-max">
          <InformationButton onClick={showInformation} />
          <p className="inline-block text-lg font-medium">{title}</p>
        </div>

        <CheckBox
          onChange={cheangeCheckedHandler}
          checked={isChecked}
          backgroundClasses={isChecked ? "bg-pink-400" : "bg-pink-300"}
          sizeClasses="w-12 h-6 ml-auto "
          circleClasses="w-4 h-4 bg-gray-200 peer-checked:translate-x-6  peer-checked:bg-violet-500"
        />
      </div>
    </div>
  );
}
