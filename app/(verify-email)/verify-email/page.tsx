'use client'
import React,{useContext , useEffect, useState} from 'react'
import VerifyEmail from '@/components/verifyEmail/verifyEmail'
import { AuthContext } from '@/context/authContext'

// interface verifyEmailProps {
//     path : string
// }

export default function page() {

  // const [isDashboardBusinessOwner , setIsDashboardBusinessOwner]=useState(false)
  // const {infos} = useContext(AuthContext)
  // useEffect(()=>{
  //   if(!!infos){
  //     if(infos.is_businessOwner){
  //       setIsDashboardBusinessOwner(true)
  //     }
  //   }
  // },[infos])

  // console.log(isDashboardBusinessOwner);
  
  return (
   <VerifyEmail />
  )
}
