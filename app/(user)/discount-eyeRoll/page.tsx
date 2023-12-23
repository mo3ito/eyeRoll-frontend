'use client'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/authContext";
import LoadingPage from "@/components/loading/loadingPage";
import useExpireDiscount from "@/hooks/useExpireDiscount";
import ModalDefault from "@/components/modal/modalDefault";
import ShowDiscountFullMode from "@/components/Header/user/showDiscountPage/showDiscountFullMode";
import ShowDiscountMobileMode from "@/components/Header/user/showDiscountPage/showDiscountMobileMode";
import { informationDiscountType } from "@/types/rollType/determinationRoll";

export default function DiscountEyeRoll() {
  const { infos } = useContext(AuthContext);
  const [allDiscounts, setAllDiscounts] = useState<informationDiscountType[]|[]>([]);
  const [isShowDetails , setIsShowDetails]=useState(false)
  const [detailsDiscount , setDetailsDiscount]=useState<informationDiscountType|{}>({})
  useExpireDiscount()

  useEffect(() => {
    if (infos && infos.discounts_eyeRoll) {
      setAllDiscounts(infos?.discounts_eyeRoll);
    }
  }, [infos , infos?.discounts_eyeRoll]);


  const showDetailsHandler = async (brandName:string , discount:string , startTime:string , endTime:string , address:string , workPhone:string)=>{
   await setDetailsDiscount({
        brandName,
        discount,
        startTime,
        endTime,
        address,
        workPhone
    })
   await setIsShowDetails(true)
  }



  if (!infos) {
    return <LoadingPage />;
  }



  console.log("all discount", allDiscounts);
  console.log("infos discount eye roll", infos?.discounts_eyeRoll);
  
  
    
  return (
<>
    <ShowDiscountFullMode allDiscounts={allDiscounts} onClickshowDetails={showDetailsHandler}/>
    <ShowDiscountMobileMode allDiscounts={allDiscounts} onClickshowDetails={showDetailsHandler}/>
    <ModalDefault isShowModal={isShowDetails} setIsShowModal={setIsShowDetails}>
            <div className="w-full h-full pb-4 pt-12 px-4">
            <div className="w-full h-full  border border-fuchsia-400 p-3 shadow-md rounded-lg font-semibold bg-sky-50 ">
            <p className="mb-4 "> <span>brand name:</span>  <span className="font-semibold break-words text-green-600">{"brandName" in detailsDiscount && detailsDiscount?.brandName}</span></p>
            <p className="mb-4 "> <span>discount:</span>  <span className="font-semibold break-words text-yellow-600">{"discount" in detailsDiscount && detailsDiscount?.discount}</span></p>
            <p className="mb-4 "> <span>deadline:</span>  <span className="font-semibold break-words text-red-400">{"startTime" in detailsDiscount &&  detailsDiscount?.startTime}-{ "endTime" in detailsDiscount && detailsDiscount.endTime}</span></p>
            <p className="mb-4 "> <span>address:</span>  <span className="font-semibold break-words text-pink-400">{"address" in detailsDiscount && detailsDiscount?.address}</span></p>
            <p className="mb-4 "> <span>worke phone:</span>  <span className="font-semibold break-words text-cyan-600">{ "workPhone" in detailsDiscount && detailsDiscount?.workPhone}</span></p>

             </div>
            </div>
        
         </ModalDefault>
    </>
  )
}
