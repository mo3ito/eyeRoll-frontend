"use client";
import { ChangeEvent, useEffect, useState } from "react";
import InformationButton from "@/components/informationButton/informationButton";
import DatesPicker from "@/components/datePicker/datePicker";
import { useTimer } from "react-timer-hook";
import Timer from "@/components/timer/timer";
import TimeSetterInput from "../timeSetterInput/timeSetterInput";
import CheckBox from "../checkeBox/checkBox";
import { DeterminationDiscountTimeProps } from "@/types/discountTimeProps/discountTimeProps";
import DateRangeDisplay from "./dateRangeDisplay";

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
  endDate,
  isChecked,
  setIsChecked,
  setStartDateWithoutTime,
  setEndDateWithoutTime,
  startDateWithoutTime,
  endDateWithoutTime,
  setDateRange,
  calendarisValue,
  setCalendarIsValue
}: DeterminationDiscountTimeProps) {
  console.log("first hour", firstHour);
  console.log("first min", firstMins);
  console.log("last hour", lastHour);
  console.log("last min", lastMins);

  

  useEffect(() => {
    if (startDate !== null || endDate !== null) {
      setCalendarIsValue(true);
    } else {
      setCalendarIsValue(false);
    }
  }, [calendarisValue, startDate, endDate]);
  console.log(calendarisValue);



  const changeProductsHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  useEffect(()=>{
    if(!isChecked){
      setFirstMins("")
      setFirstHour("")
      setLastHour("")
      setLastMins("")
      setStartDateWithoutTime("")
      setEndDateWithoutTime("")
      setDateRange([null , null])
    }else{
      setFirstMins("00")
      setFirstHour("00")
      setLastHour("00")
      setLastMins("00")
   
    }
  },[isChecked])

  return (
    <div className={` ${isChecked ? ' bg-indigo-100' : 'bg-gray-200'}  w-full h-max  rounded-xl my-2  p-2`}>
    <div className='flex  items-center justify-center   '>
      <div className='w-10/12'>
       <p className="inline-block max-xs:text-xs text-sm  sm:text-lg font-medium "><InformationButton onClick={showInformation}/> {title}</p>
      </div>
    
   

    <CheckBox
          onChange={(event)=>changeProductsHandler(event)}
          checked={isChecked}
          backgroundClasses={isChecked ? "bg-pink-400" : "bg-pink-300"}
          sizeClasses="max-xs:w-6 max-xs:h-[14px]   w-8 h-[18px]   sm:w-12 sm:h-6 ml-auto "
          circleClasses=" max-xs:w-2 max-xs:h-2 max-xs:peer-checked:translate-x-[10px] w-3 h-3 sm:w-4 sm:h-4 bg-gray-200 peer-checked:translate-x-3 sm:peer-checked:translate-x-6  peer-checked:bg-violet-500"
        />
    </div>

      <div className=" flex flex-col gap-y-2 items-center justify-around  md:flex-row mt-2 md:gap-y-0">
        <div className=" flex flex-col sm:flex-row  justify-center">
          <TimeSetterInput
            setHour={setFirstHour}
            setMins={setFirstMins}
            text="from"
            hour={firstHour}
            mins={firstMins}
            disabled={!isChecked}
          />
          <TimeSetterInput
            setHour={setLastHour}
            setMins={setLastMins}
            text="to"
            hour={lastHour}
            mins={lastMins}
            disabled={!isChecked}
          />
        </div>

        <div className=" ">
          <DatesPicker
            startDate={startDate}
            endDate={endDate}
            setDateRange={setDateRange}
            isInline={false}
            isButton={false}
            disabled={!isChecked}
            setStartDateWithoutTime={setStartDateWithoutTime}
            setEndDateWithoutTime={setEndDateWithoutTime}
            isWithTime={true}
          />
          {/* <Timer expiryTimestamp={time} /> */}
        </div>
      </div>

      {calendarisValue && isChecked && (
        <div className="text-center w-full ">
        <DateRangeDisplay
        className=" max-xs:text-[11px] text-sm sm:text-base  text-center mt-4 inline-block "
          firstTitle="from"
          secondTitle="to"
          thirdTitle="on"
          firstHour={firstHour}
          firstMins={firstMins}
          lastHour={lastHour}
          lastMins={lastMins}
          startDateWithoutTime={startDateWithoutTime}
        />
        {endDateWithoutTime && <DateRangeDisplay
         className=" max-xs:text-[11px] text-sm sm:text-base  text-center mt-4 inline-block "
          firstTitle="until"
          secondTitle="to"
          thirdTitle="on"
          firstHour={firstHour}
          firstMins={firstMins}
          lastHour={lastHour}
          lastMins={lastMins}
          startDateWithoutTime={endDateWithoutTime}
        />}
      </div>
      )}
     
       
    </div>
  );
}
