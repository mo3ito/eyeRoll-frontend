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
import ShowPresenceUser from "@/components/showPresenceUser/showPresenceUser";

const DiscountSetting = () => {
  const [isShowModalCalculator, setIsShowModalCalculator] =
    useState<boolean>(false);
  const [isShowCancelModal, setIsShowCancelModal] = useState<boolean>(false);
  const [token ,setToken]=useState(Cookies.get(EYEROLL_TOKEN))
  const { infos } = useContext(AuthContext);
  const router = useRouter()
  useWarnInformation(infos as InfosProps)
  console.log(infos);
  


  if(!infos){
    return <LoadingPage/>
  }
  

  return (
    <div className="">
      <div className="container mx-auto sticky top-24 px-4 z-40 bg-sky-100 h-max  pb-3 ">
      <p className="bg-indigo-400  w-full text-center max-xs:text-sm text-base sm:text-lg md:text-xl lg:text-2xl h-12 flex items-center justify-center rounded-lg float-bottom">list users</p>
      <div className="flex flex-col sm:flex-row items-center mt-2 gap-x-3">
      <div className="border border-fuchsia-400 flex rounded-lg items-center justify-center px-1  shadow-lg w-full">
      <svg className="w-5 h-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" fill="currentColor"></path></svg>
      <input className="w-full h-10  outline-none pl-2 bg-transparent" type="text" placeholder="search username" />
      </div>
      <button className="h-10 bg-fuchsia-400 w-full mt-2 sm:mt-0 sm:w-44 ml-auto rounded-lg">clear search</button>
      </div>
      </div>
      
    
    <div className="container  h-max   p-4 mx-auto translate-y-20   ">
        <ShowPresenceUser setIsShowModalCalculator={setIsShowModalCalculator}  setIsShowCancelModal={setIsShowCancelModal}/>
        <ShowPresenceUser setIsShowModalCalculator={setIsShowModalCalculator}  setIsShowCancelModal={setIsShowCancelModal}/>
        <ShowPresenceUser setIsShowModalCalculator={setIsShowModalCalculator}  setIsShowCancelModal={setIsShowCancelModal}/>
        <ShowPresenceUser setIsShowModalCalculator={setIsShowModalCalculator}  setIsShowCancelModal={setIsShowCancelModal}/>
        <ShowPresenceUser setIsShowModalCalculator={setIsShowModalCalculator}  setIsShowCancelModal={setIsShowCancelModal}/>
        <ShowPresenceUser setIsShowModalCalculator={setIsShowModalCalculator}  setIsShowCancelModal={setIsShowCancelModal}/>
        <ShowPresenceUser setIsShowModalCalculator={setIsShowModalCalculator}  setIsShowCancelModal={setIsShowCancelModal}/>
        <ShowPresenceUser setIsShowModalCalculator={setIsShowModalCalculator}  setIsShowCancelModal={setIsShowCancelModal}/>
        <ShowPresenceUser setIsShowModalCalculator={setIsShowModalCalculator}  setIsShowCancelModal={setIsShowCancelModal}/>
        <ShowPresenceUser setIsShowModalCalculator={setIsShowModalCalculator}  setIsShowCancelModal={setIsShowCancelModal}/>
    
    </div>
    <ModalDefault
        isShowModal={isShowModalCalculator}
        setIsShowModal={setIsShowModalCalculator}
      >
        <DiscountCalculator />
      </ModalDefault>
      <Modal
        cancelHandler={() => setIsShowCancelModal(false)}
        text="Are you sure to cancel?"
        isShowModal={isShowCancelModal}
        setIsShowModal={setIsShowCancelModal}
      />
    </div>
      
  );
};

export default DiscountSetting;
