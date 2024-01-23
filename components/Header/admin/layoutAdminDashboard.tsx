"use client";
import React, { useState, useRef, useEffect } from "react";
import LeftMenuAdmin from "@/components/admin/leftMenuAdmin";
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
import BoxMenuProfileAdmin from "./boxMenuProfileAdmin";


const LayouAdmintDashboard = () => {
  const [showAside, setShowAside] = useState<boolean>(false);
  const leftMenuRef = useRef<HTMLDivElement | null>(null);
  const [showBox , setShowBox] = useState<boolean>(false)
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
      <BoxMenuProfileAdmin
      setShowAside={setShowAside}
      setShowBox={setShowBox}
      showBox={showBox}
      router={router}
      setInfos={setInfos}
      infos={infos}
      />
      <LeftMenuAdmin
      setIsShowImportPassword={setIsShowImportPassword} 
      leftMenuRef={leftMenuRef} 
      setShowAside={setShowAside} 
      showAside={showAside} />

      <ValidatorPassword 
      isShowModal={isShowImportPassword}
      passwordInput={passwordInput} setPasswordInput={setPasswordInput} 
      setIsShowModal={setIsShowImportPassword}onClick={validatorPassword} />
  
  </>
  );
};

export default LayouAdmintDashboard;
