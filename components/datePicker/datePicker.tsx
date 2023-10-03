"use client";
import { ChangeEvent, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, startOfDay } from "date-fns";
import { DatesPickerProps } from "@/types/datesPickerType/datesPickerType";

export default function DatesPicker({
  isInline = true,
  isButton = true,
  setDateRange,
  startDate,
  endDate,
  disabled,
  setStartDateWithoutTime,
  setEndDateWithoutTime,
}: DatesPickerProps) {

  
  const changeHandler = (update : any ) => {
    setDateRange(update);
  };

  useEffect(() => {
    if (startDate || endDate) {
      const formattedStartDate = startDate
        ? format(startOfDay(startDate), "dd/MM/yyyy")
        : "";
      const formattedEndDate = endDate
        ? format(startOfDay(endDate), "dd/MM/yyyy")
        : "";
      setStartDateWithoutTime(formattedStartDate);
      setEndDateWithoutTime(formattedEndDate);
    }
  }, [startDate, endDate]);
  console.log("start date", startDate);
  console.log("end date", endDate);

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={changeHandler}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline={isInline}
        disabled={disabled}
        isClearable={true}
      />

      {isButton && (
        <button className="bg-indigo-400 w-full h-10 hover:bg-indigo-500 text-white rounded-md -translate-y-2 hover:font-semibold ">
          confirmation
        </button>
      )}
    </>
  );
}
