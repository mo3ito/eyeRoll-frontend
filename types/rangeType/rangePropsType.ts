import { Dispatch, SetStateAction } from "react";

export interface RangePropsType {
  minValue: number;
  maxValue: number;
  setMinValue: Dispatch<SetStateAction<number>>;
  setMaxValue: Dispatch<SetStateAction<number>>;
  valueGap: number;
}

export interface DeterminationRangePropsType {
  title: string;
  isChecked : boolean;
  minValue: number;
  maxValue: number;
  showInformation: ()=> void;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
  setMinValue: Dispatch<SetStateAction<number>>;
  setMaxValue: Dispatch<SetStateAction<number>>


}