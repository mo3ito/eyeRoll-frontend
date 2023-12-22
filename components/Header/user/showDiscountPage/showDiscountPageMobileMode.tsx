import React from 'react'

export default function ShowDiscountPageMobileMode({allDiscounts , onClickshowDetails}) {
  return (
    <div className='block lg:hidden translate-y-32 container  h-96 mx-auto px-2'>
          <div className="w-full bg-sky-100 pt-10 sticky top-0 ">
    <div className='w-full  flex justify-center bg-sky-50 max-[350px]:text-[10px] max-xs:text-[12px] sm:text-sm max-xs:py-2 py-3  text-xs items-center text-center border border-fuchsia-400  rounded-lg font-semibold '>
    
    <p className='w-1/4 '>brand name</p>
    <p className='w-1/4 '>discount</p>
    <p className="w-1/4">details</p>
    <p className='w-1/4 '>deadline</p>
    </div>
    </div>

    { allDiscounts.map(item=>

    <div className='bg-sky-50 border border-fuchsia-400 rounded-lg my-2 '>
         <div className='w-full flex  justify-center items-center text-center font-semibold max-xs:text-[10px] text-xs sm:text-sm  mt-1 '>
  

  <p className='w-1/4 truncate '>{item.brandName}</p>
 <p className='w-1/4 truncate  text-yellow-500 '>{item.discount}</p>
 
 <div className="w-1/4">
 <button onClick={()=>onClickshowDetails(item.brandName ,item.discount , item.startTime , item.endTime ,item.address , item.workPhone)} className=' truncate ml-1 underline py-1 rounded-md opacity-70'>show details</button>
 </div>

 <p className='w-1/4 truncate px-2 text-red-400'>{item.endTime}</p>
   </div>
   <div className='w-full p-1'>
   <button className='w-full bg-green-400 text-xs sm:text-sm rounded-md py-1 '>i am here</button>
    </div> 
   
    </div>
 
 
  
  
  ) }
    </div>
  )
}
