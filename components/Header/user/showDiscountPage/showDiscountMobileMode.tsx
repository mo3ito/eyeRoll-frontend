import React from 'react'
import { ShowDiscountFullModePropsType } from '@/types/rollType/determinationRoll'

export default function ShowDiscountMobileMode({allDiscounts , onClickshowDetails , getDiscountOnClick}:ShowDiscountFullModePropsType) {
  return (
    <>
    { allDiscounts.length >0 ? <div className='block lg:hidden translate-y-14 container  h-max mx-auto px-2 '>
    <div className="w-full bg-sky-100 pt-16 pb-2 sticky inset-0 z-50 ">
    <div className='w-full  flex justify-center bg-sky-50 max-[350px]:text-[10px] max-xs:text-[12px] sm:text-sm max-xs:py-2 py-3  text-xs items-center text-center border border-fuchsia-400  rounded-lg font-semibold '>
    
    <p className='w-1/4 '>brand name</p>
    <p className='w-1/4 '>discount</p>
    <p className="w-1/4">details</p>
    <p className='w-1/4 '>deadline</p>
    </div>
    </div>

    { allDiscounts.map(item=>

    <div key={item.id} className='bg-sky-50 border border-fuchsia-400 rounded-lg mb-4 first:mt-1  '>
         <div className='w-full flex  justify-center items-center text-center font-semibold max-xs:text-[10px] text-xs sm:text-sm  mt-1 '>
  

  <p className='w-1/4 truncate '>{item.brandName}</p>
 <p className='w-1/4 truncate  text-yellow-500 '>{item.discount}</p>
 
 <div className="w-1/4">
 <button onClick={()=>onClickshowDetails(item.brandName ,item.discount , item.startTime , item.endTime ,item.address , item.workPhone)} className=' truncate ml-1 underline py-1 rounded-md opacity-70'>show details</button>
 </div>

 <p className='w-1/4 truncate px-2 text-red-400'>{item.endTime}</p>
   </div>
   <div className='w-full p-1'>
   <button onClick={()=>getDiscountOnClick(item.businessOwnerId , item.id , item.discount)} className='w-full bg-green-400 text-xs sm:text-sm rounded-md py-1 border border-zinc-500'>use discount</button>
    </div> 
    </div>
  ) }


    </div> : <p className='text-center pt-44 text-lg block lg:hidden'>there is no discount</p>}
    </>
  )
}
