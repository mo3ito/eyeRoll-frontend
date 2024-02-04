'use client'
import { ChangeEvent , useEffect } from "react";
import Range from "./range";
import TimeSetterInput from "../timeSetterInput/timeSetterInput";
import InformationButton from "@/components/informationButton/informationButton";
import CheckBox from "../checkeBox/checkBox";
import { DeterminationRangePeakProps } from "@/types/rangePeakProps/rangePeakProps";


export default function DeterminationRangePeak({
  setMinValuePeak,
  setMaxValuePeak,
  minValuePeak,
  maxValuePeak,
  isChecked,
  setIsChecked,
  title,
  showInformation,
  firstHourPeak,
  setFirstHourPeak,
  firstMinsPeak,
  setFirstMinsPeak,
  lastHourPeak,
  setLastHourPeak,
  lastMinsPeak,
  setLastMinsPeak,
}: DeterminationRangePeakProps) {
  const minValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    const clampedValue = Math.min(100, Math.max(0, newValue));
    setMinValuePeak(clampedValue);
  };

  const maxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    const clampedValue = Math.min(100, Math.max(0, newValue));
    setMaxValuePeak(clampedValue);
  };

  const changeProductsHandler = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setIsChecked(event.target.checked);
  };

  useEffect(()=>{
    if(!isChecked){
      setMinValuePeak(0)
      setMaxValuePeak(0)
      setLastHourPeak("")
      setLastMinsPeak("")
      setFirstHourPeak("")
      setFirstMinsPeak("")
    }else{
      setLastHourPeak("00")
      setLastMinsPeak("00")
      setFirstHourPeak("00")
      setFirstMinsPeak("00")
    }
  },[isChecked])


  return (
    <>
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
        <div className=" flex flex-col-reverse gap-y-1 sm:flex-row  justify-center items-center h-max my-2 sm:my-4 ">
          <div className=" sm:h-max sm:pb-6  md:pb-0 md:h-full  flex justify-center gap-x-3  pl-10 sm:pl-0 ">
            <div className="flex items-center flex-col md:flex-row">
            <span className=" px-1">min</span>
            <div className=" border border-fuchsia-300 rounded-lg shadow-md">
          <input
            disabled={!isChecked}
            className="  pl-2 max-xs:text-sm h-8 w-12 sm:w-14 bg-transparent  outline-none  sm:h-10"
            onChange={minValueHandler}
            value={minValuePeak}
            type="number"
          />
          <span className="pr-1">%</span>
          </div>
            </div>
       
            <div className="flex items-center flex-col md:flex-row">
          <span className=" px-1">max</span>{" "}
          <div className=" border border-fuchsia-300 rounded-lg shadow-md">
          <input
            disabled={!isChecked}
            className="  pl-2 max-xs:text-sm h-8 w-12 sm:w-14 bg-transparent  outline-none  sm:h-10"
            onChange={maxValueHandler}
            value={maxValuePeak}
            type="number"
          />
           <span className="pr-1">%</span>
          </div>
          </div>
       
          </div>


        <div className=" flex flex-col sm:flex-row">

        
          <TimeSetterInput
            disabled={!isChecked}
            setHour={setFirstHourPeak}
            setMins={setFirstMinsPeak}
            hour={firstHourPeak}
            mins={firstMinsPeak}
            text="from"
          />
          <TimeSetterInput
            disabled={!isChecked}
            setHour={setLastHourPeak}
            setMins={setLastMinsPeak}
            hour={lastHourPeak}
            mins={lastMinsPeak}
            text="to"
          />
        </div>
        </div>
        <Range
          disable={!isChecked}
          valueGap={0}
          minValue={minValuePeak}
          setMinValue={setMinValuePeak}
          maxValue={maxValuePeak}
          setMaxValue={setMaxValuePeak}
        />
      </div>
    </>
  );
}
