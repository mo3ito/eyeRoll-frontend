"use client";
import React, { useState , useContext , useEffect} from "react";
import { AuthContext } from "@/context/authContext";
import DatesPicker from "@/components/datePicker/datePicker";
import Rate from "@/components/shared/rate/rate";
import "react-datepicker/dist/react-datepicker.css";
import Rechart from "@/components/rechart/rechart";
import StatisticsDisplay from "@/components/rollReports/statisticsDisplay";
import senderWithAuthId from "@/services/senderWithAuthId";
import useGetBusinessOwnerId from "@/hooks/useGet‌‌BusinessOwnerId";
import { InfosProps } from "@/types/authentication";
import LoadingPage from "@/components/loading/loadingPage";
import { toast } from "react-toastify";

export default function RollReports() {
  const [dateRange, setDateRange] = useState<[Date | null , Date | null]>([new Date(), null]);
  const [startDate, endDate] = dateRange;
  const [eyeRollPageSeen , setEyeRollPageSeen] = useState<string>("")
  const [onlineMenuPageSeen , setOnlineMenuPageSeen]=useState<string>("")
  const {infos} = useContext(AuthContext)
  const {businessOwnerId} = useGetBusinessOwnerId(infos as InfosProps)
  const [isLoading , setIsLoading]=useState<boolean>(false)

  const getReports = async ()=>{
    const body = {
      first_date: startDate?.toISOString(),
      last_date: endDate?.toISOString()
    }
    try {
      if(businessOwnerId && body){
        setIsLoading(true)
      const response =  await senderWithAuthId("http://localhost:5000/reports/seen-users", body , businessOwnerId)
      console.log(response);
      if(response?.status === 200){
       await setEyeRollPageSeen(response.data.eye_roll_seen)
       await setOnlineMenuPageSeen(response.data.online_menu_seen)
       setIsLoading(false)
      }
      }
    } catch (error : any) {
      if (error.response.status === 400) {
        setIsLoading(false);
        const errorMessage = error.response.data.message;
        toast.error(errorMessage);
      } else {
        setIsLoading(false);
        toast.error("An error occurred while processing your request");
      }
    }
    
  }

  useEffect(()=>{

    const getAllReports= async ()=>{
     await getReports()
    }
    if(businessOwnerId){
      getAllReports()
    }

  },[businessOwnerId ])

 const getReportsHandler = async ()=>{
  console.log("hello");
  await getReports()
 }

  console.log(dateRange);

  // useEffect(()=>{
   
  // },[startDate])
  
  console.log("startDate" , startDate);
  console.log("endDate", endDate);

  if(!businessOwnerId){
    return <LoadingPage/>
  }

  return (
    <>
    <div className="w-screen h-max md:h-screen pt-24  bg-sky-100 flex flex-col-reverse md:flex-row items-center gap-x-5 justify-center ">
      <div className="container flex flex-col-reverse items-center justify-center md:flex-row gap-x-3 mx-auto w-screen h-full  px-2 pt-10 md:pt-0  sm:px-4 md:px-6">
        
         <section className=" w-full sm:w-9/12 md:w-7/12 xl:w-8/12  2xl:w-9/12 h-5/6 -translate-y-9 rounded-3xl flex justify-center flex-wrap gap-4 overflow-y-auto overflow-x-hidden px-2 py-8 bg-sky-50">
        <StatisticsDisplay onlineMenuPageSeen={onlineMenuPageSeen} eyeRollPageSeen={eyeRollPageSeen}  />
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
          getReportsClick={getReportsHandler}
          isLoadingButton={isLoading}
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
    </>
  );
}
