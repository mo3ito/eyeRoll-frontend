'use client'
import { useContext, useEffect, useState } from "react"
import RegisterBusinessOwner from "@/components/register/registerBusinessOwner"
import { AuthContext } from "@/context/authContext"
import Cookies from "js-cookie"






export default function Home() {

  
  const{isVerified} = useContext(AuthContext)

  console.log(isVerified);


  return (
   <main className=''>
   <RegisterBusinessOwner/>
   </main>
  )
}
