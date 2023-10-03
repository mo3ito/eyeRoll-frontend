import { Dispatch , SetStateAction } from "react";

export interface TimeSetterInputProps {
    hour: string;
    mins: string;
    text: string;
    setHour: Dispatch<SetStateAction<string>>;
    setMins: Dispatch<SetStateAction<string>>;
    disabled?: boolean;
  }