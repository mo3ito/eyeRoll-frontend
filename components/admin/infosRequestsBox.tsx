import React, { Dispatch, SetStateAction } from 'react'
import ModalDefault from '../modal/modalDefault'
import { RequestedRegisterationType } from '@/types/admin/adminTypes';

interface InfosRequestsBoxPropsType {
  isShowInfos: boolean;
  setIsShowInfos: Dispatch<SetStateAction<boolean>>;
  allInfosRequested: RequestedRegisterationType
}

export default function InfosRequestsBox({isShowInfos , setIsShowInfos , allInfosRequested } : InfosRequestsBoxPropsType) {
  return (
    <ModalDefault
    isShowModal={isShowInfos}
    setIsShowModal={setIsShowInfos}
    >
     <div className="w-full h-full pb-4 pt-12 px-4">
   <div className="w-full h-full  border border-fuchsia-400 p-3 shadow-md rounded-lg font-semibold bg-sky-50 ">
     <p className="mb-4 ">
       <span>name: </span>
       <span className="font-semibold break-words text-cyan-600">
        {allInfosRequested?.name}
       </span>
     </p>
     <p className="mb-4 ">
       
       <span>last name: </span>
       <span className="font-semibold break-words text-cyan-600">
        {allInfosRequested?.last_name}
       </span>
     </p>
     <p className="mb-4 ">
       
       <span>username: </span>
       <span className="font-semibold break-words text-cyan-600">
        {allInfosRequested?.username}
       </span>
     </p>
     <p className="mb-4 ">
      
       <span>email: </span>
       <span className="font-semibold break-words text-cyan-600">
        {allInfosRequested?.email}
       </span>
     </p>
     <p className="mb-4 ">
       <span>phone number: </span>
       <span className="font-semibold break-words text-cyan-600">
         {allInfosRequested?.phone_number}
       </span>
     </p>

     <p className="mb-4 ">
       <span>country name: </span>
       <span className="font-semibold break-words text-cyan-600">
         {allInfosRequested?.country_name}
       </span>
     </p>

     <p className="mb-4 ">
       <span>state name: </span>
       <span className="font-semibold break-words text-cyan-600">
         {allInfosRequested?.state_name}
       </span>
     </p>
     <p className="mb-4 ">
       
       <span>city name: </span>
       <span className="font-semibold break-words text-cyan-600">
         {allInfosRequested?.city_name}
       </span>
     </p>
     <p className="mb-4 ">
       
       <span>address: </span>
       <span className="font-semibold break-words text-cyan-600">
         {allInfosRequested?.address}
       </span>
     </p>
     <p className="mb-4 ">
       <span>brand name: </span>
       <span className="font-semibold break-words text-cyan-600">
         {allInfosRequested?.brand_name}
       </span>
     </p>
     <p className="mb-4 ">
       <span>postal code: </span>
       <span className="font-semibold break-words text-cyan-600">
         {allInfosRequested?.postal_code}
       </span>
     </p>
     <p className="mb-4 ">
       <span>work phone: </span>
       <span className="font-semibold break-words text-cyan-600">
         {allInfosRequested?.work_phone}
       </span>
     </p>

     <p className="mb-4 ">
       <span>registration date: </span>
       <span className="font-semibold break-words text-cyan-600">
         {allInfosRequested?.registration_date}
       </span>
     </p>
   </div>
 </div>

   </ModalDefault>
  )
}
