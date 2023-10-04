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
}: DeterminationDiscountTimeProps) {
  console.log("first hour", firstHour);
  console.log("first min", firstMins);
  console.log("last hour", lastHour);
  console.log("last min", lastMins);

  const [calendarisValue, setCalendarIsValue] = useState<boolean>(false);

  useEffect(() => {
    if (startDate !== null || endDate !== null) {
      setCalendarIsValue(true);
    } else {
      setCalendarIsValue(false);
    }
  }, [calendarisValue, startDate, endDate]);
  console.log(calendarisValue);

  //   const firstSelectedDate = new Date(startDate);
  // const endSelectedDate = new Date(endDate);

  // محاسبه تفاوت زمانی به میلی‌ثانیه
  // const timeDifferenceInMillis = Math.abs(endSelectedDate.getTime() - firstSelectedDate.getTime());
  // const timeDifferenceInMinutes = Math.floor(timeDifferenceInMillis / (1000 * 60));

  // console.log(timeDifferenceInMinutes);

  // const time = new Date();
  // time.setMinutes(time.getMinutes() + 1440);

  const changeProductsHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div
      className={`${
        isChecked ? "bg-indigo-100 " : "bg-gray-200"
      } w-full p-4 rounded-xl `}
    >
      <div className="flex items-center justify-center ">
        <div className="">
          <InformationButton onClick={showInformation} />
          <p className="inline-block">{title}</p>
        </div>
        <CheckBox
          onChange={(event) => changeProductsHandler(event)}
          checked={isChecked}
          backgroundClasses={isChecked ? "bg-pink-400" : "bg-pink-300"}
          sizeClasses="w-12 h-6 ml-auto "
          circleClasses="w-4 h-4 bg-gray-200 peer-checked:translate-x-6  peer-checked:bg-violet-500"
        />
      </div>

      <div className="flex  mt-2">
        <div className="flex  justify-center">
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

        <div className=" w-max h-max ml-auto mr-20     ">
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

      {calendarisValue && (
        <div className="text-center w-full ">
        <DateRangeDisplay
        className="text-center mt-6 inline-block "
          firstTitle="sinc"
          secondTitle="to"
          thirdTitle="on"
          firstHour={firstHour}
          firstMins={firstMins}
          lastHour={lastHour}
          lastMins={lastMins}
          startDateWithoutTime={startDateWithoutTime}
        />
        {endDateWithoutTime && <DateRangeDisplay
        className="text-center mt-6 inline-block "
          firstTitle="from"
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
