import { Dispatch , SetStateAction } from "react";
export interface DeterminationGiftProps {
    isChecked : boolean ;
    setIsChecked : Dispatch<SetStateAction<boolean>>;
    numberPurchaseGift : number ;
    giftValue: string;
    setGiftValue:Dispatch<SetStateAction<string>>
    setNumberPurchaseGift: Dispatch<SetStateAction<number>>
    showInformation : ()=> void
}