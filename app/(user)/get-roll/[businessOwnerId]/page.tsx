'use client'
import {useContext, useEffect, useState} from 'react'
import GetDiscountFromUser from '@/components/determinationRoll/getDiscountFromUser'
import LoadingPage from '@/components/loading/loadingPage'

export default function page({params}:{params : {businessOwnerId : string}}) {
    const [isGetDiscount , setIsGetDiscount]=useState<boolean>(false)
    const [businessOwnerId , setBusinessOwnerId]=useState<string>("")
    const [isLoading , setIsLoading]=useState(false)

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
    <div>

   <GetDiscountFromUser businessOwnerId={businessOwnerId} isGetDiscount={isGetDiscount}  setIsGetDiscount={setIsGetDiscount} />
   </div>
   { isLoading &&
   

    <LoadingPage/>
   
   }
   </>
  )
}
