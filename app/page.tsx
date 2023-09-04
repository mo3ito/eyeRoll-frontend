'use client'
import { useState , useEffect } from "react"
import Input from "@/components/shared/input"
import Button from "@/components/shared/button"
import { toast } from "react-toastify"
import { Loading } from "@/components/loading/loading"


export default function Home() {

  const[name , setName]=useState<string>("")
  const[lastName , setLastName]=useState<string>("")
  const[username , setUsername]=useState<string>("")
  const[email , setEmial]= useState<string>("")
  const[password , setPassword]= useState<string>("")
  const[repeatPassword , setRepeatPassword]= useState<string>("")





  return (
   <main className=''>
    <div className="w-screen h-screen flex items-center justify-center flex-col overflow-x-hidden ">
    <h2 className="underline underline-offset-4 text-xl text-zinc-500">Register</h2>
    <Input value={name} onChange={(event)=>setName(event?.target.value)} label="name"  />
    <Input value={lastName} onChange={(event)=>setLastName(event?.target.value)} label="last name"  />
    <Input value={username} onChange={(event)=>setUsername(event?.target.value)} label="username"  />
    <Input value={email} onChange={(event)=>setEmial(event?.target.value)} label="email"  />
    <Input value={password} onChange={(event)=>setPassword(event?.target.value)} label="password"  />
    <Input value={repeatPassword} onChange={(event)=>setRepeatPassword(event?.target.value)} label="repeat password"  />
    <Button onClick={()=>'f'} text="Register"/>
    </div>
    
   
    
   </main>
  )
}
