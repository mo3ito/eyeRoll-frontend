import React from 'react'
import VerifyEmail from '@/components/verifyEmail/verifyEmail'
import { USERS_VERIFY_EMAIL_TOKEN } from '@/routeApi/endpoints'

export default function UsersVerifyEmail() {
    
  return (
    <VerifyEmail path='/' pathApi={USERS_VERIFY_EMAIL_TOKEN}/>
  )
}
