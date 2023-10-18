'use client'
import React, { useCallback , ChangeEvent, Dispatch , SetStateAction} from 'react'
import InputDefault from '../shared/inputs/inputDefault'
import ButtonDefault from '../shared/button/buttonDefault'
import { handleInputChange } from "@/utils/handleInputChange";

interface EditProductsProps {
  producName : string;
  productPrice:string | number;
  productAssortment:string;
  productDescription:string;
  productPricePetty:string | number;
  setProductName: Dispatch<SetStateAction<string>>;
  setProductAssortment: Dispatch<SetStateAction<string>>;
  setProductPrice: Dispatch<SetStateAction<string | number>>;
  setProductPricePetty: Dispatch<SetStateAction<string | number>>;
  setProductDescription: Dispatch<SetStateAction<string>>;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;

}



export default function EditProducts({producName , productPrice , productAssortment , productDescription, productPricePetty,
    setProductName,
    setProductAssortment,
    setProductPrice,
    setProductPricePetty,
    setProductDescription , onSubmit}:EditProductsProps) {
        
  
  

    const changeProductDescriptionHandler =useCallback((
        event: ChangeEvent<HTMLTextAreaElement>
      ) => {
        setProductDescription(event.target.value);
      },[]) 

      console.log(productPrice);
      
      const changeProductPriceHandler =useCallback( (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value.trim();
        const parseValue = parseInt(inputValue);
        if (parseValue >= 0 && !isNaN(parseValue)) {
          setProductPrice(parseValue.toString());
        } else {
          setProductPrice("");
        }
      },[])

      const changeProductPricePettyHandler =useCallback( (event: ChangeEvent<HTMLInputElement>) => {
        
        const inputValue = event.target.value.trim();
        const parseValue = parseInt(inputValue);
        if (parseValue >= 0 && !isNaN(parseValue) && inputValue.length <= 2) {
          setProductPricePetty(parseValue.toString());
        } else {
            setProductPricePetty("");
        }
      },[])
     
     
      
    

  return (
    <form onSubmit={onSubmit} className=' py-5 h-full px-8'>

<div className="mb-2">
              <p className="mb-2">group product</p>
              <InputDefault
              onChange={(event)=>handleInputChange(event , setProductAssortment)}
                value={productAssortment}
                disabled={false}
                type="text"
                placeholder="for examole: drink"
                className="w-full h-10 border focus:border-2 border-fuchsia-400 px-2 outline-none bg-transparent rounded-lg"
              />
            </div>
            <div className="mb-2">
              <p className="mb-2">name product</p>
              <InputDefault
              onChange={useCallback((event : ChangeEvent<HTMLInputElement>)=>handleInputChange(event , setProductName),[])}
                value={producName}
                disabled={false}
                type="text"
                placeholder="for examole: moca"
                className="w-full h-10 border focus:border-2 border-fuchsia-400 px-2 outline-none bg-transparent rounded-lg"
              />
            </div>
        
        <div className='flex w-full mb-3 space-x-2'>
        <div className=" w-1/2">
              <p className="mb-2">price product</p>
              <InputDefault
              onChange={changeProductPriceHandler}
                value={productPrice}
                disabled={false}
                type="text"
                placeholder="for examole: burger"
                className="w-full h-10 border focus:border-2 border-fuchsia-400 px-2 outline-none bg-transparent rounded-lg"
              />
            </div>
            <div className="w-1/2">
              <p className="mb-2">price product (cent)</p>
              <InputDefault
              onChange={changeProductPricePettyHandler}
                value={productPricePetty}
                disabled={false}
                type="text"
                placeholder="if required"
                className="w-full h-10 border focus:border-2 border-fuchsia-400 px-2 outline-none bg-transparent rounded-lg"
              />
            </div>
        </div>
        <div className="mb-1">
              <p className="mb-3">product description</p>
              <textarea
              onChange={changeProductDescriptionHandler}
              value={productDescription}
                className="w-full h-28 border focus:border-2 border-fuchsia-400 p-2 outline-none bg-transparent rounded-lg resize-none overflow-y-auto"
              />
            </div>
            <ButtonDefault
              text="send"
              className="hoverScale w-full bg-fuchsia-400 h-12 rounded-lg "
            />

    </form>
  )
}
