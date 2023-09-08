'use client'
import { useState , useEffect , FormEvent , useContext } from "react"
import Input from "../shared/input"
import Button from "../shared/button"
import { toast } from "react-toastify"
import { Loading } from "../loading/loading"
import { useQuery } from "react-query"
import sender from "@/services/sender"
import { AuthContext } from "@/context/authContext"
import { useRouter } from "next/navigation"
const RegisterBusinessOwner = () => {

    const[name , setName]=useState<string>("")
    const[lastName , setLastName]=useState<string>("")
    const[username , setUsername]=useState<string>("")
    const[email , setEmial]= useState<string>("")
    const[phoneNumber , setPhoneNumber]= useState<string>("")
    const[password , setPassword]= useState<string>("")
    const[repeatPassword , setRepeatPassword]= useState<string>("")
    const {login} = useContext(AuthContext)
    const router = useRouter()
  
  
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
            if(response){
           await login(response?.data.userInfos , response?.data.token)
           router.push("/verify-email")


            }
              } catch (error) {
            console.error(error)
        }
        
        
      }

  return (
    <form onSubmit={submitHandler} className="w-screen h-screen flex items-center justify-center flex-col overflow-x-hidden ">
    <h2 className="underline underline-offset-4 text-xl text-blue-600">Registeration</h2>
    <Input value={name} onChange={(event)=>setName(event?.target.value)} label="name"  />
    <Input value={lastName} onChange={(event)=>setLastName(event?.target.value)} label="last name"  />
    <Input value={username} onChange={(event)=>setUsername(event?.target.value)} label="username"  />
    <Input  value={phoneNumber} onChange={(event)=>setPhoneNumber(event?.target.value)} label="phone number"  />
    <Input value={email} onChange={(event)=>setEmial(event?.target.value)} label="email"  />
    <Input value={password} onChange={(event)=>setPassword(event?.target.value)} label="password"  />
    <Input value={repeatPassword} onChange={(event)=>setRepeatPassword(event?.target.value)} label="repeat password"  />
    <Button text="Register"/>
    </form>
  )
}

export default RegisterBusinessOwner