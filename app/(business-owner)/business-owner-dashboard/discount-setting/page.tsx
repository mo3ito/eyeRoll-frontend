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
  const [firstDate , setFirstDate]=useState<Date | undefined>()
  const [lastDate , setLastDate]=useState<Date | undefined>()
  const [firstDatePeak , setFirstDatePeak]=useState<Date | undefined>()
  const [lastDatePeak , setLastDatePeak]=useState<Date | undefined>()
  const [calendarisValue, setCalendarIsValue] = useState<boolean>(false);
  const {infos}=useContext(AuthContext)
  const {businessOwnerId}=useGetBusinessOwnerId(infos)
  const router = useRouter()
  const [isLoadingForApi , setIsLoadingForApi]=useState<boolean>(false)


  console.log(infos);
  
 
  

  // console.log("all", isCheckeAllProducts);
  // console.log("some", isCheckedNumbersProduct);
  // console.log("special" , isCheckedSpecialProducts );

  // console.log("minValueAllProducts",minValueAllProducts);
  // console.log("maxValueAllProducts",maxValueAllProducts);
  // console.log("minVlueNumberProducts" , minValueNumberProducts);
  // console.log("maxVlueNumberProducts" , maxValueNumberProducts);

  console.log("start date", startDateWithoutTime);
  console.log("end date", endDateWithoutTime);
 
  useEffect(()=>{
    if(startDateWithoutTime && firstHour && firstMins ){
      const firstDateData = moment(`${startDateWithoutTime} ${firstHour}:${firstMins}`, "DD/MM/YYYY HH:mm").toDate();
    setFirstDate(firstDateData)
    }
  },[startDateWithoutTime , firstHour , firstMins ])

  useEffect(()=>{
    if(endDateWithoutTime && lastHour && lastMins ){
      const lastDateData = moment(`${endDateWithoutTime} ${lastHour}:${lastMins}`, "DD/MM/YYYY HH:mm").toDate();
    setLastDate(lastDateData)
    return;
    } 
    if(!endDateWithoutTime && lastHour && lastMins && startDateWithoutTime ){
      const lastDateData = moment(`${startDateWithoutTime} ${lastHour}:${lastMins}`, "DD/MM/YYYY HH:mm").toDate();
      setLastDate(lastDateData)
    }
  },[endDateWithoutTime , lastHour , lastMins , startDateWithoutTime])

  useEffect(()=>{
    if(startDateWithoutTime && firstHourPeak && firstMinsPeak ){
      const firstDatePeakeDate = moment(`${startDateWithoutTime} ${firstHourPeak}:${firstMinsPeak}`, "DD/MM/YYYY HH:mm").toDate();
      setFirstDatePeak(firstDatePeakeDate)
    }
  },[startDateWithoutTime , firstHourPeak , firstMinsPeak  ])



  useEffect(()=>{
    if(endDateWithoutTime && lastHourPeak && lastMinsPeak ){
      const lastDatePeakData = moment(`${endDateWithoutTime} ${lastHourPeak}:${lastMinsPeak}`, "DD/MM/YYYY HH:mm").toDate();
    setLastDatePeak(lastDatePeakData)
    return;
    } 
    if(!endDateWithoutTime && lastHourPeak && lastMinsPeak && startDateWithoutTime ){
      const lastDatePeakData = moment(`${startDateWithoutTime} ${lastHourPeak}:${lastMinsPeak}`, "DD/MM/YYYY HH:mm").toDate();
      setLastDatePeak(lastDatePeakData)
    }
  },[endDateWithoutTime , lastHourPeak , lastMinsPeak , startDateWithoutTime])

  console.log("first date", firstDate);
  console.log("last date", lastDate);
  console.log("first date peak", firstDatePeak);
  console.log("last date peak", lastDatePeak);
  console.log(lastMinsPeak);
  console.log("special products", specificSpecialProducts);
  
  
  
  
  
  

  console.log(textInformation);
  console.log(maxValueAllProducts);
  

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
      min_percentage_peak: minValuePeak.toString(),
      max_percentage_peak:maxValuePeak.toString(),
      first_date:firstDate,
      last_date:lastDate,
      first_date_peak : firstDatePeak,
      last_date_peak: lastDatePeak,
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
