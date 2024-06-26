"use client";
import { ChangeEvent, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, startOfDay } from "date-fns";
import { DatesPickerProps } from "@/types/datesPickerType/datesPickerType";
import ButtonDefault from "../shared/button/buttonDefault";

export default function DatesPicker({
  isInline = true,
  isButton = true,
  setDateRange,
  startDate,
  endDate,
  disabled,
  setStartDateWithoutTime,
  setEndDateWithoutTime,
  isWithTime,
  getReportsClick,
  isLoadingButton
}: DatesPickerProps) {
  const changeHandler = (update: any) => {
    setDateRange(update);
  };


  useEffect(() => {
    if (startDate || (endDate && isWithTime)) {
      const formattedStartDate = startDate
        ? format(startOfDay(startDate), "dd/MM/yyyy")
        : "";
      const formattedEndDate = endDate
        ? format(startOfDay(endDate), "dd/MM/yyyy")
        : "";
      setStartDateWithoutTime?.(formattedStartDate);
      setEndDateWithoutTime?.(formattedEndDate);
    }
  }, [startDate, endDate, isWithTime]);
  console.log("start date", startDate);
  console.log("end date", endDate);

  return (
    <>
      <DatePicker
        placeholderText="Enter the date"
        minDate={!isInline ? new Date() : undefined} 
        selected={startDate}
        onChange={changeHandler}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline={isInline}
        disabled={disabled}
        isClearable={true}
        className=" max-xs:w-44 max-xs:text-[12px] max-xs:px-1 w-58 h-10 rounded-lg bg-transparent border border-fuchsia-400  px-3 outline-none shadow-md"
      />

      {isButton && (
        <ButtonDefault loading={isLoadingButton} text="confirmation" onClick={getReportsClick} className="bg-indigo-400 w-full h-10 hover:bg-indigo-500 text-white rounded-md -translate-y-2 hover:font-semibold "/>
          
        
      )}
    </>
  );
}
