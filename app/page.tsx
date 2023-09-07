'use client'
import { useContext } from "react"
import RegisterBusinessOwner from "@/components/register/registerBusinessOwner"
import { AuthContext } from "@/context/authContext"






export default function Home() {

  const{businessOwnerInfos} = useContext(AuthContext)

  console.log(businessOwnerInfos);


  return (
   <main className=''>
   <RegisterBusinessOwner/>
   </main>
  )
}
