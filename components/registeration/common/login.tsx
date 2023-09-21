'use client'
import Input from '../../shared/input'
import Button from '../../shared/button'
import { useState , FormEvent , useContext , MouseEventHandler } from 'react'
import sender from '@/services/sender'
import { useRouter } from 'next/navigation'
import { AuthContext } from '@/context/authContext'
import { toast } from 'react-toastify'
import ButtonDefault from '../../shared/buttonDefault'
import Link from 'next/link'



interface LoginPropsType {
    onClick? : MouseEventHandler<HTMLButtonElement> | undefined,
    text: string,
    path:string
}

const Login = ({onClick , text = "login" , path} : LoginPropsType ) => {
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
           router.push(path)
            } else if (response?.status === 201){
              if(!isResendEmail){
                toast.warn("You have not confirmed your email, please click the resend email button")
              setIsResendEmail(true)
              }
              
            }
              }  catch (error : any) {
                console.error(error)
                if(error.response.status === 400){
                  const errorMessage = error.response.data.message;
                  toast.error(errorMessage);
                }else {
                  toast.error("An error occurred while processing your request");
                  }
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
    <h2 className=" text-xl text-sky-600 border-b rounded-lg  p-1 border-sky-500 ">{text}</h2>
    <Input type="email" value={email} onChange={(event)=>setEmail(event?.target.value)} label="email"  />
    <Input type="password" value={password} onChange={(event)=>setPassword(event?.target.value)} label="password"  />
    {!isResendEmail ? <Button text="login"/> :
    <Button text='resend email'  onClick={resendEmailHandler}/>}
    <div className="flex items-center justify-center text-purple-600 space-x-1">
    <p className="text-xl text-sky-700">Don't you have an account? </p>
    <Link href="/register-business-owner" className="text-sky-600 underline text-xl">register</Link>
    
    
    </div>
    </form>
  )
}

export default Login