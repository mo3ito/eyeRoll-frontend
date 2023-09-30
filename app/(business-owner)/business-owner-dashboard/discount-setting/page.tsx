"use client";
import { useState, ChangeEvent } from "react";
import Range from "@/components/shared/range/range";
import CheckBox from "@/components/shared/checkeBox/checkBox";
import DeterminationRange from "@/components/shared/range/determinationRange";

export default function DeterminingDiscount() {
  const [minValueAllProducts, setMinValueAllProducts] = useState<number>(0);
  const [maxValueAllProducts, setMaxValueAllProducts] = useState<number>(0);
  const [minValueNumberProducts, setMinValueNumberProducts] = useState<number>(0);
  const [maxValueNumberProducts, setMaxValueNumberProducts] = useState<number>(0);
  const [isCheckeAllProducts, setIsCheckeAllProducts] = useState<boolean>(false);
  const [isCheckedNumbersProduct, setIsCheckedNumbersProducts] =   useState<boolean>(false);
  

  console.log("all", isCheckeAllProducts);
  console.log("some", isCheckedNumbersProduct);
  console.log("minValueAllProducts",minValueAllProducts);
  console.log("maxValueAllProducts",maxValueAllProducts);
  console.log("minVlueNumberProducts" , minValueNumberProducts);
  console.log("maxVlueNumberProducts" , maxValueNumberProducts);
  
  

  return (
    <>
      <div className="w-full h-screen flex justify-center bg-sky-100 pt-20">
        <div className="flex w-4/12 h-4/5  flex-col items-center border border-indigo-400 rounded-xl  p-4">
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
          <div className=" w-full">
            <p>Determining the discount time</p>
            <div className="flex space-x-4 mt-2">
             <div><span>from</span> <input value="12" className=" px-2 bg-transparent w-22 h-8 border rounded-lg border-fuchsia-300 outline-none" type="text" /></div>
             <div><span>to</span> <input value="8" className=" px-2 bg-transparent w-22 h-8 border rounded-lg border-fuchsia-300 outline-none" type="text" /></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
