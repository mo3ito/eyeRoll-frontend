"use client";
import { useState , useContext, FormEvent, useEffect } from "react";
import DeterminationRange from "@/components/shared/range/determinationRange";
import DeterminationDiscountTime from "@/components/shared/range/determinationDiscountTime";
import DeterminationSpecialProduct from "@/components/shared/range/determinationSpecialProduct";
import ShowInformationRollSetting from "@/components/showInformationRollSetting/showInformationRollSetting";
import ButtonDefault from "@/components/shared/button/buttonDefault";
import DeterminationRangePeak from "@/components/shared/range/determinationRangePeak";
import DeterminationGift from "@/components/shared/range/determinationGift";
import { AuthContext } from "@/context/authContext";
import useGetBusinessOwnerId from "@/hooks/useGet‌‌BusinessOwnerId";
import { useRouter } from "next/navigation";
import { GET_ROLL_INFORMATION } from "@/routeApi/endpoints";
import senderWithAuthId from "@/services/senderWithAuthId";
import moment from "moment";
import { SpecificSpecialProductsType } from "@/types/determinationSpecialProduct/determinationSpecialProductType";
import { toast } from "react-toastify";
import Loading from "@/components/loading/loading";
import LoadingPage from "@/components/loading/loadingPage";

export default function DeterminingDiscount() {
  const [minValueAllProducts, setMinValueAllProducts] = useState<number>(0);
  const [maxValueAllProducts, setMaxValueAllProducts] = useState<number>(0);
  const [minValuePeak, setMinValuePeak] = useState<number>(0);
  const [maxValuePeak, setMaxValuePeak] = useState<number>(0);
  const [isCheckeAllProducts, setIsCheckeAllProducts] =useState<boolean>(false);
  const [isCheckedDiscountTime, setIsCheckedDiscountTime] =useState<boolean>(false);
  const [specificSpecialProducts, setSpecificSpecialProducts] = useState<SpecificSpecialProductsType[]>([]);
  const [isCheckedSpecialProducts, setIsCheckedSpecialProducts] =useState<boolean>(false);
  const [isCheckedPeakTime, setIsCheckedPeakTime] = useState<boolean>(false);
  const [giftValue , setGiftValue]=useState<string>("")
  const [isCheckedGift, setIsCheckedGift] = useState<boolean>(false);
  const [numberPurchaseGift, setNumberPurchaseGift] = useState<number>(0);
  const [startDateWithoutTime, setStartDateWithoutTime] = useState<string | undefined>("");
  const [endDateWithoutTime, setEndDateWithoutTime] = useState<string | undefined>("");
  const [firstHour, setFirstHour] = useState<string>("00");
  const [firstMins, setFirstMins] = useState<string>("00");
  const [lastHour, setLastHour] = useState<string>("00");
  const [lastMins, setLastMins] = useState<string>("00");
  const [showInformation, setShowInformation] = useState<boolean>(false);
  const [textInformation, setTextInformation] = useState<string>("");
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [firstHourPeak, setFirstHourPeak] = useState<string>("00");
  const [firstMinsPeak, setFirstMinsPeak] = useState<string>("00");
  const [lastHourPeak, setLastHourPeak] = useState<string>("00");
  const [lastMinsPeak, setLastMinsPeak] = useState<string>("00");
  const [calendarisValue, setCalendarIsValue] = useState<boolean>(false);
  const {infos}=useContext(AuthContext)
  const {businessOwnerId}=useGetBusinessOwnerId(infos)
  const router = useRouter()
  const [isLoadingForApi , setIsLoadingForApi]=useState<boolean>(false)



  const [startDay , setstartDay]=useState<Date | undefined>()
  const [finishDay , setfinishDay]=useState<Date | undefined>()
  const [startDayTime , setStartTime]=useState<string>("")
  const [endDayTime , setEndDayTime]=useState<string>("")
  const [startDayPeakTime , setStartDayPeakTime]=useState<string>("")
  const [endDayPeakTime , setEndDayPeakTime]=useState<string>("")
 

  console.log(infos);
  
  useEffect(()=>{
    if( startDateWithoutTime && firstHour && firstMins){
      const startDay = moment(`${startDateWithoutTime} ${firstHour}:${firstMins}`, "DD/MM/YYYY HH:mm").toDate();
      setstartDay(startDay)
    }
  },[ startDateWithoutTime , firstHour , firstMins])

  useEffect(()=>{
    if( endDateWithoutTime && lastHour && lastMins){
      const finishDay = moment(`${endDateWithoutTime} ${lastHour}:${lastMins}`, "DD/MM/YYYY HH:mm").toDate();
      setfinishDay(finishDay)
    }
  },[ endDateWithoutTime , lastHour , lastMins])

  useEffect(()=>{
    if(startDateWithoutTime && firstHour && firstMins){
      const startDayTime = `${firstHour}:${firstMins}`
      setStartTime(startDayTime)
    }
  },[startDateWithoutTime , firstHour , firstMins])

  useEffect(()=>{
    if(endDateWithoutTime && lastHour && lastMins){
      const endDayTime = `${lastHour}:${lastMins}`
      setEndDayTime(endDayTime)
    }
  },[endDateWithoutTime , lastHour , lastMins])

  useEffect(()=>{
    if(startDateWithoutTime && firstHourPeak && firstMinsPeak){
      const startDayPeakTime = `${firstHourPeak}:${firstMinsPeak}`
      setStartDayPeakTime(startDayPeakTime)
    }
  },[startDateWithoutTime , firstHourPeak , firstMinsPeak])

  useEffect(()=>{
    if(endDateWithoutTime && lastHourPeak && lastMinsPeak){
      const endDayPeakTime = `${lastHourPeak}:${lastMinsPeak}`
      setEndDayPeakTime(endDayPeakTime)
    }
  },[endDateWithoutTime , lastHourPeak , lastMinsPeak])


  console.log("start day1",startDay);
  console.log("finish day1", finishDay);
  console.log("start time",startDayTime);
  console.log("end time",endDayTime);
  console.log("start peak time",startDayPeakTime);
  console.log("end peak time",endDayPeakTime);

  
  
  
  
  
  
  
  
  
  


  const showInformationHandler = (information: string) => {
    setShowInformation(true);
    setTextInformation(information);
  };

  const sendInformation = async (event : FormEvent)=>{
    event.preventDefault()
 
    const body = {
      businessOwner_name: infos?.name,
      businessOwner_last_name:infos?.last_name,
      businessOwner_id: businessOwnerId,
      min_percentage:minValueAllProducts.toString(),
      max_percentage:maxValueAllProducts.toString(),
      start_day:startDay,
      finish_day:finishDay,
      start_day_time:startDayTime,
      end_day_time:endDayTime,
      start_day_peak_time:startDayPeakTime,
      end_day_peak_time:endDayPeakTime,
      min_percentage_peak:minValuePeak.toString(),
      max_percentage_peak:maxValuePeak.toString(),
      special_product_discount : specificSpecialProducts,
      gift: giftValue,
      number_Purchase_gift:numberPurchaseGift
    }

   
    

      if(!infos?.is_complete_information){
        router.push("/business-owner-dashboard/information")
        return;
      }else{
  
        if(!calendarisValue){
          toast.warn("Please enter the date")
          return;
        }
        if(minValueAllProducts > maxValueAllProducts){
          toast.warn("The maximum amount in discount all product is lower than its minimum")
          return;
        }
        if(minValueAllProducts === 0 && maxValueAllProducts === 0){
          toast.warn("The maximum value in discount all product must be greater than zero")
          return;
        }
        if(giftValue && numberPurchaseGift === 0){
          toast.warn("The number purchase gift must be greater than zero")
          return;
        }
        if(minValuePeak > maxValuePeak){
          toast.warn("The maximum amount in peak sales hours is lower than its minimum")
          return;
        }

        try {
          setIsLoadingForApi(true)
          const response = await senderWithAuthId(GET_ROLL_INFORMATION , body , businessOwnerId)
          if(response?.status === 200){
            setIsLoadingForApi(false)
            console.log(response);
            toast.success("Settings applied successfully.")
          }
        } catch (error : any) {
          if(error.response?.status === 400){
            const errorMessage = error?.response.data.message;
            setIsLoadingForApi(false)
            toast.error(errorMessage)
          } else{
            setIsLoadingForApi(false)
            toast.error("An error occurred while processing your request");
          }
        
      }
    }
  }

  if(!infos){
    return<LoadingPage/>
  }

  return (
    <>
      <div className="w-full h-screen flex justify-center bg-sky-100 pt-8 overflow-y-auto  ">
        <form onSubmit={sendInformation} className="flex w-5/12 h-max relative flex-col items-center border bg-sky-50 rounded-xl  px-6 py-2 shadow-lg">
          {!showInformation ? (
            <>
              <DeterminationRange
                setMinValue={setMinValueAllProducts}
                setMaxValue={setMaxValueAllProducts}
                minValue={minValueAllProducts}
                maxValue={maxValueAllProducts}
                isChecked={isCheckeAllProducts}
                setIsChecked={setIsCheckeAllProducts}
                title="Determine the overall discount on all products"
                showInformation={() =>
                  showInformationHandler(
                    "In this section, you apply your desired minimum and maximum discount amounts."
                  )
                }
              />

              <DeterminationDiscountTime
                title="Setting the discount period"
                isChecked={isCheckedDiscountTime}
                setIsChecked={setIsCheckedDiscountTime}
                firstHour={firstHour}
                firstMins={firstMins}
                setFirstMins={setFirstMins}
                setFirstHour={setFirstHour}
                setLastHour={setLastHour}
                lastHour={lastHour}
                lastMins={lastMins}
                setLastMins={setLastMins}
                startDate={startDate}
                endDate={endDate}
                calendarisValue={calendarisValue}
                setCalendarIsValue={setCalendarIsValue}
                setStartDateWithoutTime={setStartDateWithoutTime}
                setEndDateWithoutTime={setEndDateWithoutTime}
                startDateWithoutTime={startDateWithoutTime}
                endDateWithoutTime={endDateWithoutTime}
                setDateRange={setDateRange}
                showInformation={() =>
                  showInformationHandler(
                    "In this section, you specify the time range during which your items are discounted, including the date and time."
                  )
                }
              />

              <DeterminationRangePeak
                setMinValuePeak={setMinValuePeak}
                setMaxValuePeak={setMaxValuePeak}
                minValuePeak={minValuePeak}
                maxValuePeak={maxValuePeak}
                isChecked={isCheckedPeakTime}
                setIsChecked={setIsCheckedPeakTime}
                title="Setting the discount amount during peak sales hours"
                firstHourPeak={firstHourPeak}
                setFirstHourPeak={setFirstHourPeak}
                firstMinsPeak={firstMinsPeak}
                setFirstMinsPeak={setFirstMinsPeak}
                lastHourPeak={lastHourPeak}
                setLastHourPeak={setLastHourPeak}
                lastMinsPeak={lastMinsPeak}
                setLastMinsPeak={setLastMinsPeak}
                showInformation={() =>
                  showInformationHandler(
                    "In this section, you can specify the discount amount during your peak sales hours."
                  )
                }
              />

              <DeterminationGift
                isChecked={isCheckedGift}
                setIsChecked={setIsCheckedGift}
                giftValue={giftValue}
                setGiftValue={setGiftValue}
                numberPurchaseGift={numberPurchaseGift}
                setNumberPurchaseGift={setNumberPurchaseGift}
                showInformation={() => showInformationHandler("hi")}

              />

              <DeterminationSpecialProduct
                title="Discounts on special products"
                specificSpecialProducts={specificSpecialProducts}
                setSpecificSpecialProducts={setSpecificSpecialProducts}
                setIsChecked={setIsCheckedSpecialProducts}
                isChecked={isCheckedSpecialProducts}
                showInformation={() =>
                  showInformationHandler(
                    "In this section, you specify the discount amount for a specific product, which is entirely separate from the general discount."
                  )
                }
              />

              <ButtonDefault
                loading={isLoadingForApi}
                disabled={
                  (isCheckeAllProducts && isCheckedDiscountTime) ||
                  (isCheckedSpecialProducts && isCheckedDiscountTime)
                    ? false
                    : true
                }
                
                text="send"
                className="h-12 text-lg bg-fuchsia-400 hover:bg-fuchsia-500 rounded-lg mt-1 "
                isScale={true}
              />
            </>
          ) : (
            <ShowInformationRollSetting
              textInformation={textInformation}
              setShowInformation={setShowInformation}
            />
          )}
        </form>
      </div>
    </>
  );
}
