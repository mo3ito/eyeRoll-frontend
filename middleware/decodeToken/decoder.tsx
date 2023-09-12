// 'use client'
// import {  useContext , useEffect } from "react"
// import { AuthContext } from "@/context/authContext"
// import Cookies from "js-cookie"
// import jwt_decode from "jwt-decode";

// const {setBusinessOwnersInfos , businessOwnerInfos , setIsLoggedIn} = useContext(AuthContext)

    
// useEffect(()=>{
//       const token = Cookies.get("businessOwnerToken")
//       if(token?.length){
//         const decodedToken : object = jwt_decode(token)
//         setBusinessOwnersInfos(decodedToken)
//       } else{
//         setBusinessOwnersInfos({})
//       }
//     },[])

//     useEffect(()=>{
//         if(businessOwnerInfos?.is_verified){
//           setIsLoggedIn(true)
//         }else{
//           setIsLoggedIn(false)
//         }
//       },[businessOwnerInfos])
      
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  // Assume a "Cookie:nextjs=fast" header to be present on the incoming request
  // Getting cookies from the request using the `RequestCookies` API
  let cookie = request.cookies.get('businessOwnerToken')
  console.log(cookie) // => { name: 'nextjs', value: 'fast', Path: '/' }
  const allCookies = request.cookies.getAll()
  console.log(allCookies) // => [{ name: 'nextjs', value: 'fast' }]
 
  request.cookies.has('nextjs') // => true
  request.cookies.delete('nextjs')
  request.cookies.has('nextjs') // => false
 
  // Setting cookies on the response using the `ResponseCookies` API
  const response = NextResponse.next()
  response.cookies.set('vercel', 'fast')
  response.cookies.set({
    name: 'vercel',
    value: 'fast',
    path: '/',
  })
  cookie = response.cookies.get('vercel')
  console.log(cookie) // => { name: 'vercel', value: 'fast', Path: '/' }
  // The outgoing response will have a `Set-Cookie:vercel=fast;path=/test` header.
 
  return response
}