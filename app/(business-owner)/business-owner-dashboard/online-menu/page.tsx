"use client";
import React, { useEffect, useState, useContext, Dispatch, SetStateAction, ChangeEvent } from "react";
import Modal from "@/components/modal/modal";
import DiscountCalculator from "@/components/discountCalculator/discountCalculator";
import ModalDefault from "@/components/modal/modalDefault";
import { AuthContext } from "@/context/authContext";
import { toast } from "react-toastify";
import useWarnInformation from "@/hooks/useWarnInformation";
import LoadingPage from "@/components/loading/loadingPage";
import { InfosProps } from "@/types/authentication";
import ShowPresenceUser from "@/components/showPresenceUser/showPresenceUser";
import getterWithAuthId from "@/services/getterWithAuthId";
import { useQuery } from "@tanstack/react-query";
import useGetBusinessOwnerId from "@/hooks/useGet‌‌BusinessOwnerId";
import { io, Socket } from "socket.io-client";
import senderWithAuthId from "@/services/senderWithAuthId";
import { allRequestType } from "@/types/onlineMenuBo/productsType";





const OnlineMenu = () => {
  const [isShowModalCalculator, setIsShowModalCalculator] =
    useState<boolean>(false);
  const [isShowCancelModal, setIsShowCancelModal] = useState<boolean>(false);
  const { infos } = useContext(AuthContext);
  const {businessOwnerId} = useGetBusinessOwnerId(infos as InfosProps)
  const [allRequest , setAllRequest]=useState<allRequestType[]|[]>([])
  useWarnInformation(infos as InfosProps)
  const [awaitingRequestSocket , setAwaitingRequestSocket]=useState<Socket | null>(null)
  const [discountValue , setDiscountValue]=useState("")
  const [singleIdForDelete , setSingleIdForDelete]= useState("")
  const [idsForDelete , setIdsForDelete]=useState<string[]|[]>([])
  const [isDeleteSelectedRequest , setIsDeleteSelectedRequest]=useState<boolean>(false)
  const [inputSearch , setInputSearch]=useState<string>("")

  console.log(discountValue);
  console.log(idsForDelete);
  console.log(singleIdForDelete);
  
  
  

   useEffect(() => {
    const newSocket = io("http://localhost:5003");
    setAwaitingRequestSocket(newSocket);

    return () => {
      if (newSocket) {
        newSocket.disconnect();
      }
    };
  }, [businessOwnerId]);

  useEffect(() => {

    if (awaitingRequestSocket && businessOwnerId) {
     
      awaitingRequestSocket.emit("getBusinessOwnerId", businessOwnerId);

      awaitingRequestSocket.on("awaitingData", (data) => {
        setAllRequest(data);
      });

      return () => {
        awaitingRequestSocket.off("awaitingData");
      };
    }
  }, [awaitingRequestSocket, businessOwnerId]);


  



//   console.log(infos);
//   const queryKey = ["allRequest"]

//   const {data : allAwaitingRequest , isLoading} = useQuery(businessOwnerId ? queryKey : [] , async()=>{
//     if(businessOwnerId){
//      return await getterWithAuthId("http://localhost:5000/reports/get-all-discount-request" , businessOwnerId)
     
//     }
//     return null
//   })
  
//   useEffect(()=>{
//     if(allAwaitingRequest){
//       setAllRequest(allAwaitingRequest.data)
//     }
//   },[allAwaitingRequest])
  
// console.log(allAwaitingRequest);





















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

//  useEffect(()=>{

//   // const searchedValue = items?.data.filter((product : ProductsType)=> product.productName.startsWith(inputSearchValue))
//   // setAllItems(searchedValue)

//   if(inputSearch && allRequest && allAwaitingRequest){
    
//     const requests = allRequest
//     const searchedValue = requests.filter(request=> request.username.startsWith(inputSearch))
//     setAllRequest(searchedValue)

//     if(inputSearch === ""){
//       setAllRequest(all)
//     }
//   }
 

//  },[inputSearch , allRequest , allAwaitingRequest])

const inputSearchHandler = async (event : ChangeEvent<HTMLInputElement>)=>{
  
const inputSearched = event.target.value.toLowerCase()
await setInputSearch(inputSearched)

  if(inputSearched && allRequest && allAwaitingRequest){
    const searchedValue = await allAwaitingRequest.data.filter((request : allRequestType)=> request.username.startsWith(inputSearched))
    if(searchedValue){
      setAllRequest(searchedValue)
    }else{
      setAllRequest(allAwaitingRequest.data)
    }
    if(inputSearched === ""){
      setAllRequest(allAwaitingRequest.data)
    }
  }
}

const eraserHandler = ()=>{
  setAllRequest(allAwaitingRequest?.data)
  setInputSearch("")
}

  const deleteReguests = async (body : object , setState : Dispatch<SetStateAction<boolean>>, text : string )=>{
    if(body){
      try {
        const response = await senderWithAuthId("http://localhost:5000/reports/remove-request-by-businessOwner" , body ,businessOwnerId)
        if(response?.status === 200){
        await setAllRequest(response?.data.remainingDiscounts)
        setState(false)
        toast.success(text)
        setIdsForDelete([])
        }
  
       } catch (error : any) {
         if (error.response.status === 400) {
           const errorMessage = error.response.data.message;
           setState(false)
           toast.error(errorMessage);
         } else {
           toast.error("An error occurred while processing your request");
         }
       }
    }
  }

  const deleteSingleRequest = async ()=>{
    const body ={
      awaiting_request_ids_for_delete: [singleIdForDelete] 
    } 
    if(businessOwnerId && singleIdForDelete && body){
     await deleteReguests(body , setIsShowCancelModal ,"request deleted successfully")
    }
  
  }

  const allCheckeHandler = async ()=>{
    if(allRequest && idsForDelete.length !== allRequest.length ){
    await  setIdsForDelete(allRequest.map(item=> item.discountId))
    }else{
      setIdsForDelete([])
    }
  }

  const proccesseDeleteSelectedRequest = ()=>{
    if(!idsForDelete.length){
      toast.warn("There are no selected requests to remove")
    }else{
      setIsDeleteSelectedRequest(true)
    }
  }
  
  const deleteSelectedRequests = async ()=>{
    const body ={
      awaiting_request_ids_for_delete: idsForDelete
    } 
    if(businessOwnerId && body){
     await deleteReguests(body , setIsDeleteSelectedRequest ,"requests deleted successfully")
    }
  }

  if(!infos){
    return <LoadingPage/>
  }
  return (
    <div className="">
      <div className=" w-full fixed top-24  z-40 bg-sky-100 h-max  ">
        <div className="container  h-max mx-auto pb-3 px-4">
        <p className=" border border-fuchsia-400 bg-sky-50 shadow-lg  w-full text-center max-xs:text-sm text-base sm:text-lg md:text-xl lg:text-2xl h-10 sm:h-12 flex items-center justify-center rounded-lg float-bottom">customers list</p>
      <div className="flex flex-col sm:flex-row items-center mt-2 gap-x-3">
      <div className="border bg-sky-50 border-fuchsia-400 flex rounded-lg items-center justify-center px-1  shadow-lg w-full">
      <svg className="w-5 h-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" fill="currentColor"></path></svg>
      <input value={inputSearch} onChange={(event)=>inputSearchHandler(event)} className="w-full h-8 sm:h-10  outline-none pl-2 bg-transparent" type="text" placeholder="search username" />
      </div>
      <div className="flex items-center h-8 sm:h-10 p-1 rounded-lg shadow-md justify-around w-full sm:w-44 border border-fuchsia-400 bg-sky-50 mt-2 sm:mt-0  ">
      <button onClick={ eraserHandler } className=" w-max h-max rounded-lg  flex items-center justify-center">
      <svg className=" size-5 sm:size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.58564 8.85449L3.63589 13.8042L8.83021 18.9985L9.99985 18.9978V18.9966H11.1714L14.9496 15.2184L8.58564 8.85449ZM9.99985 7.44027L16.3638 13.8042L19.1922 10.9758L12.8283 4.61185L9.99985 7.44027ZM13.9999 18.9966H20.9999V20.9966H11.9999L8.00229 20.9991L1.51457 14.5113C1.12405 14.1208 1.12405 13.4877 1.51457 13.0971L12.1212 2.49053C12.5117 2.1 13.1449 2.1 13.5354 2.49053L21.3136 10.2687C21.7041 10.6592 21.7041 11.2924 21.3136 11.6829L13.9999 18.9966Z" ></path></svg>
      </button>
      <button onClick={allCheckeHandler} className=" w-max h-max rounded-lg flex items-center justify-center">
      <svg className=" size-5 sm:size-6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
      <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M41.5,10.5v24c0,3.9-3.1,7-7,7h-21c-1.7,0-3-1.3-3-3v-2"></path><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M36.5,17.6v15.9c0,1.7-1.3,3-3,3h-25c-1.7,0-3-1.3-3-3v-5.1"></path><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M5.5,21.7V8.5c0-1.7,1.3-3,3-3h25c1.7,0,3,1.3,3,3v2.2"></path><polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" points="15.5,21.5 19.5,25.5 28.5,16.5"></polyline>
      </svg>
      </button>
      <button onClick={proccesseDeleteSelectedRequest} className=" w-max h-max rounded-lg flex items-center justify-center">
      <svg className=" size-5 sm:size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z" ></path></svg>
      </button>
      </div>
      </div>
        </div>
      </div>
      
    
    { allRequest.length > 0 ? <div className="container  h-max  mx-auto translate-y-60 sm:translate-y-52  px-4 ">
      {allRequest.length>0 && allRequest.map(request=>
        <ShowPresenceUser
        discountId={request.discountId}
        username={request.username}
        discount={request.discount}
          key={request.discountId} setSingleIdForDelete={setSingleIdForDelete} idsForDelete={idsForDelete} setIdsForDelete={setIdsForDelete} setIsShowModalCalculator={setIsShowModalCalculator} setDiscountValue={setDiscountValue}  setIsShowCancelModal={setIsShowCancelModal}/>
        )}  
    </div> : <p className="translate-y-72 text-xl sm:text-2xl text-center">there is no request </p> }
    <ModalDefault
        isShowModal={isShowModalCalculator}
        setIsShowModal={setIsShowModalCalculator}
      >
        
        <DiscountCalculator discountValue={discountValue}  />
      </ModalDefault>
      <Modal
        cancelHandler={() => setIsShowCancelModal(false)}
        text="Are you sure to delete the request?"
        isShowModal={isShowCancelModal}
        setIsShowModal={setIsShowCancelModal}
        confirmHandler={deleteSingleRequest}
      />
        <Modal
        cancelHandler={() => setIsDeleteSelectedRequest(false)}
        text="Are you sure to delete the selected requests?"
        isShowModal={isDeleteSelectedRequest}
        setIsShowModal={setIsDeleteSelectedRequest}
        confirmHandler={deleteSelectedRequests}
      />
    </div>
      
  );
};

export default OnlineMenu;