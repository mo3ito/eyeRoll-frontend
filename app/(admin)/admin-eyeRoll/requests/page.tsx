'use client'
import {useEffect, useState , useContext} from 'react'
import getterWithAuthId from '@/services/getterWithAuthId'
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { AuthContext } from '@/context/authContext'
import useGetAdminId from '@/hooks/useGetAdminId'
import { InfosProps } from '@/types/authentication'
import LoadingPage from '@/components/loading/loadingPage';
import InfosRequestsBox from '@/components/admin/infosRequestsBox';
import { RequestedRegisterationType } from '@/types/admin/adminTypes';
import RequestsPageScreenMode from '@/components/admin/requestsPageScreenMode';
import RequestsPageMoblieMode from '@/components/admin/requestsPageMoblieMode';

export default function Requests() {

    const [isShowInfos , setIsShowInfos] = useState<boolean>(false)
    const [allInfosRequested , setAllInfosRequested]=useState<null | RequestedRegisterationType>(null)
    const {infos} = useContext(AuthContext)
    const {adminId} = useGetAdminId(infos as InfosProps)
    const queryKey = ["allRequest"]
    const {data:requests , isLoading} = useQuery( adminId ? queryKey : [] , ()=>{

        if(adminId){
            return getterWithAuthId("http://localhost:5000/admin/registeration-requests" , adminId)
        }

        return null
    })

    const showInfosHandler = async (name: string , last_name: string , username: string , email: string , phone_number: string , country_name: string , state_name: string , city_name: string , address: string , brand_name: string , postal_code: string , work_phone: string , registration_date: string )=>{
       await setAllInfosRequested({
        name , last_name , username , email , phone_number , country_name , state_name , city_name , address , brand_name , postal_code , work_phone , registration_date
       })
       setIsShowInfos(true)
    }

    if(isLoading){
        return <LoadingPage/>
    }

  return (
    <div className=''>
     <RequestsPageScreenMode requests={requests} showInfosHandler={showInfosHandler}/>
     <RequestsPageMoblieMode requests={requests} showInfosHandler={showInfosHandler}/>    
    <InfosRequestsBox
    isShowInfos={isShowInfos} 
    setIsShowInfos={setIsShowInfos} 
    allInfosRequested={ allInfosRequested as RequestedRegisterationType} />

    </div>
  )
}
 