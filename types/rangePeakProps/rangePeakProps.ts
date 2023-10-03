import { Dispatch , SetStateAction } from "react";


export interface DeterminationRangePeakProps {
    setMinValuePeak : Dispatch<SetStateAction<number>>;
    setMaxValuePeak: Dispatch<SetStateAction<number>>;
    minValuePeak : number ;
    maxValuePeak : number ;
    isChecked : boolean
    setIsChecked : Dispatch<SetStateAction<boolean>>;
    title : string ;
    showInformation : ()=> void ;
    firstHourPeak : string ;
    setFirstHourPeak : Dispatch<SetStateAction<string>> ;
    firstMinsPeak : string ;
    setFirstMinsPeak :  Dispatch<SetStateAction<string>> ;
    lastHourPeak : string ;
    setLastHourPeak : Dispatch<SetStateAction<string>> ;
    lastMinsPeak : string ;
    setLastMinsPeak : Dispatch<SetStateAction<string>>
    
    }
    