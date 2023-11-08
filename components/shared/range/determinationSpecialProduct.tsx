"use client";
import { ChangeEvent, useEffect, useState , MouseEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import CheckBox from "../checkeBox/checkBox";

import {
  DeterminationSpecialProductProps,
} from "@/types/determinationSpecialProduct/determinationSpecialProductType";
import { toast } from "react-toastify";
import InformationButton from "@/components/informationButton/informationButton";
import CloseIcon from "../icon/closeIcon";
import handleInputChange from "@/utils/handleInputChange";

export default function DeterminationSpecialProduct({
  showInformation,
  title,
  isChecked,
  setIsChecked,
  specificSpecialProducts,
  setSpecificSpecialProducts,
  specialProductName,
  setSpecialProductsName,
  discountAmount,
  setDiscountAmount
  
}: DeterminationSpecialProductProps) {
  

  useEffect(()=>{
    if(!isChecked){
      setSpecificSpecialProducts([])
      setSpecialProductsName('')
      setDiscountAmount(0)
    }
  },[isChecked])


 

 
  const changeDiscountAmountHandler = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = parseInt(event.target.value.trim());
    const clampedValue = Math.min(100, Math.max(0, newValue));
    setDiscountAmount(clampedValue || 0);
  };

  const addSpecificSpecialProducts = (event : React.MouseEvent<HTMLButtonElement>) : void => {
    event.preventDefault()
    if (specialProductName.length > 0 && discountAmount > 0) {
      const newSpecialProduct = {
        id: uuidv4(),
        productName: specialProductName,
        discountProduct: discountAmount,
      };
      setSpecificSpecialProducts((prev) => [...prev, newSpecialProduct]);

      setSpecialProductsName("");
      setDiscountAmount(0);
    } else {
      toast.warn("Please fill in the required fields on Discounts on special products");
    }
  };

  const removeSpecialHandler = (productId: string) => {
    const newSpecificSpecialProducts = specificSpecialProducts.filter(
      (item) => item.id !== productId
    );
    setSpecificSpecialProducts(newSpecificSpecialProducts);
  };
  const changeSpecialProductsHandler = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className={` ${isChecked ? ' bg-indigo-100' : 'bg-gray-200'} w-full h-max  rounded-xl my-2  p-2`}>
      <div className='flex  items-center justify-center   '>
      <div className='w-10/12'>
       <p className="inline-block max-xs:text-xs text-sm  sm:text-lg font-medium "><InformationButton onClick={showInformation}/> {title}</p>
      </div>
    
   

    <CheckBox
          onChange={(event)=>changeSpecialProductsHandler(event)}
          checked={isChecked}
          backgroundClasses={isChecked ? "bg-pink-400" : "bg-pink-300"}
          sizeClasses="max-xs:w-6 max-xs:h-[14px]   w-8 h-[18px]   sm:w-12 sm:h-6 ml-auto "
          circleClasses=" max-xs:w-2 max-xs:h-2 max-xs:peer-checked:translate-x-[10px] w-3 h-3 sm:w-4 sm:h-4 bg-gray-200 peer-checked:translate-x-3 sm:peer-checked:translate-x-6  peer-checked:bg-violet-500"
        />
    </div>

      <div className="flex flex-col sm:flex-row space-x-3 mt-2 w-full items-center ">


        <div className="flex max-xs:flex-col flex-row h-max w-full sm:w-9/12 max-xs:space-x-0 space-x-4">

       
        <div className=" max-xs:w-full w-8/12 sm:w-8/12 md:w-9/12">
          <p className="text-sm w-full mb-1">name product</p>
          <input
            disabled={!isChecked}
            value={specialProductName}
            onChange={(event)=>handleInputChange(event , setSpecialProductsName )}
            placeholder="for examole : pizza"
            type="text"
            className="max-xs:h-8 text-sm sm:text-base outline-none px-2 w-full h-10 border border-fuchsia-400 bg-inherit rounded-lg  "
          />
        </div>
        <div className=" max-xs:w-full w-4/12 sm:w-4/12 md:w-3/12">
          <p className="max-xs:text-sm max-xs:mt-2 text-xs sm:text-sm max-xs:mb-1  mb-2 sm:mb-1">Discount amount</p>
          <div className=" max-xs:w-full   w-11/12 flex items-center justify-center  border border-fuchsia-400 rounded-lg h-10 px-2">
          <input
            disabled={!isChecked}
            value={discountAmount}
            onChange={changeDiscountAmountHandler}
            type="text"
            className="outline-none max text-sm sm:text-base max-xs:h-8 w-full h-10  bg-inherit rounded-lg "
          />
          %
          </div>
        
        </div>
        </div>
        <div className=" max-xs:w-24 w-1/3 text-sm sm:w-3/12 h-full">
         <button
          disabled={!isChecked}
          onClick={addSpecificSpecialProducts}
          className=" h-8 sm:h-10 w-full mt-3 sm:mt-5 bg-fuchsia-400 hover:bg-fuchsia-500 rounded-lg ">confirm</button>
        </div>
       
      </div>
      <div
        className={`${
          specificSpecialProducts.length > 0 && "mt-3"
        } w-full max-h-28   flex items-center  gap-3  flex-wrap overflow-y-auto`}
      >
        {specificSpecialProducts.map((item) => (
          <div
            key={item.id}
            className="  w-max px-2 h-max pt-2 text-sm sm:text-base rounded-md bg-fuchsia-200 relative  "
          >

            <span className=" w-fit max-xs:max-w-[75px] max-w-[200px]  truncate  inline-block">{item.productName}</span>
            <span className="ml-2 mr-4  -translate-y-[6px] inline-block  ">{item.discountProduct}%</span>
           
              <CloseIcon onClick={()=>removeSpecialHandler(item.id)} classNameSvg="w-4 h-4 fill-red-400" />
            
          </div>
        ))}
      </div>
    </div>
  );
}
