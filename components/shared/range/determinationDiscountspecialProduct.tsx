'use client'
import {ChangeEvent, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import CheckBox from '../checkeBox/checkBox';

export default function DeterminationDiscountspecialProduct() {
    const [specialProductName , setSpecialProductsName]=useState("")
    const [discountAmount , setDiscountAmount]=useState<number | null>(null)
    const [specificSpecialProducts , setSpecificSpecialProducts]=useState([])
    const [discountSpecialProductsCheck , setDiscountSpecialProductsCheck ]= useState(false)

    const changeSpecialProductNameHandler = (event : ChangeEvent<HTMLInputElement>)=>{
        setSpecialProductsName(event.target.value)
    }

    const changeDiscountAmountHandler = (event : ChangeEvent<HTMLInputElement>)=>{
        setDiscountAmount(+event.target.value)
    }

    const addSpecificSpecialProducts = ()=>{
        const newSpecialProduct = {
            id : uuidv4(),
            productName: specialProductName,
            discountProduct: discountAmount,

        }
        setSpecificSpecialProducts(prev=>[...prev , newSpecialProduct])

        setSpecialProductsName("")
        setDiscountAmount(0)
    }

    const removeSpecialHandler = (productId)=>{
       const newSpecificSpecialProducts = specificSpecialProducts.filter(item=> item.id !== productId)
       setSpecificSpecialProducts(newSpecificSpecialProducts)

    }
    const changeSpecialProductsHandler = (event : ChangeEvent<HTMLInputElement>) : void =>{
        setDiscountSpecialProductsCheck(event.target.checked)
       
        
      }

    console.log(specificSpecialProducts);
    


  return (
    <div className="w-full my-4 bg-indigo-100 p-3 rounded-xl ">
        <div className='flex items-center '>
        <p>Discounts on special products</p>
        <CheckBox  onChange={(event)=>changeSpecialProductsHandler(event)} checked={discountSpecialProductsCheck} sizeClasses='w-12 h-6 ml-auto ' circleClasses='w-4 h-4 bg-indigo-200 peer-checked:translate-x-6  peer-checked:bg-indigo-600'  />
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
