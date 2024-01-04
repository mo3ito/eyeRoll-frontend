import {useState} from 'react'
import Timer from '../timer/timer'
import { CheckBoxType } from '@/types/radioButtonType/checkBoxType'

export default function ShowPresenceUser({setIsShowModalCalculator , setIsShowCancelModal , discountId,
  username,
  discount , setDiscountValue, setIdsForDelete , idsForDelete , setSingleIdForDelete ,  }) {


   const calculatorHandler = async ()=>{
   await setDiscountValue(discount)
    setIsShowModalCalculator(true)
   }
   
   const handleCheckboxChange = async ( discountId : string) => {
   const isIdInList = idsForDelete && await idsForDelete.includes(discountId)
    if ( discountId && !isIdInList) {
      setIdsForDelete(prev=> [...prev , discountId])
    } else {
      setIdsForDelete((prev) => prev.filter((prevId) => prevId !== discountId));
    }
  };

  const deleteRequest = async ()=>{
   await setSingleIdForDelete(discountId)
     setIsShowCancelModal(true)
  }

  console.log(idsForDelete);
  
  
  

  return (
    <div className="w-full h-max gap-y-2 py-2 md:gap-y-0 md:py-0 md:h-20 bg-green-300 rounded-xl flex flex-col md:flex-row items-center max-xs:px-2 px-4 sm:px-10 mb-4">

    <div className="flex items-center justify-center w-max">
    <svg
      className=" size-4 sm:size-5  fill-zinc-500 stroke-2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
    </svg>
    <p className="text-sm sm:text-lg text-zinc-600 font-semibold  md:w-64 truncate ">{username}</p>
    </div>
 

    <div className="w-full justify-center flex items-center h-full ">
      <div className="flex itesm-center justify-around w-full">
        <div className=" hoverToUp  size-10 sm:size-14 bg-pink-300 rounded-full font-semibold text-xs sm:text-sm border-4 border-white text-white flex items-center justify-center">
          {discount}
        </div>

        <Timer
          className=" size-10 sm:size-14 bg-indigo-300 rounded-full flex items-center justify-center  border-4 border-white hoverToUp"
          classNameTime="flex items-center justify-center text-[7px] sm:text-[11px] text-white font-semibold"
          timeMinutes={20}
        />
      

      <button
        onClick={calculatorHandler}
        className=" flex items-center justify-center hoverToUp text-lg rounded-lg w-max h-max  text-white font-semibold "
      >
        <svg
          className="size-10 sm:size-14 fill-sky-300 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"
          />
        </svg>
      </button>
      <button
        onClick={ deleteRequest}
        className=" hoverToUp text-lg   text-white font-semibold "
      >
        <svg
          className=" size-10 sm:size-14 fill-pink-300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      <button className=" hoverToUp text-lg  rounded-lg text-white font-semibold   ">
        <svg
          className=" fill-orange-200  size-10 sm:size-14"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>

      <label htmlFor={discountId}  className=" overflow-hidden   font-semibold  size-10   flex items-center justify-center translate-y-2 ">
      <input  onChange={(event) => handleCheckboxChange(discountId)} id={discountId} className='size-10 cursor-pointer ' type="checkbox" />
      </label>

      </div>

    </div>
  </div>
  )
}
