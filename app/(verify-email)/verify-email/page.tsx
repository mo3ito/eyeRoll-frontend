'use client'
import React, { useContext, useEffect, useState } from 'react'
import VerifyEmail from '@/components/verifyEmail/verifyEmail'
import { AuthContext } from '@/context/authContext'

export default function page() {
  
  return (
    <VerifyEmail path='/business-owner-dashboard' pathApi='http://localhost:5000/verify-email' />
  )
}