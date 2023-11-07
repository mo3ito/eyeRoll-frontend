"use client";
import { ChangeEvent } from "react";
import { TimeSetterInputProps } from "@/types/timeSetterInput/timeSetterInputProps";

export default function TimeSetterInput({
  hour,
  mins,
  text,
  setHour,
  setMins,
  disabled,
}: TimeSetterInputProps) {
  const hourHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const parsedHour = parseInt(inputValue, 10);

    if (!isNaN(parsedHour) && parsedHour >= 0 && parsedHour <= 23) {
      const paddedHour = parsedHour.toString().padStart(2, "0");
      setHour(paddedHour);
    }
  };

  const minutsHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const parsedMins = parseInt(inputValue, 10);
    if (!isNaN(parsedMins) && parsedMins >= 0 && parsedMins <= 59) {
      const paddedMins = parsedMins.toString().padStart(2, "0");
      setMins(paddedMins);
    }
  };

  return (
    <>
      <div className="flex items-center ">
        <span className="px-1 ml-auto">{text}</span>
        <input
          value={hour}
          onChange={hourHandler}
          className=" shadow-md px-2 bg-transparent max-xs:text-sm  max-xs:h-8 w-16 h-8 sm:w-16 sm:h-10 border rounded-lg border-fuchsia-300 outline-none mb-2 sm:mb-0"
          type="number"
          disabled={disabled}
        />

        <span className="mx-1">:</span>
        <input
          value={mins}
          onChange={minutsHandler}
          className=" shadow-md px-2 bg-transparent max-xs:text-sm  max-xs:h-8 w-16 h-8 sm:w-16 sm:h-10 border rounded-lg border-fuchsia-300 outline-none mb-2 sm:mb-0"
         
          type="number"
          disabled={disabled}
        />
      </div>
    </>
  );
}
