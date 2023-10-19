import { ChangeEvent } from "react";

export type InputRegisterType = {
  className: string;
  value: string;
  placeholder?: string;
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  disabled?: boolean
};
