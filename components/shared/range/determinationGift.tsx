import { ChangeEvent, useEffect } from "react";
import InformationButton from "@/components/informationButton/informationButton";
import CheckBox from "../checkeBox/checkBox";
import { DeterminationGiftProps } from "@/types/determinationGiftProps/determinationGiftProps";
import  handleInputChange   from "@/utils/handleInputChange";
import handleNumberInputChange from "@/utils/handleNumberInputChange";

export default function DeterminationGift({
  isChecked,
  setIsChecked,
  numberPurchaseGift,
  setNumberPurchaseGift,
  showInformation,
  giftValue,
  setGiftValue,
}: DeterminationGiftProps) {
  const changeGiftHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setIsChecked(event.target.checked);
  };

  useEffect(()=>{
    if(!isChecked){
      setNumberPurchaseGift(0)
      setGiftValue("")

    }
  },[isChecked])

  return (
    <div className={` ${isChecked ? ' bg-indigo-100' : 'bg-gray-200'}  w-full h-max  rounded-xl my-2  p-2`}>
     <div className='flex  items-center justify-center   '>
      <div className='w-10/12'>
       <p className="inline-block max-xs:text-xs text-sm  sm:text-lg font-medium "><InformationButton onClick={showInformation}/>Determination gift</p>
      </div>
    
   

    <CheckBox
          onChange={(event)=>changeGiftHandler(event)}
          checked={isChecked}
          backgroundClasses={isChecked ? "bg-pink-400" : "bg-pink-300"}
          sizeClasses="max-xs:w-6 max-xs:h-[14px]   w-8 h-[18px]   sm:w-12 sm:h-6 ml-auto "
          circleClasses=" max-xs:w-2 max-xs:h-2 max-xs:peer-checked:translate-x-[10px] w-3 h-3 sm:w-4 sm:h-4 bg-gray-200 peer-checked:translate-x-3 sm:peer-checked:translate-x-6  peer-checked:bg-violet-500"
        />
    </div>
    <div className=" mt-2 w-full flex sm:gap-x-4  flex-col justify-center items-start sm:flex-row sm:items-center">

  
      <div className="  mb-2 sm:mb-0 w-full sm:w-1/2 ">
        <span className=" max-xs:block max-xs:mb-1  text-sm sm:text-base inline-block sm:mb-1">The number of purchases</span>
        <input
          value={numberPurchaseGift}
          onChange={(event)=>handleNumberInputChange(event , setNumberPurchaseGift)}
          disabled={!isChecked}
          className=" max-xs:text-sm max-xs:ml-0 ml-2 sm:ml-0 max-xs:h-8 max-xs:w-full w-[136px]  h-10 sm:w-full sm:h-10 outline-none border border-fuchsia-300 px-2 rounded-lg bg-transparent  shadow-md"
          type="number"
        />
      </div>

      <div className=" w-full sm:w-1/2">
        <span className="text-sm max-xs:mb-1 sm:text-base inline-block sm:mb-1">enter the gift</span>
        <input
          value={giftValue}
          onChange={(event)=>handleInputChange(event,setGiftValue)}
          disabled={!isChecked}
          placeholder="for example moca"
          className=" max-xs:w-full max-xs:ml-0 ml-2 sm:ml-0  max-xs:text-sm max-xs:h-8 sm:w-full   h-10 outline-none border border-fuchsia-300 px-2 rounded-lg bg-transparent  shadow-md "
          type="text"
        />
      </div>
      </div>
    </div>
  );
}
