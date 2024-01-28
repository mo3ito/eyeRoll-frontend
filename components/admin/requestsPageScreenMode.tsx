import React from 'react'
import { RequestedRegisterationType , RequestsPagePropsType} from '@/types/admin/adminTypes'

export default function RequestsPageScreenMode({requests , showInfosHandler  , setBusinessOwnerId , setIsShowModalConfirm}:RequestsPagePropsType) {

    const confirmRegister =  async (businessOwnerId : string)=>{
       await setBusinessOwnerId(businessOwnerId)
       setIsShowModalConfirm(true)
    }
  return (
    <>
    <div className=" w-full fixed top-28  z-40 bg-sky-100 h-max  ">
    <div className="container  h-max mx-auto pb-1 px-2 lg:px-4">
    <p className=" border border-fuchsia-400 bg-sky-50 shadow-lg  w-full text-center max-xs:text-sm text-base sm:text-lg md:text-xl lg:text-2xl h-10 sm:h-12 flex items-center justify-center rounded-lg float-bottom">Requests</p>
    </div>
  </div>

  <div className=' container translate-y-32 mx-auto px-4 hidden lg:block'>
{ requests ? 
<div className='w-full  h-max  rounded-lg'>
<div className="w-full bg-sky-100 pt-10 sticky top-0">
<div className='w-full  flex justify-center bg-sky-50   items-center text-center border border-fuchsia-400 py-4 rounded-lg font-semibold '>
<p className='w-2/12  px-4'>number</p>
<p className='w-3/12  px-4'>name</p>
<p className='w-2/12   px-4'>request date</p>
<p className='w-2/12   px-4'>show information</p>
<p className='w-3/12   px-4'>status</p>
</div>
</div>


{ requests && requests?.data.map((item : RequestedRegisterationType , index : number)=>
<div key={item._id} className='w-full flex justify-center items-center text-center border border-fuchsia-400 py-4 my-2 rounded-lg bg-sky-50 '>
<p className='w-2/12 truncate px-4 '>{index +1}</p>
<p className='w-3/12 truncate px-4  text-lg '>{item.name} {item.last_name}</p>
<p className='w-2/12 truncate px-4'>{item.registration_date}</p>
<div className='w-2/12 px-4 '>
<button onClick={()=>showInfosHandler(item._id ,item.name , item.last_name , item.username , item.email , item.phone_number , item.country_name , item.state_name , item.city_name , item.address , item.brand_name , item.postal_code , item.work_phone , item.registration_date )} className="bg-indigo-200 py-1 w-max px-2  rounded-md" >show information</button>
</div>
<div className='w-3/12 h-8 '>
<button className='w-2/6  bg-red-300 mr-2  h-full rounded-md'>reject</button>
<button onClick={()=>confirmRegister(item._id)} className='w-2/6  bg-green-400 ml-2 h-full rounded-md'>confirm</button>
</div>
</div>
) }
</div> 
: <p className='text-center pt-20 text-xl'>there is no discount</p>}

</div> 
</>
  )
}
