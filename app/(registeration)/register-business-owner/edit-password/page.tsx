import React from 'react'
import EditPasswordPage from '@/components/editPasswordPage/editPasswordPage'

export default function EditPassword() {
  return (
    <EditPasswordPage pathApi={"http://localhost:5000/business-owner/change-password-forgot"} pathRedirect="/register-business-owner/login"/>
  )
}
