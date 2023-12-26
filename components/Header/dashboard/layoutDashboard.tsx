"use client";
import React, { useState, useRef, useEffect } from "react";
import LeftMenu from "./leftMenu";
import { useContext } from "react";
import { AuthContext } from "@/context/authContext";
import useDropDownHandler from "@/hooks/useDropDownHandler";


import { useRouter } from "next/navigation";
import { BUSINESS_OWNER_VALIDATOR_PASSWORD } from "@/routeApi/endpoints";
import senderWithAuthId from "@/services/senderWithAuthId";
import useGetBusinessOwnerId from "@/hooks/useGet‌‌BusinessOwnerId";
import ValidatorPassword from "@/components/shared/ValidatorPassword/validatorPassword";
import { toast } from "react-toastify";
import { InfosProps } from "@/types/authentication";
import logoutHandler from "@/utils/logoutHandler";
import Logo from "@/components/logo/logo";

const LayoutDashboard = () => {
  const [showAside, setShowAside] = useState<boolean>(false);
  const leftMenuRef = useRef<HTMLDivElement | null>(null);
  const [showBox , setShowBox] = useState<boolean>(false)
  const [showSwitchAccount , setShowSwitchAccount]=useState<boolean>(false)
  const [isShowImportPassword , setIsShowImportPassword]=useState<boolean>(false)
  const [passwordInput , setPasswordInput]=useState<string>("")
  const { infos , setInfos } = useContext(AuthContext);
  const [isPasswordMatch , setIsPasswordMatch]=useState<boolean>(false)
  const router = useRouter()
  const {businessOwnerId} = useGetBusinessOwnerId(infos as InfosProps)
  useDropDownHandler(leftMenuRef , setShowAside)



  const validatorPassword = async ()=>{
    try {
      const response = await  senderWithAuthId(BUSINESS_OWNER_VALIDATOR_PASSWORD , {password: passwordInput},businessOwnerId)
      if(response?.status === 200){
        console.log(response);
        if(response?.data?.value === true){
          setIsPasswordMatch(response?.data?.value)
        } else{
          setPasswordInput("")
          setIsShowImportPassword(false)
          setIsPasswordMatch(false)
          toast.error("the password is not valid")
        }
        
      }
    } catch (error : any) {
      if (error.response?.status === 400) {
        const errorMessage = error?.response.data.message;
        toast.error(errorMessage);
      } else {
        toast.error("An error occurred while processing your request");
      }
    }
 
  }

  console.log(isPasswordMatch);
  useEffect(()=>{
    if(isPasswordMatch){
      router.push("/business-owner-dashboard/information/edit-password")
      setPasswordInput("")
      setIsShowImportPassword(false)
      setIsPasswordMatch(false)
    }
  },[isPasswordMatch])
  
  
 
  return (
<>
    <header className='h-24 bg-gradient-to-b from-indigo-300 to-sky-100 w-full fixed top-0 z-50  flex items-center justify-center '>
    <div className=' w-full h-full  mx-auto  flex items-center justify-between max-xs:px-2 px-4 sm:px-10 '>
   
    <div className='flex items-center   h-full space-x-3  w-full '>
        <button
          className="iniline-block text-xl   md:mr-8"
          onClick={() => setShowAside(true)}
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
          </svg>
        </button>
        <div onMouseLeave={()=>setShowBox(false)} onMouseEnter={()=>setShowBox(true)} className="w-max max-w-[200px] h-max relative bg-indigo-200 pr-2 py-1 mt-1 sm:mt-0 rounded-lg">
          <div onClick={()=>setShowBox(prev=> !prev)} className="w-max flex items-center justify-center cursor-pointer ">
            <img className=" w-10 h-10 sm:w-12 sm:h-12 object-cover border bg-sky-100  rounded-full inline-block" src={infos?.profile_image_path ? infos.profile_image_path : "/images/defaultPerson.png"} alt="" />
            <p className="inline-block ml-2 truncate w-max text-stone-600 max-w-[110px] text-sm sm:text-base md:text-lg sm:max-w-[150px] pr-2">{infos?.username}</p>
          </div>
          <div className={` ${showBox ? 'absolute' : 'hidden'}  bg-blue-100 max-xs:w-52 w-60 sm:w-[272px] h-max top-10 sm:top-14 border rounded-lg border-purple-400`}>
          <ul className="w-full h-max  max-xs:text-xs text-sm sm:text-base p-1 shadow-md">
          <li onTouchEnd={()=>setShowSwitchAccount(prev=>!prev)} onMouseLeave={()=>setShowSwitchAccount(false)}  onMouseEnter={()=>setShowSwitchAccount(true)} className=' cursor-pointer px-2 sm:px-2 py-2  relative hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white '>
            <span className="">
            switch to the other account
            { !showSwitchAccount ? <svg className=" w-4 h-4  sm:w-5 sm:h-5 ml-4 sm:ml-5 fill-fuchsia-700 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 11.8284L9.17154 14.6569L7.75732 13.2426L12 9L16.2426 13.2426L14.8284 14.6569L12 11.8284Z"></path></svg>
           : <svg className="w-4 h-4  sm:w-5 sm:h-5 ml-4  sm:ml-5 fill-white inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.1717 12.0005L9.34326 9.17203L10.7575 7.75781L15.0001 12.0005L10.7575 16.2431L9.34326 14.8289L12.1717 12.0005Z"></path></svg>}
             </span>
            <ul className={` ${showSwitchAccount ? 'absolute' : 'hidden'} left-[10px] z-40 w-11/12 sm:left-60 sm:top-0 rounded-lg sm:w-36 h-max bg-blue-100 border border-fuchsia-400 p-1`}>
            <li className=" px-2 sm:px-4 py-2  hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white truncate">mostafasssssssssssssssssssssssssss</li>
              <li className=" px-2 sm:px-4 py-2  hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white truncate">saj</li>
              <li className=" px-2 sm:px-4 py-2  hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white truncate">rez</li>
            </ul>
            </li>
          <li onClick={()=>logoutHandler(router , setInfos)} className=' cursor-pointer px-2 sm:px-2 py-2  relative hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white '>log out</li>
          </ul>
          </div>

        </div>

    </div>
    <Logo className='h-max  w-max' href="/business-owner-dashboard"/>
    </div>
  </header>
  <LeftMenu setIsShowImportPassword={setIsShowImportPassword} leftMenuRef={leftMenuRef} setShowAside={setShowAside} showAside={showAside} />
 
  <ValidatorPassword isShowModal={isShowImportPassword}
  passwordInput={passwordInput} setPasswordInput={setPasswordInput} 
  setIsShowModal={setIsShowImportPassword}onClick={validatorPassword} />
  
  </>
  );
};

export default LayoutDashboard;
