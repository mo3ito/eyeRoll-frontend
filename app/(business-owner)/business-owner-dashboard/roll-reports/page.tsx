"use client";
import React, { useState } from "react";
import DatesPicker from "@/components/datePicker/datePicker";
import Rate from "@/components/shared/rate/rate";
import "react-datepicker/dist/react-datepicker.css";
import Rechart from "@/components/rechart/rechart";
import StatisticsDisplay from "@/components/rollReports/statisticsDisplay";

export default function RollReports() {
  const [dateRange, setDateRange] = useState<[Date | null , Date | null]>([null, null]);
  const [startDate, endDate] = dateRange;

  console.log(startDate);
  console.log(endDate);

  return (
    <div className="w-screen h-max md:h-screen   bg-sky-100 flex flex-col-reverse md:flex-row items-center gap-x-5 justify-center ">
      <div className="container flex flex-col-reverse items-center justify-center md:flex-row gap-x-3 mx-auto w-screen h-full  px-2 pt-10 md:pt-0  sm:px-4 md:px-6">
        
         <section className=" w-full sm:w-9/12 md:w-7/12 xl:w-8/12  2xl:w-9/12 h-5/6 -translate-y-9 rounded-3xl flex justify-center flex-wrap gap-4 overflow-y-auto overflow-x-hidden px-2 py-8 bg-sky-50">
        <StatisticsDisplay />
      </section>

      <section className=" w-full sm:w-9/12 md:w-5/12 xl:w-4/12 2xl:4/12 md:bg-sky-50 rounded-3xl  -translate-y-9 h-5/6 ">
        <DatesPicker
          disabled={false}
          isWithTime={false}
          setDateRange={setDateRange}
          startDate={startDate}
          endDate={endDate}
          isButton={true}
          isInline={true}
        />
        <Rechart />
        <Rate />
      </section> 

      </div>
      {/* <section className=" md:w-6/12 sm:bg-red-200 w-full sm:w-10/12 lg:w-7/12 xl:w-8/12  2xl:w-9/12 h-5/6 -translate-y-9 rounded-3xl flex justify-center flex-wrap gap-4 overflow-y-auto overflow-x-hidden px-2 py-8 bg-sky-50">
        <StatisticsDisplay />
      </section>

      <section className=" max-xs:w-11/12  w-10/12 sm:w-9/12 bg-green-200 md:w-6/12 xl:w-4/12  2xl:w-3/12 md:bg-sky-50 rounded-3xl  -translate-y-9 h-5/6 ">
        <DatesPicker
          disabled={false}
          isWithTime={false}
          setDateRange={setDateRange}
          startDate={startDate}
          endDate={endDate}
          isButton={true}
          isInline={true}
        />
        <Rechart />
        <Rate />
      </section> */}
    </div>
  );
}
