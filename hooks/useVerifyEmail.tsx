'use client'
import React, { useContext, useEffect, useState } from 'react'
import { useSearchParams , useRouter , ReadonlyURLSearchParams } from 'next/navigation'
import sender from "@/services/sender"
import { AuthContext } from "@/context/authContext"
import Loading from '@/components/loading/loading'
import { toast } from 'react-toastify'


const useVerifyEmail = (path : any , pathApi : string) => {
    const searchParams : ReadonlyURLSearchParams = useSearchParams()
    const router = useRouter()
    const emailToken= searchParams.get("token_email")
    const {isVerifyedHandler , infos , isVerified } = useContext(AuthContext)
    const [emailTokenGot , setEmailTokenGot] = useState<string>("")
    const [email , setEmail]=useState("")

    const [isVerifyedHandlerDone , setIsVerifyHandlerDone]=useState(false)
    useEffect(()=>{
        if(infos){
         setEmail(infos.email)
        }
       },[infos])
       console.log(path);
       console.log(infos);
       
       
     
       useEffect(() => {
         if (emailToken ) {
           setEmailTokenGot(emailToken);
         }
         async function fetchData() {
           if (emailTokenGot) {
             const body = {
               token_email: emailTokenGot
             };
             const response = await sender(pathApi, body);
             if(response?.status===200){
              await isVerifyedHandler(response?.data.userInfos , response?.data.token)
              setIsVerifyHandlerDone(true)
             }
           } else if (!emailTokenGot){
             <Loading/>
           } else {
             toast.error("An error occurred. Please try again later")
            
           }
         }
         fetchData();
       }, [emailToken, emailTokenGot , isVerified]);
     
       useEffect(()=>{
         if(path.length>0 && isVerifyedHandlerDone){
           setTimeout(()=>{
             router.push(path)
           },3000)
         }
       },[path , isVerifyedHandlerDone])

       return{emailTokenGot , email}
}

   
      


export default useVerifyEmail