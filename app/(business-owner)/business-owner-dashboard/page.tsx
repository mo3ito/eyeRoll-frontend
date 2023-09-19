'use client'
import React, { useEffect , useContext  } from 'react'
import { AuthContext } from '@/context/authContext'


const Page = ()=>{

  const {getMe} = useContext(AuthContext)

  useEffect(()=>{
  
  },[])

  return(
    <div>this is dashboard</div>
    
  )

}

export default Page