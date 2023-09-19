'use client'
import { useState , FormEvent , useContext,  } from "react"
import Input from "../../shared/input"
import Button from "../../shared/button"
import { toast } from "react-toastify"
import Loading from "../../loading/loading"
import { useQuery } from "react-query"
import sender from "@/services/sender"
import { AuthContext } from "@/context/authContext"
import { useRouter } from "next/navigation"
import Link from "next/link"

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
            email: email.toLowerCase()
        }
        try {
          if(!name.length || !lastName.length || !phoneNumber.length || !username.length || !password.length || !repeatPassword.length){
            toast.warn("Please Fill in the empty inputs")
            return
            }else if(password !== repeatPassword){
              toast.warn("Repeating the password is not the same as the password")
              return
            }else if (isNaN(+phoneNumber)){
              toast.warn("the phoneNumber must be number")
              return
            }else if(password.length < 8){
              toast.warn("the password must be at least 8 characters long")
              return
            }
            const response = await sender("http://localhost:5000/register", body)
            if(response?.status === 200){
           await login(response?.data.userInfos , response?.data.token)
           router.push("/verify-email")
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
    <h2 className="underline underline-offset-4 text-xl text-purple-500">Register business owner</h2>
    <Input type="text" value={name} onChange={(event)=>setName(event?.target.value)} label="name"  />
    <Input type="text" value={lastName} onChange={(event)=>setLastName(event?.target.value)} label="last name"  />
    <Input type="text" value={username} onChange={(event)=>setUsername(event?.target.value)} label="username"  />
    <Input type="text"  value={phoneNumber} onChange={(event)=>setPhoneNumber(event?.target.value)} label="phone number"  />
    <Input type="email" value={email} onChange={(event)=>setEmail(event?.target.value)} label="email"  />
    <Input type="password" value={password} onChange={(event)=>setPassword(event?.target.value)} label="password"  />
    <Input type="password" value={repeatPassword} onChange={(event)=>setRepeatPassword(event?.target.value)} label="repeat password"  />
    <Button text="Register"/>
    <div className="flex items-center justify-center text-purple-600 space-x-1">
    <p className="text-xl text-purple-500">Do you have an account? </p>
    <Link href="/register-business-owner/login" className="text-purple-700 underline text-xl">login</Link>
    </div>
    </form> 
    
    
    </>

  )
}

export default RegisterBusinessOwner;