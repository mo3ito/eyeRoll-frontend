"use client";
import { useState, ChangeEvent } from "react";
import DeterminationRange from "@/components/shared/range/determinationRange";
import DeterminationDiscountTime from "@/components/shared/range/determinationDiscountTime";
import DeterminationDiscountspecialProduct from "@/components/shared/range/determinationDiscountspecialProduct";
import ShowInformationRollSetting from "@/components/showInformationRollSetting/showInformationRollSetting";

export default function DeterminingDiscount() {
  const [minValueAllProducts, setMinValueAllProducts] = useState<number>(0);
  const [maxValueAllProducts, setMaxValueAllProducts] = useState<number>(0);
  const [minValueNumberProducts, setMinValueNumberProducts] = useState<number>(0);
  const [maxValueNumberProducts, setMaxValueNumberProducts] = useState<number>(0);
  const [isCheckeAllProducts, setIsCheckeAllProducts] = useState<boolean>(false);
  const [isCheckedNumbersProduct, setIsCheckedNumbersProducts] =useState<boolean>(false);
  const [isCheckedSpecialProducts , setIsCheckedSpecialProducts]=useState<boolean>(false)
  const [firstTime , setFirstTime]=useState<string>("8")
  const [lastTime , setLastTime] = useState<string>("23:30")
  const [days , setDays]=useState<number>(1)
  const [showInformation , setShowInformation]=useState<boolean>(false)
  const [textInformation , setTextInformation]=useState<string>("")
 
  

  console.log("all", isCheckeAllProducts);
  console.log("some", isCheckedNumbersProduct);
  console.log("special" , isCheckedSpecialProducts );
  
  console.log("minValueAllProducts",minValueAllProducts);
  console.log("maxValueAllProducts",maxValueAllProducts);
  console.log("minVlueNumberProducts" , minValueNumberProducts);
  console.log("maxVlueNumberProducts" , maxValueNumberProducts);
  console.log("lastTime", lastTime);
  
  const showInformationHandler = (information : string)=>{
    setShowInformation(true)
    setTextInformation(information)
  }

  console.log(textInformation);
  
  

  return (
    <>
      <div className="w-full h-screen flex justify-center bg-sky-100 pt-8 ">
        <div className="flex w-4/12 h-max relative flex-col items-center border bg-sky-50 rounded-xl  p-8 shadow-lg">

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

          <DeterminationRange
            setMinValue={setMinValueNumberProducts}
            setMaxValue={setMaxValueNumberProducts}
            minValue={minValueNumberProducts}
            maxValue={maxValueNumberProducts}
            isChecked={isCheckedNumbersProduct}
            setIsChecked={setIsCheckedNumbersProducts}
            title="General discount on numbers of products"
            showInformation={()=>showInformationHandler("hello mo3ito ba safa")}
          />
          <DeterminationDiscountTime 
          title="Determining the discount time"
          firstTime={firstTime}
          setFirstTime={setFirstTime}
          setLastTime={setLastTime} 
          lastTime={lastTime}
          days={days}
          setDays={setDays}
          showInformation={()=>showInformationHandler("hellooooooooooooo")}
          />
          
          <DeterminationDiscountspecialProduct title="Discounts on special products" setIsChecked={setIsCheckedSpecialProducts} isChecked={isCheckedSpecialProducts} showInformation={()=>showInformationHandler("sajad")} />

          <button className="bg-green-400 w-full h-12 rounded-lg ">confirm</button>
          </>
           :
           <ShowInformationRollSetting textInformation={textInformation} setShowInformation={setShowInformation} />
          }

        </div>

       
      </div>
    </>
  );
}
