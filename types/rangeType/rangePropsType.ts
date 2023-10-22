import { Dispatch, SetStateAction } from "react";

export interface RangePropsType {
  minValue: number;
  maxValue: number;
  setMinValue: Dispatch<SetStateAction<number>>;
  setMaxValue: Dispatch<SetStateAction<number>>;
  valueGap: number;
  disable?: boolean
}

export interface DeterminationRangePropsType {
  title: string;
  isChecked: boolean;
  minValue: number | string;
  maxValue: number | string;
  showInformation: () => void;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
  setMinValue: Dispatch<SetStateAction<string>>;
  setMaxValue: Dispatch<SetStateAction<string>>;
}
