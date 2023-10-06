"use client";
import { useState } from "react";
import DeterminationRange from "@/components/shared/range/determinationRange";
import DeterminationDiscountTime from "@/components/shared/range/determinationDiscountTime";
import DeterminationSpecialProduct from "@/components/shared/range/determinationSpecialProduct";
import ShowInformationRollSetting from "@/components/showInformationRollSetting/showInformationRollSetting";
import ButtonDefault from "@/components/shared/button/buttonDefault";
import DeterminationRangePeak from "@/components/shared/range/determinationRangePeak";
import {
  DISCOUNT_ON_ALL_PRODUCTS_TITLE,
  DISCOUNT_ON_ALL_PRODUCTS_INFORMATION,
  DISCOUNT_PERIOD_TITLE,
  DISCOUNT_PERIOD_INFORMATION,
  DISCOUNT_PEAK_TIME_TITLE,
  DISCOUNT_PEAK_TIME_INFORMATION,
  DISCOUNT_SPECIAL_PRODUCTS_TITLE,
  DISCOUNT_SPECIAL_PRODUCTS_INFORMATION,
} from "@/textComponents/discountSettingTexts/discountSettingTexts";

export default function DeterminingDiscount() {
  const [minValueAllProducts, setMinValueAllProducts] = useState<number>(0);
  const [maxValueAllProducts, setMaxValueAllProducts] = useState<number>(0);
  const [minValuePeak, setMinValuePeak] = useState<number>(0);
  const [maxValuePeak, setMaxValuePeak] = useState<number>(0);
  const [isCheckeAllProducts, setIsCheckeAllProducts] =
    useState<boolean>(false);
  const [isCheckedDiscountTime, setIsCheckedDiscountTime] =
    useState<boolean>(false);
  const [isCheckedSpecialProducts, setIsCheckedSpecialProducts] =
    useState<boolean>(false);
  const [isCheckedPeakTime, setIsCheckedPeakTime] = useState<boolean>(false);
  const [startDateWithoutTime, setStartDateWithoutTime] = useState<
    string | undefined
  >("");
  const [endDateWithoutTime, setEndDateWithoutTime] = useState<
    string | undefined
  >("");
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
      <div className="w-full h-screen flex justify-center bg-sky-100 pt-8 ">
        <div className="flex w-5/12 h-max relative flex-col items-center border bg-sky-50 rounded-xl  p-8 shadow-lg">
          {!showInformation ? (
            <>
              <DeterminationRange
                setMinValue={setMinValueAllProducts}
                setMaxValue={setMaxValueAllProducts}
                minValue={minValueAllProducts}
                maxValue={maxValueAllProducts}
                isChecked={isCheckeAllProducts}
                setIsChecked={setIsCheckeAllProducts}
                title={DISCOUNT_ON_ALL_PRODUCTS_TITLE}
                showInformation={() =>
                  showInformationHandler(DISCOUNT_ON_ALL_PRODUCTS_INFORMATION)
                }
              />

              <DeterminationDiscountTime
                title={DISCOUNT_PERIOD_TITLE}
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
                showInformation={() =>
                  showInformationHandler(DISCOUNT_PERIOD_INFORMATION)
                }
                startDate={startDate}
                endDate={endDate}
                setStartDateWithoutTime={setStartDateWithoutTime}
                setEndDateWithoutTime={setEndDateWithoutTime}
                startDateWithoutTime={startDateWithoutTime}
                endDateWithoutTime={endDateWithoutTime}
                setDateRange={setDateRange}
              />

              <DeterminationRangePeak
                setMinValuePeak={setMinValuePeak}
                setMaxValuePeak={setMaxValuePeak}
                minValuePeak={minValuePeak}
                maxValuePeak={maxValuePeak}
                isChecked={isCheckedPeakTime}
                setIsChecked={setIsCheckedPeakTime}
                title={DISCOUNT_PEAK_TIME_TITLE}
                firstHourPeak={firstHourPeak}
                setFirstHourPeak={setFirstHourPeak}
                firstMinsPeak={firstMinsPeak}
                setFirstMinsPeak={setFirstMinsPeak}
                lastHourPeak={lastHourPeak}
                setLastHourPeak={setLastHourPeak}
                lastMinsPeak={lastMinsPeak}
                setLastMinsPeak={setLastMinsPeak}
                showInformation={() =>
                  showInformationHandler(DISCOUNT_PEAK_TIME_INFORMATION)
                }
              />

              <DeterminationSpecialProduct
                title={DISCOUNT_SPECIAL_PRODUCTS_TITLE}
                setIsChecked={setIsCheckedSpecialProducts}
                isChecked={isCheckedSpecialProducts}
                showInformation={() =>
                  showInformationHandler(DISCOUNT_SPECIAL_PRODUCTS_INFORMATION)
                }
              />

              <ButtonDefault
                disabled={
                  isCheckeAllProducts && isCheckedDiscountTime ? false : true
                }
                text="send"
                className="h-12 text-lg bg-fuchsia-400 hover:bg-fuchsia-500 rounded-lg  "
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
