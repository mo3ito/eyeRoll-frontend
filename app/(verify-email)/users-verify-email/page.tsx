import React from 'react'
import VerifyEmail from '@/components/verifyEmail/verifyEmail'

export default function UsersVerifyEmail() {
    
  return (
    <VerifyEmail path='/' pathApi='http://localhost:5000/users/verify-email'/>
  )
}
