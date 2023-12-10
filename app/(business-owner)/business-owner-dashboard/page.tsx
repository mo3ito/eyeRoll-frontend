"use client";
import React, { useEffect, useState, useContext } from "react";
import Modal from "@/components/modal/modal";
import DiscountCalculator from "@/components/discountCalculator/discountCalculator";
import ModalDefault from "@/components/modal/modalDefault";
import Timer from "@/components/timer/timer";
import { AuthContext } from "@/context/authContext";
import { toast } from "react-toastify";
import EYEROLL_TOKEN from "@/help/tokenName";
import Cookies from "js-cookie";
import useWarnInformation from "@/hooks/useWarnInformation";
import { useRouter } from "next/navigation";
import LoadingPage from "@/components/loading/loadingPage";
import { InfosProps } from "@/types/authentication";
import linkHandler from "@/utils/linkHandler";

const DiscountSetting = () => {
  const [isShowModalCalculator, setIsShowModalCalculator] =
    useState<boolean>(false);
  const [isShowCancelModal, setIsShowCancelModal] = useState<boolean>(false);
  const [token ,setToken]=useState(Cookies.get(EYEROLL_TOKEN))
  const { infos } = useContext(AuthContext);
  const router = useRouter()
  useWarnInformation(infos as InfosProps)
  console.log(infos);
  // const [statusAccount , setStatusAccount]=useState<string>("Incomplete information")
  


  if(!infos){
    return <LoadingPage/>
  }
  


  return (
   <div className="mt-28 container  mx-auto px-4">
    {/* <div className="w-full h-max flex items-center justify-center flex-wrap  ">
      <p className="my-6 text-sm sm:text-base md:text-lg xl:text-xl font-semibold">Your dashboard status</p>
      <ul className="w-full h-max flex flex-wrap items-center justify-center xl:justify-center  gap-1 text-xs sm:text-sm xl:text-base">
        <li className=" w-full h-max py-2 sm:h-20 sm:py-0 flex items-center justify-center flex-col lg:h-max md:py-3  md:w-1/4  border border-fuchsia-400 rounded-lg bg-sky-50  px-2 text-center">
        <span>Account status :</span>
      { !infos.is_complete_information ? <div className="font-semibold block"> Incomplete information <svg className=" w-4 h-4 sm:w-5 sm:h-5 inline-block fill-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.865 3.00017L22.3912 19.5002C22.6674 19.9785 22.5035 20.5901 22.0252 20.8662C21.8732 20.954 21.7008 21.0002 21.5252 21.0002H2.47266C1.92037 21.0002 1.47266 20.5525 1.47266 20.0002C1.47266 19.8246 1.51886 19.6522 1.60663 19.5002L11.1329 3.00017C11.4091 2.52187 12.0206 2.358 12.4989 2.63414C12.651 2.72191 12.7772 2.84815 12.865 3.00017ZM4.20471 19.0002H19.7932L11.9989 5.50017L4.20471 19.0002ZM10.9989 16.0002H12.9989V18.0002H10.9989V16.0002ZM10.9989 9.00017H12.9989V14.0002H10.9989V9.00017Z"></path></svg> </div> 
     : <div className="font-semibold mt-4 block"> completed information  <svg className=" w-4 h-4 sm:w-5 sm:h-5 inline-block fill-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"></path></svg> </div> }
      </li>
      <li className=" w-full h-max py-2 sm:h-20 sm:py-0 flex items-center justify-center flex-col lg:h-max md:py-3  md:w-1/4  border border-fuchsia-400 rounded-lg bg-sky-50  px-2 text-center">
        <div>Remaining charge</div>
      <div className="font-semibold mt-4"> 20 $  </div> 
      </li>
      <li className=" w-full h-max py-2 sm:h-20 sm:py-0 flex items-center justify-center flex-col lg:h-max md:py-3  md:w-1/4  border border-fuchsia-400 rounded-lg bg-sky-50  px-2 text-center">
        <div>Remaining charge</div>
      <div className="font-semibold mt-4"> 20 $  </div> 
      </li>
      </ul>
  
    </div> */}
    <p className="text-center text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mb-10">dashboard</p>
    <div className="w-full h-max bg-sky-50 flex flex-col divide-fuchsia-400 border border-fuchsia-400 divide-y-2 sm:divide-y-0 sm:flex-row sm:divide-x-2 mx-auto text-sm sm:tex-base md:text-lg">
      <div className="w-full py-2 px-2">
      { !infos.is_complete_information ? <div className="">Account status : <span className="font-semibold ">Incomplete information <svg className=" w-4 h-4 sm:w-5 sm:h-5 inline-block fill-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.865 3.00017L22.3912 19.5002C22.6674 19.9785 22.5035 20.5901 22.0252 20.8662C21.8732 20.954 21.7008 21.0002 21.5252 21.0002H2.47266C1.92037 21.0002 1.47266 20.5525 1.47266 20.0002C1.47266 19.8246 1.51886 19.6522 1.60663 19.5002L11.1329 3.00017C11.4091 2.52187 12.0206 2.358 12.4989 2.63414C12.651 2.72191 12.7772 2.84815 12.865 3.00017ZM4.20471 19.0002H19.7932L11.9989 5.50017L4.20471 19.0002ZM10.9989 16.0002H12.9989V18.0002H10.9989V16.0002ZM10.9989 9.00017H12.9989V14.0002H10.9989V9.00017Z"></path></svg></span>  </div> 
     : <div className=" ">Account status : <span className="font-semibold">completed information  <svg className=" w-4 h-4 sm:w-5 sm:h-5 inline-block fill-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"></path></svg></span>  </div> }
      </div>
      <p className="w-full py-2 px-2">Remaining charge : <span className="font-semibold">20 $</span></p>
      <p className="w-full py-2 px-2">Account status :</p>

    </div>


  
    

    <div className=" h-max mt-10 2xl:mt-28 w-full  mx-auto bg-sky-50 p-3">
      <ul className="w-full h-max    flex flex-col gap-y-3 sm:gap-y-0 sm:flex-row items-center justify-center text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
        <li onClick={()=>linkHandler("#" , router)} className="cursor-pointer  w-full sm:w-1/3 sm:mr-2 bg-indigo-100 h-max py-4  border border-fuchsia-400 rounded-lg  flex items-center justify-center flex-col  ">
          
        <svg className=' w-14 h-14 md:w-16 md:h-16 2xl:w-20 2xl:h-20 fill-blue-500'   version="1.1" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg">
        <path d="m640.92 389-116.56-82.742c-36.07-24.465-78.586-37.68-122.17-37.977-45.773-0.95312-88.414 10.902-120.03 33.348l-123.08 87.371c-3.5625 2.5312-5.6797 6.6289-5.6797 10.996 0 4.3711 2.1172 8.4688 5.6797 10.996l116.56 82.73c36.07 24.469 78.586 37.688 122.17 37.977 1.6797 0.039063 3.3555 0.054687 5.0312 0.054687 43.875 0 84.551-11.785 115-33.41l123.09-87.352c3.5625-2.5273 5.6758-6.625 5.6758-10.996 0-4.3672-2.1133-8.4648-5.6758-10.996zm-138.7 87.363c-55.414 39.34-152.03 37.219-210.98-4.6289l-101.06-71.738 107.59-76.367c55.414-39.336 152.03-37.219 210.98 4.6289l101.06 71.738zm-102.22-160.41c-22.289 0-43.668 8.8555-59.426 24.617-15.762 15.758-24.617 37.137-24.617 59.426s8.8555 43.664 24.617 59.426c15.758 15.758 37.137 24.613 59.426 24.613s43.664-8.8555 59.426-24.613c15.758-15.762 24.613-37.137 24.613-59.426-0.023437-22.281-8.8867-43.645-24.645-59.398-15.754-15.758-37.113-24.617-59.395-24.645zm0 141.11c-15.137 0-29.652-6.0117-40.355-16.715-10.703-10.703-16.715-25.219-16.715-40.352 0-15.137 6.0117-29.652 16.715-40.355s25.219-16.715 40.355-16.715c15.133 0 29.648 6.0117 40.352 16.715 10.703 10.703 16.715 25.219 16.715 40.355-0.015625 15.129-6.0352 29.633-16.734 40.332s-25.203 16.719-40.332 16.734z"/>
        </svg>
          <div className="mt-3">Eye</div>
          </li>

          <li onClick={()=>linkHandler("/business-owner-dashboard/discount-setting",router)} className="cursor-pointer  w-full sm:w-1/3 mx-2 bg-indigo-100 h-max py-4  border border-fuchsia-400 rounded-lg  flex items-center justify-center flex-col  ">
          
          <svg className=' w-14 h-14 md:w-16 md:h-16 2xl:w-20 2xl:h-20 fill-blue-500'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14Z"></path></svg>
            <div className="mt-3">Roll</div>
            </li>
  


            <li onClick={()=>linkHandler("/business-owner-dashboard/online-menu" , router)} className="cursor-pointer w-full sm:w-1/3 sm:ml-2 bg-indigo-100 h-max py-4  border border-fuchsia-400 rounded-lg  flex items-center justify-center flex-col  ">
          
            <svg className=' w-14 h-14 md:w-16 md:h-16 2xl:w-16 2xl:h-20 fill-blue-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 3H20C21.1046 3 22 3.89543 22 5V8C22 9.10457 21.1046 10 20 10H18V13C18 15.2091 16.2091 17 14 17H8C5.79086 17 4 15.2091 4 13V4C4 3.44772 4.44772 3 5 3ZM18 5V8H20V5H18ZM2 19H20V21H2V19Z"></path></svg>
          <div className="mt-3">Online menu</div>
          </li>

        
        
      </ul>

    </div>

   </div>
   
  );
};

export default DiscountSetting;
