'use client'
import React, { useContext, useEffect, useState } from 'react'
import VerifyEmail from '@/components/verifyEmail/verifyEmail'
import { BUSINESS_OWNER_VERIFY_EMAIL_TOKEN } from '@/routeApi/endpoints'

export default function page() {
  
  return (
    <VerifyEmail path='/business-owner-dashboard' pathApi={BUSINESS_OWNER_VERIFY_EMAIL_TOKEN} />
  )
}