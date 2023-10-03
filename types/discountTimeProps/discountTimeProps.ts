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
    endDate : Date | null;
    showInformation: () => void;
    isChecked: boolean;
    setIsChecked: Dispatch<SetStateAction<boolean>>
    setStartDateWithoutTime: Dispatch<SetStateAction<string>>;
    setEndDateWithoutTime: Dispatch<SetStateAction<string>>;
    startDateWithoutTime : string;
    endDateWithoutTime : string ;
    setDateRange: Dispatch<SetStateAction<null[]>>
  }