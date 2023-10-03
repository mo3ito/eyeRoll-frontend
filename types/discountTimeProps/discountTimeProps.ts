import { Dispatch , SetStateAction } from "react";

export interface DeterminationDiscountTimeProps {
    firstHour: string;
    firstMins: string;
    setFirstMins: Dispatch<SetStateAction<string>>;
    setFirstHour: Dispatch<SetStateAction<string>>;
    setLastHour: Dispatch<SetStateAction<string>>;
    lastHour: string;
    lastMins: string;
    setLastMins: Dispatch<SetStateAction<string>>;
    title: string;
    startDate : Date | null;
    setStartDate : Dispatch<SetStateAction<Date | null>>;
    endDate : Date | null;
    setEndDate:Dispatch<SetStateAction<Date | null>>;
    showInformation: () => void;
    isChecked: boolean;
    setIsChecked: Dispatch<SetStateAction<boolean>>
  }