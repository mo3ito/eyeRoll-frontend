"use client";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/authContext";
import LoadingPage from "@/components/loading/loadingPage";
import useExpireDiscount from "@/hooks/useExpireDiscount";
import ShowDiscountFullMode from "@/components/Header/user/showDiscountPage/showDiscountFullMode";
import ShowDiscountMobileMode from "@/components/Header/user/showDiscountPage/showDiscountMobileMode";
import { informationDiscountType } from "@/types/rollType/determinationRoll";
import DetailsDiscountContents from "@/components/detailsDiscountContents/detailsDiscountContents";

export default function DiscountEyeRoll() {
  const { infos } = useContext(AuthContext);
  const [allDiscounts, setAllDiscounts] = useState<informationDiscountType[] | []>([]);
  const [isShowDetails, setIsShowDetails] = useState(false);
  const [detailsDiscount, setDetailsDiscount] = useState<informationDiscountType | {}>({});
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

  if (!infos) {
    return <LoadingPage />;
  }
  return (
    <>
      <ShowDiscountFullMode
        allDiscounts={allDiscounts}
        onClickshowDetails={showDetailsHandler}
      />
      <ShowDiscountMobileMode
        allDiscounts={allDiscounts}
        onClickshowDetails={showDetailsHandler}
      />
      <DetailsDiscountContents
        isShowDetails={isShowDetails}
        setIsShowDetails={setIsShowDetails}
        detailsDiscount={detailsDiscount}
      />
    </>
  );
}
