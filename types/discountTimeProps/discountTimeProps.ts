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
    calendarisValue:boolean;
    setCalendarIsValue:Dispatch<SetStateAction<boolean>>;
    title: string;
    startDate : Date | null;
    endDate : Date | null;
    showInformation: () => void;
    isChecked: boolean;
    setIsChecked: Dispatch<SetStateAction<boolean>>
    setStartDateWithoutTime: Dispatch<SetStateAction<string | undefined>> 
    setEndDateWithoutTime: Dispatch<SetStateAction<string | undefined>> 
    startDateWithoutTime : string | undefined;
    endDateWithoutTime : string | undefined ;
    setDateRange: Dispatch<SetStateAction<[Date | null , Date | null]>>
  }