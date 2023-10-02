'use client'
import { ChangeEvent, Dispatch, SetStateAction} from "react";

interface TimeSetterInputProps {
    hour : string;
    mins: string;
    text: string;
    setHour: Dispatch<SetStateAction<string>>;
    setMins : Dispatch<SetStateAction<string>>;
}

export default function TimeSetterInput({hour , mins , text , setHour , setMins}: TimeSetterInputProps) {


   


    const hourHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const parsedHour = parseInt(inputValue, 10);
      
        if (!isNaN(parsedHour) && parsedHour >= 0 && parsedHour <= 23) {
            const paddedHour = parsedHour.toString().padStart(2, '0'); 
          setHour(paddedHour);
        }
      };

    const minutsHandler = (event : ChangeEvent<HTMLInputElement>)=>{
        const inputValue = event.target.value;
        const parsedMins = parseInt(inputValue, 10);
        if (!isNaN(parsedMins) && parsedMins >= 0 && parsedMins <= 59) {
            const paddedMins = parsedMins.toString().padStart(2 , '0')
            setMins(paddedMins)
          }
        
    }

  
  return (
    <>
      <div>
        <span className="px-1">{text}</span>
        <input
          value={hour}
          onChange={hourHandler}
          className=" px-2 bg-transparent  h-8 border rounded-lg border-fuchsia-300 outline-none w-16"
          type="number"
        />
      </div>
      <div>
        <span className="mx-1">:</span>
        <input
          value={mins}
          onChange={minutsHandler}
          className=" px-2 bg-transparent w-22 h-8 border rounded-lg border-fuchsia-300 outline-none w-16"
          type="number"
        />
      </div>
    </>
  );
}
