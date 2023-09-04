import { ChangeEvent  } from "react";

export type InputRegister = {
  value: string;
  placeholder?: string;
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
