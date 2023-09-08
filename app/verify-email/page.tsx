'use client'
import React, { useContext, useEffect, useState } from 'react'
import { useSearchParams , useRouter , ReadonlyURLSearchParams } from 'next/navigation'
import { AuthContext } from '@/context/authContext'
import sender from '@/services/sender'


export default function Page() {
  const searchParams : ReadonlyURLSearchParams = useSearchParams()
  const router = useRouter()
  const emailToken= searchParams.get("token_email")
  const {isVerifyedHandler , businessOwnerInfos} = useContext(AuthContext)
  const [emailTokenGot , setEmailTokenGot] = useState<string>("")
  const [isLoading , setIsLoading]=useState<boolean>(false)
  const [error , setError]=useState<boolean>(false)
 

  useEffect(() => {
    if (emailToken ) {
      setEmailTokenGot(emailToken);
    }
    async function fetchData() {
      if (emailTokenGot) {
        const body = {
          token_email: emailTokenGot
        };
        const response = await sender("http://localhost:5000/verify-email", body);
        
     
        isVerifyedHandler(response?.data.userInfos , response?.data.token)
        setTimeout(()=>{
          router.push("/")
        },3000)
        
      } else if (!emailTokenGot){
        <p>loading</p>
      } else {
        <p>err</p>
      }
    }
    fetchData();
  }, [emailToken, emailTokenGot]);

  useEffect(()=>{
    console.log(businessOwnerInfos);
    
  })
  

 

   
  return (
    <div>we sent an email please verify it</div>
  )
}
