"use client";
import { useState, ChangeEvent } from "react";
import DeterminationRange from "@/components/shared/range/determinationRange";
import DeterminationDiscountTime from "@/components/shared/range/determinationDiscountTime";
import DeterminationDiscountspecialProduct from "@/components/shared/range/determinationDiscountspecialProduct";

export default function DeterminingDiscount() {
  const [minValueAllProducts, setMinValueAllProducts] = useState<number>(0);
  const [maxValueAllProducts, setMaxValueAllProducts] = useState<number>(0);
  const [minValueNumberProducts, setMinValueNumberProducts] = useState<number>(0);
  const [maxValueNumberProducts, setMaxValueNumberProducts] = useState<number>(0);
  const [isCheckeAllProducts, setIsCheckeAllProducts] = useState<boolean>(false);
  const [isCheckedNumbersProduct, setIsCheckedNumbersProducts] =   useState<boolean>(false);
  const [firstTime , setFirstTime]=useState<string>("8")
  const [lastTime , setLastTime] = useState<string>("23:30")
  const [days , setDays]=useState<number>(1)
 
  

  console.log("all", isCheckeAllProducts);
  console.log("some", isCheckedNumbersProduct);
  console.log("minValueAllProducts",minValueAllProducts);
  console.log("maxValueAllProducts",maxValueAllProducts);
  console.log("minVlueNumberProducts" , minValueNumberProducts);
  console.log("maxVlueNumberProducts" , maxValueNumberProducts);
  console.log("lastTime", lastTime);
  
  
  

  return (
    <>
      <div className="w-full h-screen flex justify-center bg-sky-100 pt-20">
        <div className="flex w-4/12 h-full  flex-col items-center border border-indigo-400 rounded-xl  p-4">
          <DeterminationRange
            setMinValue={setMinValueAllProducts}
            setMaxValue={setMaxValueAllProducts}
            minValue={minValueAllProducts}
            maxValue={maxValueAllProducts}
            isChecked={isCheckeAllProducts}
            setIsChecked={setIsCheckeAllProducts}
            title="General discount on all products"
          />

          <DeterminationRange
            setMinValue={setMinValueNumberProducts}
            setMaxValue={setMaxValueNumberProducts}
            minValue={minValueNumberProducts}
            maxValue={maxValueNumberProducts}
            isChecked={isCheckedNumbersProduct}
            setIsChecked={setIsCheckedNumbersProducts}
            title="General discount on numbers of products"
          />
          <DeterminationDiscountTime 
          title="Determining the discount time"
          firstTime={firstTime}
          setFirstTime={setFirstTime}
          setLastTime={setLastTime} 
          lastTime={lastTime}
          days={days}
          setDays={setDays}/>
          
          <DeterminationDiscountspecialProduct/>

        </div>

       
      </div>
    </>
  );
}
