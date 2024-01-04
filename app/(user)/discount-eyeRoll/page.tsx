"use client";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/authContext";
import LoadingPage from "@/components/loading/loadingPage";
import useExpireDiscount from "@/hooks/useExpireDiscount";
import ShowDiscountFullMode from "@/components/Header/user/showDiscountPage/showDiscountFullMode";
import ShowDiscountMobileMode from "@/components/Header/user/showDiscountPage/showDiscountMobileMode";
import { informationDiscountType } from "@/types/rollType/determinationRoll";
import DetailsDiscountContents from "@/components/detailsDiscountContents/detailsDiscountContents";
import useGetUserId from "@/hooks/useGetUserId";
import { InfosProps } from "@/types/authentication";
import senderWithAuthId from "@/services/senderWithAuthId";
import { toast } from "react-toastify";
import { GET_REQUEST_FOR_DISCOUNT } from "@/routeApi/endpoints";

export default function DiscountEyeRoll() {
  const { infos } = useContext(AuthContext);
  const [allDiscounts, setAllDiscounts] = useState<
    informationDiscountType[] | []
  >([]);
  const [isShowDetails, setIsShowDetails] = useState(false);
  const [detailsDiscount, setDetailsDiscount] = useState<
    informationDiscountType | {}
  >({});
  const { userId } = useGetUserId(infos as InfosProps);
  useExpireDiscount();

  useEffect(() => {
    if (infos && infos.discounts_eyeRoll) {
      setAllDiscounts(infos?.discounts_eyeRoll);
    }
  }, [infos, infos?.discounts_eyeRoll]);


 

  const showDetailsHandler = async (
    brandName: string,
    discount: string,
    startTime: string,
    endTime: string,
    address: string,
    workPhone: string
  ) => {
    await setDetailsDiscount({
      brandName,
      discount,
      startTime,
      endTime,
      address,
      workPhone,
    });
    await setIsShowDetails(true);
  };

  const getDiscountHandler = async (
    businessOwnerId: string,
    discountId: string,
    discount: string
  ) => {
    if (userId && businessOwnerId && discountId && discount) {
     
      const currentDateTime = new Date();
      const beLatedTime = new Date(currentDateTime.getTime());
      beLatedTime.setMinutes(currentDateTime.getMinutes() + 10);
      
      console.log("current", currentDateTime.toISOString());
      console.log("delay", beLatedTime.toISOString());

   
      if(beLatedTime){
        const body = {
          discountId,
          businessOwnerId,
          discount,
          expiration_time:beLatedTime
          
        };
        try {
          const response = await senderWithAuthId(
            GET_REQUEST_FOR_DISCOUNT,
            body,
            userId
          );
          if (response?.status === 200) {
            toast.success(response.data.message);
          }
        } catch (error: any) {
          if (error.response.status === 400) {
            const errorMessage = error.response.data.message;
            toast.warn(errorMessage);
          } else {
            toast.error("An error occurred while processing your request");
          }
        }
      }
      
 
    }
  };

  if (!infos && !userId) {
    return <LoadingPage />;
  }
  return (
    <>
      <ShowDiscountFullMode
        allDiscounts={allDiscounts}
        onClickshowDetails={showDetailsHandler}
        getDiscountOnClick={getDiscountHandler}
      />
      <ShowDiscountMobileMode
        allDiscounts={allDiscounts}
        onClickshowDetails={showDetailsHandler}
        getDiscountOnClick={getDiscountHandler}
      />
      <DetailsDiscountContents
        isShowDetails={isShowDetails}
        setIsShowDetails={setIsShowDetails}
        detailsDiscount={detailsDiscount}
      />
    </>
  );
}
