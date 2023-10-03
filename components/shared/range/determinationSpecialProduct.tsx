'use client'
import {ChangeEvent, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import CheckBox from '../checkeBox/checkBox';
import ButtonDefault from '../buttonDefault';
import { DeterminationSpecialProductProps , SpecificSpecialProductsType } from '@/types/determinationSpecialProduct/determinationSpecialProductType';
import { toast } from 'react-toastify';
import InformationButton from '@/components/informationButton/informationButton';



export default function DeterminationSpecialProduct({showInformation , title, isChecked , setIsChecked }: DeterminationSpecialProductProps ) {
    const [specialProductName , setSpecialProductsName]=useState("")
    const [discountAmount , setDiscountAmount]=useState<number >(0)
    const [specificSpecialProducts , setSpecificSpecialProducts]=useState<SpecificSpecialProductsType[]>([])
    
 

    const changeSpecialProductNameHandler = (event : ChangeEvent<HTMLInputElement>)=>{
        setSpecialProductsName(event.target.value)
    }

    const changeDiscountAmountHandler = (event : ChangeEvent<HTMLInputElement>)=>{
      const newValue = parseInt(event.target.value);
      const clampedValue = Math.min(100, Math.max(0, newValue));
        setDiscountAmount(clampedValue)
    }

    const addSpecificSpecialProducts = ()=>{
      if( specialProductName.length > 0 && discountAmount > 0){
        const newSpecialProduct = {
          id : uuidv4(),
          productName: specialProductName,
          discountProduct: discountAmount,

      }
      setSpecificSpecialProducts(prev=>[...prev , newSpecialProduct])

      setSpecialProductsName("")
      setDiscountAmount(0)
      } else{
        toast.warn("Please fill in the required fields")
      }
     
      
    }

    const removeSpecialHandler = (productId : string)=>{
       const newSpecificSpecialProducts = specificSpecialProducts.filter(item=> item.id !== productId)
       setSpecificSpecialProducts(newSpecificSpecialProducts)

    }
    const changeSpecialProductsHandler = (event : ChangeEvent<HTMLInputElement>) : void =>{
        setIsChecked(event.target.checked)
       
        
      }

    console.log(specificSpecialProducts);
    


  return (
    <div className= {` w-full mb-2 ${isChecked ? ' bg-indigo-100' : 'bg-gray-200'}  p-4 rounded-xl`}>
        <div className='flex items-center '>
        <div>
      <InformationButton onClick={showInformation}/>
        <p className='inline-block'>{title}</p>
      </div>
       
      <CheckBox  onChange={(event)=>changeSpecialProductsHandler(event)} checked={isChecked} backgroundClasses={isChecked ? 'bg-pink-400' : 'bg-pink-300'} sizeClasses='w-12 h-6 ml-auto ' circleClasses='w-4 h-4 bg-indigo-200 peer-checked:translate-x-6  peer-checked:bg-violet-500'  />
        </div>
      
        <div className="flex space-x-3 mt-2 ">
          <div className='w-7/12'>
            <p className="text-sm w-full">name product</p>
        <input disabled={!isChecked}  value={specialProductName} onChange={changeSpecialProductNameHandler} placeholder="for examole : pizza"  type="text" className="outline-none pl-2 w-full h-10 border border-fuchsia-400 bg-inherit rounded-lg  " />
        </div>
        <div className='w-3/12' >
          <p className="text-sm ">Discount amount</p>
        <input disabled={!isChecked} placeholder="for example : 20%" value={discountAmount} onChange={changeDiscountAmountHandler} type="number" className="outline-none pl-2 w-full h-10 border border-fuchsia-400 bg-inherit rounded-lg  " />
        </div>
    
        <ButtonDefault disabled={!isChecked} text='confirm' onClick={addSpecificSpecialProducts} className='h-10 mt-5 w-2/12'/>
        </div>
        <div className={`${specificSpecialProducts.length>0 && 'mt-3'} w-full max-h-24   flex items-center  gap-3  flex-wrap overflow-y-auto`}>
            {specificSpecialProducts.map(item=>
                 <div key={item.id} className="w-max px-7 h-8 pt-1 rounded-md bg-fuchsia-200 relative ">{item.productName} <span className="pl-4">{item.discountProduct}%</span>
                 <span onClick={()=>removeSpecialHandler(item.id)} className='absolute -top-[6px] right-1 text-red-400 text-lg cursor-pointer'>x</span>
                 </div>
                )}
        </div>
        
        </div>
  )
}
