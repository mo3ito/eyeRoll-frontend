'use client'
import {useContext, useEffect, useState} from 'react'
import GetDiscountFromUser from '@/components/determinationRoll/getDiscountFromUser'
import LoadingPage from '@/components/loading/loadingPage'
import { AuthContext } from '@/context/authContext'

export default function page({params}:{params : {businessOwnerId : string}}) {
    const [isGetDiscount , setIsGetDiscount]=useState<boolean>(false)
    const [businessOwnerId , setBusinessOwnerId]=useState<string>("")
    const [isLoading , setIsLoading]=useState(false)
    const {infos} = useContext(AuthContext)

    console.log(params?.businessOwnerId);

    useEffect(()=>{
     
      const dataFetch = async ()=>{
        setIsLoading(true)
        if(params){
        await  setBusinessOwnerId(params?.businessOwnerId)

        setTimeout(()=>{
          setIsGetDiscount(true)
          setIsLoading(false)
        },2000)
     
        }
      }

      dataFetch()
    },[params])

  
  
    
    console.log(businessOwnerId);
    

 
  return (
    <>
    <div className=' translate-y-44 flex items-center justify-center w-full container mx-auto px-4'>
    { !isLoading && <p className='text-center border text-sm sm:text-base  border-fuchsia-400 w-max p-3 rounded-lg shadow-lg '>You can see your discounts in the discounts section of your user profile</p>}
   <GetDiscountFromUser isAdmin={infos?.is_admin} isBusinessOwner={infos?.is_businessOwner} businessOwnerId={businessOwnerId} isGetDiscount={isGetDiscount}  setIsGetDiscount={setIsGetDiscount} />
   </div>
   { isLoading &&
   

    <LoadingPage/>
   
   }
   </>
  )
}
