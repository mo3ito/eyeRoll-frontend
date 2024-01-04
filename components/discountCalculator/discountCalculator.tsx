'use client'
import React, { ChangeEvent, useState , useEffect } from 'react'
import InputDefault from '../shared/inputs/inputDefault'
import ButtonDefault from '../shared/button/buttonDefault'



export default function DiscountCalculator({discountValue}:{discountValue: string}) {
    const [enterAmount , setEnterAmount]=useState<number>(0)
    const [discountPercent , setDiscountPercent]=useState<number>(0)
    const [resultAmount , setResultAmount]=useState<null | number>(null)

    useEffect(()=>{
      const numberDiscountHandler = async()=>{
        if(discountValue){
          const numberDiscount = await Number(discountValue.split("%")[0])
          setDiscountPercent(numberDiscount)
        }
      }
      numberDiscountHandler()
    },[discountValue])

    const changeEnterAmountHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const trimmedValue = event.target.value.trim();
        const parsedValue = parseInt(trimmedValue);
        setEnterAmount(parsedValue || 0);
      };
    const computHandler = ()=>{
      const amountDiscount =  (discountPercent / 100) * enterAmount;
      const resultAmount = enterAmount - amountDiscount;
      setResultAmount(resultAmount)
    }


  return (
    <div className='w-full  h-max rounded-lg bg-sky-50 py-8 px-4  text-fuchsia-500 flex flex-col gap-y-2 items-center  '>
<div className='border border-fuchsia-400 py-4 rounded-lg shadow-md bg-sky-100 flex items-center justify-center flex-col translate-y-3'>
<div className=''>
<svg className="w-10 h-10 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
</svg>
<p className='inline-block text-lg sm:text-xl'>discount calculator</p>
</div>
        <div className='h-max w-11/12 sm:w-7/12 my-4 text-center'>
        <svg className=' w-7 h-7 inline-block mr-1 fill-green-700  ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.0049 22.0029C6.48204 22.0029 2.00488 17.5258 2.00488 12.0029C2.00488 6.48008 6.48204 2.00293 12.0049 2.00293C17.5277 2.00293 22.0049 6.48008 22.0049 12.0029C22.0049 17.5258 17.5277 22.0029 12.0049 22.0029ZM12.0049 20.0029C16.4232 20.0029 20.0049 16.4212 20.0049 12.0029C20.0049 7.58465 16.4232 4.00293 12.0049 4.00293C7.5866 4.00293 4.00488 7.58465 4.00488 12.0029C4.00488 16.4212 7.5866 20.0029 12.0049 20.0029ZM8.50488 14.0029H14.0049C14.281 14.0029 14.5049 13.7791 14.5049 13.5029C14.5049 13.2268 14.281 13.0029 14.0049 13.0029H10.0049C8.62417 13.0029 7.50488 11.8836 7.50488 10.5029C7.50488 9.12222 8.62417 8.00293 10.0049 8.00293H11.0049V6.00293H13.0049V8.00293H15.5049V10.0029H10.0049C9.72874 10.0029 9.50488 10.2268 9.50488 10.5029C9.50488 10.7791 9.72874 11.0029 10.0049 11.0029H14.0049C15.3856 11.0029 16.5049 12.1222 16.5049 13.5029C16.5049 14.8836 15.3856 16.0029 14.0049 16.0029H13.0049V18.0029H11.0049V16.0029H8.50488V14.0029Z"></path></svg>
        <p className='inline-block max-xs:text-lg text-xl mb-2'>please enter the price</p>
        <InputDefault disabled={false} value={enterAmount} onChange={changeEnterAmountHandler} type="text" className='w-full h-8 sm:h-14 text-xl border border-indigo-400 bg-transparent rounded-lg outline-none px-2'/>
        </div>

        <div className=' border border-indigo-400 w-11/12 h-max sm:w-7/12 text-center py-5 rounded-lg'>
        <svg className='w-7 h-7 inline-block mr-2 fill-green-700 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.0049 22.0029C6.48204 22.0029 2.00488 17.5258 2.00488 12.0029C2.00488 6.48008 6.48204 2.00293 12.0049 2.00293C17.5277 2.00293 22.0049 6.48008 22.0049 12.0029C22.0049 17.5258 17.5277 22.0029 12.0049 22.0029ZM12.0049 20.0029C16.4232 20.0029 20.0049 16.4212 20.0049 12.0029C20.0049 7.58465 16.4232 4.00293 12.0049 4.00293C7.5866 4.00293 4.00488 7.58465 4.00488 12.0029C4.00488 16.4212 7.5866 20.0029 12.0049 20.0029ZM8.50488 14.0029H14.0049C14.281 14.0029 14.5049 13.7791 14.5049 13.5029C14.5049 13.2268 14.281 13.0029 14.0049 13.0029H10.0049C8.62417 13.0029 7.50488 11.8836 7.50488 10.5029C7.50488 9.12222 8.62417 8.00293 10.0049 8.00293H11.0049V6.00293H13.0049V8.00293H15.5049V10.0029H10.0049C9.72874 10.0029 9.50488 10.2268 9.50488 10.5029C9.50488 10.7791 9.72874 11.0029 10.0049 11.0029H14.0049C15.3856 11.0029 16.5049 12.1222 16.5049 13.5029C16.5049 14.8836 15.3856 16.0029 14.0049 16.0029H13.0049V18.0029H11.0049V16.0029H8.50488V14.0029Z"></path></svg>
        <p className='inline-block pr-2 max-xs:text-lg text-xl'>amount of discount:</p>
        <span className='block text-4xl text-orange-300 '>{discountPercent}%</span>
        </div>
       <div className=' w-11/12  sm:w-7/12 my-2 h-14'>
       <ButtonDefault onClick={computHandler} className='  text-white hoverScale font-semibold h-full bg-green-400 rounded-lg' text='confirm' />
       </div>
       <div className=' w-11/12 sm:w-7/12 border rounded-lg text-center py-2 border-indigo-400'>
        <div className='text-xl'> result:</div>
        <span className='text-4xl text-yellow-400'>{resultAmount}</span>
        </div>
        </div>
    </div>
  )
}
