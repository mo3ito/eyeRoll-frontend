'use client'
import React, { useContext, useEffect, useState } from 'react'
import { useSearchParams , useRouter , ReadonlyURLSearchParams } from 'next/navigation'
import { AuthContext } from '@/context/authContext'
import sender from '@/services/sender'
import getterWithAuth from '@/services/getterWithAuth'
import Cookies from 'js-cookie'


export default function Page() {
  const searchParams : ReadonlyURLSearchParams = useSearchParams()
  const router = useRouter()
  const emailToken= searchParams.get("token_email")
  const {isVerifyedHandler , businessOwnerInfos , setIsVerified , isVerified , setBusinessOwnersInfos , setIsLoggedIn} = useContext(AuthContext)
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
  }, [emailToken, emailTokenGot , isVerified]);

  // useEffect(()=>{
    
  //   if(isVerified){

  //   }
     
  // },[isVerified])

  // useEffect(() => {
  //   if(isVerified){
  //     const checkTokenAndFetchData = async () => {
  //       try {
  //         const getToken = Cookies.get("businessOwnerToken");
  //         if (getToken) {
  //           const response = await getterWithAuth("http://localhost:5000/get-me");
  //           setBusinessOwnersInfos(response?.data);
  //           setIsLoggedIn(true);
  //         } else {
  //           setBusinessOwnersInfos({});
  //           setIsLoggedIn(false);
  //         }
  //       } catch (error) {
  //         console.log("Error fetching user data:", error);
  //         setBusinessOwnersInfos({});
  //         setIsLoggedIn(false);
  //       }
  //     };
  
  //     checkTokenAndFetchData();
  //   }

  // }, [isVerified]);
  

 

   
  return (
    <div>we sent an email please verify it</div>
  )
}
