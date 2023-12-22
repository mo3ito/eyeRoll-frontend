'use client'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/authContext";
import LoadingPage from "@/components/loading/loadingPage";
import useExpireDiscount from "@/hooks/useExpireDiscount";
import ModalDefault from "@/components/modal/modalDefault";
import ShowDiscountFullMode from "@/components/Header/user/showDiscountPage/showDiscountFullMode";
import ShowDiscountPageMobileMode from "@/components/Header/user/showDiscountPage/showDiscountPageMobileMode";

export default function DiscountEyeRoll() {
  const { infos } = useContext(AuthContext);
  const [allDiscounts, setAllDiscounts] = useState([]);
  const [isShowDetails , setIsShowDetails]=useState(false)
  const [detailsDiscount , setDetailsDiscount]=useState({})
  useExpireDiscount()

  useEffect(() => {
    if (infos && infos.discounts_eyeRoll) {
      setAllDiscounts(infos?.discounts_eyeRoll);
    }
  }, [infos , infos?.discounts_eyeRoll]);


  const showDetailsHandler = async (brandName , discount , startTime , endTime , address , workPhone)=>{
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
 
    
         {/* { infos?.discounts_eyeRol && allDiscounts.length>0 && typeof infos?.discounts_eyeRoll === "object" ?  */}

        
       {/* <div className='w-full  h-max  rounded-lg'>
            <div className="w-full bg-sky-100 pt-10 sticky top-0">
            <div className='w-full  flex justify-center bg-sky-50   items-center text-center border border-fuchsia-400 py-4 rounded-lg font-semibold '>
            <p className='w-1/12 '>number</p>
            <p className='w-2/12 '>brand name</p>
            <p className='w-1/12 '>discount</p>
            <p className='w-2/12  '>deadline</p>
            <p className='w-2/12  '>address</p>
            <p className='w-2/12  '>work phone</p>
            <p className="w-2/12">use discount</p>
            </div>
            </div>
            

          { allDiscounts.map(item=>
          <div className='w-full flex justify-center items-center text-center border border-fuchsia-400 py-4 my-2 rounded-lg bg-sky-50 '>
          <p className='w-1/12 truncate px-4'>1</p>
          <p className='w-2/12 truncate px-4'>{item.brandName}</p>
          <p className='w-1/12 truncate px-4 text-yellow-500 text-lg'>{item.discount}</p>
          <p className='w-2/12 truncate px-4 text-red-400'>{item.startTime}-{item.endTime}</p>
          <div className="w-2/12">
          <button onClick={()=>showDetailsHandler(item.brandName ,item.discount , item.startTime , item.endTime ,item.address , item.workPhone  ) } className=' truncate px-4 bg-fuchsia-400 py-1 rounded-md'>show details</button>
          </div>
        
          <p className='w-2/12 truncate px-4'>{item.workPhone}</p>
          <div className='w-2/12'>
          <button className="bg-fuchsia-400 py-1 px-4 rounded-md" >i am here</button>
          </div>
          
          </div>
          ) }
           
         
        
        </div> */}
    <ShowDiscountFullMode allDiscounts={allDiscounts} onClickshowDetails={showDetailsHandler}/>
    <ShowDiscountPageMobileMode allDiscounts={allDiscounts} onClickshowDetails={showDetailsHandler}/>
    <ModalDefault isShowModal={isShowDetails} setIsShowModal={setIsShowDetails}>
            <div className="w-full h-full pb-4 pt-12 px-4">
            <div className="w-full h-full  border border-fuchsia-400 p-3 shadow-md rounded-lg font-semibold bg-sky-50 ">
            <p className="mb-4 "> <span>brand name:</span>  <span className="font-semibold break-words text-green-600">{detailsDiscount.brandName}</span></p>
            <p className="mb-4 "> <span>discount:</span>  <span className="font-semibold break-words text-yellow-600">{detailsDiscount.discount}</span></p>
            <p className="mb-4 "> <span>deadline:</span>  <span className="font-semibold break-words text-red-400">{detailsDiscount.startTime}-{detailsDiscount.endTime}</span></p>
            <p className="mb-4 "> <span>address:</span>  <span className="font-semibold break-words text-pink-400">{detailsDiscount.address}</span></p>
            <p className="mb-4 "> <span>worke phone:</span>  <span className="font-semibold break-words text-cyan-600">{detailsDiscount.workPhone}</span></p>

             </div>
            </div>
        
         </ModalDefault>
    </>
  )
}
