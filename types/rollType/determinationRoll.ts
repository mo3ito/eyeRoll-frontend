import { Dispatch , SetStateAction } from "react";

export interface DeterminationRollProps{
    isShowModal: boolean;
    setIsShowModal : Dispatch<SetStateAction<boolean>>;
    businessOwnerId : string;
    setIsGrabDiscountToday : Dispatch<SetStateAction<boolean>>
    isActiveDiscount: boolean;
    setIsActiveDiscount: Dispatch<SetStateAction<boolean>>;
    fixedDiscount: boolean;
    setFixedDiscount: Dispatch<SetStateAction<boolean>>;
    isFixedDiscountToSave: boolean;
    setIsFixedDiscountToSave: Dispatch<SetStateAction<boolean>>;
  }

  export interface dataArrayType{
    option: string;
    style:{backgroundColor : string}
  }

 export interface informationDiscountType {
    id: string;
    businessOwnerId: string;
    discount: string;
    startTime: string;
    endTime: string;
    address: string;
    brandName: string;
    workPhone: string;
    validDate: Date;
 }

 export interface GetDiscountFromUserPropsType{
  businessOwnerId: string;
  isGetDiscount:boolean;
  setIsGetDiscount: Dispatch<SetStateAction<boolean>>;
  }