'use client'
import React, { useContext, useEffect, useState } from 'react'
import { useSearchParams , useRouter } from 'next/navigation'
import { AuthContext } from '@/context/authContext'
import sender from '@/services/sender'


export default function Page() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const emailToken= searchParams.get("token_email")
  const {isVerifyedHandler , businessOwnerInfos} = useContext(AuthContext)
  const [token , setToken] = useState<string>("")
  const [isLoading , setIsLoading]=useState<boolean>(false)
  const [error , setError]=useState<boolean>(false)
 

  useEffect(() => {
    if (emailToken) {
      setToken(emailToken);
    }
    async function fetchData() {
      if (token) {
        const body = {
          token_email: token
        };
        const response = await sender("http://localhost:5000/verify-email", body);
        
     
        isVerifyedHandler(response?.data.userInfos , response?.data.token)
      }
    }
    fetchData();
  }, [emailToken, token]);

  useEffect(()=>{
    console.log(businessOwnerInfos);
    
  })

 

   
  return (
    <div>we sent an email please verify it</div>
  )
}
