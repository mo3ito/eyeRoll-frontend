'use client'
import {ChangeEvent, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function DeterminationDiscountspecialProduct() {
    const [specialProductName , setSpecialProductsName]=useState("")
    const [discountAmount , setDiscountAmount]=useState<number>(0)
    const [specificSpecialProducts , setSpecificSpecialProducts]=useState([])

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
    }

    console.log(specificSpecialProducts);
    


  return (
    <div className="w-full mt-12 ">
        <p>Discounts on special products</p>
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
        <div className='w-full max-h-24 my-2 bg-red-200 flex items-center  gap-3 py-2 flex-wrap overflow-y-auto'>
            {specificSpecialProducts.map(item=>
                 <div key={item.id} className="w-max px-3 py-1 rounded-md bg-fuchsia-200">{item.productName} <span className="pl-4">{item.discountProduct}%</span></div>
                )}
        </div>
        
        </div>
  )
}
