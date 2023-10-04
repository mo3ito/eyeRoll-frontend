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
  isWithTime,
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
        selected={startDate}
        onChange={changeHandler}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline={isInline}
        disabled={disabled}
        isClearable={true}
        className="h-10 rounded-lg bg-transparent border border-fuchsia-400 w-58 px-3 outline-none shadow-md"
      />

      {isButton && (
        <button className="bg-indigo-400 w-full h-10 hover:bg-indigo-500 text-white rounded-md -translate-y-2 hover:font-semibold ">
          confirmation
        </button>
      )}
    </>
  );
}
