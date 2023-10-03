import { Dispatch , SetStateAction } from "react";

export interface DatesPickerProps {
    isInline : boolean;
    isButton: boolean;
    startDate : Date | null ;
    setDateRange : Dispatch<SetStateAction<null[]>> ;
    endDate : Date | null;
    setStartDateWithoutTime: Dispatch<SetStateAction<string>>
    setEndDateWithoutTime: Dispatch<SetStateAction<string>>
    disabled : boolean
    }