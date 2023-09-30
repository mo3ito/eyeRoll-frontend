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
  const [isCheckedNumbersProduct, setIsCheckedNumbersProducts] =useState<boolean>(false);
  const [firstTime , setFirstTime]=useState<string>("8")
  const [lastTime , setLastTime] = useState<string>("23:30")
  const [days , setDays]=useState<number>(1)
  const [showInformation , setShowInformation]=useState<boolean>(false)
  const [textInformation , setTextInformation]=useState<string>("")
 
  

  console.log("all", isCheckeAllProducts);
  console.log("some", isCheckedNumbersProduct);
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
      <div className="w-full h-screen flex justify-center bg-sky-100 pt-20 ">
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
          
          <DeterminationDiscountspecialProduct/>

          <button className="bg-green-400 w-full h-12 rounded-lg ">confirm</button>
          </>
           :
          <div className="h-96 ">
            <button className=" absolute  right-3 top-2" onClick={()=>setShowInformation(false)}>
            <svg className="w-6 h-6 fill-pink-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z"></path></svg>
            </button>
            <p>{textInformation}</p>
           
          </div>
          }

        </div>

       
      </div>
    </>
  );
}
