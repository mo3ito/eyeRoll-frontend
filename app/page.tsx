'use client'
import { useContext } from "react"
import RegisterBusinessOwner from "@/components/register/registerBusinessOwner"
import { AuthContext } from "@/context/authContext"






export default function Home() {

  
  const {isVerified} = useContext(AuthContext)

  console.log(isVerified);


  return (
   <main className=''>
   <RegisterBusinessOwner/>
   </main>
  )
}
