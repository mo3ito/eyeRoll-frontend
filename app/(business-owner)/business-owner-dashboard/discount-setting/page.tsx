"use client";
import { useState, ChangeEvent, useReducer } from "react";
import DeterminationRange from "@/components/shared/range/determinationRange";
import DeterminationDiscountTime from "@/components/shared/range/determinationDiscountTime";
import DeterminationSpecialProduct from "@/components/shared/range/determinationSpecialProduct";
import ShowInformationRollSetting from "@/components/showInformationRollSetting/showInformationRollSetting";
import ButtonDefault from "@/components/shared/buttonDefault";


export default function DeterminingDiscount() {
  const [minValueAllProducts, setMinValueAllProducts] = useState<number>(0);
  const [maxValueAllProducts, setMaxValueAllProducts] = useState<number>(0);
  const [minValueNumberProducts, setMinValueNumberProducts] = useState<number>(0);
  const [maxValueNumberProducts, setMaxValueNumberProducts] = useState<number>(0);
  const [isCheckeAllProducts, setIsCheckeAllProducts] = useState<boolean>(false);
  const [isCheckedNumbersProduct, setIsCheckedNumbersProducts] =useState<boolean>(false);
  const [isCheckedSpecialProducts , setIsCheckedSpecialProducts]=useState<boolean>(false)
  const [firstHour , setFirstHour]=useState<string>("08")
  const [firstMins , setFirstMins] = useState<string>("30")
  const [lastHour , setLastHour]=useState<string>("23")
  const [lastMins , setLastMins]=useState<string>("15")
  const [showInformation , setShowInformation]=useState<boolean>(false)
  const [textInformation , setTextInformation]=useState<string>("")
  const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
 
  

  // console.log("all", isCheckeAllProducts);
  // console.log("some", isCheckedNumbersProduct);
  // console.log("special" , isCheckedSpecialProducts );
  
  // console.log("minValueAllProducts",minValueAllProducts);
  // console.log("maxValueAllProducts",maxValueAllProducts);
  // console.log("minVlueNumberProducts" , minValueNumberProducts);
  // console.log("maxVlueNumberProducts" , maxValueNumberProducts);

  console.log("start date", startDate);
  console.log("end date" ,endDate);
  
  

  console.log(textInformation);
  
  const showInformationHandler = (information : string)=>{
    setShowInformation(true)
    setTextInformation(information)
  }


  
  

  return (
    <>
      <div className="w-full h-screen flex justify-center bg-sky-100 pt-8 ">
        <div className="flex w-5/12 h-max relative flex-col items-center border bg-sky-50 rounded-xl  p-8 shadow-lg">

         { !showInformation ?
         <>
         <DeterminationRange
            setMinValue={setMinValueAllProducts}
            setMaxValue={setMaxValueAllProducts}
            minValue={minValueAllProducts}
            maxValue={maxValueAllProducts}
            isChecked={isCheckeAllProducts}
            setIsChecked={setIsCheckeAllProducts}
            title="General discount on all products"
            showInformation={()=>showInformationHandler("hello friends")}
            
            
          />

            
 

           {/* <DeterminationRange
            setMinValue={setMinValueNumberProducts}
            setMaxValue={setMaxValueNumberProducts}
            minValue={minValueNumberProducts}
            maxValue={maxValueNumberProducts}
            isChecked={isCheckedNumbersProduct}
            setIsChecked={setIsCheckedNumbersProducts}
            title="General discount on numbers of products"
            showInformation={()=>showInformationHandler("hello mo3ito ba safa")}
            isDisable={false}
          /> */}
          <DeterminationDiscountTime 
          title="Determining the discount time"
          firstHour={firstHour}
          firstMins={firstMins}
          setFirstMins={setFirstMins}
          setFirstHour={setFirstHour}
          setLastHour={setLastHour}
          lastHour={lastHour}
          lastMins={lastMins}
          setLastMins={setLastMins}
          showInformation={()=>showInformationHandler("hellooooooooooooo")}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          />
          
          <DeterminationSpecialProduct title="Discounts on special products"
          setIsChecked={setIsCheckedSpecialProducts}
          isChecked={isCheckedSpecialProducts} 
          showInformation={()=>showInformationHandler("sajad")}
          
         
           />

          <ButtonDefault text="send" className="h-12" isScale={true}/>
          </>
           :
           <ShowInformationRollSetting textInformation={textInformation} setShowInformation={setShowInformation} />
          }

        </div>

       
      </div>
    </>
  );
}
