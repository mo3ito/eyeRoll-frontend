'use client'
import {ChangeEvent, Dispatch, SetStateAction, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import CheckBox from '../checkeBox/checkBox';
import { DeterminationSpecialProductProps , SpecificSpecialProductsType } from '@/types/determinationSpecialProduct/determinationSpecialProductType';



export default function DeterminationSpecialProduct({showInformation , title, isChecked , setIsChecked}: DeterminationSpecialProductProps ) {
    const [specialProductName , setSpecialProductsName]=useState("")
    const [discountAmount , setDiscountAmount]=useState<number >(0)
    const [specificSpecialProducts , setSpecificSpecialProducts]=useState<SpecificSpecialProductsType[]>([])
    

    const changeSpecialProductNameHandler = (event : ChangeEvent<HTMLInputElement>)=>{
        setSpecialProductsName(event.target.value)
    }

    const changeDiscountAmountHandler = (event : ChangeEvent<HTMLInputElement>)=>{
        setDiscountAmount(+event.target.value)
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
    <div className="w-full my-4 bg-indigo-100 p-3 rounded-xl ">
        <div className='flex items-center '>
        <div>
      <button title='click for information' onClick={showInformation} >
        <svg className='w-4 h-4 inline-block mb-1 mr-1 fill-pink-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z"></path></svg>
        </button>
        <p className='inline-block'>{title}</p>
      </div>
       
      <CheckBox  onChange={(event)=>changeSpecialProductsHandler(event)} checked={isChecked} backgroundClasses={isChecked ? 'bg-pink-400' : 'bg-pink-300'} sizeClasses='w-12 h-6 ml-auto ' circleClasses='w-4 h-4 bg-indigo-200 peer-checked:translate-x-6  peer-checked:bg-violet-500'  />
        </div>
      
        <div className="flex space-x-3 mt-2">
          <div>
            <p className="text-sm">name product</p>
        <input value={specialProductName} onChange={changeSpecialProductNameHandler} placeholder="for examole : pizza"  type="text" className="outline-none pl-2 w-64 h-8 border border-fuchsia-400 bg-inherit rounded-lg  " />
        </div>
        <div >
          <p className="text-sm">Discount amount</p>
        <input placeholder="for examole : 20%" value={discountAmount} onChange={changeDiscountAmountHandler} type="number" className="outline-none pl-2 w-40 h-8 border border-fuchsia-400 bg-inherit rounded-lg  " />
        </div>
        <button onClick={addSpecificSpecialProducts} className="w-32 h-8 bg-fuchsia-300 rounded-lg mt-5">confirm</button>
        </div>
        <div className='w-full max-h-24 my-2  flex items-center  gap-3 py-2 flex-wrap overflow-y-auto'>
            {specificSpecialProducts.map(item=>
                 <div key={item.id} className="w-max px-7 h-8 pt-1 rounded-md bg-fuchsia-200 relative">{item.productName} <span className="pl-4">{item.discountProduct}%</span>
                 <span onClick={()=>removeSpecialHandler(item.id)} className='absolute -top-[6px] right-1 text-red-400 text-lg cursor-pointer'>x</span>
                 </div>
                )}
        </div>
        
        </div>
  )
}
