'use client'
import {useContext, useEffect, useState} from 'react'
import GetDiscountFromUser from '@/components/determinationRoll/getDiscountFromUser'

import { AuthContext } from '@/context/authContext'
import LoadingPage from '@/components/loading/loadingPage'


export default function page({params}:{params : {businessOwnerId : string}}) {
    const [isGetDiscount , setIsGetDiscount]=useState<boolean>(true)
    const [businessOwnerId , setBusinessOwnerId]=useState<string>("")
    const{infos}=useContext(AuthContext)
    // const{businessOwnerId} = useGetBusinessOwnerId(infos as InfosProps)
    console.log(params?.businessOwnerId);

    useEffect(()=>{
      if(params){
        setBusinessOwnerId(params?.businessOwnerId)
      }
    },[params])
    
    console.log(businessOwnerId);
    

    if(!businessOwnerId){
        return <LoadingPage/>
    }
  return (
    <>
    <p>llg</p>
   <GetDiscountFromUser businessOwnerId={businessOwnerId} isGetDiscount={isGetDiscount}  setIsGetDiscount={setIsGetDiscount} />
   </>
  )
}
