'use client'
import {useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



export default function DatesPicker({isInline = true , isButton = true }) {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    

    const handleDateChange = async (date)=>{
    //    await setStartDate(date)
    //    if(date){
    //     const formattedDate = format(date, "dd/MM/yyyy"); // تبدیل تاریخ به فرمت "18/12/2022"
    //   console.log("تاریخ به صورت فرمت دلخواه: ", formattedDate);
    //    }
    const [start, end] = date;
    setStartDate(start);
    setEndDate(end);
    }
    console.log("start", startDate);
    console.log("end", endDate);
    
    
  return (
    <>
    <DatePicker
    
   selected={startDate}
   onChange={(date) =>handleDateChange(date)}
   startDate={startDate}
   endDate={endDate}
   selectsRange
  inline={isInline}
 />
{isButton && <button className='bg-indigo-400 w-full h-10 hover:bg-indigo-500 text-white rounded-md -translate-y-2 hover:font-semibold '>confirmation</button>}

</>
  )
}
