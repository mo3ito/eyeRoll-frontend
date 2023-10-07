"use client";
import { useState } from "react";
import DeterminationRange from "@/components/shared/range/determinationRange";
import DeterminationDiscountTime from "@/components/shared/range/determinationDiscountTime";
import DeterminationSpecialProduct from "@/components/shared/range/determinationSpecialProduct";
import ShowInformationRollSetting from "@/components/showInformationRollSetting/showInformationRollSetting";
import ButtonDefault from "@/components/shared/button/buttonDefault";
import DeterminationRangePeak from "@/components/shared/range/determinationRangePeak";
import DeterminationGift from "@/components/shared/range/determinationGift";

export default function DeterminingDiscount() {
  const [minValueAllProducts, setMinValueAllProducts] = useState<number>(0);
  const [maxValueAllProducts, setMaxValueAllProducts] = useState<number>(0);
  const [minValuePeak, setMinValuePeak] = useState<number>(0);
  const [maxValuePeak, setMaxValuePeak] = useState<number>(0);
  const [isCheckeAllProducts, setIsCheckeAllProducts] =useState<boolean>(false);
  const [isCheckedDiscountTime, setIsCheckedDiscountTime] =useState<boolean>(false);
  const [isCheckedSpecialProducts, setIsCheckedSpecialProducts] =useState<boolean>(false);
  const [isCheckedPeakTime, setIsCheckedPeakTime] = useState<boolean>(false);
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

  // console.log("all", isCheckeAllProducts);
  // console.log("some", isCheckedNumbersProduct);
  // console.log("special" , isCheckedSpecialProducts );

  // console.log("minValueAllProducts",minValueAllProducts);
  // console.log("maxValueAllProducts",maxValueAllProducts);
  // console.log("minVlueNumberProducts" , minValueNumberProducts);
  // console.log("maxVlueNumberProducts" , maxValueNumberProducts);

  console.log("start date", startDateWithoutTime);
  console.log("end date", endDateWithoutTime);

  console.log(textInformation);

  const showInformationHandler = (information: string) => {
    setShowInformation(true);
    setTextInformation(information);
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center bg-sky-100 pt-2  ">
        <div className="flex w-5/12 h-max relative flex-col items-center border bg-sky-50 rounded-xl  px-6 py-2 shadow-lg">
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
                numberPurchaseGift={numberPurchaseGift}
                setNumberPurchaseGift={setNumberPurchaseGift}
                showInformation={() => showInformationHandler("hi")}
              />

              <DeterminationSpecialProduct
                title="Discounts on special products"
                setIsChecked={setIsCheckedSpecialProducts}
                isChecked={isCheckedSpecialProducts}
                showInformation={() =>
                  showInformationHandler(
                    "In this section, you specify the discount amount for a specific product, which is entirely separate from the general discount."
                  )
                }
              />

              <ButtonDefault
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
        </div>
      </div>
    </>
  );
}
