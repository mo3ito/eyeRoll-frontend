"use client";
import { ChangeEvent, useEffect, useState , MouseEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import CheckBox from "../checkeBox/checkBox";
import ButtonDefault from "../button/buttonDefault";
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
    <div
      className={` w-full mb-2 ${
        isChecked ? " bg-indigo-100" : "bg-gray-200"
      }  p-4 rounded-xl`}
    >
      <div className="flex items-center ">
        <div>
          <InformationButton onClick={showInformation} />
          <p className="inline-block">{title}</p>
        </div>

        <CheckBox
          onChange={(event) => changeSpecialProductsHandler(event)}
          checked={isChecked}
          backgroundClasses={isChecked ? "bg-pink-400" : "bg-pink-300"}
          sizeClasses="w-12 h-6 ml-auto "
          circleClasses="w-4 h-4 bg-indigo-200 peer-checked:translate-x-6  peer-checked:bg-violet-500"
        />
      </div>

      <div className="flex space-x-3 mt-2 w-full items-center ">


        <div className="flex w-9/12 space-x-4">

       
        <div className="w-9/12">
          <p className="text-sm w-full">name product</p>
          <input
            disabled={!isChecked}
            value={specialProductName}
            onChange={(event)=>handleInputChange(event , setSpecialProductsName )}
            placeholder="for examole : pizza"
            type="text"
            className="outline-none px-2 w-full h-10 border border-fuchsia-400 bg-inherit rounded-lg  "
          />
        </div>
        <div className="w-3/12">
          <p className="text-sm ">Discount amount</p>
          <div className="w-11/12 flex items-center justify-center  border border-fuchsia-400 rounded-lg h-10 px-2">
          <input
            disabled={!isChecked}
            value={discountAmount}
            onChange={changeDiscountAmountHandler}
            type="text"
            className="outline-none  w-full h-10  bg-inherit rounded-lg "
          />
          %
          </div>
        
        </div>
        </div>
        <div className="w-3/12 h-full">
         <button
          disabled={!isChecked}
          onClick={addSpecificSpecialProducts}
          className="h-10 w-full mt-5 bg-fuchsia-400 hover:bg-fuchsia-500 rounded-lg ">confirm</button>
        </div>
       
      </div>
      <div
        className={`${
          specificSpecialProducts.length > 0 && "mt-3"
        } w-full max-h-24   flex items-center  gap-3  flex-wrap overflow-y-auto`}
      >
        {specificSpecialProducts.map((item) => (
          <div
            key={item.id}
            className="w-max px-7 h-max py-2  rounded-md bg-fuchsia-200 relative "
          >
            {item.productName}{" "}
            <span className="pl-4">{item.discountProduct}%</span>
           
              <CloseIcon onClick={()=>removeSpecialHandler(item.id)} classNameSvg="w-4 h-4 fill-red-400" />
            
          </div>
        ))}
      </div>
    </div>
  );
}
