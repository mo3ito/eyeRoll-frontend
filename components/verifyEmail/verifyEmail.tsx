'use client'
import useVerifyEmail from '@/hooks/useVerifyEmail'

interface VerifyEmailProps {
  path:string,
  pathApi: string
}

export default function VerifyEmail({path , pathApi}:VerifyEmailProps) {


  const {emailTokenGot , email}=useVerifyEmail(path , pathApi)

  return (
    <div className='container px-4 mx-auto pt-64 '>
      {!emailTokenGot.length ? 
      <div>
      <p  className='w-full  text-center  h-20 text-4xl text-zinc-700 font-semibold'>Verify Your Email</p>
      <p className='text-center text-2xl'>please check your email: <span className='text-purple-600 underline'>{email}</span> for your account verification  </p>
      </div>
      :
      <div>
      <div className='flex items-center justify-center flex-col '>
      <div className='flex'>
      <p  className='w-full  text-center   text-4xl text-zinc-700 font-semibold inline-block'>Your registration was successful</p>
      </div>
      <p className='text-center text-2xl inline-block'>Please wait a moment...</p>
      </div>
      </div>}
    </div>
    
  )
}