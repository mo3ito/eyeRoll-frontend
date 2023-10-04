"use client";
import React, { useState } from "react";
import DatesPicker from "@/components/datePicker/datePicker";
import Rate from "@/components/shared/rate/rate";
import "react-datepicker/dist/react-datepicker.css";
import Rechart from "@/components/rechart/rechart";
import StatisticsDisplay from "@/components/rollReports/statisticsDisplay";

export default function RollReports() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  console.log(startDate);
  console.log(endDate);
  
  
  return (
    <div className="w-screen h-screen overflow-y-hidden  bg-sky-100 flex items-center gap-x-5 justify-center absolute px-20">
      <section className="w-9/12 border border-fuchsia-400  h-5/6 -translate-y-9 rounded-3xl flex justify-center flex-wrap gap-4 overflow-y-auto overflow-x-hidden px-2 py-8 bg-sky-50">
        <StatisticsDisplay />
      </section>

      <section className="w-3/12 bg-sky-50 rounded-3xl  -translate-y-9 h-5/6 ">
        <DatesPicker disabled={false} isWithTime={false} setDateRange={setDateRange} startDate={startDate} endDate={endDate} isButton={true} isInline={true}/>
        <Rechart />
        <Rate />
      </section>
    </div>
  );
}
