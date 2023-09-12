'use client'
import React, { useContext, useEffect, useState } from 'react'
import { useSearchParams , useRouter , ReadonlyURLSearchParams } from 'next/navigation'
import { AuthContext } from '@/context/authContext'
import sender from '@/services/sender'
import  Loading  from '@/components/loading/loading'
import { toast } from 'react-toastify'


export default function Page() {
  const searchParams : ReadonlyURLSearchParams = useSearchParams()
  const router = useRouter()
  const emailToken= searchParams.get("token_email")
  const {isVerifyedHandler , businessOwnerInfos , isVerified } = useContext(AuthContext)
  const [emailTokenGot , setEmailTokenGot] = useState<string>("")
  const [email , setEmail]=useState("")
 

  useEffect(()=>{
   businessOwnerInfos && setEmail(businessOwnerInfos.email)
  },[businessOwnerInfos])

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
          router.push("/house")
        },3000)
        
      } else if (!emailTokenGot){
        <Loading/>
      } else {
        toast.error("An error occurred. Please try again later")
       
      }
    }
    fetchData();
  }, [emailToken, emailTokenGot , isVerified]);

 

 

   
  return (
    <div className='container px-4 mx-auto'>
      {!emailTokenGot.length ? 
      <div>
      <p  className='w-full  text-center mt-44 h-20 pt-7 text-4xl text-zinc-700 font-semibold'>Verify Your Email</p>
      <p className='text-center text-2xl'>please check your email: <span className='text-blue-600 underline'>{email}</span> for your account verification  </p>
      </div>
      :
      <div>
      <div className='flex items-center justify-center flex-col mt-44'>
      <div className='flex'>
      <p  className='w-full  text-center   text-4xl text-zinc-700 font-semibold inline-block'>Your registration was successful</p>
      </div>
      <p className='text-center text-2xl inline-block'>Please wait a moment...</p>
      </div>
      </div>}
    </div>
    
  )
}
