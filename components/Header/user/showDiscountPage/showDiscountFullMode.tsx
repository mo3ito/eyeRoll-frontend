import React from 'react'
import { ShowDiscountFullModePropsType } from '@/types/rollType/determinationRoll';


export default function ShowDiscountFullMode({allDiscounts , onClickshowDetails}:ShowDiscountFullModePropsType) {

  console.log(allDiscounts);
  
  return (
    <>
    <div className=' container translate-y-24 mx-auto px-6 hidden lg:block'>
    { allDiscounts.length>0 ? <div className='w-full  h-max  rounded-lg'>
    <div className="w-full bg-sky-100 pt-10 sticky top-0">
    <div className='w-full  flex justify-center bg-sky-50   items-center text-center border border-fuchsia-400 py-4 rounded-lg font-semibold '>
    <p className='w-2/12  px-4'>brand name</p>
    <p className='w-2/12  px-4'>discount</p>
    <p className='w-2/12   px-4'>deadline</p>
    <p className='w-2/12   px-4'>details discount</p>
    <p className='w-2/12   px-4'>work phone</p>
    <p className="w-2/12 px-4 ">use discount</p>
    </div>
    </div>
    

  { allDiscounts.map(item=>
  <div key={item.id} className='w-full flex justify-center items-center text-center border border-fuchsia-400 py-4 my-2 rounded-lg bg-sky-50 '>
  <p className='w-2/12 truncate px-4 '>{item.brandName}</p>
  <p className='w-2/12 truncate px-4 text-yellow-500 text-lg '>{item.discount}</p>
  <p className='w-2/12 truncate px-4 text-red-400'>{item.startTime}-{item.endTime}</p>
  <div className="w-2/12 px-4 ">
  <button onClick={()=>onClickshowDetails(item.brandName ,item.discount , item.startTime , item.endTime ,item.address , item.workPhone)} className=' truncate  underline py-1 rounded-md'>show details</button>
  </div>

  <p className='w-2/12 truncate px-4'>{item.workPhone}</p>
  <div className='w-2/12 px-4 '>
  <button className="bg-green-400 py-1 w-max px-6 rounded-md" >use discount</button>
  </div>
  </div>
  ) }
</div> : <p className='text-center pt-20 text-xl'>there is no discount</p>}
  
  </div> 
  
  
  </>
  )
}
 