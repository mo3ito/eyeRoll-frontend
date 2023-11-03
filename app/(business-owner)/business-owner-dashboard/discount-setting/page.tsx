"use client";
import { useState , useContext, FormEvent, useEffect } from "react";
import DeterminationRange from "@/components/shared/range/determinationRange";
import DeterminationDiscountTime from "@/components/shared/range/determinationDiscountTime";
import DeterminationSpecialProduct from "@/components/shared/range/determinationSpecialProduct";
import ShowInformationRollSetting from "@/components/showInformationRollSetting/showInformationRollSetting";
import DeterminationWithoutDiscount from "@/components/shared/range/determinationWithoutDiscount";
import ButtonDefault from "@/components/shared/button/buttonDefault";
import DeterminationRangePeak from "@/components/shared/range/determinationRangePeak";
import DeterminationGift from "@/components/shared/range/determinationGift";
import { AuthContext } from "@/context/authContext";
import useGetBusinessOwnerId from "@/hooks/useGet‌‌BusinessOwnerId";
import { useRouter } from "next/navigation";
import { GET_ROLL_INFORMATION , SEND_ROLL_ADJUSTED , GET_ROLL_ADJUSTED} from "@/routeApi/endpoints";
import senderWithAuthId from "@/services/senderWithAuthId";
import getterWithAuthId from "@/services/getterWithAuthId";
import {useQuery , useQueryClient} from '@tanstack/react-query'
import moment from "moment";
import { SpecificSpecialProductsType } from "@/types/determinationSpecialProduct/determinationSpecialProductType";
import { toast } from "react-toastify";
import LoadingPage from "@/components/loading/loadingPage";
import { adjustedRollType } from "@/types/rollType/adjustedRollType";


