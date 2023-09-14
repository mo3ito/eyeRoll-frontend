'use client'
import Input from '../shared/input'
import Button from '../shared/button'
import { useState , FormEvent , useContext , MouseEventHandler } from 'react'
import sender from '@/services/sender'
import { useRouter } from 'next/navigation'
import { AuthContext } from '@/context/authContext'
import { toast } from 'react-toastify'
import ButtonDefault from '../shared/buttonDefault'



interface LoginPropsType {
    onClick : MouseEventHandler<HTMLButtonElement> | undefined
}

const Login = ({onClick} : LoginPropsType ) => {
    const [email , setEmail]=useState<string>("")
    const [password , setPassword]=useState<string>("")
    const [isResendEmail , setIsResendEmail]=useState<boolean>(false)
    const {login} = useContext(AuthContext)
    const router = useRouter()

    const submitHandler = async (event : FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        console.log("submit");
        const body = {
            password,
            email
        }
        try {
            const response = await sender("http://localhost:5000/login", body)
            if(response?.status === 200){
           await login(response?.data.userInfos , response?.data.token)
           router.push("/house")
            } else if (response?.status === 201){
              if(!isResendEmail){
                toast.warn("You have not confirmed your email, please click the resend email button")
              setIsResendEmail(true)
              }
              
            }
              } catch (error) {
            console.error(error)
        }
      }

     const resendEmailHandler = async ()=>{
      
      const body = {
        password,
        email
    }
    try {
      const response = await sender("http://localhost:5000/resend-email-verification" , body)
      if (response?.status === 200){
        router.push("/verify-email")
      }
    } catch (error) {
      console.error(error)
    }

     }
      
  return (
    <form onSubmit={submitHandler} className="w-screen h-screen flex items-center justify-center flex-col overflow-x-hidden ">
    <h2 className="underline underline-offset-4 text-xl text-purple-600">Login</h2>
    <Input type="email" value={email} onChange={(event)=>setEmail(event?.target.value)} label="email"  />
    <Input type="password" value={password} onChange={(event)=>setPassword(event?.target.value)} label="password"  />
    {!isResendEmail ? <Button text="login"/> :
    <Button text='resend email'  onClick={resendEmailHandler}/>}
    <div className="flex items-center justify-center text-purple-600 space-x-1">
    <small className="">Don't you have an account? </small>
    <button onClick={onClick} className="text-purple-900 underline">register</button>
    
    
    </div>
    </form>
  )
}

export default Login