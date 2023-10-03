'use client'
import {Dispatch, SetStateAction} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';

interface DatesPickerProps {
isInline : boolean;
isButton: boolean;
startDate : Date | null ;
setStartDate : Dispatch<SetStateAction<Date | null>>;
endDate : Date | null;
setEndDate: Dispatch<SetStateAction<Date | null>>;
disabled : boolean
}


export default function DatesPicker({isInline = true , isButton = true , startDate , setStartDate ,endDate , setEndDate , disabled , setStartDateWithoutTime,
  setEndDateWithoutTime }: DatesPickerProps) {

   
  
  
  const handleDateChange = async (date) => {
    if (date && date.length === 2) {
      const [start, end] = date;
      
  
      const formattedStartDate = format(start, "dd/MM/yyyy");
      const formattedEndDate = end ? format(end, "dd/MM/yyyy") : null;

      setStartDate(start);
      setEndDate(end);
      setStartDateWithoutTime(formattedStartDate)
      setEndDateWithoutTime(formattedEndDate)
  
      console.log("start", formattedStartDate);
      console.log("end", formattedEndDate);
    } else if (date instanceof Date) {
      setStartDate(date);
      setEndDate(null);
  
      const formattedDate = format(date, "dd/MM/yyyy");
      console.log("date", formattedDate);
    }
  };

    
  return (
    <>
    <DatePicker
    
   selected={startDate}
   onChange={(date) =>handleDateChange(date)}
   startDate={startDate}
   endDate={endDate}
   selectsRange
  inline={isInline}
  disabled={disabled}
  isClearable={true}
   
 />


{isButton && <button className='bg-indigo-400 w-full h-10 hover:bg-indigo-500 text-white rounded-md -translate-y-2 hover:font-semibold '>confirmation</button>}

</>
  )
}
