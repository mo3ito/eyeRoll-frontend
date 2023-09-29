'use client'
import { useState , FormEvent , useContext,  } from "react"
import Input from "../../shared/input"
import Button from "../../shared/button"
import { toast } from "react-toastify"
import Loading from "../../loading/loading"
import { useQuery } from "react-query"
import sender from "../../../services/sender"
import { AuthContext } from "../../../context/authContext"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { USERS_REGISTER } from "@/routeApi/endpoints"

interface RegisterUserProps {
  isBusinessOwner?: boolean
}

const RegisterUser = ({isBusinessOwner = false}:RegisterUserProps) => {

   
    const[username , setUsername]=useState<string>("")
    const[email , setEmail]= useState<string>("")
    const[password , setPassword]= useState<string>("")
    const[repeatPassword , setRepeatPassword]= useState<string>("")
    const {login} = useContext(AuthContext)
    const router = useRouter();


    const submitHandler = async (event : FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
       
        const body = {
            username,
            password,
            repeat_password:repeatPassword,
            email : email.toLowerCase()
        }
        try {
          if( !email || !username.length || !password.length || !repeatPassword.length){
            toast.warn("Please Fill in the empty inputs")
            return
            }else if(password !== repeatPassword){
              toast.warn("Repeating the password is not the same as the password")
              return
            }else if(password.length < 8){
              toast.warn("the password must be at least 8 characters long")
              return
            }
            const response = await sender(USERS_REGISTER, body)
            if(response?.status === 200){
           await login(response?.data.userInfos , response?.data.token)
           router.push("/users-verify-email")
            } 
              } catch (error : any) {
                if (error.response.status === 400) {
                  const errorMessage = error.response.data.message;
                  toast.error(errorMessage);
                } else {
                toast.error("An error occurred while processing your request");
                }
        }
      }
      

  return (
    <>
    <form onSubmit={submitHandler} className="w-screen h-screen flex items-center justify-center flex-col overflow-x-hidden ">
    <h2 className=" text-xl text-indigo-600 border-b rounded-lg  p-1 border-indigo-500 ">
    {!isBusinessOwner ? <svg className='w-5 h-5 inline-block fill-indigo-600 mr-2 mb-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"></path></svg>
   : <svg className='w-5 h-5 inline-block fill-indigo-600 mr-2 mb-1'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.8611 2.39057C12.8495 1.73163 14.1336 1.71797 15.1358 2.35573L19.291 4.99994H20.9998C21.5521 4.99994 21.9998 5.44766 21.9998 5.99994V14.9999C21.9998 15.5522 21.5521 15.9999 20.9998 15.9999H19.4801C19.5396 16.9472 19.0933 17.9102 18.1955 18.4489L13.1021 21.505C12.4591 21.8907 11.6609 21.8817 11.0314 21.4974C10.3311 22.1167 9.2531 22.1849 8.47104 21.5704L3.33028 17.5312C2.56387 16.9291 2.37006 15.9003 2.76579 15.0847C2.28248 14.7057 2 14.1254 2 13.5109V6C2 5.44772 2.44772 5 3 5H7.94693L11.8611 2.39057ZM4.17264 13.6452L4.86467 13.0397C6.09488 11.9632 7.96042 12.0698 9.06001 13.2794L11.7622 16.2518C12.6317 17.2083 12.7903 18.6135 12.1579 19.739L17.1665 16.7339C17.4479 16.5651 17.5497 16.2276 17.4448 15.9433L13.0177 9.74551C12.769 9.39736 12.3264 9.24598 11.9166 9.36892L9.43135 10.1145C8.37425 10.4316 7.22838 10.1427 6.44799 9.36235L6.15522 9.06958C5.58721 8.50157 5.44032 7.69318 5.67935 7H4V13.5109L4.17264 13.6452ZM14.0621 4.04306C13.728 3.83047 13.3 3.83502 12.9705 4.05467L7.56943 7.65537L7.8622 7.94814C8.12233 8.20827 8.50429 8.30456 8.85666 8.19885L11.3419 7.45327C12.5713 7.08445 13.8992 7.53859 14.6452 8.58303L18.5144 13.9999H19.9998V6.99994H19.291C18.9106 6.99994 18.5381 6.89148 18.2172 6.68727L14.0621 4.04306ZM6.18168 14.5448L4.56593 15.9586L9.70669 19.9978L10.4106 18.7659C10.6256 18.3897 10.5738 17.9178 10.2823 17.5971L7.58013 14.6247C7.2136 14.2215 6.59175 14.186 6.18168 14.5448Z"></path></svg>}
      Register Customer</h2>
    <Input type="text" value={username} onChange={(event)=>setUsername(event?.target.value)} label="username"  />
    <Input type="email" value={email} onChange={(event)=>setEmail(event?.target.value)} label="email"  />
    <Input type="password" value={password} onChange={(event)=>setPassword(event?.target.value)} label="password"  />
    <Input type="password" value={repeatPassword} onChange={(event)=>setRepeatPassword(event?.target.value)} label="repeat password"  />
    <Button text="Register"/>
    <div className="flex items-center justify-center text-purple-600 space-x-1">
    <p className="text-xl text-indigo-500">Do you have an account? </p>
    <Link href="/register-user/login" className="text-indigo-800 underline text-xl">login</Link>
    </div>
    </form> 
    </>

  )
}

export default RegisterUser