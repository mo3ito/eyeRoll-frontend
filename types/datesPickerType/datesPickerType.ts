import { Dispatch , SetStateAction } from "react";

export interface DatesPickerProps {
    isInline : boolean;
    isButton: boolean;
    startDate : Date | null ;
    setDateRange : Dispatch<SetStateAction<null[]>> ;
    endDate : Date | null;
    setStartDateWithoutTime?: Dispatch<SetStateAction<string | undefined>> 
    setEndDateWithoutTime?: Dispatch<SetStateAction<string | undefined>> 
    disabled? : boolean;
    isWithTime? : boolean;
    }