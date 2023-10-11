"use client";
import InputDefault from "@/components/shared/inputs/inputDefault";
import ButtonDefault from "@/components/shared/button/buttonDefault";
import { useContext , useEffect, useState } from "react";
import { AuthContext } from "@/context/authContext";
import Loading from "@/components/loading/loading";

export default function Information() {

  const {infos} = useContext(AuthContext)
  const [name , setName] = useState<string>('')
  const [lastName , setLastName]=useState<string>('')
  const [username , setUsername]=useState<string>('')
  const [email , setEmail]=useState<string>('')
  const [phoneNumber , setPhoneNumber]=useState<string>('')
  const [password , setPassword]=useState<string>('')
  const [repeatPassword , setRepeatPassword]=useState<string>('')
  const [country , setCountry]=useState<string>('')
  const [state , setState]=useState<string>('')
  const [city , setCity]=useState<string>('')
  const [address , setAddress]=useState<string>('')
  const [brandName , setBrandName]=useState<string>('')
  const [postalCode , setPostalCode]=useState<string>('')
  const [workPhone , setWorkPhone]=useState<string>('')





  useEffect(()=>{
    if(infos){
      setName(infos?.name)
      setLastName(infos?.last_name)
      setUsername(infos?.username)
      setEmail(infos?.email)
      setPhoneNumber(infos?.phone_number)
      setCountry(infos?.country_name)
      setState(infos?.state_name)
      setCity(infos?.city_name)
      setAddress(infos?.address)
      setBrandName(infos?.brand_name)
      setPostalCode(infos.postal_code)
      setWorkPhone(infos?.work_phone)
    }

  },[infos])
  console.log(infos);

  const changeHandlerName = ()=>{
    
  }
  
  
  if(!infos){
    return <Loading/>
  }

  return (
    <div className="bg-sky-100 w-full h-screen">
      <div className="container px-4  h-max mx-auto">
        <form>
          <div className="w-2/4 h-max mx-auto pt-32 ">
            <div className="w-full flex justify-around gap-x-5">
              <div className="mb-4 w-1/2 ">
                <p className="mb-3 starBefore ">name</p>
                <InputDefault
                onChange={changeHandlerName}
                  value={name}
                  disabled={false}
                  type="text"
                  className="w-full h-10 border focus:border-2 border-fuchsia-400 px-2 outline-none bg-transparent rounded-lg"
                />
              </div>

              <div className="mb-4 w-1/2 ">
                <p className=" starBefore mb-3">last name</p>
                <InputDefault
                value={lastName}
                  disabled={false}
                  type="text"
                  className="w-full h-10 border focus:border-2 border-fuchsia-400 px-2 outline-none bg-transparent rounded-lg"
                />
              </div>

           


              
            </div>

            <div className="w-full flex justify-around gap-x-5">
            <div className="mb-4 w-2/4 ">
                <p className="mb-3 starBefore ">username</p>
                <InputDefault
                value={username}
                  disabled={false}
                  type="text"
                  className="w-full h-10 border focus:border-2 border-fuchsia-400 px-2 outline-none bg-transparent rounded-lg"
                />
              </div>

              <div className="mb-4 w-2/4 ">
                <p className="mb-3 starBefore ">phone number</p>
                <InputDefault
                value={phoneNumber}
                  disabled={false}
                  type="text"
                  className="w-full h-10 border focus:border-2 border-fuchsia-400 px-2 outline-none bg-transparent rounded-lg"
                />
              </div>
            </div>

            <div className="w-full flex justify-around gap-x-5">
              <div className="mb-4 w-1/3 ">
                <p className="mb-3 starBefore">email</p>
                <InputDefault
                value={email}
                  disabled={false}
                  type="email"
                  className="w-full h-10 border focus:border-2 border-fuchsia-400 px-2 outline-none bg-transparent rounded-lg"
                />
              </div>
              

              <div className="mb-4 w-1/3 ">
                <p className="mb-3 starBefore">password</p>
                <InputDefault
                value={password}
                placeholder="import new password"
                  disabled={false}
                  type="password"
                  className="w-full h-10 border focus:border-2 border-fuchsia-400 px-2 outline-none bg-transparent rounded-lg"
                />
                
              </div>

              <div className="mb-4 w-1/3 ">
                <p className="mb-3 starBefore">repeat password</p>
                <InputDefault
                value={repeatPassword}
                placeholder="repeat new password"
                  disabled={false}
                  type="password"
                  className="w-full h-10 border focus:border-2 border-fuchsia-400 px-2 outline-none bg-transparent rounded-lg"
                />
                
              </div>


         
            </div>

            <div className="w-full flex justify-around gap-x-5">
              <div className="mb-4 w-1/3 ">
                <p className="mb-3 starBefore">country</p>
                <InputDefault
                value={country}
                  disabled={false}
                  type="text"
                  className="w-full h-10 border focus:border-2 border-fuchsia-400 px-2 outline-none bg-transparent rounded-lg"
                />
              </div>

              <div className="mb-4 w-1/3 ">
                <p className="mb-3 starBefore">state</p>
                <InputDefault
                value={state}
                  disabled={false}
                  type="text"
                  className="w-full h-10 border focus:border-2 border-fuchsia-400 px-2 outline-none bg-transparent rounded-lg"
                />
              </div>

              <div className="mb-4 w-1/3 ">
                <p className="mb-3 starBefore">city</p>
                <InputDefault
                value={city}
                  disabled={false}
                  type="text"
                  className="w-full h-10 border focus:border-2 border-fuchsia-400 px-2 outline-none bg-transparent rounded-lg"
                />
              </div>
            </div>

            <div className="w-full flex justify-around gap-x-5">
              <div className="mb-4 w-full ">
                <p className="mb-3 starBefore">address</p>
                <InputDefault
                value={address}
                  disabled={false}
                  type="text"
                  className="w-full h-10 border focus:border-2 border-fuchsia-400 px-2 outline-none bg-transparent rounded-lg"
                />
              </div>
              </div>

              <div className="w-full flex justify-around gap-x-5">

              <div className="mb-4 w-1/3 ">
                <p className="mb-3 starBefore">brand name</p>
                <InputDefault
                value={brandName}
                  disabled={false}
                  type="text"
                  className="w-full h-10 border focus:border-2 border-fuchsia-400 px-2 outline-none bg-transparent rounded-lg"
                />
              </div>

              <div className="mb-4 w-1/3 ">
                <p className="mb-3 starBefore">Postal code</p>
                <InputDefault
                value={postalCode}
                  disabled={false}
                  type="text"
                  className="w-full h-10 border focus:border-2 border-fuchsia-400 px-2 outline-none bg-transparent rounded-lg"
                />
              </div>

              <div className="mb-4 w-1/3 ">
                <p className="mb-3 starBefore">work phone</p>
                <InputDefault
                value={workPhone}
                  disabled={false}
                  type="text"
                  className="w-full h-10 border focus:border-2 border-fuchsia-400 px-2 outline-none bg-transparent rounded-lg"
                />
              </div>
              </div>

            <ButtonDefault
              text="send"
              className="hoverScale w-full mt-4 bg-fuchsia-400 h-12 rounded-lg"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