export default function DeterminingDiscount() {
  const [minValueAllProducts, setMinValueAllProducts] = useState<number>(0);
  const [maxValueAllProducts, setMaxValueAllProducts] = useState<number>(0);
  const [minValuePeak, setMinValuePeak] = useState<number>(0);
  const [maxValuePeak, setMaxValuePeak] = useState<number>(0);
  const [isCheckeAllProducts, setIsCheckeAllProducts] =useState<boolean>(true);
  const [isCheckedDiscountTime, setIsCheckedDiscountTime] =useState<boolean>(true);
  const [specificSpecialProducts, setSpecificSpecialProducts] = useState<SpecificSpecialProductsType[]>([]);
  const [isCheckedSpecialProducts, setIsCheckedSpecialProducts] =useState<boolean>(true);
  const [isCheckedPeakTime, setIsCheckedPeakTime] = useState<boolean>(true);
  const [giftValue , setGiftValue]=useState<string>("")
  const [isCheckedGift, setIsCheckedGift] = useState<boolean>(true);
  const [numberPurchaseGift, setNumberPurchaseGift] = useState<number>(0);
  const [startDateWithoutTime, setStartDateWithoutTime] = useState<string | undefined>("");
  const [endDateWithoutTime, setEndDateWithoutTime] = useState<string | undefined>("");
  const [firstHour, setFirstHour] = useState<string>("00");
  const [firstMins, setFirstMins] = useState<string>("00");
  const [lastHour, setLastHour] = useState<string>("00");
  const [lastMins, setLastMins] = useState<string>("00");
  const [showInformation, setShowInformation] = useState<boolean>(false);
  const [textInformation, setTextInformation] = useState<string>("");
  const [dateRange, setDateRange] = useState<any>([null, null]);
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
  const [isCheckedWithoutDiscount , setIsCheckedWithoutdiscount]=useState<boolean>(false)
  const [specialProductName, setSpecialProductsName] = useState("");
  const [discountAmount, setDiscountAmount] = useState<number>(0);



  const [startDay , setStartDay]=useState<Date | null>()
  const [finishDay , setfinishDay]=useState<Date | null >()
  const [startDayTime , setStartTime]=useState<string>("")
  const [endDayTime , setEndDayTime]=useState<string>("")
  const [startDayPeakTime , setStartDayPeakTime]=useState<string>("")
  const [endDayPeakTime , setEndDayPeakTime]=useState<string>("")
  const [adjustedRoll , setAdjustedRoll]=useState<adjustedRollType>()
  const queryKey = ['all roll setting', businessOwnerId];
  

  useEffect(()=>{
    if(isCheckedWithoutDiscount){
      setIsCheckeAllProducts(false)
      setIsCheckedDiscountTime(false)
      setIsCheckedGift(false)
      setIsCheckedPeakTime(false)
      setIsCheckedSpecialProducts(false)
    } 
  },[isCheckedWithoutDiscount])

  useEffect(()=>{
    if(isCheckeAllProducts || isCheckedDiscountTime || isCheckedGift || isCheckedPeakTime || isCheckedSpecialProducts 
      ) {
        setIsCheckedWithoutdiscount(false)
        
      } else{
        setIsCheckedWithoutdiscount(true)
      }
  },[isCheckeAllProducts , isCheckedDiscountTime , isCheckedGift , isCheckedPeakTime ,isCheckedSpecialProducts , isCheckedWithoutDiscount])

  const {data:allRollSetting , isLoading}=useQuery(businessOwnerId ? queryKey : [],()=>{
    if (businessOwnerId) {
      return getterWithAuthId(GET_ROLL_ADJUSTED, businessOwnerId);
    }
    return null
  })
 
  useEffect(() => {
    if (allRollSetting) {
      setAdjustedRoll(allRollSetting?.data);
    }
  }, [allRollSetting]);

  useEffect(()=>{
    if (adjustedRoll) {
      if(+adjustedRoll?.maxPercentageAllProducts > 0){
        setIsCheckeAllProducts(true)
      }else{
        setIsCheckeAllProducts(false)
      }
      if(+adjustedRoll?.maxPercentagePeak > 0){
        setIsCheckedPeakTime(true)
      }else{
        setIsCheckedPeakTime(false)
      }
      if(adjustedRoll?.giftValue && +adjustedRoll?.numberPurchaseGift > 0){
        setIsCheckedGift(true)
      }else{
        setIsCheckedGift(false)
      }
      if(adjustedRoll?.specialProducts?.length >0 ){
        setIsCheckedSpecialProducts(true)
      }else{
        setIsCheckedSpecialProducts(false)
      }
      if( adjustedRoll?.firstHour === "" && adjustedRoll?.firstMins === "" && adjustedRoll?.lastHour === "" && adjustedRoll?.lastMins === ""){
        setIsCheckedDiscountTime(false)
      }else{
        setIsCheckedDiscountTime(true)
      }
      setMinValueAllProducts(+adjustedRoll?.minPercentageAllProducts || 0)
      setMaxValueAllProducts(+adjustedRoll?.maxPercentageAllProducts || 0)
      setFirstHour(adjustedRoll?.firstHour || "00");
      setFirstMins(adjustedRoll?.firstMins || "00");
      setLastHour(adjustedRoll?.lastHour || "00")
      setLastMins(adjustedRoll?.lastMins || "00")
      setDateRange([
        new Date(adjustedRoll?.startDate) || null,
        new Date(adjustedRoll?.endDate) || null
      ]);
      setFirstHourPeak(adjustedRoll?.firstHourPeak || "00")
      setFirstMinsPeak(adjustedRoll?.firstMinsPeak || "00")
      setLastHourPeak(adjustedRoll?.lastHourPeak || "00")
      setLastMinsPeak(adjustedRoll?.lastMinsPeak || "00")
      setMinValuePeak(+adjustedRoll?.minPercentagePeak || 0)
      setMaxValuePeak(+adjustedRoll?.maxPercentagePeak || 0)
      setGiftValue(adjustedRoll?.giftValue || "")
      setNumberPurchaseGift(+adjustedRoll?.numberPurchaseGift || 0)
      setSpecificSpecialProducts(adjustedRoll?.specialProducts || [])
    }
  },[adjustedRoll])
  console.log(allRollSetting);
  
  console.log(adjustedRoll);
  
  console.log(infos);
  console.log(isCheckedWithoutDiscount);
  
  console.log(specificSpecialProducts);
  
  useEffect(()=>{
    if( startDateWithoutTime && firstHour && firstMins){
      const startDay = moment(`${startDateWithoutTime} ${firstHour}:${firstMins}`, "DD/MM/YYYY HH:mm").toDate();
      setStartDay(startDay)
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


  console.log("start day",startDay);
  console.log("finish day", finishDay);
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
      isRollUse : isCheckedWithoutDiscount ? false : true ,
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

    const adjustedBody = {
      businessOwner_id: businessOwnerId,
      minPercentageAllProducts: minValueAllProducts,
      maxPercentageAllProducts : maxValueAllProducts,
      minPercentagePeak : minValuePeak,
      maxPercentagePeak:maxValuePeak,
      giftValue,
      numberPurchaseGift,
      startDate :startDate,
      endDate: endDate,
      firstHour,
      firstMins,
      lastHour,
      lastMins,
      firstHourPeak,
      firstMinsPeak,
      lastHourPeak,
      lastMinsPeak,
      specialProducts: specificSpecialProducts
    }
   
    

      if(!infos?.is_complete_information){
        router.push("/business-owner-dashboard/information")
        return;
      }else{
  
        if(!calendarisValue && isCheckedDiscountTime){
          toast.warn("Please enter the date")
          return;
        }
        if(minValueAllProducts > maxValueAllProducts){
          toast.warn("The maximum amount in discount all product is lower than its minimum")
          return;
        }
        if(minValueAllProducts === 0 && maxValueAllProducts === 0 && isCheckeAllProducts ){
          toast.warn("The maximum value in discount all product must be greater than zero")
          return;
        }
        if(giftValue && numberPurchaseGift === 0){
          toast.warn("The number purchase gift must be greater than zero")
          return;
        } 
        if(minValuePeak === 0 && maxValuePeak === 0 && isCheckedPeakTime){
          toast.warn("The maximum value in discount amount during peak must be greater than zero")
          return;
        }
        if(minValuePeak > maxValuePeak){
          toast.warn("The maximum amount in peak sales hours is lower than its minimum")
          return;
        }
        if( specialProductName && isCheckedSpecialProducts  && discountAmount === 0){
          toast.warn("Please fill in all the fields in the Discounts on special products section")
          return;
        }
        if((+numberPurchaseGift >0 && !giftValue) || (!numberPurchaseGift && giftValue)){
          toast.warn("Please fill in all the fields in the gift selection section")
          return;
        }

      try {
        setIsLoadingForApi(true);
      
        const responsePromise = senderWithAuthId(GET_ROLL_INFORMATION, body, businessOwnerId);
        const sendRollAdjustedPromise = senderWithAuthId(SEND_ROLL_ADJUSTED, adjustedBody, businessOwnerId);
      
        const [response, sendRollAdjusted] = await Promise.all([responsePromise, sendRollAdjustedPromise]);
      
        if (response?.status === 200 && sendRollAdjusted?.status === 200) {
          setIsLoadingForApi(false);
          console.log(response);
          console.log(sendRollAdjusted);
          toast.success("Settings applied successfully.");
        }
      } catch (error : any) {
        if (error.response?.status === 400) {
          const errorMessage = error?.response.data.message;
          setIsLoadingForApi(false);
          toast.error(errorMessage);
        } else {
          setIsLoadingForApi(false);
          toast.error("An error occurred while processing your request");
        }
      }
    }
  }

  if(!infos && isLoading && !adjustedRoll){
    return<LoadingPage/>
  }

  

  return (
    <>
      <div className="w-full min-h-screen h-max flex justify-center bg-sky-100 py-8 overflow-y-auto  ">
        <form onSubmit={sendInformation} className="flex w-5/12 h-max relative flex-col items-center border bg-sky-50 rounded-xl  px-6 py-2 shadow-lg">
          {!showInformation ? (
            <>

             <DeterminationWithoutDiscount   
              showInformation={() =>
             showInformationHandler(
              "In this section, you apply everything without discount."
              )}
              title='without discount' isChecked={isCheckedWithoutDiscount} setIsChecked={setIsCheckedWithoutdiscount}  
             />
           

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
                specialProductName={specialProductName}
                setSpecialProductsName={setSpecialProductsName}
                discountAmount={discountAmount}
                setDiscountAmount={setDiscountAmount}
                showInformation={() =>
                  showInformationHandler(
                    "In this section, you specify the discount amount for a specific product, which is entirely separate from the general discount."
                  )
                }
              />

              <ButtonDefault
                loading={isLoadingForApi}
                disabled={
                  (isCheckeAllProducts && isCheckedDiscountTime ) ||
                  (isCheckedSpecialProducts && isCheckedDiscountTime  ) ||
                  (isCheckedWithoutDiscount)
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
