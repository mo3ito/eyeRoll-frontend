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
      <div className="container mx-auto sticky top-24 px-4 z-40 bg-sky-100 h-20 pt-4">
      <p className="bg-fuchsia-400  w-full text-center max-xs:text-sm text-base sm:text-lg md:text-xl lg:text-2xl py-2 rounded-lg float-bottom">list users</p>
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
