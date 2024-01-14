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
        <img className="w-max" src="/images/eye.png" alt="" />
          <div className="mt-3">Eye</div>
          </li>

          <li onClick={()=>linkHandler("/business-owner-dashboard/discount-setting",router)} className="cursor-pointer  w-full sm:w-1/3 mx-2 bg-indigo-100 h-max py-4  border border-fuchsia-400 rounded-lg  flex items-center justify-center flex-col  ">
          <img className="w-max" src="/images/setRoll.png" alt="" />
            <div className="mt-3"> Set Roll</div>
            </li>
  
            <li onClick={()=>linkHandler("/business-owner-dashboard/payment-gateway-roll" , router)} className="cursor-pointer w-full sm:w-1/3 sm:ml-2 bg-indigo-100 h-max py-4  border border-fuchsia-400 rounded-lg  flex items-center justify-center flex-col  ">
            <img className="w-max" src="/images/money-payment-6400.png" alt="" />
          <div className="mt-3">Roll Payment</div>
          </li>
      </ul>
    </div>

   </div>
   
  );
};

export default DiscountSetting;
