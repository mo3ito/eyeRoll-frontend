"use client";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "@/context/authContext";
import updaterWithId from "@/services/updaterWithId";
import useGetUserId from "./useGetUserId";
import { InfosProps , discountEyeRollType } from "@/types/authentication";
import { USERS_REMOVE_EXPIRE_DISCOUNT_EYEROLL } from "@/routeApi/endpoints";

const useExpireDiscount = () => {
  const [discounts, setDiscounts] = useState<discountEyeRollType[]|[]>([]);
  const { infos, login } = useContext(AuthContext);
  const [expiredDiscounts, setExpiredDiscounts] = useState<discountEyeRollType[]|[]>([]);
  const { userId } = useGetUserId(infos as InfosProps);
  const [isDiscountHasValue, setIsDiscountHasValue] = useState<boolean>(false);
  const [expireDiscountIds, setExpireDiscountIds] = useState<string[]|[]>([]);
  const [isExpireDiscountIdsHasValue, setIsExpireDiscountIdsHasValue] =useState(false);


  useEffect(() => {
    if (infos && infos.discounts_eyeRoll) {
      setDiscounts(infos.discounts_eyeRoll);
      setIsDiscountHasValue(true);
    }
  }, [infos]);

  useEffect(() => {
    const findExpiredDiscounts = async () => {
      if (isDiscountHasValue) {
        const now = new Date();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        const currentDay = now.getDate();
        const nowDate = new Date(currentYear, currentMonth - 1, currentDay, currentHour, currentMinute);
        nowDate.setSeconds(0, 0);
  
        const expiredDiscounts : discountEyeRollType[]  = await discounts?.filter((item) => {
          const endTimeArray = item.endTime.split(":");
          const validDate = item.validDate;
          const endHour = parseInt(endTimeArray[0]);
          const endMinute = parseInt(endTimeArray[1]);
  
       
          const validDateWithTime = new Date(validDate);
          validDateWithTime.setHours(endHour, endMinute, 0, 0);
          return nowDate >= validDateWithTime;
        });
  
        setExpiredDiscounts(expiredDiscounts);
      }
    };
  
    findExpiredDiscounts();
  }, [isDiscountHasValue]);
  

  useEffect(() => {
    if (expiredDiscounts) {
      setExpireDiscountIds(expiredDiscounts.map((item) => item.id));
      setIsExpireDiscountIdsHasValue(true);
    }
  }, [expiredDiscounts]);

  useEffect(() => {
    const removeDiscountExpire = async () => {
      if (
        isExpireDiscountIdsHasValue &&
        userId &&
        expireDiscountIds.length > 0
      ) {
        const body = {
          dicountIds: expireDiscountIds,
        };
        const response = await updaterWithId(
          USERS_REMOVE_EXPIRE_DISCOUNT_EYEROLL,
          userId,
          body
        );
        if (response?.status === 200) {
          await login(response.data.userInfos, response.data.token);
          setIsExpireDiscountIdsHasValue(false);
        }
      }
    };

    removeDiscountExpire();
  }, [isExpireDiscountIdsHasValue, userId, expireDiscountIds]);

};

export default useExpireDiscount;