"use client";
import React, { useState , useContext , useEffect} from "react";
import { AuthContext } from "@/context/authContext";
import DatesPicker from "@/components/datePicker/datePicker";
import Rate from "@/components/shared/rate/rate";
import "react-datepicker/dist/react-datepicker.css";
import Rechart from "@/components/rechart/rechart";
import ShowDynamicReports from "@/components/reports/showDynamicReports";
import senderWithAuthId from "@/services/senderWithAuthId";
import useGetBusinessOwnerId from "@/hooks/useGet‌‌BusinessOwnerId";
import { InfosProps } from "@/types/authentication";
import LoadingPage from "@/components/loading/loadingPage";
import { toast } from "react-toastify";
import { useQuery} from "@tanstack/react-query";
import { GET_REPORTS_FOR_BUSINESS_OWNER } from "@/routeApi/endpoints";

export default function RollReports() {
  const [dateRange, setDateRange] = useState<[Date | null , Date | null]>([new Date(), null]);
  const [startDate, endDate] = dateRange;
  const [eyeRollPageSeen , setEyeRollPageSeen] = useState<string>("")
  const [onlineMenuPageSeen , setOnlineMenuPageSeen]=useState<string>("")
  const {infos} = useContext(AuthContext)
  const {businessOwnerId} = useGetBusinessOwnerId(infos as InfosProps)
  const [isLoading , setIsLoading]=useState<boolean>(false)
  const queryKey = ['getReports', [businessOwnerId]];

  const getReports = async ()=>{
    const body = {
      first_date: startDate?.toISOString(),
      last_date: endDate?.toISOString()
    }
    try {
      if(businessOwnerId && body){
        setIsLoading(true)
      const response =  await senderWithAuthId(GET_REPORTS_FOR_BUSINESS_OWNER, body , businessOwnerId)
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

  const { data : reports } = useQuery(businessOwnerId ? queryKey : [] , async ()=>{
    if(businessOwnerId){
      const body = {
        first_date: startDate?.toISOString(),
        last_date: endDate?.toISOString()
      }
     return await senderWithAuthId(GET_REPORTS_FOR_BUSINESS_OWNER, body , businessOwnerId)
    }
    return null
  })

  useEffect(()=>{
    const getReports = async ()=>{
      if(reports){
        await setEyeRollPageSeen(reports.data.eye_roll_seen)
        await setOnlineMenuPageSeen(reports.data.online_menu_seen)
      }
    }
     getReports()
  },[reports])

 const getReportsHandler = async ()=>{
  await getReports()
 }

  if(!businessOwnerId){
    return <LoadingPage/>
  }

  return (
    <>
    <div className="w-screen h-max md:h-screen pt-24  bg-sky-100 flex flex-col-reverse md:flex-row items-center gap-x-5 justify-center ">
      <div className="container flex flex-col-reverse items-center justify-center md:flex-row gap-x-3 mx-auto w-screen h-full  px-2 pt-10 md:pt-0  sm:px-4 md:px-6">
        
      <ShowDynamicReports
      onlineMenuPageSeen={onlineMenuPageSeen}
      eyeRollPageSeen={eyeRollPageSeen}  />

      <section className=" w-full sm:w-9/12 md:w-5/12 xl:w-4/12 2xl:4/12 md:bg-sky-50 rounded-3xl overflow-y-auto -translate-y-9 h-5/6 ">
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
    </div>
    </>
  );
}
