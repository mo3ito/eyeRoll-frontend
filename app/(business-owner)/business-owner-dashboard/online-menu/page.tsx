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
import getterWithAuthId from "@/services/getterWithAuthId";
import { useQuery } from "@tanstack/react-query";
import useGetBusinessOwnerId from "@/hooks/useGet‌‌BusinessOwnerId";
import { io, Socket } from "socket.io-client";
import removal from "@/services/removal";

const DiscountSetting = () => {
  const [isShowModalCalculator, setIsShowModalCalculator] =
    useState<boolean>(false);
  const [isShowCancelModal, setIsShowCancelModal] = useState<boolean>(false);
  const { infos } = useContext(AuthContext);
  const {businessOwnerId} = useGetBusinessOwnerId(infos as InfosProps)
  const [allRequest , setAllRequest]=useState([])
  useWarnInformation(infos as InfosProps)
  const [awaitingRequestSocket , setAwaitingRequestSocket]=useState<Socket | null>(null)
  const [discountValue , setDiscountValue]=useState(0)
  const [isChecked , setIsChecked]= useState(false)
  const [idsForDelete , setIdsForDelete]=useState<string[]|[]>([])

  console.log(discountValue);
  console.log(idsForDelete);
  
  

  //  useEffect(() => {
  //   const newSocket = io("http://localhost:5003");
  //   setAwaitingRequestSocket(newSocket);

  //   // Cleanup the socket connection when the component unmounts
  //   return () => {
  //     if (newSocket) {
  //       newSocket.disconnect();
  //     }
  //   };
  // }, [businessOwnerId]);

  // useEffect(() => {
  //   // Check if the socket and businessOwnerId are available
  //   if (awaitingRequestSocket && businessOwnerId) {
  //     // Emit the "getBusinessOwnerId" event to request data
  //     awaitingRequestSocket.emit("getBusinessOwnerId", businessOwnerId);

  //     // Listen for the "awaitingData" event to receive data
  //     awaitingRequestSocket.on("awaitingData", (data) => {
  //       setAllRequest(data);
  //     });

  //     // Cleanup event listeners when the component unmounts
  //     return () => {
  //       awaitingRequestSocket.off("awaitingData");
  //     };
  //   }
  // }, [awaitingRequestSocket, businessOwnerId]);




  console.log(infos);
  const queryKey = ["allRequest"]

  const {data : allAwaitingRequest , isLoading} = useQuery(businessOwnerId ? queryKey : [] , async()=>{
    if(businessOwnerId){
     return await getterWithAuthId("http://localhost:5000/reports/get-all-discount-request" , businessOwnerId)
     
    }
    return null
  })
  
  useEffect(()=>{
    if(allAwaitingRequest){
      setAllRequest(allAwaitingRequest.data)
    }
  },[allAwaitingRequest])
  
console.log(allAwaitingRequest);

// useEffect(()=>{
//   const requestUpdate = async()=>{
//     if(allRequest && businessOwnerId){

//       try {
//         // const responseRemoveExpire = await removal("http://localhost:5000/reports/remove-expire-awaiting-request" , businessOwnerId)

//         // if(responseRemoveExpire?.status === 200 ){
//         //   console.log(responseRemoveExpire);
//         //  await setAllRequest(responseRemoveExpire.data)
          
//         // }

//         const response = await getterWithAuthId("http://localhost:5000/reports/get-all-discount-request" , businessOwnerId)
//         if(response?.status === 200){
//           setAllRequest(response.data)
//         }
//       } catch (error : any) {
//         if (error.response?.status === 400) {
//           const errorMessage = error?.response.data.message;
//           toast.error(errorMessage);
//         } else {
//           toast.error("An error occurred while processing your request");
//         }
//       }
//     }
//   }
//   setInterval(()=>{
//     requestUpdate()
//   },4000)
 

// },[allRequest , businessOwnerId])


console.log(allRequest);



  if(!infos){
    return <LoadingPage/>
  }
  

  return (
    <div className="">
      <div className=" w-full fixed top-24  z-40 bg-sky-100 h-max  ">
        <div className="container  h-max mx-auto pb-3 px-4">
        <p className=" border border-fuchsia-400 bg-sky-50 shadow-lg  w-full text-center max-xs:text-sm text-base sm:text-lg md:text-xl lg:text-2xl h-12 flex items-center justify-center rounded-lg float-bottom">customers list</p>
      <div className="flex flex-col sm:flex-row items-center mt-2 gap-x-3">
      <div className="border bg-sky-50 border-fuchsia-400 flex rounded-lg items-center justify-center px-1  shadow-lg w-full">
      <svg className="w-5 h-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" fill="currentColor"></path></svg>
      <input className="w-full h-10  outline-none pl-2 bg-transparent" type="text" placeholder="search username" />
      </div>
      <button className="h-10 bg-fuchsia-400 w-full mt-2 sm:mt-0 sm:w-44 ml-auto rounded-lg">clear search</button>
      </div>
        </div>
   
      </div>
      
    
    <div className="container  h-max  mx-auto translate-y-64 sm:translate-y-52  px-4 ">
      {allRequest.length>0 && allRequest.map(request=>
        <ShowPresenceUser
        discountId={request.discountId}
        username={request.username}
        discount={request.discount}
          key={request.discountId} idsForDelete={idsForDelete} setIdsForDelete={setIdsForDelete} setIsShowModalCalculator={setIsShowModalCalculator} setDiscountValue={setDiscountValue}  setIsShowCancelModal={setIsShowCancelModal}/>
        )}  
    </div>
    <ModalDefault
        isShowModal={isShowModalCalculator}
        setIsShowModal={setIsShowModalCalculator}
      >
        
        <DiscountCalculator discountValue={discountValue}  />
      </ModalDefault>
      <Modal
        cancelHandler={() => setIsShowCancelModal(false)}
        text="Are you sure to cancel?"
        isShowModal={isShowCancelModal}
        setIsShowModal={setIsShowCancelModal}
        confirmHandler={()=>toast("hhg")}
      />
    </div>
      
  );
};

export default DiscountSetting;
