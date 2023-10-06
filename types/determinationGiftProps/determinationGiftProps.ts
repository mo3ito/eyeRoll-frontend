import { Dispatch , SetStateAction } from "react";
export interface DeterminationGiftProps {
    isChecked : boolean ;
    setIsChecked : Dispatch<SetStateAction<boolean>>;
    numberPurchaseGift : number ;
    setNumberPurchaseGift: Dispatch<SetStateAction<number>>
    showInformation : ()=> void
}