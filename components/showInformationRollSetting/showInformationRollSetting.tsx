import React, { Dispatch, SetStateAction } from "react";
import CloseIcon from "../shared/icon/closeIcon";

interface ShowInformationRollSettingProps {
  textInformation: string;
  setShowInformation: Dispatch<SetStateAction<boolean>>;
}

export default function ShowInformationRollSetting({
  textInformation,
  setShowInformation,
}: ShowInformationRollSettingProps) {
  return (
    <div className="h-96 py-6 ">
      <CloseIcon
        classNameButton="hover:-translate-y-0.5 hover:duration-500 hover:ease-in-out absolute  right-3 top-3"
        classNameSvg=" max-[420px]:w-4 max-[420px]:h-4  w-8 h-8 fill-pink-500"
        onClick={() => setShowInformation(false)}
      />
      <p className="max-[420px]:text-xs text-base">{textInformation}</p>
    </div>
  );
}
