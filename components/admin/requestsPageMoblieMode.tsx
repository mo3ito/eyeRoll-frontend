import React from 'react'
import { RequestedRegisterationType } from '@/types/admin/adminTypes'

export default function RequestsPageMoblieMode({requests , showInfosHandler }) {
  return (
    <>
    { requests?.data.length >0 ? 
        <div className='block lg:hidden translate-y-24 container  h-96 mx-auto px-2 '>
        <div className="w-full bg-sky-100 pt-16 pb-2 sticky inset-0 z-50 ">
        <div className='w-full  flex justify-center bg-sky-50 max-[350px]:text-[10px] max-xs:text-[12px] sm:text-sm max-xs:py-2 py-3  text-xs items-center text-center border border-fuchsia-400  rounded-lg font-semibold '>
        
        <p className='w-4/12 '>name</p>
        <p className='w-4/12 '>request date</p>
        <p className="w-4/12">show infos</p>
        
        </div>
        </div>
    
        { requests?.data.map((item : RequestedRegisterationType) =>
    
        <div  className='bg-sky-50 border border-fuchsia-400 rounded-lg mb-4 first:mt-1  '>
             <div className='w-full flex  justify-center items-center text-center font-semibold max-xs:text-[10px] text-xs sm:text-sm  mt-1 '>
      
    
      <p className='w-4/12 truncate pl-2'>{item.name} {item.last_name}</p>
     <p className='w-4/12 truncate  text-yellow-500 '>{item.registration_date}</p>
     
     <div className="w-4/12">
     <button onClick={()=>showInfosHandler(item.name , item.last_name , item.username , item.email , item.phone_number , item.country_name , item.state_name , item.city_name , item.address , item.brand_name , item.postal_code , item.work_phone , item.registration_date )} className=' truncate ml-1 bg-indigo-300 py-1 px-2 rounded-md opacity-70 '>show infos</button>
     </div>
    
       </div>
       <div className='w-full p-1 flex gap-x-4 mt-2'>
       <button  className='w-1/2 bg-red-300 text-xs sm:text-sm rounded-md py-1 border border-zinc-500'>reject</button>
       <button  className='w-1/2 bg-green-400 text-xs sm:text-sm rounded-md py-1 border border-zinc-500'>confirm</button>
        </div> 
        </div>
      ) } 
    
    
        </div>
          : <p className='text-center pt-44 text-lg block lg:hidden'>there is no discount</p>} 
          </>
  )
}
