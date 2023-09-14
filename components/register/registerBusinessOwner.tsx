'use client'
import { useState , useEffect , FormEvent , useContext, useCallback , useRef } from "react"
import Input from "@/components/shared/input"
import Button from "@/components/shared/button"
import { toast } from "react-toastify"
import Loading from "@/components/loading/loading"
import { useQuery } from "react-query"
import sender from "@/services/sender"
import { AuthContext } from "@/context/authContext"
import { useRouter } from "next/navigation"
import Login from "@/components/login/login"

const RegisterBusinessOwner = () => {

    const[name , setName]=useState<string>("")
    const[lastName , setLastName]=useState<string>("")
    const[username , setUsername]=useState<string>("")
    const[email , setEmail]= useState<string>("")
    const[phoneNumber , setPhoneNumber]= useState<string>("")
    const[password , setPassword]= useState<string>("")
    const[repeatPassword , setRepeatPassword]= useState<string>("")
    const {login} = useContext(AuthContext)
    const router = useRouter()
    const [isLogin, setIsLogin] = useState(true);


    const submitHandler = async (event : FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        console.log("submit");
        const body = {
            name ,
            last_name: lastName,
            phone_number:phoneNumber,
            username,
            password,
            repeat_password:repeatPassword,
            email
        }
        try {
            const response = await sender("http://localhost:5000/register", body)
            if(response?.status === 200){
           await login(response?.data.userInfos , response?.data.token)
           router.push("/verify-email")
            }
              } catch (error) {
            console.error(error)
        }
      }
      

  return (
    <>
    { isLogin ? <Login onClick={()=>setIsLogin(false)}/> : <form onSubmit={submitHandler} className="w-screen h-screen flex items-center justify-center flex-col overflow-x-hidden ">
    <h2 className="underline underline-offset-4 text-xl text-purple-600">Registeration</h2>
    <Input type="text" value={name} onChange={(event)=>setName(event?.target.value)} label="name"  />
    <Input type="text" value={lastName} onChange={(event)=>setLastName(event?.target.value)} label="last name"  />
    <Input type="text" value={username} onChange={(event)=>setUsername(event?.target.value)} label="username"  />
    <Input type="text"  value={phoneNumber} onChange={(event)=>setPhoneNumber(event?.target.value)} label="phone number"  />
    <Input type="email" value={email} onChange={(event)=>setEmail(event?.target.value)} label="email"  />
    <Input type="password" value={password} onChange={(event)=>setPassword(event?.target.value)} label="password"  />
    <Input type="password" value={repeatPassword} onChange={(event)=>setRepeatPassword(event?.target.value)} label="repeat password"  />
    <Button text="Register"/>
    <div className="flex items-center justify-center text-purple-600 space-x-1">
    <small className="">Do you have an account? </small>
    <button onClick={()=>setIsLogin(true)} className="text-purple-900 underline">login</button>
    </div>
    </form> 
    
    }
    </>

  )
}

export default RegisterBusinessOwner;