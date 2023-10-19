"use client";
import React, { ChangeEvent, FormEvent, useCallback, useState, useContext  } from "react";
import InputDefault from "@/components/shared/inputs/inputDefault";
import ButtonDefault from "@/components/shared/button/buttonDefault";
import { BUSINESS_OWNER_ONLINE_MENU_ADD_PRODUCT } from "@/routeApi/endpoints";
import { handleInputChange } from "@/utils/handleInputChange";
import senderWithAuth from "@/services/senderWithAuth";
import { toast } from "react-toastify";
import { AuthContext } from "@/context/authContext";
import useGetBusinessOwnerId from "@/hooks/useGet‌‌BusinessOwnerId";
import handleNumberInputChange from "@/utils/handleNumberInputChange";



export default function Facilities() {
  const [productName, setProductName] = useState<string>("");
  const [productPrice, setProductPrice] = useState<string | number>("");
  const [productPricePetty , setProductPricePetty]=useState<string | number>("")
  const [productDescription, setProductDescription] = useState<string>("");
  const [productAssortment , setProductAssortment] = useState<string>("")
  const {infos}=useContext(AuthContext)
  const{businessOwnerId}=useGetBusinessOwnerId(infos)


  
  console.log(infos);
  

  const changeProductPricepettyHandler =useCallback( (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.trim();
    const parseValue = parseInt(inputValue);
    if (parseValue >= 0 && !isNaN(parseValue) && inputValue.length <=2 ) {
      setProductPricePetty(parseValue.toString());
    } else {
      setProductPricePetty("");
    }
  },[])


  console.log("productAssortment", productAssortment);
  console.log("productName", productName);
  console.log("productPrice", productPrice);
  console.log('productDescription',productDescription);
  

  const changeProductDescriptionHandler =useCallback((
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setProductDescription(event.target.value);
  },[]) 

  const clearStates = ()=>{
      setProductAssortment("")
      setProductDescription("")
      setProductName("")
      setProductPrice("")
  }

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();
    const body = {
      businessOwnerId,
      productAssortment,
      productName,
      productPrice ,
      productPricePetty,
      productDescription,
    }
    
    if(productName.length > 0 && productName !== "" && productPrice !== "" && productAssortment.length > 0 && productAssortment !== ""){
      try {
        const response = await senderWithAuth(BUSINESS_OWNER_ONLINE_MENU_ADD_PRODUCT , body)
      if (response?.status === 200) {
        toast.success("Product added to the online menu successfully")
        clearStates()
      } 
      } catch (error : any) {
        if (error.response.status === 400) {
          const errorMessage = error.response.data.message;
          toast.error(errorMessage);
        } else {
        toast.error("An error occurred while processing your request");
        }
  }
    }else{
      toast.warn("Please fill all required fields")
    }

    
  };

  return (
    <div className="bg-sky-100 w-full h-screen">
      <div className="container px-4  h-max mx-auto">
        <form onSubmit={submitHandler}>
          <div className="w-1/4 h-max mx-auto pt-44 ">

          <div className="mb-4">
              <p className="mb-3 starBefore">group</p>
              <InputDefault
                disabled={false}
                type="text"
                value={productAssortment}
                onChange={useCallback((event)=>handleInputChange(event , setProductAssortment),[])}
                placeholder="for examole: hot sandwich"
                className="w-full h-10 border focus:border-2 border-fuchsia-400 px-2 outline-none bg-transparent rounded-lg"
              />
            </div>

            <div className="mb-4">
              <p className="mb-3 starBefore">product name</p>
              <InputDefault
                disabled={false}
                type="text"
                value={productName}
                onChange={useCallback((event)=>handleInputChange(event , setProductName),[])}
                placeholder="for examole: burger"
                className="w-full h-10 border focus:border-2 border-fuchsia-400 px-2 outline-none bg-transparent rounded-lg"
              />
            </div>

            <div className="mb-3 w-full space-x-2 flex items-center justify-center">
            <div className="">
              <p className="mb-3 starBefore">price (dollar)</p>
              <InputDefault
                disabled={false}
                type="text"
                value={productPrice}
                onChange={useCallback((event)=>handleNumberInputChange(event , setProductPrice),[])}
                placeholder="for examole: 3"
                className="w-full h-10 border focus:border-2 border-fuchsia-400 px-2 outline-none bg-transparent rounded-lg"
              />
            </div>

            <div className="">
              <p className="mb-3">import your price (cent)</p>
              <InputDefault
                disabled={false}
                type="text"
                value={productPricePetty}
                onChange={changeProductPricepettyHandler}
                placeholder="for examole: 3"
                className="w-full h-10 border focus:border-2 border-fuchsia-400 px-2 outline-none bg-transparent rounded-lg"
              />
            </div>
            </div>
           

            <div className="mb-3">
              <p className="mb-3">import your description</p>
              <textarea
                value={productDescription}
                onChange={changeProductDescriptionHandler}
                className="w-full h-44 border focus:border-2 border-fuchsia-400 p-2 outline-none bg-transparent rounded-lg"
              />
            </div>

            <ButtonDefault
              text="send"
              className="hoverScale w-full bg-fuchsia-400 h-12 rounded-lg"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
