'use client'
import {useContext} from 'react'
import { AuthContext } from '@/context/authContext'

export default function AdminEyeRoll() {

  const {infos} = useContext(AuthContext)
  console.log(infos);
  

  return (
    <div>admin page</div>
  )
}
