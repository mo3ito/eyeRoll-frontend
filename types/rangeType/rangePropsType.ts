import { Dispatch, SetStateAction } from "react";

export interface RangePropsType {
  minValue: number;
  maxValue: number;
  setMinValue: Dispatch<SetStateAction<number>>;
  setMaxValue: Dispatch<SetStateAction<number>>;
  valueGap: number;
}
