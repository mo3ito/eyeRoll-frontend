'use client'
import {useContext, useEffect, useState} from 'react'
import GetDiscountFromUser from '@/components/determinationRoll/getDiscountFromUser'
'use client'
import LoadingPage from '@/components/loading/loadingPage'

export default function page({params}:{params : {businessOwnerId : string}}) {
    const [isGetDiscount , setIsGetDiscount]=useState<boolean>(true)
    const [businessOwnerId , setBusinessOwnerId]=useState<string>("")

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
    <p className='pt-44'>llg</p>
   <GetDiscountFromUser businessOwnerId={businessOwnerId} isGetDiscount={isGetDiscount}  setIsGetDiscount={setIsGetDiscount} />
   </>
  )
}
