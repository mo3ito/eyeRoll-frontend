import React from 'react'
import { RequestedRegisterationType , RequestsPagePropsType} from '@/types/admin/adminTypes'






export default function RequestsPageMoblieMode({requests , showInfosHandler  , setBusinessOwnerId , setIsShowModalConfirm}:RequestsPagePropsType) {

    const confirmRegister =  async (businessOwnerId : string)=>{
        await setBusinessOwnerId(businessOwnerId)
        setIsShowModalConfirm(true)
     }

  return (
    <>
      <div className=" w-full fixed top-24  z-40 bg-sky-100 h-16 block lg:hidden  ">
    <div className="container h-max mx-auto pb-1 px-2  pt-3">
    <p className=" border border-fuchsia-400 bg-sky-50 shadow-lg  w-full text-center max-xs:text-sm text-base sm:text-lg md:text-xl lg:text-2xl h-10 sm:h-12 flex items-center justify-center rounded-lg float-bottom">Requests</p>
    </div>
  </div>
    { requests?.data.length >0 ? 
        <div className='block lg:hidden translate-y-24 container  h-max mx-auto px-2 '>
        <div className="w-full bg-sky-100 pt-16 pb-2 sticky inset-0 z-50 ">
        <div className='w-full  flex justify-center bg-sky-50 max-[350px]:text-[10px] max-xs:text-[12px] sm:text-sm max-xs:py-2 py-3  text-xs items-center text-center border border-fuchsia-400  rounded-lg font-semibold '>
        
        <p className='w-4/12 '>name</p>
        <p className='w-4/12 '>request date</p>
        <p className="w-4/12">show infos</p>
        
        </div>
        </div>
    
        { requests?.data.map((item : RequestedRegisterationType) =>
    
        <div  className='bg-sky-200 border border-fuchsia-400 rounded-lg mb-4 first:mt-1  '>
             <div className='w-full flex  justify-center items-center text-center font-semibold max-xs:text-[10px] text-xs sm:text-sm  mt-1 '>
      <p className='w-4/12 truncate pl-2'>{item.name} {item.last_name}</p>
     <p className='w-4/12 truncate '>{item.registration_date}</p>
     
     <div className="w-4/12">
     <button onClick={()=>showInfosHandler(item._id,item.name , item.last_name , item.username , item.email , item.phone_number , item.country_name , item.state_name , item.city_name , item.address , item.brand_name , item.postal_code , item.work_phone , item.registration_date )} className=' truncate ml-1 bg-indigo-300 py-1 px-2 rounded-md opacity-70 '>show infos</button>
     </div>
    
       </div>
       <div className='w-full p-1 flex gap-x-4 mt-2'>
       <button  className='w-1/2 bg-red-300 text-xs sm:text-sm rounded-md py-1 border border-zinc-500'>reject</button>
       <button onClick={()=>confirmRegister(item._id)}  className='w-1/2 bg-green-400 text-xs sm:text-sm rounded-md py-1 border border-zinc-500'>confirm</button>
        </div> 
        </div>
      ) } 
        </div>
          : <p className='text-center pt-56 text-lg block lg:hidden'>there is no request</p>} 
          </>
  )
}
