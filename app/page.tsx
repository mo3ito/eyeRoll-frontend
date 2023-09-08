'use client'
import { useContext } from "react"
import RegisterBusinessOwner from "@/components/register/registerBusinessOwner"
import { AuthContext } from "@/context/authContext"






export default function Home() {

  const infos = useContext(AuthContext)

  console.log(infos);


  return (
   <main className=''>
   <RegisterBusinessOwner/>
   </main>
  )
}
