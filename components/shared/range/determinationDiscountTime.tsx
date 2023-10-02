"use client";
import { ChangeEvent, useState, Dispatch, SetStateAction , useEffect } from "react";
import InformationButton from "@/components/informationButton/informationButton";
import DatesPicker from "@/components/datePicker/datePicker";
import { useTimer } from "react-timer-hook";
import Timer from "@/components/timer/timer";
import TimeSetterInput from "../timeSetterInput/timeSetterInput";

interface DeterminationDiscountTimeProps {
  firstHour: string;
  firstMins: string;
  setFirstMins: Dispatch<SetStateAction<string>>;
  setFirstHour: Dispatch<SetStateAction<string>>;
  setLastHour: Dispatch<SetStateAction<string>>;
  lastHour: string;
  lastMins: string;
  setLastMins: Dispatch<SetStateAction<string>>;
  title: string;
  startDate : string,
  setStartDate : Dispatch<SetStateAction<string>>;
  endDate : string;
  setEndDate:Dispatch<SetStateAction<string>>;
  showInformation: () => void;
}

export default function DeterminationDiscountTime({
  firstHour,
  firstMins,
  setFirstMins,
  setFirstHour,
  setLastHour,
  lastHour,
  lastMins,
  setLastMins,
  title = "Determining the discount time",
  showInformation,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: DeterminationDiscountTimeProps) {
  console.log("first hour", firstHour);
  console.log("first min", firstMins);
  console.log("last hour", lastHour);
  console.log("last min", lastMins);
  const [different , setDifferent]=useState(0)

  const firstSelectedDate = new Date(startDate);
const endSelectedDate = new Date(endDate);

// محاسبه تفاوت زمانی به میلی‌ثانیه
const timeDifferenceInMillis = Math.abs(endSelectedDate.getTime() - firstSelectedDate.getTime());
const timeDifferenceInMinutes = Math.floor(timeDifferenceInMillis / (1000 * 60));

console.log(timeDifferenceInMinutes);

const time = new Date();
time.setMinutes(time.getMinutes() + 1440);
  


  


  return (
    <div className=" w-full bg-indigo-100 p-3 rounded-xl">
      <div>
        <InformationButton onClick={showInformation} />
        <p className="inline-block">{title}</p>
      </div>

      <div className="flex  mt-2">
        <div className="flex  justify-center">
          <TimeSetterInput
            setHour={setFirstHour}
            setMins={setFirstMins}
            text="from"
            hour={firstHour}
            mins={firstMins}
          />
          <TimeSetterInput
            setHour={setLastHour}
            setMins={setLastMins}
            text="to"
            hour={lastHour}
            mins={lastMins}
          />
        </div>

        <div className=" w-max ml-auto mr-20 ">
          <DatesPicker
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            isInline={false}
            isButton={false}
          />
          <Timer expiryTimestamp={time} />
        </div>
      </div>

      {/* <div className='text-center mt-8 '>
            <span className='font-bold '> from</span> <span className='text-zinc-500 px-2'>08:00</span>  23/12/2023 <span className='font-bold pl-2'> to</span> <span className='text-zinc-500 px-2'>23:30</span>  27/12/2023 
            </div> */}
    </div>
  );
}
