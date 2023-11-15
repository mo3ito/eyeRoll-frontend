"use client";
import React, { useState, useRef, useEffect } from "react";
import LeftMenu from "./leftMenu";
import { useContext } from "react";
import { AuthContext } from "@/context/authContext";

import logOutHandler from "@/utils/logOutHandler";
import { useRouter } from "next/navigation";
import ModalDefault from "@/components/modal/modalDefault";
import InputPassword from "@/components/shared/inputs/inputPassword";
import handleInputChange from "@/utils/handleInputChange";
import { BUSINESS_OWNER_VALIDATOR_PASSWORD } from "@/routeApi/endpoints";
import senderWithAuthId from "@/services/senderWithAuthId";
import useGetBusinessOwnerId from "@/hooks/useGet‌‌BusinessOwnerId";
import { toast } from "react-toastify";

const LayoutDashboard = () => {
  const [showAside, setShowAside] = useState<boolean>(false);
  const leftMenuRef = useRef<HTMLDivElement | null>(null);
  const [showBox , setShowBox] = useState<boolean>(false)
  const [showSwitchAccount , setShowSwitchAccount]=useState<boolean>(false)
  const [isShowImportPassword , setIsShowImportPassword]=useState<boolean>(false)
  const [passwordInput , setPasswordInput]=useState<string>("")
  const { infos } = useContext(AuthContext);
  const [isPasswordMatch , setIsPasswordMatch]=useState<boolean>(false)
  const router = useRouter()
  const {businessOwnerId} = useGetBusinessOwnerId(infos)


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        leftMenuRef.current &&
        !leftMenuRef.current.contains(event.target as Node)
      ) {
        setShowAside(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showAside]);

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
    <div className=' w-full h-full  mx-auto  flex items-center justify-between max-xs:px-2 px-10 sm:px-20 '>
   
    <div className='flex items-center   h-full space-x-3  w-full '>
        <button
          className="iniline-block text-xl  mb-2 sm:mb-0 md:mr-8"
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
        <div onMouseLeave={()=>setShowBox(false)} onMouseEnter={()=>setShowBox(true)} className="w-max max-w-[200px] h-max relative ">
          <div  onClick={()=>setShowBox(prev=> !prev)} className="w-max flex items-center justify-center cursor-pointer">
            <img className=" w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full inline-block" src={infos.profile_image_path ? infos.profile_image_path : "/images/defaultPerson.png"} alt="" />
            <p className="inline-block ml-2 truncate w-max text-stone-600 max-w-[110px] text-sm sm:text-base md:text-lg sm:max-w-[150px]">{infos.username}</p>
          </div>
          <div className={` ${showBox ? 'absolute' : 'hidden'}  bg-blue-100 max-xs:w-52 w-60 sm:w-[272px] h-max top-10 sm:top-12 border rounded-lg border-purple-400`}>
          <ul className="w-full h-max  max-xs:text-xs text-sm sm:text-base p-1">
          <li onTouchEnd={()=>setShowSwitchAccount(prev=>!prev)} onMouseLeave={()=>setShowSwitchAccount(false)}  onMouseEnter={()=>setShowSwitchAccount(true)} className=' cursor-pointer px-2 sm:px-2 py-2  relative hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white '>
            <span className="">
            switch to the other account
            { !showSwitchAccount ? <svg className=" w-4 h-4  sm:w-5 sm:h-5 ml-4 sm:ml-5 fill-fuchsia-700 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 11.8284L9.17154 14.6569L7.75732 13.2426L12 9L16.2426 13.2426L14.8284 14.6569L12 11.8284Z"></path></svg>
           : <svg className="w-4 h-4  sm:w-5 sm:h-5 ml-4  sm:ml-5 fill-white inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.1717 12.0005L9.34326 9.17203L10.7575 7.75781L15.0001 12.0005L10.7575 16.2431L9.34326 14.8289L12.1717 12.0005Z"></path></svg>}
             </span>
            <ul className={` ${showSwitchAccount ? 'absolute' : 'hidden'} left-[10px] z-40 w-11/12 sm:left-60 sm:top-0 rounded-lg sm:w-36 h-max bg-blue-100 border border-fuchsia-400`}>
            <li className=" px-2 sm:px-4 py-2  hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white truncate">mostafasssssssssssssssssssssssssss</li>
              <li className=" px-2 sm:px-4 py-2  hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white truncate">saj</li>
              <li className=" px-2 sm:px-4 py-2  hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white truncate">rez</li>
            </ul>
            </li>
          <li onClick={()=>logOutHandler(router)} className=' cursor-pointer px-2 sm:px-2 py-2  relative hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white '>log out</li>
          </ul>
          </div>

        </div>

     

    </div>
    <div className='h-10 w-24 text-3xl text-white '>logo</div>
    </div>
  </header>
  <LeftMenu setIsShowImportPassword={setIsShowImportPassword} leftMenuRef={leftMenuRef} setShowAside={setShowAside} showAside={showAside} />
  <ModalDefault
        closeIconClassName="w-8 h-8 fill-red-400"
        isShowModal={isShowImportPassword}
        setIsShowModal={setIsShowImportPassword}
      >
        <div className="w-full px-4 h-64 pt-12 ">
        <p className="text-center">input your password</p>
        <InputPassword  value={passwordInput} onChange={(event)=>(handleInputChange(event , setPasswordInput))} className=" h-max mx-auto  outline-none rounded-lg px-2 pt-4 " />
        <div className="px-2">
        <button onClick={validatorPassword} className="w-full rounded-lg bg-fuchsia-400 h-12 mt-8 hoverScale">confirm</button>
        </div>
        </div>
    
      </ModalDefault>
  </>
  );
};

export default LayoutDashboard;
