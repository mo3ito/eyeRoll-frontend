'use client'
import React from 'react'
import RegisterUser from '@/components/registeration/user/registerUser'
import LoadingPage from '@/components/loading/loadingPage'
import { AuthContext } from '@/context/authContext'
import { useContext } from 'react'
 

const page = () => {

  const {infos} = useContext(AuthContext)
  console.log(infos);
  
  return (
    <p>home</p>
  )
}

export default page