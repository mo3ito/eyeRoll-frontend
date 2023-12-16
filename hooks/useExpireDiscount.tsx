"use client";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "@/context/authContext";
import updaterWithId from "@/services/updaterWithId";
import useGetUserId from "./useGetUserId";
import { InfosProps } from "@/types/authentication";

const useExpireDiscount = () => {
  const [discounts, setDiscounts] = useState([]);
  const { infos, login } = useContext(AuthContext);
  const [expiredDiscounts, setExpiredDiscounts] = useState([]);
  const { userId } = useGetUserId(infos as InfosProps);
  const [isDiscountHasValue, setIsDiscountHasValue] = useState(false);
  const [expireDiscountIds, setExpireDiscountIds] = useState([]);
  const [isExpireDiscountIdsHasValue, setIsExpireDiscountIdsHasValue] =
    useState(false);

  useEffect(() => {
    if (infos && infos.discounts_eyeRoll) {
      setDiscounts(infos.discounts_eyeRoll);
      setIsDiscountHasValue(true);
    }
  }, [infos]);

  console.log(discounts);

  useEffect(() => {
    const findExpiredDiscounts = async () => {
      if (isDiscountHasValue) {
        const now = new Date();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();

        const expiredDiscounts = await discounts.filter((item) => {
          const endTimeArray = item.endTime.split(":");
          const endHour = parseInt(endTimeArray[0]);
          const endMinute = parseInt(endTimeArray[1]);
          return currentHour >= endHour && currentMinute >= endMinute;
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
          "http://localhost:5000/users/remove-expire-discount-eyeRoll",
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

  console.log(expiredDiscounts);
  console.log(expireDiscountIds);
  console.log(infos);
};

export default useExpireDiscount;
