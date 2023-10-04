import React from "react";

interface DateRangeDisplay {
  firstHour: string;
  firstMins: string;
  lastHour: string;
  lastMins: string;
  firstTitle: string;
  secondTitle: string;
  thirdTitle: string;
  className:string
  
  startDateWithoutTime: string | undefined;
}

export default function DateRangeDisplay({
  firstHour,
  firstMins,
  lastHour,
  lastMins,
  startDateWithoutTime,
  firstTitle,
  secondTitle,
  thirdTitle,
  className,
}: DateRangeDisplay) {
  return (
    <div className={className}>
      <span>{firstTitle}</span>
      <span className="px-2 text-zinc-500">
        {firstHour}:{firstMins}
      </span>
      <span>{secondTitle}</span>
      <span className="px-2 text-zinc-500">
        {lastHour}:{lastMins}
      </span>
      <span>{thirdTitle}</span>
      <span className="px-2 text-zinc-500">{startDateWithoutTime}</span>
    </div>
  );
}
