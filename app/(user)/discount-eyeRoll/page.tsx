'use client'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/authContext";
import LoadingPage from "@/components/loading/loadingPage";
import useExpireDiscount from "@/hooks/useExpireDiscount";

export default function DiscountEyeRoll() {
  const { infos } = useContext(AuthContext);
  const [allDiscounts, setAllDiscounts] = useState([]);
  useExpireDiscount()

  useEffect(() => {
    if (infos && infos.discounts_eyeRoll) {
      setAllDiscounts(infos?.discounts_eyeRoll);
    }
  }, [infos , infos?.discounts_eyeRoll]);

  if (!infos) {
    return <LoadingPage />;
  }

  console.log("all discount", allDiscounts);
  console.log("infos discount eye roll", infos?.discounts_eyeRoll);
  
  
    
  return (
    <div className=' container translate-y-28 mx-auto px-6'>
         {/* { infos?.discounts_eyeRol && allDiscounts.length>0 && typeof infos?.discounts_eyeRoll === "object" ?  */}
       <div className='w-full h-96  rounded-lg'>
            <div className='w-full flex justify-center bg-sky-50  items-center text-center border border-fuchsia-400 py-4 rounded-lg font-semibold '>
            <p className='w-1/12 '>number</p>
            <p className='w-2/12 '>brand name</p>
            <p className='w-1/12 '>discount</p>
            <p className='w-2/12  '>deadline</p>
            <p className='w-2/12  '>address</p>
            <p className='w-2/12  '>work phone</p>
            <p className="w-2/12">use discount</p>
            </div>

          { allDiscounts.map(item=>
          <div className='w-full flex justify-center items-center text-center border border-fuchsia-400 py-4 my-2 rounded-lg bg-sky-50 '>
          <p className='w-1/12 truncate px-4'>1</p>
          <p className='w-2/12 truncate px-4'>{item.brandName}</p>
          <p className='w-1/12 truncate px-4 text-yellow-500 text-lg'>{item.discount}</p>
          <p className='w-2/12 truncate px-4 text-red-400'>{item.startTime}-{item.endTime}</p>
          <p className='w-2/12 truncate px-4'>{item.address}</p>
          <p className='w-2/12 truncate px-4'>{item.workPhone}</p>
          <div className='w-2/12'>
          <button className="bg-fuchsia-400 py-1 px-4 rounded-md" >i am here</button>
          </div>
          
          </div>
          ) }
        </div>
         {/* : <p>tehere is no discount</p> } */}
    </div>
  )
}
