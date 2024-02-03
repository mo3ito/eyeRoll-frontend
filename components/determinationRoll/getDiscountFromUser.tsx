"use client";
import { useState, useEffect, useContext } from "react";
import DeterminationDiscount from "./determinationDiscount";
import { AuthContext } from "@/context/authContext";
import { discountEyeRollType } from "@/types/authentication";
import useGetUserId from "@/hooks/useGetUserId";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { InfosProps } from "@/types/authentication";
import { GetDiscountFromUserPropsType } from "@/types/rollType/determinationRoll";
import useExpireDiscount from "@/hooks/useExpireDiscount";

export default function GetDiscountFromUser({
  businessOwnerId,
  isGetDiscount,
  setIsGetDiscount,
  isAdmin,
  isBusinessOwner
}: GetDiscountFromUserPropsType) {
  const [isFixedDiscountToSave, setIsFixedDiscountToSave] =
    useState<boolean>(false);
  const [fixedDiscount, setFixedDiscount] = useState<boolean>(false);
  const [isActiveDiscount, setIsActiveDiscount] = useState<boolean>(false);
  const [isShowGetDiscount, setIsShowGetDiscount] = useState<boolean>(false);
  const [isGrabDiscountToday, setIsGrabDiscountToday] = useState<boolean>(false);
  const { infos } = useContext(AuthContext);
  const { userId } = useGetUserId(infos as InfosProps);
  const router = useRouter();
  useExpireDiscount()

  useEffect(() => {
    const getDiscount = async () => {
      if (isGetDiscount) {
        if (!userId || isAdmin || isBusinessOwner) {
          router.push("/register-user/login");
        } else {
          if (isGrabDiscountToday) {
            await setIsGetDiscount(false);
            return toast("You have tryed your chance today");
          } else if (!isActiveDiscount) {
            await setIsGetDiscount(false);
            return toast(
              "The chance has expired or the business owner has not offered a discount"
            );
          } else if (fixedDiscount && !isGrabDiscountToday) {
            await setIsFixedDiscountToSave(true);
            await setIsShowGetDiscount(true);
            setIsGetDiscount(false);
          } else {
            await setIsShowGetDiscount(true);
            setIsGetDiscount(false);
          }
        }
      }
    };

    getDiscount();
  }, [isGetDiscount , isGrabDiscountToday , isActiveDiscount , fixedDiscount , userId , isAdmin]);

  useEffect(() => {
    const isGrabRoll = async () => {
      if (infos && infos.discounts_eyeRoll) {
        const isGrabDiscountToday: boolean =
          await infos?.discounts_eyeRoll.some(
            (item: discountEyeRollType) =>
              item.businessOwnerId === businessOwnerId
          );
        setIsGrabDiscountToday(isGrabDiscountToday);
      }
    };
    isGrabRoll();
  }, [infos]);

  return (
    <DeterminationDiscount
      setIsFixedDiscountToSave={setIsFixedDiscountToSave}
      isFixedDiscountToSave={isFixedDiscountToSave}
      fixedDiscount={fixedDiscount}
      setFixedDiscount={setFixedDiscount}
      isActiveDiscount={isActiveDiscount}
      setIsActiveDiscount={setIsActiveDiscount}
      isShowModal={isShowGetDiscount}
      setIsShowModal={setIsShowGetDiscount}
      businessOwnerId={businessOwnerId}
      setIsGrabDiscountToday={setIsGrabDiscountToday}
    />
  );
}
